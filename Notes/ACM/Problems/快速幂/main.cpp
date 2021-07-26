/*
 * @Author: LetMeFly
 * @Date: 2021-07-26 17:29:09
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-26 17:33:08
 */
#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;

int power(int a, int b, int mod)
{
    int ans = 1 % mod;
    while (b)
    {
        if (b & 1)
            ans = (ll)ans * a % mod;
        a = (ll)a * a % mod;
        b >>= 1;
    }
    return ans;
}

int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    cout << power(a, b, c) << endl;
    return 0;
}