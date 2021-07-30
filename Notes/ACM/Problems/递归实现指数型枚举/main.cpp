#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
vector<int>v;
int n;
void prt()
{
    for(int i=0;i<v.size();i++)
        printf("%d ",v[i]);
    puts("");
}
void calu(int x)
{
    if(x>n)
        return prt();
    calu(x+1);
    v.push_back(x);
    calu(x+1);
    v.pop_back();
}
int main()
{
    cin>>n;
    calu(1);
    return 0;
}