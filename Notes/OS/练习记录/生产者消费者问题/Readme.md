<!--
 * @Author: LetMeFly
 * @Date: 2021-07-28 16:06:23
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-28 16:32:33
-->

# 生产者消费者问题

```cpp
Semaphore full = 0, empty = n, mutex = 1;
buff[n];
int in = 0, out = 0;

void producer()
{
    while(true)
    {
        produce a product -> A
        P(empty);
        P(mutex);
        buff[in] = A;
        in = (in + 1) % n;
        V(mutex);
        V(full);
    }
}

void consumer()
{
    while(true)
    {
        P(full);
        P(mutex);
        get a product <- buff[out];
        out = (out + 1) % n;
        V(mutex);
        V(empty);
        consume the product
    }
}

void main()
{
    cobegin
        producer();
        consumer();
    coend
}
```