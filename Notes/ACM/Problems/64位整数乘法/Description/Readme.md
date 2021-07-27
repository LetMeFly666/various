# 64位整数乘法

## 题目描述
<big>求$a*b$对$mod$取模的值</big>

$1\leq a,b,mod\leq 10^{18}$

## 问题分析

<small>先不考虑$\_\_int128$</small>

### 方法一

类似于<a href="../../快速幂/">快速幂</a>的思想，$b=c_{k-1}2^{k-1}+c_{k-2}2^{k-2}+\cdots+c_02^0$  

因此：$a*b=a*{c_{k-1}2^{k-1}}+a*{c_{k-2}2^{k-2}}+\cdots+a*{c_02^0}$

也就是说如果$b$的第$i$位$c_i$是$0$，那么$a*{c_{i}2^{i}}$就等于$a*0=0$；如果$c_i$是$1$，那么就等于$a*{2^i}$

又有$a*{2^i}=(a*{2^{i-1}})*2$，而$k=log_2(\lceil b+1\rceil)$（$\lceil\rceil$表示向上取整），故时间复杂度为$O(log_2b)$

所以每次取$b$中的$1$位($b\&1,b>>=1$)，每次$a$都**乘$2$**($a=a*2\%mod$)，如果$b$的这一位是$1$就**累加**到$ans$中。


### 方法二

利用$a*b\%mod=a*b-\lfloor a*b/mod\rfloor*mod$(其中$\lfloor \rfloor$表示向下取整)

记$a*b$为$x$，$\lfloor a*b/mod\rfloor$为$y$

问题有$2$个，一是如何计算出$\lfloor a*b/mod\rfloor$，而是如何计算$x-y*mod$

因为$long\ double$在十进制下的有效数字有$18$~$19$位，当$a,b<mod$时$c$也一定小于$mod$。所以$long\ double$可以胜任，再把结果强制转换为$unsigned\ long\ long$即可。$y$由此计算。

因为$a*b-c*mod$其实就是$a*b\%mod\leq mod< 2^{64}$，所以$a*b-c*mod=(a*b-c*mod)\%2^{64}$，又因为$unsigned\ long\ long$溢出时相当于对$2^{64}$自动取模，所以$x-y*mod$由此计算。

时间复杂度为$O(1)$