#include <stdio.h>  
#include <malloc.h>  
#include <string.h>
#include<stdlib.h>  
#include <time.h> 
#include<stdbool.h>

#define BLOCKSIZE 1024  // 磁盘块大小  
#define SIZE 1024000  // 虚拟磁盘空间大小  
#define END 65535  // FAT中的文件结束标志  
#define FREE 0  // FAT中盘块空闲标志  
#define ROOTBLOCKNUM 2  // 根目录区所占盘块数  
#define MAXOPENFILE 10  // 最多同时打开文件个数t  
#define MAXTEXT 10000  


/* 文件控制块 */
typedef struct FCB
{
    char filename[8];  // 文件名  
    char exname[3];  // 文件扩展名  
    unsigned char attribute;  // 文件属性字段，值为0时表示目录文件，值为1时表示数据文件  
    unsigned short time;  // 文件创建时间  
    unsigned short date;  // 文件创建日期  
    unsigned short first;  // 文件起始盘块号  
    unsigned long length;  // 文件长度  
    bool DIRECTORY;  // 表示目录项是否为空
    bool READ_ONLY;  // 表示文件是否只读
    bool HIDDEN;     //表示文件是否隐藏
}fcb;


/* 文件分配表 */
typedef struct FAT
{
    unsigned short id;  // 磁盘块的状态（空闲的，最后的，下一个）  
}fat;

/* 用户打开文件表 */
typedef struct USEROPEN
{
    char filename[8];  // 文件名  
    char exname[3];  // 文件扩展名  
    unsigned char attribute;  // 文件属性字段，值为0时表示目录文件，值为1时表示数据文件  
    unsigned short time;  // 文件创建时间  
    unsigned short date;  // 文件创建日期  
    unsigned short first;  // 文件起始盘块号  
    unsigned long length;  // 文件长度（对数据文件是字节数，对目录文件可以是目录项个数）  
    bool DIRECTORY;  // 表示目录项是否为空，若值为0，表示空，值为1，表示已分配 
    bool READ_ONLY;  // 表示文件是否只读
    bool HIDDEN;     //表示文件是否隐藏  

    unsigned short dirno;  // 相应打开文件的目录项在父目录文件中的盘块号  
    int diroff;  // 相应打开文件的目录项在父目录文件的dirno盘块中的目录项序号  
    char dir[80];  // 相应打开文件所在的目录名，这样方便快速检查出指定文件是否已经打开  
    int father;  // 父目录在打开文件表项的位置  
    int count;  // 读写指针在文件中的位置,文件的总字符数  
    char fcbstate;  // 是否修改了文件的FCB的内容，如果修改了置为1，否则为0  
    char topenfile;  // 表示该用户打开表项是否为空，若值为0，表示为空，否则表示已被某打开文件占据  
}useropen;


/* 引导块 */
typedef struct BLOCK0
{
    char magic[10];  // 文件系统魔数  
    char information[200];  // 存储一些描述信息，如磁盘块大小、磁盘块数量、最多打开文件数等  
    unsigned short root;  // 根目录文件的起始盘块号  
    unsigned char* startblock;  // 虚拟磁盘上数据区开始位置                  
}block0;


unsigned char* myvhard;  // 指向虚拟磁盘的起始地址  
useropen openfilelist[MAXOPENFILE];  // 用户打开文件表数组  
int curdir;  // 用户打开文件表中的当前目录所在打开文件表项的位置  
char currentdir[80];  // 记录当前目录的目录名（包括目录的路径）  
unsigned char* startp;  // 记录虚拟磁盘上数据区开始位置  
char myfilename[] = "myfilesys";//文件系统的文件名  


void startsys();  // 进入文件系统  
void my_format();  // 磁盘格式化  
void my_cd(char* dirname);  // 更改当前目录  
void my_mkdir(char* dirname);  // 创建子目录  
void my_rmdir(char* dirname);  // 删除子目录  
void my_ls();  // 显示目录  
void my_create(char* filename);  // 创建文件  
void my_rm(char* filename);  // 删除文件   
int my_open(char* filename);  // 打开文件
int my_attri(char* filename);  // 显示文件信息   
int my_close(int fd);  // 关闭文件  
int my_write(int fd);  // 写文件  
int do_write(int fd, char* text, int len, char wstyle);  // 实际写文件  
int my_read(int fd, int len);  // 读文件  
int do_read(int fd, int len, char* text);  // 实际读文件  
void my_exitsys();  // 退出文件系统  
unsigned short findblock();  // 寻找空闲盘块  
int findopenfile();  // 寻找空闲文件表项
int my_ren(char* filename, char* newname);  // 文件重命名
int my_copy(char* filename);  // 文件复制
void my_tree();    // 以树的形式显示目录结构


