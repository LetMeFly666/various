#include <iostream>
using namespace std;
int H[37];
void init()
{
    for (int i = 0; i < 36; i++)
        H[(1ll << i) % 37] = i;
}
void prtOne(int n)
{
    while (n)
    {
        cout << H[(n & -n) % 37] << ' ';
        n -= n & -n;
    }
    puts("");
}
int main()
{
    init();
    int n;
    while (cin >> n)
        prtOne(n);
    return 0;
}