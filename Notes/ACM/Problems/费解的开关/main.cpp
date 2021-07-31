#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
#define size 5
bool mp[size][size]; // 这个用来保存输入
bool test[size][size]; // 这个是用来尝试的数组，每次copy自mp，之后随便改
void debug(bool mp[size][size]) // debug用，打印当前数组
{
    for(int i=0;i<size;i++)
    {
        for(int j=0;j<size;j++)
            cout<<mp[i][j];
        puts("");
    }
}
void scan() // 输入用
{
    for (int i = 0; i < size; i++)
    {
        string s;
        cin>>s;
        for(int j=0;j<size;j++)
            mp[i][j]=s[j]=='1';
    }
}
int dir[5][2]={{-1,0},{1,0},{0,-1},{0,1},{0,0}}; // 这个点开始，上下左右中，共影响5个点
void click(int x, int y)
{
    // puts("Before click:");
    // debug(test);
    for(int i=0;i<5;i++) // 遍历这5个点
    {
        int tx=x+dir[i][0]; // toX：要到的x是当前的x加上步长
        int ty=y+dir[i][1];
        if(tx>=0&&tx<size&&ty>=0&&ty<size) // 如果没有出界
            test[tx][ty]^=1; // 开变成关，关变成开
            // test[tx][ty]=~test[tx][ty]; // 不可以！
    }
    // printf("After clicked (%d, %d):\n",x,y);
    // debug(test);
}
void copy() // 把mp赋值给test
{
    for(int i=0;i<size;i++)
        for(int j=0;j<size;j++)
            test[i][j]=mp[i][j];
}
int execute(int step) // 执行函数
{
    // debug(test);//*******
    for(int i=1;i<size;i++) // 第2~5行
    {
        for(int j=0;j<size;j++) // 第1~5个
        {
            if(!test[i-1][j]) // 如果是关着的
            {
                click(i,j); // 点击
                step++; // 步数+1
                if(step>6)return step; // 剪枝
            }
        }
    }
    // debug(test);//*******
    for(int j=0;j<size;j++) // 遍历最后一行的每一盏灯
        if(!test[size-1][j]) // 如果是关着的
            return 7; // 不可以
    return step;
}
int main()
{
    int N;
    cin >> N;
    while (N--)
    {
        scan(); // 读入
        int m_step=7; // 最小步数（7已经代表不行了）
        for(int i=0;i<1<<size;i++) // 枚举第一行的所有状态
        {
            copy(); // 复制给test
            int step=0;
            for(int j=0;j<size;j++) // 遍历这个状态数的每一位
                if(i>>j&1) // 如果这一位是1
                    click(0,j),step++; // 点击这个点（其实j反了也无所谓，因为枚举了每一种状态）
            step=execute(step); // 执行
            m_step=min(m_step,step); // 取最优
        }
        cout<<(m_step<=6?m_step:-1)<<endl; // 输出
    }
    return 0;
}