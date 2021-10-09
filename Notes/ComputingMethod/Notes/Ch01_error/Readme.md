<!--
 * @Author: LetMeFly
 * @Date: 2021-10-08 16:33:54
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-09 19:00:21
-->
# 误差

## 误差来源

+ 模型误差（描述误差）
  > 昌平校区有个玉屏山，气温模型不考虑它肯定不准。
+ 观测误差
  > 模型中包含的某些参数是通过观测得到的。
+ 截断误差（方法误差）
  >  数值方法精确解与代求模型的理论分析解之间的差异。
+ 舍入误差
  > 计算机字长有限
+ 初值误差
  > 初值选取不合理

## 绝对误差

设 $x$ 是某个量的准确值，$x^*$ 是其近似解，则两者的差值称为近似值$x^*$的绝对误差，简称误差。

$e(x^*)\triangleq x-x^*$

在不引起混淆的情况下，可以简记 $e(x^*)$ 为 $e$。

## 绝对误差限

如果存在正数 $\varepsilon$ 使得又绝对误差 $|x-x^*|\leq \varepsilon$， 则称 $\varepsilon$ 为 $x$ 的一个绝对误差限

$x\in|x^*-\varepsilon, x^*+\varepsilon|,\ \ \ \ x=x^*\pm\varepsilon$

## 相对误差

$相对误差=\frac{绝对误差}{真实值}$，记为 $e_r(x^*)\triangleq\frac{e(x^*)}{x}=\frac{x-x^*}{x}\approx\frac{e(x^*)}{x^*}$ ，不引起混淆时，简记 $e_r(x^*)$ 为 $e_r$

## 相对误差限

数值 $|e_r|$ 的上限，记为 $\varepsilon_r$， 相对误差限也可通过 $\varepsilon_r=\frac{\varepsilon}{|x^*|}$ 来计算。

