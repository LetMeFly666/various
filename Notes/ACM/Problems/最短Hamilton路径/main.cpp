#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
const int N = 20, M = 1 << 20;
int f[M][N], weight[N][N];
int main()
{
    memset(f, 0x3f, sizeof(f));
    int n;
    cin>>n;
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            cin>>weight[i][j];
    f[1][0]=0;
    for(int i=0;i<1<<n;i++) // 每种状态
        for(int j=0;j<n;j++) // 现在到了j
            if(i>>j&1) // j这一位必须是1
                for(int k=0;k<n;k++) // 枚举上一位
                    if((i-(1<<j))>>k&1) // 上一位走过了
                        f[i][j]=min(f[i][j], f[i-(1<<j)][k]+weight[k][j]);
    cout<<f[(1<<n)-1][n-1]<<endl;
    return 0;
}