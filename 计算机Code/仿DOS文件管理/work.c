#include <stdio.h>  
#include <malloc.h>  
#include <string.h>
#include<stdlib.h>  
#include <time.h> 
#include<stdbool.h>

#define BLOCKSIZE 1024  // ���̿��С  
#define SIZE 1024000  // ������̿ռ��С  
#define END 65535  // FAT�е��ļ�������־  
#define FREE 0  // FAT���̿���б�־  
#define ROOTBLOCKNUM 2  // ��Ŀ¼����ռ�̿���  
#define MAXOPENFILE 10  // ���ͬʱ���ļ�����t  
#define MAXTEXT 10000  


/* �ļ����ƿ� */
typedef struct FCB
{
    char filename[8];  // �ļ���  
    char exname[3];  // �ļ���չ��  
    unsigned char attribute;  // �ļ������ֶΣ�ֵΪ0ʱ��ʾĿ¼�ļ���ֵΪ1ʱ��ʾ�����ļ�  
    unsigned short time;  // �ļ�����ʱ��  
    unsigned short date;  // �ļ���������  
    unsigned short first;  // �ļ���ʼ�̿��  
    unsigned long length;  // �ļ�����  
    bool DIRECTORY;  // ��ʾĿ¼���Ƿ�Ϊ��
    bool READ_ONLY;  // ��ʾ�ļ��Ƿ�ֻ��
    bool HIDDEN;     //��ʾ�ļ��Ƿ�����
}fcb;


/* �ļ������ */
typedef struct FAT
{
    unsigned short id;  // ���̿��״̬�����еģ����ģ���һ����  
}fat;

/* �û����ļ��� */
typedef struct USEROPEN
{
    char filename[8];  // �ļ���  
    char exname[3];  // �ļ���չ��  
    unsigned char attribute;  // �ļ������ֶΣ�ֵΪ0ʱ��ʾĿ¼�ļ���ֵΪ1ʱ��ʾ�����ļ�  
    unsigned short time;  // �ļ�����ʱ��  
    unsigned short date;  // �ļ���������  
    unsigned short first;  // �ļ���ʼ�̿��  
    unsigned long length;  // �ļ����ȣ��������ļ����ֽ�������Ŀ¼�ļ�������Ŀ¼�������  
    bool DIRECTORY;  // ��ʾĿ¼���Ƿ�Ϊ�գ���ֵΪ0����ʾ�գ�ֵΪ1����ʾ�ѷ��� 
    bool READ_ONLY;  // ��ʾ�ļ��Ƿ�ֻ��
    bool HIDDEN;     //��ʾ�ļ��Ƿ�����  

    unsigned short dirno;  // ��Ӧ���ļ���Ŀ¼���ڸ�Ŀ¼�ļ��е��̿��  
    int diroff;  // ��Ӧ���ļ���Ŀ¼���ڸ�Ŀ¼�ļ���dirno�̿��е�Ŀ¼�����  
    char dir[80];  // ��Ӧ���ļ����ڵ�Ŀ¼��������������ټ���ָ���ļ��Ƿ��Ѿ���  
    int father;  // ��Ŀ¼�ڴ��ļ������λ��  
    int count;  // ��дָ�����ļ��е�λ��,�ļ������ַ���  
    char fcbstate;  // �Ƿ��޸����ļ���FCB�����ݣ�����޸�����Ϊ1������Ϊ0  
    char topenfile;  // ��ʾ���û��򿪱����Ƿ�Ϊ�գ���ֵΪ0����ʾΪ�գ������ʾ�ѱ�ĳ���ļ�ռ��  
}useropen;


/* ������ */
typedef struct BLOCK0
{
    char magic[10];  // �ļ�ϵͳħ��  
    char information[200];  // �洢һЩ������Ϣ������̿��С�����̿������������ļ�����  
    unsigned short root;  // ��Ŀ¼�ļ�����ʼ�̿��  
    unsigned char* startblock;  // �����������������ʼλ��                  
}block0;