void startsys()
{
    FILE* fp;
    unsigned char buf[SIZE];
    fcb* root;
    int i;
    myvhard = (unsigned char*)malloc(SIZE);//申请虚拟磁盘空间  
    memset(myvhard, 0, SIZE);//将myvhard中前SIZE个字节用 0 替换并返回 myvhard  
    if ((fp = fopen(myfilename, "r")) != NULL)//使用c语言的库函数fopen()打开myfsys文件
    {
        fread(buf, SIZE, 1, fp);//文件存在，使用c语言的库函数fread(),将二进制文件读取到缓冲区  
        fclose(fp);//关闭打开的文件，缓冲区数据写入文件，释放系统提供文件资源  
        if (strcmp(((block0*)buf)->magic, "10101010"))//判断开始的8个字节内容是否为文件系统魔数  
        {
            //不是，并调用my_format()对申请到的虚拟磁盘空间进行格式化操作
            printf("我的文件系统还不存在，开始创建文件...\n");
            my_format();
        }
        else//是，则缓冲区中的内容复制到内存中的虚拟磁盘空间
        {
            for (i = 0; i < SIZE; i++)
                myvhard[i] = buf[i];
        }
    }
    else
        //文件不存在，则创建，并调用my_format()对申请到的虚拟磁盘空间进行格式化操作
    {
        printf("我的文件系统还不存在，开始创建文件...\n");
        my_format();
    }
    //初始化用户打开文件表，将表项0分配给根目录文件使用，并填写根目录文件的相关信息，
    root = (fcb*)(myvhard + 5 * BLOCKSIZE);
    strcpy(openfilelist[0].filename, root->filename);
    strcpy(openfilelist[0].exname, root->exname);
    openfilelist[0].attribute = root->attribute;
    openfilelist[0].time = root->time;
    openfilelist[0].date = root->date;
    openfilelist[0].first = root->first;
    openfilelist[0].length = root->length;
    openfilelist[0].DIRECTORY = root->DIRECTORY;
    openfilelist[0].READ_ONLY = root->READ_ONLY;
    openfilelist[0].HIDDEN = root->HIDDEN;
    openfilelist[0].dirno = 5;//由于根目录没有上级目录，所以表项中的dirno和diroff分别置为5（根目录所在起始块号）和0
    openfilelist[0].diroff = 0;
    strcpy(openfilelist[0].dir, "\\root\\");//并将ptrcurdir指针指向该用户打开文件表项。
    openfilelist[0].father = 0;
    openfilelist[0].count = 0;
    openfilelist[0].fcbstate = 0;
    openfilelist[0].topenfile = 1;
    for (i = 1; i < MAXOPENFILE; i++)
        openfilelist[i].topenfile = 0;
    curdir = 0;
    strcpy(currentdir, "\\root\\");// 将当前目录设置为根目录。
    startp = ((block0*)myvhard)->startblock;
}


void my_format()
{
    FILE* fp;
    fat* fat1, * fat2;
    block0* blk0;
    time_t now;
    struct tm* nowtime;
    fcb* root;
    int i;
    blk0 = (block0*)myvhard;//myvhard指向磁盘空间开始地址，blk0指向引导块开始地址
    fat1 = (fat*)(myvhard + BLOCKSIZE);//fat1指向fat1开始地址
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);//fat2指向fat2开始地址
    root = (fcb*)(myvhard + 5 * BLOCKSIZE);//root指向根目录开始地址
    strcpy(blk0->magic, "10101010");//将虚拟磁盘第一个块作为引导块，开始的8个字节是文件系统的魔数，记为“10101010”
    strcpy(blk0->information, "My FileSystem Ver 1.0 \n Blocksize=1KB Whole size=1000KB Blocknum=1000 RootBlocknum=2\n");
    blk0->root = 5;//根目录文件的起始盘块号为5
    blk0->startblock = (unsigned char*)root;//数据区开始位置
    for (i = 0; i < 5; i++)
    {
        fat1->id = END;
        fat2->id = END;
        fat1++;
        fat2++;
    }
    fat1->id = 6;
    fat2->id = 6;
    fat1++;
    fat2++;
    fat1->id = END;
    fat2->id = END;
    fat1++;
    fat2++;
    for (i = 7; i < SIZE / BLOCKSIZE; i++)
    {
        fat1->id = FREE;
        fat2->id = FREE;
        fat1++;
        fat2++;
    }
    now = time(NULL);//获取系统时间，单位为秒
    nowtime = localtime(&now);//将时间数值变换成本地时间
    strcpy(root->filename, ".");//root文件名为.
    strcpy(root->exname, "");//root拓展名为空
    root->attribute = 0x28;
    root->time = nowtime->tm_hour * 2048 + nowtime->tm_min * 32 + nowtime->tm_sec / 2;
    root->date = (nowtime->tm_year - 80) * 512 + (nowtime->tm_mon + 1) * 32 + nowtime->tm_mday;
    root->first = 5;
    root->length = 2 * sizeof(fcb);
    root->DIRECTORY = true;
    root->READ_ONLY = false;
    root->HIDDEN = false;
    root++;

    now = time(NULL);
    nowtime = localtime(&now);
    strcpy(root->filename, "..");
    strcpy(root->exname, "");
    root->attribute = 0x28;
    root->time = nowtime->tm_hour * 2048 + nowtime->tm_min * 32 + nowtime->tm_sec / 2;
    root->date = (nowtime->tm_year - 80) * 512 + (nowtime->tm_mon + 1) * 32 + nowtime->tm_mday;
    root->first = 5;
    root->length = 2 * sizeof(fcb);
    root->DIRECTORY = true;
    root->READ_ONLY = false;
    root->HIDDEN = false;
    fp = fopen(myfilename, "w");
    fwrite(myvhard, SIZE, 1, fp);
    fclose(fp);
}


void my_cd(char* dirname)
{
    char* dir;
    int fd;
    dir = strtok(dirname, "\\");//分解字符串为一组字符串。dirname为要分解的字符串，"\\"为分隔符字符串  
    if (strcmp(dir, ".") == 0)
        return;
    else if (strcmp(dir, "..") == 0)
    {
        if (curdir)//当前目录的文件描述符
            curdir = my_close(curdir);
        return;
    }
    else if (strcmp(dir, "root") == 0)
    {
        if (curdir)
            curdir = my_close(curdir);
        dir = strtok(NULL, "\\");
    }
    while (dir)
    {
        fd = my_open(dir);//调用my_open()打开指定目录名的父目录文件
        if (fd != -1)
            curdir = fd;
        else
            return;
        dir = strtok(NULL, "\\");
    }
}


