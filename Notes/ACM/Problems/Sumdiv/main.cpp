#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
#define mod 9901
int power(int a, int b)
{
    int ans=1%mod;
    while(b)
    {
        if(b&1)ans=(ll)ans*a%mod;
        a=(ll)a*a%mod;
        b>>=1;
    }
    return ans;
}
int sum(int p, int c)
{
    if(c==0)return 1;
    if(c%2)return ((1+power(p,(c+1)/2))*sum(p,(c-1)/2))%mod;
    else return ((1+power(p,c/2))*sum(p,c/2-1)+power(p,c))%mod;
}
unordered_map<int,int>prime;
void divid(int n)
{
    for(int i=2;i*i<=n;i++)
        while(n%i==0)
            prime[i]++,n/=i;
    if(n>1) prime[n]++;
}
int main()
{
    int a,b;
    cin>>a>>b;
    divid(a);
    int ans=1;
    for(unordered_map<int,int>::iterator it=prime.begin();it!=prime.end();it++)
    {
        ans=ans*sum(it->first,b*it->second)%mod;
    }
    if(a==0)ans=0; // 注意a,b不同时为0，但是a可能是0！
    cout<<ans<<endl;
    return 0;
}