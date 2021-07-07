/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 20:21:01
 */
#include <bits/stdc++.h>
#include <windows.h>
using namespace std;

bool debug = true;

struct Fcb
{
    string name;
    bool isFile;
    int size;
    string content;
    vector<Fcb *> childs;
    ~Fcb(); // 析构函数
};
typedef vector<Fcb *> VFcb;      // 盛放children
typedef VFcb::iterator VFcbI;    // VFcb的指针
typedef vector<string> ToReturn; // 专门用来存放返回数据的一种数据类型
typedef vector<string> Path;     // 路径
Path path;                       // 真正的路径
typedef long long ll;            // long long
typedef Fcb *PFcb;               // Fcb的指针
PFcb pfcb;                       // 正在使用的目录的指针

Fcb::~Fcb() // 析构函数
{
    for (VFcbI it = childs.begin(); it != childs.end(); it++)
    {
        (**it).~Fcb(); // 所有的children析构
    }
    if (debug)
        cout << "删除Fcb：" << name << endl; //**************
    delete this;                             // 删除此项
}

ToReturn split(string toSplit, char c) // 将字符串以字符c为间隔分开
{
    ToReturn ans;
    toSplit += c;
    int left = 0;
    for (int right = 0; right < toSplit.size(); right++)
    {
        if (toSplit[right] == c) //left->right-1
        {
            ans.push_back(toSplit.substr(left, right - left));
            left = right + 1;
        }
    }
    return ans;
}

string stripSpace(string ori) // 去除指令中多余的空格
{
    string ans;
    int length = ori.size();
    int loc = 0, loc2 = length - 1;
    while (loc < ori.size() && ori[loc] == ' ')
        loc++; // 去除开头的空格
    while (loc2 >= 0 && ori[loc2] == ' ')
        loc2--; // 去除结尾的空格
    for (; loc <= loc2; loc++)
    {
        if (ori[loc] == ' ' && ori[loc - 1] == ' ')
            ; // 相邻的两个空格
        else
            ans += ori[loc];
    }
    return ans;
}

void copyright() // 开局打印的版权?
{
    puts("LetMeFly Microsoft Windows [版本 1.0]");
    puts("(c) 2021 814114971@qq.com Individual。");
    puts("保留所有权利。\n");
}

void help() // 帮助
{
    puts("\
命令名          命令参数                命令说明\
\
md              目录名                  在当前目录创建新目录\
dir             无                      显示当前目录下的目录和文件\
cd              目录名(路径名)          切换当前目录到指定目录\
rd              目录名                  在当前目录删除指定目录\
tree            无                      以图形显示目录的路径结构\
touch           文件名                  在当前目录下创建指定文件\
vi              文件名                  编辑文件\
attr            文件名                  查询信息\
attr -add -r    文件名                  加只读属性\
attr -mov -r    文件名                  去只读属性\
del             文件名                  尝试删除文件\
del /y          文件名                  删除文件（不需要确认）\
copy            文件名                  文件复制\
cls             无                      清空屏幕\
exit            无                      退出系统");
}

void showFront() // 显示前面的提示符
{
    for (Path::iterator it = path.begin(); it != path.end(); it++)
    {
        if (it != path.begin())
            cout << '\\';
        cout << *it;
    }
    putchar('>');
}

void init() // 初始化
{
    path.push_back("root");
    pfcb = new Fcb;
    pfcb->name = "root";
    pfcb->isFile = false;
    copyright();
}

void execute() // 执行
{
    string s;
    while (1)
    {
        showFront();
        getline(cin, s);
        s = stripSpace(s);
        ToReturn toReturn = split(s, ' ');
        if (s == "") // 空的
            ;
        else if (s == "exit") // 退出
        {
            puts("Bye~");
            Sleep(500);
            return;
        }
        else if (toReturn[0] == "md") // 创建新的目录
        {
            if (toReturn.size() == 1) // 只有md
            {
                puts("此命令不正确");
            }
            else
            {
                for (int i = 1; i < toReturn.size(); i++)
                {
                    Fcb *thisPFcb = new Fcb;
                    thisPFcb->name = toReturn[i];
                    thisPFcb->isFile = false;
                    pfcb->childs.push_back(thisPFcb);
                }
            }
        }
        else if (toReturn[0] == "dir") // dir
        {
            for (VFcbI it = pfcb->childs.begin(); it != pfcb->childs.end(); it++)
            {
                printf("%s[%c]\t", *(*it)->name.c_str()/*, (**it->isFile) ? 'f' : 'd'*/); // 文件[f] 目录[d]
                puts("");                                                               // 换行
            }
        }
        else
        {
            cout << '\'' << toReturn[0] << '\'' << "不是内部或外部命令，也不是可运行的程序" << endl;
            cout << "或批处理文件。" << endl;
        }
    }
}

int main()
{
    init();
    execute();
    return 0;
}