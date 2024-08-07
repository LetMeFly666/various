/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-09 00:19:36
 */
#include <bits/stdc++.h>
#include <windows.h>
using namespace std;

bool debug = true;

struct Fcb
{
    string name; //*
    bool isFile;
    int size;
    string content;
    vector<Fcb *> childs;
    bool couldSee; //可见
    bool readOnly; // 只读
    Fcb *father;   // 父
    ~Fcb();        // 析构函数
};
typedef vector<Fcb *> VFcb;            // 盛放children
typedef VFcb::iterator VFcbI;          // VFcb的指针
typedef vector<string> ToReturn;       // 专门用来存放返回数据的一种数据类型
typedef vector<string> Path;           // 路径
Path path;                             // 真正的路径
typedef long long ll;                  // long long
typedef Fcb *PFcb;                     // Fcb的指针
typedef pair<PFcb, bool> ReturnResult; // 专门用来存放返回数据的一种数据类型
PFcb pfcb, root;                       // 正在使用的目录的指针
#define treeSpaceNum 3                 // tree命令每层有多少个空格

Fcb::~Fcb() // 析构函数
{
    // 函数退出会自动析构
    // if (debug)
    //     cout << "size: " << childs.size() << endl;
    // if (childs.size()) // 非空才有Begin!!!
    // {
    //     for (VFcbI it = childs.begin(); it != childs.end(); it++)
    //     {
    //         if (debug)
    //             puts("调用");
    //         (**it).~Fcb(); // 所有的children析构
    //     }
    // }
    // if (debug)
    //     cout << "删除Fcb：" << name << endl; //**************
    delete this; // 删除此项
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
命令名          命令参数                命令说明\n\
\n\
help            无                      显示帮助\n\
md              目录名                  在当前目录创建新目录\n\
dir             无                      显示当前目录下的目录和文件\n\
cd              目录名(路径名)          切换当前目录到指定目录\n\
rd              目录名                  在当前目录删除指定目录\n\
tree            无                      以图形显示目录的路径结构\n\
touch           文件名                  在当前目录下创建指定文件\n\
rename          文件名/目录名，新名     重命名文件或目录为新名\n\
show            文件名                  显示文件信息\n\
set             文件名，内容            设置文件信息为内容\n\
attr            文件名                  查询信息\n\
attr -add -w    文件名                  去只读属性（加可写属性）\n\
attr -mov -w    文件名                  加只读属性（去可写属性）\n\
hide -add       目录名                  加隐藏属性\n\
hide -mov       目录名                  去隐藏属性\n\
del /t          文件名                  尝试删除文件\n\
del /y          文件名                  删除文件（不需要确认）\n\
copy            文件名，目录名          文件复制\n\
cls             无                      清空屏幕\n\
exit            无                      退出系统");
}

void showPath() // 显示当前路径
{
    for (Path::iterator it = path.begin(); it != path.end(); it++)
    {
        if (it != path.begin())
            cout << '\\';
        cout << *it;
    }
}

void showFront() // 显示前面的提示符
{
    showPath(); // 显示当前路径
    putchar('>');
}

void init() // 初始化
{
    path.push_back("root");
    pfcb = new Fcb;
    pfcb->name = "root";
    pfcb->isFile = false;
    pfcb->father = pfcb;
    root = pfcb;
    copyright();
}

bool alreadyExists(VFcb &vFcb, string &name) // 和windows一样，有了这个名字的目录就不能有这个名字的文件
{
    for (VFcbI it = vFcb.begin(); it != vFcb.end(); it++)
        if ((**it).name == name)
            return true;
    return false;
}

PFcb findChildByName(PFcb &father, string &name)
{
    for (VFcbI it = father->childs.begin(); it != father->childs.end(); it++)  // 原因竟是这里！！！
    {
        if ((**it).name == name)
        {
            return *it;
        }
    }
}

ReturnResult findPathByName(string path) // 从根目录找起
{
    ToReturn toReturn = split(path, '\\');
    PFcb pFcb = root;
    if (toReturn[0] != "root") // 不是从root开始
    {
        return ReturnResult(root, false);
    }
    for (int i = 1; i < toReturn.size(); i++)
    {
        if (!alreadyExists(pFcb->childs, toReturn[i]))
        {
            return ReturnResult(pFcb, false);
        }
        pFcb = findChildByName(pFcb, toReturn[i]);
    }
    return ReturnResult(pFcb, true);
}

