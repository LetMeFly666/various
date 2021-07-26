/*
 * @Author: LetMeFly
 * @Date: 2021-07-26 18:44:35
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-26 18:50:06
 */
#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;

ll mul(ll a, ll b, ll mod)
{
    ll ans = 0;
    while (b)
    {
        if (b & 1)
            ans = (ans + a) % mod;
        a = a * 2 % mod;
        b >>= 1;
    }
    return ans;
}

int main()
{
    ll a, b, c;
    cin >> a >> b >> c;
    cout << mul(a, b, c) << endl;
    return 0;
}