typedef long long ll;
typedef unsigned long long ull;
ll mul(ll a, ll b, ll mod)
{
    a %= mod, b %= mod;
    ull c = (long double)a * b / mod;
    ull x = a * b, y = c * mod;
    ll ans = (ll)x % mod - (ll)y % mod;
    if (ans < 0)
        ans += mod;
    return ans;
}