void realCd(PFcb pFcb, bool child)
{
    if (child)
    {
        path.push_back(pFcb->name);
    }
    else
    {
        if (path.size() > 1)
        {
            path.erase(--path.end());
        }
    }
    pfcb = pFcb;
}

void realDel(PFcb FpFcb, PFcb CpFcb)
{
    for (VFcbI it = FpFcb->childs.begin(); it != FpFcb->childs.end(); it++)
    {
        if (*it == CpFcb) // 找到了
        {
            // (**it).~Fcb();
            if ((**it).readOnly)
            {
                puts("只读状态");
            }
            else
            {
                FpFcb->childs.erase(it);
            }
            return;
        }
    }
}

void realTree(PFcb pFcb, vector<bool> spaceTimes)
{
    for (int i = 0; i < spaceTimes.size(); i++)
    {
        putchar(spaceTimes[i] ? '|' : ' ');
        for (int j = 0; j < treeSpaceNum; j++)
        {
            putchar(' ');
        }
    }
    cout << "├─" << pFcb->name << endl;
    if (!pFcb->isFile && pFcb->childs.size() > 0)
    {
        // VFcbI end = --pFcb->childs.end();
        for (VFcbI it = pFcb->childs.begin(); it != pFcb->childs.end(); it++)
        {
            vector<bool> temp = spaceTimes;
            temp.push_back(pFcb != pFcb->father->father->childs[pFcb->father->childs.size() - 1]);
            realTree(*it, temp);
        }
    }
}

bool allPoint(string name)
{
    for (int i = 0; i < name.size(); i++)
    {
        if (name[i] != '.')
            return false;
    }
    return true;
}

