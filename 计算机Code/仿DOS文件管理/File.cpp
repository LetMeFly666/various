/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 18:47:27
 */
#include <bits/stdc++.h>
using namespace std;

typedef vector<string> ToReturn; // ר��������ŷ������ݵ�һ����������
typedef vector<string> Path;     // ·��
Path path;                       // ������·��

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
    puts("(c) 2021 814114971@qq.com Individual����������Ȩ����\n");
}

void help() // ����
{
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
        if(s=="");  // �յ�

    }
}

int main()
{
    init();
    execute();
    return 0;
}