void my_mkdir(char* dirname)
{
    fcb* fcbptr;
    fat* fat1, * fat2;
    time_t now;
    struct tm* nowtime;
    char text[MAXTEXT];
    unsigned short blkno;
    int rbn, fd, i;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);//调用do_read()读入当前目录文件内容到内存，检查当前目录下新建目录文件是否重名，
   
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)//在当前目录下找，是否有重名目录  
    {
        if (strcmp(fcbptr->filename, dirname) == 0 && strcmp(fcbptr->exname, "") == 0)
        { //若重名则返回，并显示错误信息；
            printf("错误，目录名已经存在!\n");
            return;
        }
        fcbptr++;
    }
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (fcbptr->DIRECTORY == false)
            break;
        fcbptr++;
    }
    blkno = findblock();//寻找空闲盘块  
    if (blkno == -1)
        return;
    (fat1 + blkno)->id = END;
    (fat2 + blkno)->id = END;
    now = time(NULL);
    nowtime = localtime(&now);
    strcpy(fcbptr->filename, dirname);
    strcpy(fcbptr->exname, "");
    fcbptr->attribute = 0x30;
    fcbptr->time = nowtime->tm_hour * 2048 + nowtime->tm_min * 32 + nowtime->tm_sec / 2;
    fcbptr->date = (nowtime->tm_year - 80) * 512 + (nowtime->tm_mon + 1) * 32 + nowtime->tm_mday;
    fcbptr->first = blkno;
    fcbptr->length = 2 * sizeof(fcb);
    fcbptr->DIRECTORY = true;
    fcbptr->READ_ONLY = false;
    fcbptr->HIDDEN = false;
    openfilelist[curdir].count = i * sizeof(fcb);
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);

    fd = my_open(dirname);//建立新目录的'.','..'目录  
    if (fd == -1)
        return;
    fcbptr = (fcb*)malloc(sizeof(fcb));
    now = time(NULL);
    nowtime = localtime(&now);
    strcpy(fcbptr->filename, ".");
    strcpy(fcbptr->exname, "");
    fcbptr->attribute = 0x28;
    fcbptr->time = nowtime->tm_hour * 2048 + nowtime->tm_min * 32 + nowtime->tm_sec / 2;
    fcbptr->date = (nowtime->tm_year - 80) * 512 + (nowtime->tm_mon + 1) * 32 + nowtime->tm_mday;
    fcbptr->first = blkno;
    fcbptr->length = 2 * sizeof(fcb);
    fcbptr->DIRECTORY = true;
    fcbptr->READ_ONLY = false;
    fcbptr->HIDDEN = false;
    do_write(fd, (char*)fcbptr, sizeof(fcb), 2);
    now = time(NULL);
    nowtime = localtime(&now);
    strcpy(fcbptr->filename, "..");
    strcpy(fcbptr->exname, "");
    fcbptr->attribute = 0x28;
    fcbptr->time = nowtime->tm_hour * 2048 + nowtime->tm_min * 32 + nowtime->tm_sec / 2;
    fcbptr->date = (nowtime->tm_year - 80) * 512 + (nowtime->tm_mon + 1) * 32 + nowtime->tm_mday;
    fcbptr->first = blkno;
    fcbptr->length = 2 * sizeof(fcb);
    fcbptr->DIRECTORY = true;
    fcbptr->READ_ONLY = false;
    fcbptr->HIDDEN = false;
    do_write(fd, (char*)fcbptr, sizeof(fcb), 2);
    free(fcbptr);
    my_close(fd);

    fcbptr = (fcb*)text;
    fcbptr->length = openfilelist[curdir].length;
    openfilelist[curdir].count = 0;
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    openfilelist[curdir].fcbstate = 1;
}


void my_rmdir(char* dirname)
{
    fcb* fcbptr, * fcbptr2;
    fat* fat1, * fat2, * fatptr1, * fatptr2;
    char text[MAXTEXT], text2[MAXTEXT];
    unsigned short blkno;
    int rbn, rbn2, fd, i, j;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);
    if (strcmp(dirname, ".") == 0 || strcmp(dirname, "..") == 0)
    {
        printf("Error,can't remove this directory.\n");
        return;
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)//查找要删除的目录  
    {
        if (strcmp(fcbptr->filename, dirname) == 0 && strcmp(fcbptr->exname, "") == 0)
            break;
        fcbptr++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("Error,the directory is not exist.\n");
        return;
    }
    fd = my_open(dirname);
    rbn2 = do_read(fd, openfilelist[fd].length, text2);
    fcbptr2 = (fcb*)text2;
    for (j = 0; j < rbn2 / sizeof(fcb); j++)//判断要删除目录是否为空  
    {
        if (strcmp(fcbptr2->filename, ".") && strcmp(fcbptr2->filename, "..") && strcmp(fcbptr2->filename, ""))
        {
            my_close(fd);
            printf("Error,the directory is not empty.\n");
            return;
        }
        fcbptr2++;
    }
    blkno = openfilelist[fd].first;
    while (blkno != END)
    {
        fatptr1 = fat1 + blkno;
        fatptr2 = fat2 + blkno;
        blkno = fatptr1->id;
        fatptr1->id = FREE;
        fatptr2->id = FREE;
    }
    my_close(fd);
    strcpy(fcbptr->filename, "");
    fcbptr->DIRECTORY = false;
    openfilelist[curdir].count = i * sizeof(fcb);
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    openfilelist[curdir].fcbstate = 1;
}


void my_ls()
{
    fcb* fcbptr;
    char text[MAXTEXT];
    int rbn, i;
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (fcbptr->DIRECTORY == true)
        {
            if (fcbptr->attribute & 0x20)
                printf("%s\\\t\t<DIR>\t\t%d/%d/%d\t%02d:%02d:%02d\n", fcbptr->filename, (fcbptr->date >> 9) + 1980, (fcbptr->date >> 5) & 0x000f, fcbptr->date & 0x001f, fcbptr->time >> 11, (fcbptr->time >> 5) & 0x003f, fcbptr->time & 0x001f * 2);
            else
                printf("%s.%s\t\t%dB\t\t%d/%d/%d\t%02d:%02d:%02d\t\n", fcbptr->filename, fcbptr->exname, (int)(fcbptr->length), (fcbptr->date >> 9) + 1980, (fcbptr->date >> 5) & 0x000f, fcbptr->date & 0x1f, fcbptr->time >> 11, (fcbptr->time >> 5) & 0x3f, fcbptr->time & 0x1f * 2);
        }
        fcbptr++;
    }
}


