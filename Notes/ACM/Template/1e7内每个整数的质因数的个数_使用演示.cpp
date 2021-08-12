#include <iostream>
using namespace std;

// 板子开始
int prime[10000005] = {0};
bool visited[10000005] = {false};
void getPrime(int n)
{
    for (int i = 2; i <= n; i++)
    {
        if (!visited[i])
        {
            prime[i]++;
            for (int j = 2 * i; j <= n; j += i)
            {
                visited[j] = 1;
                int temp = j;
                while (temp > 0 && temp % i == 0)
                {
                    prime[j]++;
                    temp /= i;
                }
            }
        }
    }
}
// 板子结束

int main()
{
    getPrime(10000000); // 计算1e7内（>=2）所有整数的质因数的个数
    int n;
    while(cin>>n)
    {
        cout<<n<<"的质因数个个数是："<<prime[n]<<endl;
    }
    return 0;
}