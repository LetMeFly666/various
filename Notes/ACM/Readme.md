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