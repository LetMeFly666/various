<!--
 * @Author: LetMeFly
 * @Date: 2021-10-08 08:37:33
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-08 08:56:08
-->
# 01 - 秦九邵

## 实现功能

计算 $a_nx^{n}+a_{n-1}x^{n-1}+\cdots+a_0$ 的值。

## 实现方法

若按顺序计算则时间复杂度为 $O(n^3)$，想到 $x^{n}$ 可由 $x*x^{n-1}$ 得到（ $O(1)$ ）， 于是按秦九邵算法可将原式化为：

$(\cdots((a_nx+a_{n-1})x+a_{n-2})x+\cdots+a_1)x+a_0$

## 实现代码

### 我的代码

### 老师代码 <sub>(更加简洁)</sub>
