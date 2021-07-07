/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 21:37:41
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
    Fcb *father; // ��
    ~Fcb();      // ��������
};
typedef vector<Fcb *> VFcb;      // ʢ��children
typedef VFcb::iterator VFcbI;    // VFcb��ָ��
typedef vector<string> ToReturn; // ר��������ŷ������ݵ�һ����������
typedef vector<string> Path;     // ·��
Path path;                       // ������·��
typedef long long ll;            // long long
typedef Fcb *PFcb;               // Fcb��ָ��
PFcb pfcb, root;                 // ����ʹ�õ�Ŀ¼��ָ��

Fcb::~Fcb() // ��������
{
    for (VFcbI it = childs.begin(); it != childs.end(); it++)
    {
        (**it).~Fcb(); // ���е�children����
    }
    if (debug)
        cout << "ɾ��Fcb��" << name << endl; //**************
    delete this;                             // ɾ������
}

ToReturn split(string toSplit, char c) // ���ַ������ַ�cΪ����ֿ�
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

string stripSpace(string ori) // ȥ��ָ���ж���Ŀո�
{
    string ans;
    int length = ori.size();
    int loc = 0, loc2 = length - 1;
    while (loc < ori.size() && ori[loc] == ' ')
        loc++; // ȥ����ͷ�Ŀո�
    while (loc2 >= 0 && ori[loc2] == ' ')
        loc2--; // ȥ����β�Ŀո�
    for (; loc <= loc2; loc++)
    {
        if (ori[loc] == ' ' && ori[loc - 1] == ' ')
            ; // ���ڵ������ո�
        else
            ans += ori[loc];
    }
    return ans;
}

void copyright() // ���ִ�ӡ�İ�Ȩ?
{
    puts("LetMeFly Microsoft Windows [�汾 1.0]");
    puts("(c) 2021 814114971@qq.com Individual��");
    puts("��������Ȩ����\n");
}

void help() // ����
{
    puts("\
������          �������                ����˵��\n\
\n\
help            ��                      ��ʾ����\n\
md              Ŀ¼��                  �ڵ�ǰĿ¼������Ŀ¼\n\
dir             ��                      ��ʾ��ǰĿ¼�µ�Ŀ¼���ļ�\n\
cd              Ŀ¼��(·����)          �л���ǰĿ¼��ָ��Ŀ¼\n\
rd              Ŀ¼��                  �ڵ�ǰĿ¼ɾ��ָ��Ŀ¼\n\
tree            ��                      ��ͼ����ʾĿ¼��·���ṹ\n\
touch           �ļ���                  �ڵ�ǰĿ¼�´���ָ���ļ�\n\
vi              �ļ���                  �༭�ļ�\n\
attr            �ļ���                  ��ѯ��Ϣ\n\
attr -add -r    �ļ���                  ��ֻ������\n\
attr -mov -r    �ļ���                  ȥֻ������\n\
del             �ļ���                  ����ɾ���ļ�\n\
del /y          �ļ���                  ɾ���ļ�������Ҫȷ�ϣ�\n\
copy            �ļ���                  �ļ�����\n\
cls             ��                      �����Ļ\n\
exit            ��                      �˳�ϵͳ");
}

void showPath() // ��ʾ��ǰ·��
{
    for (Path::iterator it = path.begin(); it != path.end(); it++)
    {
        if (it != path.begin())
            cout << '\\';
        cout << *it;
    }
}

void showFront() // ��ʾǰ�����ʾ��
{
    showPath(); // ��ʾ��ǰ·��
    putchar('>');
}

void init() // ��ʼ��
{
    path.push_back("root");
    pfcb = new Fcb;
    pfcb->name = "root";
    pfcb->isFile = false;
    pfcb->father = pfcb;
    root = pfcb;
    copyright();
}

bool alreadyExists(VFcb &vFcb, string &name) // ��windowsһ��������������ֵ�Ŀ¼�Ͳ�����������ֵ��ļ�
{
    for (VFcbI it = vFcb.begin(); it != vFcb.end(); it++)
        if ((**it).name == name)
            return true;
    return false;
}