void my_create(char* filename)
{
    fcb* fcbptr;
    fat* fat1, * fat2;
    char* fname, * exname, text[MAXTEXT];
    unsigned short blkno;
    int rbn, i;
    time_t now;
    struct tm* nowtime;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + BLOCKSIZE);
    fname = strtok(filename, ".");
    exname = strtok(NULL, ".");
    if (strcmp(fname, "") == 0)
    {
        printf("Error,creating file must have a right name.\n");
        return;
    }
    if (!exname)
    {
        printf("Error,creating file must have a extern name.\n");
        return;
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr->filename, fname) == 0 && strcmp(fcbptr->exname, exname) == 0)
        {
            printf("Error,the filename is already exist!\n");
            return;
        }
        fcbptr++;
    }
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (fcbptr->DIRECTORY == false)
            break;
        fcbptr++;
    }
    blkno = findblock();
    if (blkno == -1)
        return;
    (fat1 + blkno)->id = END;
    (fat2 + blkno)->id = END;

    now = time(NULL);
    nowtime = localtime(&now);
    strcpy(fcbptr->filename, fname);
    strcpy(fcbptr->exname, exname);
    fcbptr->attribute = 0x00;
    fcbptr->time = nowtime->tm_hour * 2048 + nowtime->tm_min * 32 + nowtime->tm_sec / 2;
    fcbptr->date = (nowtime->tm_year - 80) * 512 + (nowtime->tm_mon + 1) * 32 + nowtime->tm_mday;
    fcbptr->first = blkno;
    fcbptr->length = 0;
    fcbptr->DIRECTORY = true;
    fcbptr->READ_ONLY = false;
    fcbptr->HIDDEN = false;
    openfilelist[curdir].count = i * sizeof(fcb);
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    fcbptr = (fcb*)text;
    fcbptr->length = openfilelist[curdir].length;
    openfilelist[curdir].count = 0;
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    openfilelist[curdir].fcbstate = 1;
 
}


void my_rm(char* filename)
{
    fcb* fcbptr;
    fat* fat1, * fat2, * fatptr1, * fatptr2;
    char* fname, * exname, text[MAXTEXT];
    unsigned short blkno;
    int rbn, i;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);
    fname = strtok(filename, ".");
    exname = strtok(NULL, ".");
    if (strcmp(fname, "") == 0)
    {
        printf("错误！删除文件必须有正确的名称！\n");
        return;
    }
    if (!exname)
    {
        printf("错误！删除文件必须有正确的拓展名！\n");
        return;
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr->filename, fname) == 0 && strcmp(fcbptr->exname, exname) == 0)
            break;
        fcbptr++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("Error,the file is not exist.\n");
        return;
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr->filename, fname) == 0 && strcmp(fcbptr->exname, exname) == 0)
            break;
        fcbptr++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("Error,the file is not exist.\n");
        return;
    }
    blkno = fcbptr->first;
    while (blkno != END)
    {
        fatptr1 = fat1 + blkno;
        fatptr2 = fat2 + blkno;
        blkno = fatptr1->id;
        fatptr1->id = FREE;
        fatptr2->id = FREE;
    }
    strcpy(fcbptr->filename, "");
    fcbptr->DIRECTORY = false;
    openfilelist[curdir].count = i * sizeof(fcb);
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    openfilelist[curdir].fcbstate = 1;
}


int my_open(char* filename)
{
    fcb* fcbptr;
    char* fname, exname[3], * str, text[MAXTEXT];
    int rbn, fd, i;
    fname = strtok(filename, ".");
    str = strtok(NULL, ".");
    if (str)
        strcpy(exname, str);
    else
        strcpy(exname, "");
    for (i = 0; i < MAXOPENFILE; i++)
    {
        if (strcmp(openfilelist[i].filename, fname) == 0 && strcmp(openfilelist[i].exname, exname) == 0 && i != curdir)
        {
            printf("错误！该文件已打开！\n");
            return -1;
        }
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr->filename, fname) == 0 && strcmp(fcbptr->exname, exname) == 0)
            break;
        fcbptr++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("错误！该文件不存在！\n");
        return -1;
    }
    fd = findopenfile();
    if (fd == -1)
        return -1;
    strcpy(openfilelist[fd].filename, fcbptr->filename);
    strcpy(openfilelist[fd].exname, fcbptr->exname);
    openfilelist[fd].attribute = fcbptr->attribute;
    openfilelist[fd].time = fcbptr->time;
    openfilelist[fd].date = fcbptr->date;
    openfilelist[fd].first = fcbptr->first;
    openfilelist[fd].length = fcbptr->length;
    openfilelist[fd].DIRECTORY = fcbptr->DIRECTORY;
    openfilelist[fd].READ_ONLY = fcbptr->READ_ONLY;
    openfilelist[fd].HIDDEN = fcbptr->HIDDEN;
    openfilelist[fd].dirno = openfilelist[curdir].first;
    openfilelist[fd].diroff = i;
    strcpy(openfilelist[fd].dir, openfilelist[curdir].dir);
    strcat(openfilelist[fd].dir, filename);
    if (fcbptr->attribute & 0x20)
        strcat(openfilelist[fd].dir, "\\");
    openfilelist[fd].father = curdir;
    openfilelist[fd].count = 0;
    openfilelist[fd].fcbstate = 0;
    openfilelist[fd].topenfile = 1;
    return fd;
}


