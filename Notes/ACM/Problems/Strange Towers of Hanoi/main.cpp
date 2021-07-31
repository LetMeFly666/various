#include <iostream>
#include <string.h> // 包含memset
using namespace std;
typedef long long ll;
ll three[13]={0};
ll four[13];
int main()
{
    int n;
    for(int i=1;i<=12;i++)
        three[i]=three[i-1]*2+1;
    memset(four, 0x3f, sizeof(four));
    four[0]=0;
    for(int i=1;i<=12;i++) // 求four[i]
    {
        for(int j=0;j<=i;j++) // 把前j个盘子移动到B上
        {
            four[i]=min(four[i],four[j]*2+three[i-j]);
        }
        cout<<four[i]<<endl;
    }
    return 0;
}