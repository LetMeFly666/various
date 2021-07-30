#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
int n;
void prt(int x)
{
    for(int i=0;i<n;i++)
        if(x>>i&1)
            printf("%d ",i+1);
    puts("");
}
int main()
{
    cin>>n;
    for(int i=0;i<1<<n;i++)
        prt(i);
    return 0;
}