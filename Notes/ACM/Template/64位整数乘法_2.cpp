#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)

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

int main()
{
    ll a, b, c;
    cin >> a >> b >> c;
    cout << mul(a, b, c) << endl;
    return 0;
}