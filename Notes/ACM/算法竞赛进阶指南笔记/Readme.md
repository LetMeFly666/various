<!--
 * @Author: LetMeFly
 * @Date: 2021-07-26 16:07:50
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-26 16:45:16
-->

[TOC]

# 0x00 基本算法

## 0x01 位运算

+ memset(a, val, sizeof(a))
  > + val：0x00~0xFF
  > + memset把val填充到数组a的每个字节(故只能赋值出每一位都相同的int)
  > + 经常用memset(a, 0x3F, sizeof(a))来给数组赋值为0x3F3F3F3F，因为两个0x3F3F3F3F相加不超过INT_MAX(0x7FFFFFFF)。

+ 位移
  > + 左移：低位补0高位舍弃
  > + 右移：
  >   + 算术右移：低位舍弃，高位以符号位填充
  >   + 逻辑右移：低位舍弃，高位补0
  >   一般都默认算术右移。

+ 位操作
  > + 取出整数n的第k位：(n>>k)&1
  > + 取出整数n的后k位(0~k-1)：n&((1<<k)-1)
  > + 把整数n的第k位取反：n xor (1<<k)
  > + 把整数n的第k位赋为1：n\|(1<<k)
  > + 把整数n的第k位赋为0：n&(~(1<<k))
  这种方法运算简便且节省了程序的运行时间和空间。

+ 朴素算法，英文术语为*brute-force*，也可直译为 *暴力* 求解。

+ 优先级
  > + 需要注意，大小关系比较的符号优先于“位与”“异或”“位或”运算。
  >
  > + | 加减  |  位移  | 大小比较 | 位与 | 异或 | 位或 |
  >   | :--: | :--: | :--: | :--: | :--: | ---- |
  >   | +,-   | <<,>>  | <,>,==,!= | & | xor(C++^) | \| |

+ lowbit
  > GCC编译器提供了一些内置函数可以高效计算lowbit以及二进制数中1的个数。但并非C语言标准，有的函数更是与极其或编译器版本相关的。另外，部分竞赛禁止使用下划线开头的库函数，故这些内置函数尽量不要随便使用。
  > + ```int __builtin_ctz(unsigned int x)```
  >   ```int __builtin_ctzll(unsigned long long x)```
  >   返回二进制最后一个1后面有多少个0
  >  
  > + ```int __builtin_popcount(unsigned int x)```
  >   ```int __builtin_popcountll(unsigned long long x)```
  >   返回二进制下有多少位1