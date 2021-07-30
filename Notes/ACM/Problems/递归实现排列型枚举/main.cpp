#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
int order[11];
bool chosen[11]={0};
int n;
void prt()
{
    for(int i=1;i<=n;i++)
        printf("%d ",order[i]);
    puts("");
}
void cal(int x)
{
    if(x>n) return prt();
    for(int i=1;i<=n;i++)
    {
        if(chosen[i]) continue;
        order[x]=i;
        chosen[i]=true;
        cal(x+1);
        chosen[i]=false;
        order[x]=0; // 这一行可以省略
    }
}
int main()
{
    cin>>n;
    cal(1);
    return 0;
}