int my_close(int fd)
{
    fcb* fcbptr;
    int father;
    if (fd < 0 || fd >= MAXOPENFILE)
    {
        printf("错误！该文件不存在！\n");
        return -1;
    }
    if (openfilelist[fd].fcbstate)
    {
        fcbptr = (fcb*)malloc(sizeof(fcb));
        strcpy(fcbptr->filename, openfilelist[fd].filename);
        strcpy(fcbptr->exname, openfilelist[fd].exname);
        fcbptr->attribute = openfilelist[fd].attribute;
        fcbptr->time = openfilelist[fd].time;
        fcbptr->date = openfilelist[fd].date;
        fcbptr->first = openfilelist[fd].first;
        fcbptr->length = openfilelist[fd].length;
        fcbptr->DIRECTORY = openfilelist[fd].DIRECTORY;
        fcbptr->READ_ONLY = openfilelist[fd].READ_ONLY;
        fcbptr->HIDDEN = openfilelist[fd].HIDDEN;
        father = openfilelist[fd].father;
        openfilelist[father].count = openfilelist[fd].diroff * sizeof(fcb);
        do_write(father, (char*)fcbptr, sizeof(fcb), 2);
        free(fcbptr);
        openfilelist[fd].fcbstate = 0;
    }
    strcpy(openfilelist[fd].filename, "");
    strcpy(openfilelist[fd].exname, "");
    openfilelist[fd].topenfile = 0;
    return father;
}


int my_write(int fd)
{
    fat* fat1, * fat2, * fatptr1, * fatptr2;
    int wstyle, len, ll, tmp;
    char text[MAXTEXT];
    unsigned short blkno;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);
    if (fd < 0 || fd >= MAXOPENFILE)
    {
        printf("错误！该文件不存在！\n");
        return -1;
    }
    while (1)
    {
        printf("请选择书写类型的数字：\n1.剪切后书写\t2.在原内容后添加书写\n");
        scanf("%d", &wstyle);
        if (wstyle > 0 && wstyle < 3)
            break;
        printf("输入数字错误！");
    }
    getchar();
    switch (wstyle)
    {
    case 1:
        blkno = openfilelist[fd].first;
        fatptr1 = fat1 + blkno;
        fatptr2 = fat2 + blkno;
        blkno = fatptr1->id;
        fatptr1->id = END;
        fatptr2->id = END;
        while (blkno != END)
        {
            fatptr1 = fat1 + blkno;
            fatptr2 = fat2 + blkno;
            blkno = fatptr1->id;
            fatptr1->id = FREE;
            fatptr2->id = FREE;
        }
        openfilelist[fd].count = 0;
        openfilelist[fd].length = 0;
        break;
    case 2:
        openfilelist[fd].count = openfilelist[fd].length;
        break;
    default:
        break;
    }
    ll = 0;
    printf("请输入要书写的内容(结束书写时请输入 Ctrl+Z):\n");
    while (gets(text))
    {
        len = strlen(text);
        text[len++] = '\n';
        text[len] = '\0';
        tmp = do_write(fd, text, len, wstyle);
        if (tmp != -1)
            ll += tmp;
        if (tmp < len)
        {
            printf("书写错误！");
            break;
        }
    }
    return ll;
}


int do_write(int fd, char* text, int len, char wstyle)
{
    fat* fat1, * fat2, * fatptr1, * fatptr2;
    unsigned char* buf, * blkptr;
    unsigned short blkno, blkoff;
    int i, ll;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);
    buf = (unsigned char*)malloc(BLOCKSIZE);
    if (buf == NULL)
    {
        printf("malloc failed!\n");
        return -1;
    }
    blkno = openfilelist[fd].first;
    blkoff = openfilelist[fd].count;
    fatptr1 = fat1 + blkno;
    fatptr2 = fat2 + blkno;
    while (blkoff >= BLOCKSIZE)
    {
        blkno = fatptr1->id;
        if (blkno == END)
        {
            blkno = findblock();
            if (blkno == -1)
            {
                free(buf);
                return -1;
            }
            fatptr1->id = blkno;
            fatptr2->id = blkno;
            fatptr1 = fat1 + blkno;
            fatptr2 = fat2 + blkno;
            fatptr1->id = END;
            fatptr2->id = END;
        }
        else
        {
            fatptr1 = fat1 + blkno;
            fatptr2 = fat2 + blkno;
        }
        blkoff = blkoff - BLOCKSIZE;
    }

    ll = 0;
    while (ll < len)
    {
        blkptr = (unsigned char*)(myvhard + blkno * BLOCKSIZE);
        for (i = 0; i < BLOCKSIZE; i++)
            buf[i] = blkptr[i];
        for (;blkoff < BLOCKSIZE; blkoff++)
        {
            buf[blkoff] = text[ll++];
            openfilelist[fd].count++;
            if (ll == len)
                break;
        }
        for (i = 0; i < BLOCKSIZE; i++)
            blkptr[i] = buf[i];
        if (ll < len)
        {
            blkno = fatptr1->id;
            if (blkno == END)
            {
                blkno = findblock();
                if (blkno == -1)
                    break;
                fatptr1->id = blkno;
                fatptr2->id = blkno;
                fatptr1 = fat1 + blkno;
                fatptr2 = fat2 + blkno;
                fatptr1->id = END;
                fatptr2->id = END;
            }
            else
            {
                fatptr1 = fat1 + blkno;
                fatptr2 = fat2 + blkno;
            }
            blkoff = 0;
        }
    }
    if (openfilelist[fd].count > openfilelist[fd].length)
        openfilelist[fd].length = openfilelist[fd].count;
    openfilelist[fd].fcbstate = 1;
    free(buf);
    return ll;
}


