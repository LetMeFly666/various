#include <iostream>
using namespace std;
const int MAX_N = 1 << 20;
int H[MAX_N + 1];
void init()
{
    for (int i = 0; i <= 20; i++)
    {
        H[1 << i] = i;
    }
}
void prtOne(int n)
{
    while (n)
    {
        cout << H[n & -n] << ' ';
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