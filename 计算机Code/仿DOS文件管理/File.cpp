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
    ~Fcb(); // ��������
};
typedef vector<Fcb *> VFcb;      // ʢ��children
typedef VFcb::iterator VFcbI;    // VFcb��ָ��
typedef vector<string> ToReturn; // ר��������ŷ������ݵ�һ����������
typedef vector<string> Path;     // ·��
Path path;                       // ������·��
typedef long long ll;            // long long
typedef Fcb *PFcb;               // Fcb��ָ��
PFcb pfcb;                       // ����ʹ�õ�Ŀ¼��ָ��

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
������          �������                ����˵��\
\
md              Ŀ¼��                  �ڵ�ǰĿ¼������Ŀ¼\
dir             ��                      ��ʾ��ǰĿ¼�µ�Ŀ¼���ļ�\
cd              Ŀ¼��(·����)          �л���ǰĿ¼��ָ��Ŀ¼\
rd              Ŀ¼��                  �ڵ�ǰĿ¼ɾ��ָ��Ŀ¼\
tree            ��                      ��ͼ����ʾĿ¼��·���ṹ\
touch           �ļ���                  �ڵ�ǰĿ¼�´���ָ���ļ�\
vi              �ļ���                  �༭�ļ�\
attr            �ļ���                  ��ѯ��Ϣ\
attr -add -r    �ļ���                  ��ֻ������\
attr -mov -r    �ļ���                  ȥֻ������\
del             �ļ���                  ����ɾ���ļ�\
del /y          �ļ���                  ɾ���ļ�������Ҫȷ�ϣ�\
copy            �ļ���                  �ļ�����\
cls             ��                      �����Ļ\
exit            ��                      �˳�ϵͳ");
}

void showFront() // ��ʾǰ�����ʾ��
{
    for (Path::iterator it = path.begin(); it != path.end(); it++)
    {
        if (it != path.begin())
            cout << '\\';
        cout << *it;
    }
    putchar('>');
}

void init() // ��ʼ��
{
    path.push_back("root");
    pfcb = new Fcb;
    pfcb->name = "root";
    pfcb->isFile = false;
    copyright();
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
        else if (s == "exit") // �˳�
        {
            puts("Bye~");
            Sleep(500);
            return;
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
                printf("%s[%c]\t", *(*it)->name.c_str()/*, (**it->isFile) ? 'f' : 'd'*/); // �ļ�[f] Ŀ¼[d]
                puts("");                                                               // ����
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