int my_read(int fd, int len)
{
    char text[MAXTEXT];
    int ll;
    if (fd < 0 || fd >= MAXOPENFILE)
    {
        printf("The File is not exist!\n");
        return -1;
    }
    openfilelist[fd].count = 0;
    ll = do_read(fd, len, text);
    if (ll != -1)
        printf("%s", text);
    else
        printf("Read Error!\n");
    return ll;
}


int do_read(int fd, int len, char* text)
{
    fat* fat1, * fatptr;
    unsigned char* buf, * blkptr;
    unsigned short blkno, blkoff;
    int i, ll;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    buf = (unsigned char*)malloc(BLOCKSIZE);
    if (buf == NULL)
    {
        printf("malloc failed!\n");
        return -1;
    }
    blkno = openfilelist[fd].first;
    blkoff = openfilelist[fd].count;
    if (blkoff >= openfilelist[fd].length)
    {
        puts("Read out of range!");
        free(buf);
        return -1;
    }
    fatptr = fat1 + blkno;
    while (blkoff >= BLOCKSIZE)
    {
        blkno = fatptr->id;
        blkoff = blkoff - BLOCKSIZE;
        fatptr = fat1 + blkno;
    }
    ll = 0;
    while (ll < len)
    {
        blkptr = (unsigned char*)(myvhard + blkno * BLOCKSIZE);
        for (i = 0; i < BLOCKSIZE; i++)
            buf[i] = blkptr[i];
        for (; blkoff < BLOCKSIZE; blkoff++)
        {
            text[ll++] = buf[blkoff];
            openfilelist[fd].count++;
            if (ll == len || openfilelist[fd].count == openfilelist[fd].length)
                break;
        }
        if (ll < len && openfilelist[fd].count != openfilelist[fd].length)
        {
            blkno = fatptr->id;
            if (blkno == END)
                break;
            blkoff = 0;
            fatptr = fat1 + blkno;
        }
    }
    text[ll] = '\0';
    free(buf);
    return ll;
}


void my_exitsys()
{
    FILE* fp;
    while (curdir)
        curdir = my_close(curdir);
    fp = fopen(myfilename, "w");
    fwrite(myvhard, SIZE, 1, fp);
    fclose(fp);
    free(myvhard);
}


unsigned short findblock()
{
    unsigned short i;
    fat* fat1, * fatptr;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    for (i = 7; i < SIZE / BLOCKSIZE; i++)
    {
        fatptr = fat1 + i;
        if (fatptr->id == FREE)
            return i;
    }
    printf("Error,Can't find free block!\n");
    return -1;
}


int findopenfile()
{
    int i;
    for (i = 0; i < MAXTEXT; i++)
    {
        if (openfilelist[i].topenfile == 0)
            return i;
    }
    printf("Error,open too many files!\n");
    return -1;
}


int my_attri(char* filename)
{
    fcb* fcbptr;
    char* fname, exname[3], * str, text[MAXTEXT];
    int rbn, fd, i;
    fname = strtok(filename, ".");
    str = strtok(NULL, ".");
    if (str)
        strcpy(exname, str);
    else
        strcpy(exname, "");
    for (i = 0; i < MAXOPENFILE; i++)
    {
        if (strcmp(openfilelist[i].filename, fname) == 0 && strcmp(openfilelist[i].exname, exname) == 0 && i != curdir)
        {
            printf("Error,the file is already open.\n");
            return -1;
        }
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr->filename, fname) == 0 && strcmp(fcbptr->exname, exname) == 0)
            break;
        fcbptr++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("Error,the file is not exist.\n");
        return -1;
    }
    printf("文件名: %s", fcbptr->filename);
    printf("\n文件类型: %s", fcbptr->exname);
    if (fcbptr->attribute == 0)
        printf("\n文件属性: 目录文件");
    else
        printf("\n文件属性: 数据文件");
    printf("\n时间: %d", fcbptr->time);
    printf("\n日期: %d", fcbptr->date);
    printf("\n起始盘块号: %d", fcbptr->first);
    printf("\n文件大小: %d", fcbptr->length);
    if (fcbptr->DIRECTORY == true)
        printf("\n目录项是否为空: 否");
    else
        printf("\n目录项是否为空: 是");
    if (fcbptr->READ_ONLY == true)
        printf("\n文件是否为只读：是");
    else
        printf("\n文件是否为只读：否");
    if (fcbptr->HIDDEN == true)
        printf("\n文件是否隐藏：是\n");
    else
        printf("\n文件是否隐藏：否\n");
    return fd;
}


