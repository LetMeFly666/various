<!--
 * @Author: LetMeFly
 * @Date: 2021-07-27 11:37:13
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-27 16:00:13
-->
# 快速幂

## 题目描述
<big>求$a$的$b$次方对$mod$取模的值</big>

$1\leq a,b,mod\leq 10^9$

## 问题分析

每个正整数可以唯一表示为若干指数不重复的$2$的次幂的和。

$b$在二进制表示下有$K$位，其中第$i(0\leq i < k)$位的数字是$c_i$，那么：

<p style="text-align:center">$b=c_{k-1}2^{k-1}$</p>