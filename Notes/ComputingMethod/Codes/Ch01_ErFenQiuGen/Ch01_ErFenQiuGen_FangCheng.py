'''
Author: LetMeFly
Date: 2021-10-08 10:38:08
LastEditors: LetMeFly
LastEditTime: 2021-10-08 11:37:17
'''
# 01 - 二分求根
# 求方程f(x)在区间[a, b]上的一个根

def f(x):
    return x ** 3 - 25


def main(a, b, accuracy=1e-6):
    if f(a) * f(b) > 0:
        print("This method can not judge whether there is a root on the interval [a, b]")
        return None
    while abs(a - b) > accuracy:
        mid = (a + b) / 2
        if f(a) * f(mid) > 0:
            a = mid
        else:
            b = mid
    return mid
    


if __name__ == '__main__':
    a, b = 0., 5.
    print(f"The root of f(x)=x^3-25 in [{a}, {b}] is: ", main(a, b))