int my_copy(char* filename)
{
    fcb* fcbptr1;
    char* fname, exname[3], * str, text[MAXTEXT];
    int rbn, fd =0, i;
    fname = strtok(filename, ".");
    str = strtok(NULL, ".");
    if (str)
        strcpy(exname, str);
    else
        strcpy(exname, "");
    for (i = 0; i < MAXOPENFILE; i++)
    {
        if (strcmp(openfilelist[i].filename, fname) == 0 && strcmp(openfilelist[i].exname, exname) == 0 && i != curdir)
        {
            printf("错误！该文件已经打开。\n");
            return -1;
        }
    }
    openfilelist[0].count = 0;
    rbn = do_read(0, openfilelist[0].length, text);
    fcbptr1 = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr1->filename, fname) == 0 && strcmp(fcbptr1->exname, exname) == 0)
            break;
        fcbptr1++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("错误！文件不存在！\n");
        return -1;
    }

    char* lastName = "_copy";
    char* c = (char*)malloc(strlen(fname) + strlen(lastName));
    strcpy(c, fname);
    strcat(c, lastName);
    strcat(c, ".");
    char* newname = (char*)malloc(strlen(c) + strlen(str));
    strcpy(newname, c);
    strcat(newname, str);

    fcb* fcbptr2;
    fat* fat1, * fat2;
    char* fname2, * exname2, text2[MAXTEXT];
    unsigned short blkno;
    int rbn2, i2;
    time_t now;
    struct tm* nowtime;
    fat1 = (fat*)(myvhard + BLOCKSIZE);
    fat2 = (fat*)(myvhard + BLOCKSIZE);
    fname2 = strtok(newname, ".");
    exname2 = strtok(NULL, ".");
    if (strcmp(fname2, "") == 0)
    {
        printf("错误！创建的文件必须有正确的名称！\n");
        return -1;
    }
    if (!exname2)
    {
        printf("错误！创建的文件必须有正确的扩展名！\n");
        return -1;
    }
    openfilelist[curdir].count = 0;
    rbn2 = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr2 = (fcb*)text;
    for (i2 = 0; i2 < rbn2 / sizeof(fcb); i2++)
    {
        if (strcmp(fcbptr2->filename, fname2) == 0 && strcmp(fcbptr2->exname, exname2) == 0)
        {
            printf("错误！文件名已经存在！\n");
            return -1;
        }
        fcbptr2++;
    }
    fcbptr2 = (fcb*)text;
    for (i2 = 0; i2 < rbn2 / sizeof(fcb); i2++)
    {
        if (fcbptr2->DIRECTORY == false)
            break;
        fcbptr2++;
    }
    blkno = findblock();
    if (blkno == -1)
        return -1;
    (fat1 + blkno)->id = END;
    (fat2 + blkno)->id = END;

    strcpy(fcbptr2->filename, fname2);
    strcpy(fcbptr2->exname, exname2);
    fcbptr2->attribute = fcbptr1->attribute;
    fcbptr2->time = fcbptr1->time;
    fcbptr2->date = fcbptr1->date;
    fcbptr2->first = fcbptr1->first;
    fcbptr2->length = fcbptr1->length;
    fcbptr2->DIRECTORY = fcbptr1->DIRECTORY;
    fcbptr2->READ_ONLY = fcbptr1->READ_ONLY;
    fcbptr2->HIDDEN = fcbptr1->HIDDEN;
    openfilelist[curdir].count = i * sizeof(fcb);
    do_write(curdir, (char*)fcbptr2, sizeof(fcb), 2);
    fcbptr2 = (fcb*)text;
    fcbptr2->length = openfilelist[curdir].length;
    openfilelist[curdir].count = 0;
    do_write(curdir, (char*)fcbptr2, sizeof(fcb), 2);
    openfilelist[curdir].fcbstate = 1;
    return fd;
}


int my_ren(char* filename, char* newname)
{
    fcb* fcbptr;
    char* fname, exname[3], * str, text[MAXTEXT];
    int rbn, fd, i;
    fname = strtok(filename, ".");
    str = strtok(NULL, ".");
    if (str)
        strcpy(exname, str);
    else
        strcpy(exname, "");
    for (i = 0; i < MAXOPENFILE; i++)
    {
        if (strcmp(openfilelist[i].filename, fname) == 0 && strcmp(openfilelist[i].exname, exname) == 0 && i != curdir)
        {
            printf("错误！该文件已打开！\n");
            return -1;
        }
    }
    openfilelist[curdir].count = 0;
    rbn = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (strcmp(fcbptr->filename, fname) == 0 && strcmp(fcbptr->exname, exname) == 0)
            break;
        fcbptr++;
    }
    if (i == rbn / sizeof(fcb))
    {
        printf("Error,the file is not exist.\n");
        return -1;
    }
    char* fname2, exname2[3], * str2;
    fname2 = strtok(newname, ".");
    str2 = strtok(NULL, ".");
    if (str2)
        strcpy(exname2, str2);
    else
        strcpy(exname2, "");
    strcpy(fcbptr->filename, fname2);
    strcpy(fcbptr->exname, exname2);
    openfilelist[curdir].count = i * sizeof(fcb);
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    fcbptr = (fcb*)text;
    fcbptr->length = openfilelist[curdir].length;
    openfilelist[curdir].count = 0;
    do_write(curdir, (char*)fcbptr, sizeof(fcb), 2);
    openfilelist[curdir].fcbstate = 1;
    return fd;
}

void my_tree()
{
    fcb* fcbptr;
    char text[MAXTEXT];
    int rbn, i;
    openfilelist[0].count = 0;
    rbn = do_read(0, openfilelist[0].length, text);
    fcbptr = (fcb*)text;
    printf("---root\n");
    for (i = 0; i < rbn / sizeof(fcb); i++)
    {
        if (fcbptr->DIRECTORY == true)
        {
            if (fcbptr->attribute & 0x20) {
                printf("   |\n");
                printf("   ---%s\\\t\t<DIR>\n", fcbptr->filename);
            }
            else {
                printf("   |\n");
                printf("   ---%s.%s\t\t\n", fcbptr->filename, fcbptr->exname);
            }
        }
        fcbptr++;
    }
}

