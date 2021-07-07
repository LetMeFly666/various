/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 18:24:58
 */
#include <bits/stdc++.h>
using namespace std;
typedef vector<string> ToReturn;  // 专门用来存放返回数据的一种数据类型

ToReturn split(string toSplit, char c)  // 将字符串以字符c为间隔分开
{
    ToReturn ans;
    toSplit+=c;
    int left=0;
    for(int right=0;right<toSplit.size();right++)
    {
        if(toSplit[right]==c)  //left->right-1
        {
            ans.push_back(toSplit.substr(left,right-left));
            left=right+1;
        }
    }
    return ans;
}

void help()
{
    
}

int main()
{
    
    return 0;
}