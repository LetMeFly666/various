# 起床困难综合症

## 题目描述

为了打败起床困难综合症去打败睡眠boss，boss有$n$扇防御门，每扇门包含一个运算符($OR、XOR、AND$)和一个运算数(非负整数)，攻击经过这扇门后将与门进行相应的运算操作。

勇士的初始攻击力只能是$[0,m]$之间的一个整数，门及其摆放是固定的，勇士想通过合适的攻击以对boss照成最大的伤害。


### 输入样例
```
3 10
AND 5
OR 6
XOR 7
```
**解释**：一共$3$扇门，初始攻击在$0$~$10$之间，第一扇门将与攻击和5进行与运算，第二扇将第一扇运算后的结果与6进行或操作，最后一扇门将前面的结果与7进行异或。

### 样例输出
```
1
```
**解释**：假设初始攻击力为$4(0\leq4\leq10)$，则经过如下运算：
```
4 AND 5 = 4
4 OR 6 = 6
6 XOR 7 = 1
```
获得最终攻击力为1。在$0$~$10$中找不到另外一个数使得最终运算的结果大于$1$。

## 解题思路
**攻击力的每一位与另一位互不影响。** 且$10^9$的数据不超过$30$位。

我们只需要分别看每一位(0和1两种情况)，如果这一位是$1$通过所有门后将会变成什么、如果是$0$又会变成什么。

+ 当然，我们希望最终攻击尽可能大，这就需要我们先从高位开始计算；
+ 我们希望初始攻击尽可能小(需要不超过$m$)，这就需要满足以下两个条件时才让这一位的初始攻击力为$1$：
  + 这一位初始为$1$的最终攻击力**大于**初始为$0$的最终攻击力
  + 这一位初始为$1$的话目前初始攻击力**不超过**最大攻击力$m$

<big>**更多解释请见代码注释**</big>