bool vailiableName(string name)
{
    if (allPoint(name)) // 不能全是.
        return false;
    string cannot = "/\\?*";
    for (int i = 0; i < name.size(); i++)
    {
        for (int j = 0; j < cannot.size(); j++)
        {
            if (name[i] == cannot[j])
                return false;
        }
    }
    return true;
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
        else if (toReturn[0] == "exit") // 退出
        {
            puts("Bye~");
            Sleep(500);
            return;
        }
        else if (toReturn[0] == "help") // 帮助
        {
            if (toReturn.size() != 1)
            {
                puts("参数错误");
            }
            else
            {
                help();
            }
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
                    if (!vailiableName(toReturn[i]))
                    {
                        puts("命名不合法");
                    }
                    else if (!alreadyExists(pfcb->childs, toReturn[i])) // 还不存在
                    {
                        Fcb *thisPFcb = new Fcb;
                        thisPFcb->name = toReturn[i];
                        thisPFcb->isFile = false;
                        thisPFcb->father = pfcb;
                        thisPFcb->readOnly = false;
                        pfcb->childs.push_back(thisPFcb);
                        cout << "`" << toReturn[i] << "`创建成功" << endl;
                    }
                    else
                    {
                        cout << "`" << toReturn[i] << "`已存在" << endl;
                    }
                }
            }
        }
        else if (toReturn[0] == "dir") // dir
        {
            for (VFcbI it = pfcb->childs.begin(); it != pfcb->childs.end(); it++)
            {
                if ((**it).couldSee) // 可见了才显示
                {
                    printf("%s[%c]\t", (**it).name.c_str(), (**it).isFile ? 'f' : 'd'); // 文件[f] 目录[d]
                }
            }
            puts(""); // 换行
        }
        else if (toReturn[0] == "cd") // 进入目录
        {
            if (toReturn.size() == 1) // 只有`cd`
            {
                showPath();
                puts("");
            }
            else if (toReturn.size() != 2) // 多余参数
            {
                puts("参数错误");
            }
            else
            {
                if (toReturn[1] == ".") //自己
                    ;
                else if (toReturn[1] == "..") // 父（本来就是根的话还是自己）
                {
                    realCd(pfcb->father, 0);
                }
                else // 到其他地方
                {
                    if (alreadyExists(pfcb->childs, toReturn[1]))
                    {
                        PFcb pFcb = findChildByName(pfcb, toReturn[1]);
                        if (pFcb->isFile)
                        {
                            puts("不能进入文件");
                        }
                        else
                            realCd(pFcb, 1);
                    }
                    else
                    {
                        puts("系统找不到指定的路径。");
                    }
                }
            }
        }
        else if (toReturn[0] == "rd") // 删除目录
        {
            if (toReturn.size() == 1) // 只有一个rd
            {
                puts("语法不正确");
            }
            else
            {
                for (int i = 1; i < toReturn.size(); i++)
                {
                    if (!alreadyExists(pfcb->childs, toReturn[i]))
                    {
                        puts("系统找不到指定的路径。");
                    }
                    else // 没有确认，直接删除
                    {
                        realDel(pfcb, findChildByName(pfcb, toReturn[i]));
                    }
                }
            }
        }
        else if (toReturn[0] == "tree")
        {
            if (toReturn.size() != 1)
            {
                puts("命令错误");
            }
            else
            {
                vector<bool> temp;
                realTree(pfcb, temp);
            }
        }
        else if (toReturn[0] == "touch")
        {
            if (toReturn.size() == 1)
            {
                puts("命令错误");
            }
            else
            {
                for (int i = 1; i < toReturn.size(); i++)
                {
                    if (!vailiableName(toReturn[i]))
                    {
                        puts("命名不合法");
                    }
                    else if (!alreadyExists(pfcb->childs, toReturn[i])) // 还不存在
                    {
                        Fcb *thisPFcb = new Fcb;
                        thisPFcb->name = toReturn[i];
                        thisPFcb->isFile = true;
                        thisPFcb->father = pfcb;
                        thisPFcb->readOnly = false;
                        pfcb->childs.push_back(thisPFcb);
                        cout << "`" << toReturn[i] << "`创建成功" << endl;
                    }
                    else
                    {
                        cout << "`" << toReturn[i] << "`已存在" << endl;
                    }
                }
            }
        }
        else if (toReturn[0] == "show")
        {
            if (toReturn.size() != 2)
            {
                puts("参数错误");
            }
            else
            {
                if (!alreadyExists(pfcb->childs, toReturn[1]))
                {
                    puts("系统找不到指定文件");
                }
                else
                {
                    PFcb pFcb = findChildByName(pfcb, toReturn[1]);
                    if (pFcb->isFile)
                    {
                        cout << "文件的内容为：" << pFcb->content << endl;
                    }
                    else
                    {
                        puts("不是文件");
                    }
                }
            }
        }
        else if (toReturn[0] == "set")
        {
            if (toReturn.size() != 3)
            {
                puts("参数错误");
            }
            else
            {
                if (!alreadyExists(pfcb->childs, toReturn[1]))
                {
                    puts("系统找不到指定文件");
                }
                else
                {
                    PFcb pFcb = findChildByName(pfcb, toReturn[1]);
                    if (pFcb->isFile)
                    {
                        if (pFcb->readOnly)
                        {
                            puts("只读文件");
                        }
                        else
                        {
                            pFcb->content = toReturn[2];
                        }
                    }
                    else
                    {
                        puts("不是文件");
                    }
                }
            }
        }
        else if (toReturn[0] == "attr")
        {
            if (toReturn.size() == 2) // 显示属性
            {
                if (!alreadyExists(pfcb->childs, toReturn[1]))
                {
                    puts("系统找不到指定文件");
                }
                else
                {
                    PFcb pFcb = findChildByName(pfcb, toReturn[1]);
                    if (pFcb->isFile)
                    {
                        puts(pFcb->readOnly ? "只读" : "读写");
                    }
                    else
                    {
                        puts("不是文件");
                    }
                }
            }
            else if (toReturn.size() == 4) // 设置属性
            {
                if (toReturn[2] != "-w")
                {
                    puts("参数错误");
                }
                else if (toReturn[1] == "-add" || toReturn[1] == "-mov") // 添加 或 取消
                {
                    if (alreadyExists(pfcb->childs, toReturn[3]))
                    {
                        PFcb pFcb = findChildByName(pfcb, toReturn[3]);
                        if (pFcb->isFile)
                        {
                            pFcb->readOnly = (toReturn[1] == "-mov");
                        }
                        else
                        {
                            puts("不是文件");
                        }
                    }
                    else
                    {
                        puts("系统找不到文件");
                    }
                }
                else
                {
                    puts("参数错误");
                }
            }
            else
            {
                puts("参数错误");
            }
        }
        else if (toReturn[0] == "del")
        {
            if (toReturn.size() != 3 || (toReturn[1] != "/y" && toReturn[1] != "/t"))
            {
                puts("参数错误");
            }
            else
            {
                if (!alreadyExists(pfcb->childs, toReturn[2]))
                {
                    puts("系统找不到指定文件");
                }
                else
                {
                    PFcb pFcb = findChildByName(pfcb, toReturn[2]);
                    if (pFcb->isFile)
                    {
                        if (toReturn[1] == "/t")
                        {
                            puts("确认删除吗？y/n");
                            string temp;
                            getline(cin, temp);
                            temp = stripSpace(temp);
                            if (temp != "y" && temp != "Y")
                            {
                                puts("取消删除");
                            }
                            else
                            {
                                realDel(pfcb, pFcb);
                            }
                        }
                        else
                        {
                            realDel(pfcb, pFcb);
                        }
                    }
                    else
                    {
                        puts("不是文件");
                    }
                }
            }
        }
        // else if (toReturn[0] == "copy") // 把文件拷贝到根目录下
        // {
        //     if (toReturn.size() != 2)
        //     {
        //         puts("参数错误");
        //     }
        //     else
        //     {
        //         if (!alreadyExists(pfcb->childs, toReturn[1]))
        //         {
        //             puts("系统找不到指定文件");
        //         }
        //         else
        //         {
        //             PFcb pFcb = findChildByName(pfcb, toReturn[1]);
        //             if (pFcb->isFile)
        //             {
        //                 if (!alreadyExists(root->childs, toReturn[1])) // 还不存在
        //                 {
        //                     Fcb *thisPFcb = new Fcb;
        //                     thisPFcb->name = toReturn[1];
        //                     thisPFcb->isFile = true;
        //                     thisPFcb->father = pfcb;
        //                     thisPFcb->readOnly = false;
        //                     root->childs.push_back(thisPFcb);
        //                     cout << "`" << toReturn[1] << "`创建成功" << endl;
        //                 }
        //                 else
        //                 {
        //                     cout << "`root\\" << toReturn[1] << "`已存在" << endl;
        //                 }
        //             }
        //             else
        //             {
        //                 puts("不是文件");
        //             }
        //         }
        //     }
        // }
        else if (toReturn[0] == "copy")
        {
            if (toReturn.size() == 3)
            {
                if (!alreadyExists(pfcb->childs, toReturn[1]))
                {
                    puts("系统找不到指定文件");
                }
                else
                {
                    PFcb pFcb = findChildByName(pfcb, toReturn[1]);
                    if (pFcb->isFile)
                    {
                        ReturnResult returnResult = findPathByName(toReturn[2]);
                        if (returnResult.second)
                        {
                            PFcb toPutPath = returnResult.first;
                            cout << (*toPutPath).name << endl;  // *******
                            PFcb newFile = new Fcb;
                            *newFile = *pFcb;
                            (*newFile).father = toPutPath;
                            if (!alreadyExists(toPutPath->childs, toReturn[1])) // 还不存在
                            {
                                toPutPath->childs.push_back(newFile);
                                cout << "`" << toReturn[2] << "\\" << toReturn[1] << "`创建成功" << endl;
                            }
                            else
                            {
                                puts("文件已存在");
                            }
                        }
                        else
                        {
                            puts("系统找不到指定路径");
                        }
                    }
                    else
                    {
                        puts("不是文件");
                    }
                }
            }
            else
            {
                puts("参数错误");
            }
        }
        else if (toReturn[0] == "cls") // 清屏，后面可跟参数，无效无报错
        {
            system("cls");
        }
        else if (toReturn[0] == "hide")
        {
            if (toReturn.size() == 3) // 设置属性
            {
                if (toReturn[1] == "-add" || toReturn[1] == "-mov") // 添加 或 取消
                {
                    if (alreadyExists(pfcb->childs, toReturn[2]))
                    {
                        PFcb pFcb = findChildByName(pfcb, toReturn[2]);
                        pFcb->couldSee = (toReturn[1] == "-mov");
                    }
                    else
                    {
                        puts("系统找不到文件");
                    }
                }
                else
                {
                    puts("参数错误");
                }
            }
            else
            {
                puts("参数错误");
            }
        }
        else if (toReturn[0] == "rename")
        {
            if (toReturn.size() == 3)
            {
                if (!alreadyExists(pfcb->childs, toReturn[1]))
                {
                    puts("系统找不到指定文件");
                }
                else if (alreadyExists(pfcb->childs, toReturn[2]))
                {
                    puts("要命名的文件已存在");
                }
                else
                {
                    PFcb pFcb = findChildByName(pfcb, toReturn[1]);
                    bool isFile = pFcb->isFile;
                    realDel(pfcb, pFcb);
                    Fcb *thisPFcb = new Fcb;
                    thisPFcb->name = toReturn[2];
                    thisPFcb->isFile = isFile;
                    thisPFcb->father = pfcb;
                    thisPFcb->couldSee = true;
                    if (isFile)
                        thisPFcb->readOnly = false;
                    pfcb->childs.push_back(thisPFcb);
                }
            }
            else
            {
                puts("参数错误");
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
