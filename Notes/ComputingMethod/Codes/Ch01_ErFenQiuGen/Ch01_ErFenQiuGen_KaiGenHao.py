'''
Author: LetMeFly
Date: 2021-10-08 11:39:13
LastEditors: LetMeFly
LastEditTime: 2021-10-08 12:40:26
''' 
# 二分开根号
from math import sqrt

def f(x, a):
    return x * x - a


def LetMeFly_root(a, accuracy=1e-6):
    l, r = 0, a
    while r - l > accuracy:
        mid = (l + r) / 2
        if f(l, a) * f(mid, a) > 0:
            l = mid
        else:
            r = mid
    return l

if __name__ == '__main__':
    a = 5
    print(f"LetMeFly_root({a}) = {LetMeFly_root(a)}")
    print(f"build_in_root({a}) = {sqrt(a)}")