/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 18:32:53
 */
#include <bits/stdc++.h>
using namespace std;
typedef vector<string> ToReturn;  // ר��������ŷ������ݵ�һ����������

ToReturn split(string toSplit, char c)  // ���ַ������ַ�cΪ����ֿ�
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

void copyright()
{
    puts("LetMeFly Microsoft Windows [�汾 1.0] \n\
    (c) 2021 814114971@qq.com Individual����������Ȩ����\n");
}

void help()
{
    
}

void init()
{
    copyright();
}

void execute()
{
    
}

int main()
{
    init();
    return 0;
}