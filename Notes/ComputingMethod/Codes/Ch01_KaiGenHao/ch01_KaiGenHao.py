'''
Author: LetMeFly
Date: 2021-10-05 22:13:51
LastEditors: LetMeFly
LastEditTime: 2021-10-05 23:10:50
'''
# 求sqrt(a)

from math import sqrt

def MySqrt(a: float) -> float:
    '''
    @func: Get Sqrt(a) with a precision of 1e-6
    @para: a: a value which > 0
    @retu: sqrt(a)
    '''
    last = 1
    while True:
        now = 0.5 * (last + a / last)
        if abs(last - now) <= 1e-6:
            break
        last = now
    return now



def main():
    print("Input a num each time and press `Enter` then.")
    while True:
        a = float(input())
        print(f"__build_in_sqrt({a}) = {sqrt(a)}")
        print(f"__LetMeFly_sqrt({a}) = {MySqrt(a)}")


if __name__ == "__main__":
    main()