unsigned char* myvhard;  // ָ��������̵���ʼ��ַ  
useropen openfilelist[MAXOPENFILE];  // �û����ļ�������  
int curdir;  // �û����ļ����еĵ�ǰĿ¼���ڴ��ļ������λ��  
char currentdir[80];  // ��¼��ǰĿ¼��Ŀ¼��������Ŀ¼��·����  
unsigned char* startp;  // ��¼�����������������ʼλ��  
char myfilename[] = "myfilesys";//�ļ�ϵͳ���ļ���  


void startsys();  // �����ļ�ϵͳ  
void my_format();  // ���̸�ʽ��  
void my_cd(char* dirname);  // ���ĵ�ǰĿ¼  
void my_mkdir(char* dirname);  // ������Ŀ¼  
void my_rmdir(char* dirname);  // ɾ����Ŀ¼  
void my_ls();  // ��ʾĿ¼  
void my_create(char* filename);  // �����ļ�  
void my_rm(char* filename);  // ɾ���ļ�   
int my_open(char* filename);  // ���ļ�
int my_attri(char* filename);  // ��ʾ�ļ���Ϣ   
int my_close(int fd);  // �ر��ļ�  
int my_write(int fd);  // д�ļ�  
int do_write(int fd, char* text, int len, char wstyle);  // ʵ��д�ļ�  
int my_read(int fd, int len);  // ���ļ�  
int do_read(int fd, int len, char* text);  // ʵ�ʶ��ļ�  
void my_exitsys();  // �˳��ļ�ϵͳ  
unsigned short findblock();  // Ѱ�ҿ����̿�  
int findopenfile();  // Ѱ�ҿ����ļ�����
int my_ren(char* filename, char* newname);  // �ļ�������
int my_copy(char* filename);  // �ļ�����
void my_tree();    // ��������ʽ��ʾĿ¼�ṹ


