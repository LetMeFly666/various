/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 18:37:18
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

void copyright() // 开局打印的版权?
{
    puts("LetMeFly Microsoft Windows [版本 1.0] \n\
    (c) 2021 814114971@qq.com Individual。保留所有权利。\n");
}

void help() // 帮助
{
}

void showFront() // 显示前面的提示符
{
}

void init() // 初始化
{
    path.push_back("root");
    copyright();
}

void execute() // 执行
{
}

int main()
{
    init();
    return 0;
}