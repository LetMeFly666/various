/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 18:47:27
 */
#include <bits/stdc++.h>
using namespace std;

typedef vector<string> ToReturn; // 专门用来存放返回数据的一种数据类型
typedef vector<string> Path;     // 路径
Path path;                       // 真正的路径

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
    puts("(c) 2021 814114971@qq.com Individual。保留所有权利。\n");
}

void help() // 帮助
{
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
        if(s=="");  // 空的

    }
}

int main()
{
    init();
    execute();
    return 0;
}