void startsys()
{
    FILE* fp;
    unsigned char buf[SIZE];
    fcb* root;
    int i;
    myvhard = (unsigned char*)malloc(SIZE);//����������̿ռ�  
    memset(myvhard, 0, SIZE);//��myvhard��ǰSIZE���ֽ��� 0 �滻������ myvhard  
    if ((fp = fopen(myfilename, "r")) != NULL)//ʹ��c���ԵĿ⺯��fopen()��myfsys�ļ�
    {
        fread(buf, SIZE, 1, fp);//�ļ����ڣ�ʹ��c���ԵĿ⺯��fread(),���������ļ���ȡ��������  
        fclose(fp);//�رմ򿪵��ļ�������������д���ļ����ͷ�ϵͳ�ṩ�ļ���Դ  
        if (strcmp(((block0*)buf)->magic, "10101010"))//�жϿ�ʼ��8���ֽ������Ƿ�Ϊ�ļ�ϵͳħ��  
        {
            //���ǣ�������my_format()�����뵽��������̿ռ���и�ʽ������
            printf("�ҵ��ļ�ϵͳ�������ڣ���ʼ�����ļ�...\n");
            my_format();
        }
        else//�ǣ��򻺳����е����ݸ��Ƶ��ڴ��е�������̿ռ�
        {
            for (i = 0; i < SIZE; i++)
                myvhard[i] = buf[i];
        }
    }
    else
        //�ļ������ڣ��򴴽���������my_format()�����뵽��������̿ռ���и�ʽ������
    {
        printf("�ҵ��ļ�ϵͳ�������ڣ���ʼ�����ļ�...\n");
        my_format();
    }
    //��ʼ���û����ļ���������0�������Ŀ¼�ļ�ʹ�ã�����д��Ŀ¼�ļ��������Ϣ��
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
    openfilelist[0].dirno = 5;//���ڸ�Ŀ¼û���ϼ�Ŀ¼�����Ա����е�dirno��diroff�ֱ���Ϊ5����Ŀ¼������ʼ��ţ���0
    openfilelist[0].diroff = 0;
    strcpy(openfilelist[0].dir, "\\root\\");//����ptrcurdirָ��ָ����û����ļ����
    openfilelist[0].father = 0;
    openfilelist[0].count = 0;
    openfilelist[0].fcbstate = 0;
    openfilelist[0].topenfile = 1;
    for (i = 1; i < MAXOPENFILE; i++)
        openfilelist[i].topenfile = 0;
    curdir = 0;
    strcpy(currentdir, "\\root\\");// ����ǰĿ¼����Ϊ��Ŀ¼��
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
    blk0 = (block0*)myvhard;//myvhardָ����̿ռ俪ʼ��ַ��blk0ָ�������鿪ʼ��ַ
    fat1 = (fat*)(myvhard + BLOCKSIZE);//fat1ָ��fat1��ʼ��ַ
    fat2 = (fat*)(myvhard + 3 * BLOCKSIZE);//fat2ָ��fat2��ʼ��ַ
    root = (fcb*)(myvhard + 5 * BLOCKSIZE);//rootָ���Ŀ¼��ʼ��ַ
    strcpy(blk0->magic, "10101010");//��������̵�һ������Ϊ�����飬��ʼ��8���ֽ����ļ�ϵͳ��ħ������Ϊ��10101010��
    strcpy(blk0->information, "My FileSystem Ver 1.0 \n Blocksize=1KB Whole size=1000KB Blocknum=1000 RootBlocknum=2\n");
    blk0->root = 5;//��Ŀ¼�ļ�����ʼ�̿��Ϊ5
    blk0->startblock = (unsigned char*)root;//��������ʼλ��
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
    now = time(NULL);//��ȡϵͳʱ�䣬��λΪ��
    nowtime = localtime(&now);//��ʱ����ֵ�任�ɱ���ʱ��
    strcpy(root->filename, ".");//root�ļ���Ϊ.
    strcpy(root->exname, "");//root��չ��Ϊ��
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
    dir = strtok(dirname, "\\");//�ֽ��ַ���Ϊһ���ַ�����dirnameΪҪ�ֽ���ַ�����"\\"Ϊ�ָ����ַ���  
    if (strcmp(dir, ".") == 0)
        return;
    else if (strcmp(dir, "..") == 0)
    {
        if (curdir)//��ǰĿ¼���ļ�������
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
        fd = my_open(dir);//����my_open()��ָ��Ŀ¼���ĸ�Ŀ¼�ļ�
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
    rbn = do_read(curdir, openfilelist[curdir].length, text);//����do_read()���뵱ǰĿ¼�ļ����ݵ��ڴ棬��鵱ǰĿ¼���½�Ŀ¼�ļ��Ƿ�������
   
    fcbptr = (fcb*)text;
    for (i = 0; i < rbn / sizeof(fcb); i++)//�ڵ�ǰĿ¼���ң��Ƿ�������Ŀ¼  
    {
        if (strcmp(fcbptr->filename, dirname) == 0 && strcmp(fcbptr->exname, "") == 0)
        { //�������򷵻أ�����ʾ������Ϣ��
            printf("����Ŀ¼���Ѿ�����!\n");
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
    blkno = findblock();//Ѱ�ҿ����̿�  
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

    fd = my_open(dirname);//������Ŀ¼��'.','..'Ŀ¼  
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
    for (i = 0; i < rbn / sizeof(fcb); i++)//����Ҫɾ����Ŀ¼  
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
    for (j = 0; j < rbn2 / sizeof(fcb); j++)//�ж�Ҫɾ��Ŀ¼�Ƿ�Ϊ��  
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
        printf("����ɾ���ļ���������ȷ�����ƣ�\n");
        return;
    }
    if (!exname)
    {
        printf("����ɾ���ļ���������ȷ����չ����\n");
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
            printf("���󣡸��ļ��Ѵ򿪣�\n");
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
        printf("���󣡸��ļ������ڣ�\n");
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
        printf("���󣡸��ļ������ڣ�\n");
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
        printf("���󣡸��ļ������ڣ�\n");
        return -1;
    }
    while (1)
    {
        printf("��ѡ����д���͵����֣�\n1.���к���д\t2.��ԭ���ݺ������д\n");
        scanf("%d", &wstyle);
        if (wstyle > 0 && wstyle < 3)
            break;
        printf("�������ִ���");
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
    printf("������Ҫ��д������(������дʱ������ Ctrl+Z):\n");
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
            printf("��д����");
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
    printf("�ļ���: %s", fcbptr->filename);
    printf("\n�ļ�����: %s", fcbptr->exname);
    if (fcbptr->attribute == 0)
        printf("\n�ļ�����: Ŀ¼�ļ�");
    else
        printf("\n�ļ�����: �����ļ�");
    printf("\nʱ��: %d", fcbptr->time);
    printf("\n����: %d", fcbptr->date);
    printf("\n��ʼ�̿��: %d", fcbptr->first);
    printf("\n�ļ���С: %d", fcbptr->length);
    if (fcbptr->DIRECTORY == true)
        printf("\nĿ¼���Ƿ�Ϊ��: ��");
    else
        printf("\nĿ¼���Ƿ�Ϊ��: ��");
    if (fcbptr->READ_ONLY == true)
        printf("\n�ļ��Ƿ�Ϊֻ������");
    else
        printf("\n�ļ��Ƿ�Ϊֻ������");
    if (fcbptr->HIDDEN == true)
        printf("\n�ļ��Ƿ����أ���\n");
    else
        printf("\n�ļ��Ƿ����أ���\n");
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
            printf("���󣡸��ļ��Ѿ��򿪡�\n");
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
        printf("�����ļ������ڣ�\n");
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
        printf("���󣡴������ļ���������ȷ�����ƣ�\n");
        return -1;
    }
    if (!exname2)
    {
        printf("���󣡴������ļ���������ȷ����չ����\n");
        return -1;
    }
    openfilelist[curdir].count = 0;
    rbn2 = do_read(curdir, openfilelist[curdir].length, text);
    fcbptr2 = (fcb*)text;
    for (i2 = 0; i2 < rbn2 / sizeof(fcb); i2++)
    {
        if (strcmp(fcbptr2->filename, fname2) == 0 && strcmp(fcbptr2->exname, exname2) == 0)
        {
            printf("�����ļ����Ѿ����ڣ�\n");
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
            printf("���󣡸��ļ��Ѵ򿪣�\n");
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
    printf("Microsoft Windows [�汾 1.0]\n");
    printf("(c) 2021 lizhengyang Individual����������Ȩ����\n\n");
    printf("*********************Dos System V1.0*******************************\n\n");
    printf("������\t\t�������\t\t����˵��\n\n");
    printf("cd\t\tĿ¼��(·����)\t\t�л���ǰĿ¼��ָ��Ŀ¼\n");
    printf("md\t\tĿ¼��\t\t\t�ڵ�ǰĿ¼������Ŀ¼\n");
    printf("rd\t\tĿ¼��\t\t\t�ڵ�ǰĿ¼ɾ��ָ��Ŀ¼\n");
    printf("tree\t\t��\t\t\t��ͼ����ʾĿ¼��·���ṹ\n");
    printf("dir\t\t��\t\t\t��ʾ��ǰĿ¼�µ�Ŀ¼���ļ�\n");
    printf("copy_con\t�ļ���\t\t\t�ڵ�ǰĿ¼�´���ָ���ļ�\n");
    printf("attrib\t\t�ļ���\t\t\t��ѯ��Ϣ\n");
    printf("del\t\t�ļ���\t\t\t�ڵ�ǰĿ¼��ɾ��ָ���ļ�\n");
    printf("open\t\t�ļ���\t\t\t�ڵ�ǰĿ¼�´�ָ���ļ�\n");
    printf("ren\t\t�ļ���\t\t\t�ļ�������\n");
    printf("write\t\t��\t\t\t�ڴ��ļ�״̬�£�д���ļ�\n");
    printf("type\t\t��\t\t\t�ڴ��ļ�״̬�£���ȡ���ļ�\n");
    printf("close\t\t��\t\t\t�ڴ��ļ�״̬�£��رո��ļ�\n");
    printf("copy\t\t�ļ���\t\t\t�ļ�����\n");
    printf("cls\t\t��\t\t\t�����Ļ\n");
    printf("exit\t\t��\t\t\t�˳�ϵͳ\n\n");
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
                    printf("��������ȷ�����\n");
                break;
            case 1:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_mkdir(sp);
                   
                }

                else
                    printf("��������ȷ�����\n");
                break;
            case 2:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_rmdir(sp);
                  
                }
                   
                else
                    printf("��������ȷ�����\n");
                break;
            case 3:
                if (openfilelist[curdir].attribute & 0x20)
                {
                    my_ls();
                   
                }
                   
                else
                    printf("��������ȷ�����\n");
                break;
            case 4:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_create(sp);
                    
                }
                    
                else
                    printf("��������ȷ�����\n");
                break;
            case 5:
                sp = strtok(NULL, " ");
                if (sp && (openfilelist[curdir].attribute & 0x20))
                {
                    my_rm(sp);
                  
                }
            
                else
                    printf("��������ȷ�����\n");
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
                    printf("��������ȷ�����\n");
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
                    printf("��������ȷ�����\n");
                break;
            case 11:
                sp = strtok(NULL, " ");
                if (openfilelist[curdir].attribute & 0x20)
                     at = my_attri(sp);
                else
                    printf("��������ȷ�����.\n");
                break;
            case 12:
                sp = strtok(NULL, " ");
                char newname[20];
                printf("��������ĺ���ļ�����");
                gets(newname);
                if (openfilelist[curdir].attribute & 0x20)
                     at = my_ren(sp, newname);
                else
                    printf("��������ȷ�����\n");
                break;
            case 13: {
                sp = strtok(NULL, " ");
                if (openfilelist[curdir].attribute & 0x20)
                     at = my_copy(sp);
                else
                    printf("��������ȷ�����\n");
                break;
            }
            case 14: {
                if (openfilelist[curdir].attribute & 0x20)
                    my_tree();
                else
                    printf("��������ȷ�����\n");
                break;
            }
            case 15: {
                system("cls");
                printf("Microsoft Windows [�汾 1.0.0]\n");
                printf("(c) 2021 lizhengyang Individual����������Ȩ����\n\n");
                printf("*********************Dos System V1.0*******************************\n\n");
                printf("������\t\t�������\t\t����˵��\n\n");
                printf("cd\t\tĿ¼��(·����)\t\t�л���ǰĿ¼��ָ��Ŀ¼\n");
                printf("md\t\tĿ¼��\t\t\t�ڵ�ǰĿ¼������Ŀ¼\n");
                printf("rd\t\tĿ¼��\t\t\t�ڵ�ǰĿ¼ɾ��ָ��Ŀ¼\n");
                printf("tree\t\t��\t\t\t��ͼ����ʾĿ¼��·���ṹ\n");
                printf("dir\t\t��\t\t\t��ʾ��ǰĿ¼�µ�Ŀ¼���ļ�\n");
                printf("copy_con\t�ļ���\t\t\t�ڵ�ǰĿ¼�´���ָ���ļ�\n");
                printf("attrib\t\t�ļ���\t\t\t��ѯ��Ϣ\n");
                printf("del\t\t�ļ���\t\t\t�ڵ�ǰĿ¼��ɾ��ָ���ļ�\n");
                printf("open\t\t�ļ���\t\t\t�ڵ�ǰĿ¼�´�ָ���ļ�\n");
                printf("ren\t\t�ļ���\t\t\t�ļ�������\n");
                printf("write\t\t��\t\t\t�ڴ��ļ�״̬�£�д���ļ�\n");
                printf("type\t\t��\t\t\t�ڴ��ļ�״̬�£���ȡ���ļ�\n");
                printf("close\t\t��\t\t\t�ڴ��ļ�״̬�£��رո��ļ�\n");
                printf("copy\t\t�ļ���\t\t\t�ļ�����\n");
                printf("cls\t\t��\t\t\t�����Ļ\n");
                printf("exit\t\t��\t\t\t�˳�ϵͳ\n\n");
                printf("*********************************************************************\n\n");
                break;
            }
            default:
                printf("��������ȷ�����\n");
                break;
            }
        }
    }
    return 0;
}