PFcb findChildByName(PFcb &father, string &name)
{
    for (VFcbI it = pfcb->childs.begin(); it != pfcb->childs.end(); it++)
    {
        if ((**it).name == name)
        {
            return *it;
        }
    }
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
        if (*it == CpFcb) // �ҵ���
        {
            (**it).~Fcb();
            FpFcb->childs.erase(it);
            return;
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
    if (allPoint(name)) // ����ȫ��.
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

void execute() // ִ��
{
    string s;
    while (1)
    {
        showFront();
        getline(cin, s);
        s = stripSpace(s);
        ToReturn toReturn = split(s, ' ');
        if (s == "") // �յ�
            ;
        else if (toReturn[0] == "exit") // �˳�
        {
            puts("Bye~");
            Sleep(500);
            return;
        }
        else if (toReturn[0] == "help") // ����
        {
            if (toReturn.size() != 1)
            {
                puts("��������");
            }
            else
            {
                help();
            }
        }
        else if (toReturn[0] == "md") // �����µ�Ŀ¼
        {
            if (toReturn.size() == 1) // ֻ��md
            {
                puts("�������ȷ");
            }
            else
            {
                for (int i = 1; i < toReturn.size(); i++)
                {
                    if (!vailiableName(toReturn[i]))
                    {
                        puts("�������Ϸ�");
                    }
                    else if (!alreadyExists(pfcb->childs, toReturn[i])) // ��������
                    {
                        Fcb *thisPFcb = new Fcb;
                        thisPFcb->name = toReturn[i];
                        thisPFcb->isFile = false;
                        thisPFcb->father = pfcb;
                        pfcb->childs.push_back(thisPFcb);
                        cout << "`" << toReturn[i] << "`�����ɹ�" << endl;
                    }
                    else
                    {
                        cout << "`" << toReturn[i] << "`�Ѵ���" << endl;
                    }
                }
            }
        }
        else if (toReturn[0] == "dir") // dir
        {
            for (VFcbI it = pfcb->childs.begin(); it != pfcb->childs.end(); it++)
            {
                printf("%s[%c]\t", (**it).name.c_str(), (**it).isFile ? 'f' : 'd'); // �ļ�[f] Ŀ¼[d]
            }
            puts(""); // ����
        }
        else if (toReturn[0] == "cd") // ����Ŀ¼
        {
            if (toReturn.size() == 1) // ֻ��`cd`
            {
                showPath();
                puts("");
            }
            else if (toReturn.size() != 2) // �������
            {
                puts("��������");
            }
            else
            {
                if (toReturn[1] == ".") //�Լ�
                    ;
                else if (toReturn[1] == "..") // �����������Ǹ��Ļ������Լ���
                {
                    realCd(pfcb->father, 0);
                }
                else // �������ط�
                {
                    if (alreadyExists(pfcb->childs, toReturn[1]))
                    {
                        realCd(findChildByName(pfcb, toReturn[1]), 1);
                    }
                    else
                    {
                        puts("ϵͳ�Ҳ���ָ����·����");
                    }
                }
            }
        }
        else if (toReturn[0] == "rd") // ɾ��Ŀ¼
        {
            if (toReturn.size() == 1) // ֻ��һ��rd
            {
                puts("�﷨����ȷ");
            }
            else
            {
                for (int i = 1; i < toReturn.size(); i++)
                {
                    if (!alreadyExists(pfcb->childs, toReturn[i]))
                    {
                        puts("ϵͳ�Ҳ���ָ����·����");
                    }
                    else // û��ȷ�ϣ�ֱ��ɾ��
                    {
                        realDel(pfcb, findChildByName(pfcb, toReturn[i]));
                    }
                }
            }
        }
        else
        {
            cout << '\'' << toReturn[0] << '\'' << "�����ڲ����ⲿ���Ҳ���ǿ����еĳ���" << endl;
            cout << "���������ļ���" << endl;
        }
    }
}

int main()
{
    init();
    execute();
    return 0;
}