int main()
{
    char cmd[16][10] = { "cd", "md", "rd", "dir", "copy_con", "del", "open", "close", "write", "type", "exit", "attrib", "ren", "copy", "tree", "cls" };
    char s[30], * sp;
    int cmdn, flag = 1, i, at;
    startsys();
    printf("Microsoft Windows [版本 1.0]\n");
    printf("(c) 2021 lizhengyang Individual。保留所有权利。\n\n");
    printf("*********************Dos System V1.0*******************************\n\n");
    printf("命令名\t\t命令参数\t\t命令说明\n\n");
    printf("cd\t\t目录名(路径名)\t\t切换当前目录到指定目录\n");
    printf("md\t\t目录名\t\t\t在当前目录创建新目录\n");
    printf("rd\t\t目录名\t\t\t在当前目录删除指定目录\n");
    printf("tree\t\t无\t\t\t以图形显示目录的路径结构\n");
    printf("dir\t\t无\t\t\t显示当前目录下的目录和文件\n");
    printf("copy_con\t文件名\t\t\t在当前目录下创建指定文件\n");
    printf("attrib\t\t文件名\t\t\t查询信息\n");
    printf("del\t\t文件名\t\t\t在当前目录下删除指定文件\n");
    printf("open\t\t文件名\t\t\t在当前目录下打开指定文件\n");
    printf("ren\t\t文件名\t\t\t文件重命名\n");
    printf("write\t\t无\t\t\t在打开文件状态下，写该文件\n");
    printf("type\t\t无\t\t\t在打开文件状态下，读取该文件\n");
    printf("close\t\t无\t\t\t在打开文件状态下，关闭该文件\n");
    printf("copy\t\t文件名\t\t\t文件复制\n");
    printf("cls\t\t无\t\t\t清空屏幕\n");
    printf("exit\t\t无\t\t\t退出系统\n\n");
    printf("*********************************************************************\n\n");
    while (flag)
    {
        printf("%s>", openfilelist[curdir].dir);
        gets(s);
        cmdn = -1;
        if (strcmp(s, ""))
        {
            sp = strtok(s, " ");
            for (i = 0; i < 16; i++)
            {
                if (strcmp(sp, cmd[i]) == 0)
                {
                    cmdn = i;
                    break;
                }
            }
            switch (cmdn)
            {
            case 0:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {  
                    my_cd(sp);
                
                }
                  

                else
                    printf("请输入正确的命令。\n");
                break;
            case 1:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_mkdir(sp);
                   
                }

                else
                    printf("请输入正确的命令！\n");
                break;
            case 2:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_rmdir(sp);
                  
                }
                   
                else
                    printf("请输入正确的命令！\n");
                break;
            case 3:
                if (openfilelist[curdir].attribute & 0x20)
                {
                    my_ls();
                   
                }
                   
                else
                    printf("请输入正确的命令！\n");
                break;
            case 4:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_create(sp);
                    
                }
                    
                else
                    printf("请输入正确的命令！\n");
                break;
            case 5:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_rm(sp);
                  
                }
            
                else
                    printf("请输入正确的命令！\n");
                break;
            case 6:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    if (strchr(sp, '.'))
                        curdir = my_open(sp);
                    else
                        printf("the openfile should have exname.\n");
                }
                else
                    printf("请输入正确的命令！\n");
                break;
            case 7:
                if (!(openfilelist[curdir].attribute & 0x20))
                    curdir = my_close(curdir);
                else
                    printf("No files opened.\n");
                break;
            case 8:
                if (!(openfilelist[curdir].attribute & 0x20))
                    my_write(curdir);
                else
                    printf("No files opened.\n");
                break;
            case 9:
                if (!(openfilelist[curdir].attribute & 0x20))
                    my_read(curdir, openfilelist[curdir].length);
                else
                    printf("No files opened.\n");
                break;
            case 10:
                if (openfilelist[curdir].attribute & 0x20)
                {
                    my_exitsys();
                    flag = 0;
                }
                else
                    printf("请输入正确的命令！\n");
                break;
            case 11:
                sp = strtok(NULL, " ");
                if (openfilelist[curdir].attribute & 0x20)
                     at = my_attri(sp);
                else
                    printf("请输入正确的命令！.\n");
                break;
            case 12:
                sp = strtok(NULL, " ");
                char newname[20];
                printf("请输入更改后的文件名：");
                gets(newname);
                if (openfilelist[curdir].attribute & 0x20)
                     at = my_ren(sp, newname);
                else
                    printf("请输入正确的命令！\n");
                break;
            case 13: {
                sp = strtok(NULL, " ");
                if (openfilelist[curdir].attribute & 0x20)
                     at = my_copy(sp);
                else
                    printf("请输入正确的命令！\n");
                break;
            }
            case 14: {
                if (openfilelist[curdir].attribute & 0x20)
                    my_tree();
                else
                    printf("请输入正确的命令！\n");
                break;
            }
            case 15: {
                system("cls");
                printf("Microsoft Windows [版本 1.0.0]\n");
                printf("(c) 2021 lizhengyang Individual。保留所有权利。\n\n");
                printf("*********************Dos System V1.0*******************************\n\n");
                printf("命令名\t\t命令参数\t\t命令说明\n\n");
                printf("cd\t\t目录名(路径名)\t\t切换当前目录到指定目录\n");
                printf("md\t\t目录名\t\t\t在当前目录创建新目录\n");
                printf("rd\t\t目录名\t\t\t在当前目录删除指定目录\n");
                printf("tree\t\t无\t\t\t以图形显示目录的路径结构\n");
                printf("dir\t\t无\t\t\t显示当前目录下的目录和文件\n");
                printf("copy_con\t文件名\t\t\t在当前目录下创建指定文件\n");
                printf("attrib\t\t文件名\t\t\t查询信息\n");
                printf("del\t\t文件名\t\t\t在当前目录下删除指定文件\n");
                printf("open\t\t文件名\t\t\t在当前目录下打开指定文件\n");
                printf("ren\t\t文件名\t\t\t文件重命名\n");
                printf("write\t\t无\t\t\t在打开文件状态下，写该文件\n");
                printf("type\t\t无\t\t\t在打开文件状态下，读取该文件\n");
                printf("close\t\t无\t\t\t在打开文件状态下，关闭该文件\n");
                printf("copy\t\t文件名\t\t\t文件复制\n");
                printf("cls\t\t无\t\t\t清空屏幕\n");
                printf("exit\t\t无\t\t\t退出系统\n\n");
                printf("*********************************************************************\n\n");
                break;
            }
            default:
                printf("请输入正确的命令！\n");
                break;
            }
        }
    }
    return 0;
}