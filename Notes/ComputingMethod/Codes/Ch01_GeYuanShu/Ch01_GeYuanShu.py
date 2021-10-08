'''
Author: LetMeFly
Date: 2021-10-08 15:12:29
LastEditors: LetMeFly
LastEditTime: 2021-10-08 15:36:17
'''
# 01 - 割圆术
from math import sqrt
from math import pi

def LetMeFly_pi(times):
    a, n = 1, 6  # 初始为正6边形，圆内接正6边形的边长等于圆的半径
    for i in range(times):
        x = sqrt(1 - (a / 2) ** 2)
        a = sqrt((1 - x) ** 2 + (a / 2) ** 2)
        n *= 2
    return n * a / 2


if __name__ == '__main__':
    times = 24
    print(f"LetMeFly_pi({times}) = {LetMeFly_pi(times)}")
    print(f"____built_in_pi = {pi}")