typedef long long ll;

ll mul(ll a, ll b, ll mod)
{
    ll ans=0;
    while(b)
    {
        if(b&1)
            ans = (ans+a)%mod;
        a = a*2%mod;
    }
    return ans;
}