/*
 * @Author: LetMeFly
 * @Date: 2021-07-07 17:05:34
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-07 18:24:58
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

void help()
{
    
}

int main()
{
    
    return 0;
}