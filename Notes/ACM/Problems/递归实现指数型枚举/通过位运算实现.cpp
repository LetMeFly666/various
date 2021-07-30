#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
int H[37];
void init()
{
    for(int i=0;i<36;i++)
        H[(1ll<<i)%37]=i;
}
void prt(int n)
{
    while(n)
    {
        printf("%d ",H[(n&-n)%37]+1);
        n-=n&-n;
    }
    puts("");
}
int main()
{
    init();
    int n;
    cin>>n;
    for(int i=0;i<1<<n;i++)
        prt(i);
    return 0;
}