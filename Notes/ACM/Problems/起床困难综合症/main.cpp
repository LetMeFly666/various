#include <bits/stdc++.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
string op[100010];
int num[100010];
int n;
int calculate(int wei, int thisBit) // 计算初始攻击的第wei位初始值位thisBit时，通过所有门后的最终攻击力
{
    for(int i=0;i<n;i++) // 每扇门
    {
        int thisBit2=num[i]>>wei&1; // 取出这扇门的操作数的这一位
        if(op[i]=="AND")thisBit&=thisBit2; // 如果这扇门的AND，就做与运算
        else if(op[i]=="OR")thisBit|=thisBit2; // OR就做或运算
        else thisBit^=thisBit2; // 否则异或运算
    }
    return thisBit; // 返回这一位经过所有门后最终的值
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    int m;
    cin>>n>>m;
    for(int i=0;i<n;i++)
        cin>>op[i]>>num[i];
    int ans=0, original=0;
    for(int i=29;i>=0;i--) // 从大到小分析每一位
    {
        int one=calculate(i, 1); // 如果这一位的初始攻击力是1，最终攻击力将会是one
        int zero=calculate(i, 0); // 如果这一位的初始攻击力是0，最终攻击力将会是zero
        if(original+(1<<i)<=m&&one>zero) // 如果这一位为1的话初始攻击力<=m 并且 这一位为1的话最终攻击力大于这一位为0的话的最终的攻击力
            original+=1<<i, ans+=one<<i; // 那么这一位初始攻击力设为1，初始攻击力加上这一位，最终攻击力加上这一位为1的时候产生的最终攻击力one
        else
            ans+=zero<<i; // 否则这一位初始攻击力为0，最终攻击力加上这一位初始值为0的时候产生的最终的攻击力zero
    }
    cout<<ans<<endl; // 输出答案
    return 0;
}