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