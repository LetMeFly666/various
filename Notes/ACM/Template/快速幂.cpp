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