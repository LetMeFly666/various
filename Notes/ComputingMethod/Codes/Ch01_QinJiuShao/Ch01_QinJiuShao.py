'''
Author: LetMeFly
Date: 2021-10-08 08:37:33
LastEditors: LetMeFly
LastEditTime: 2021-10-08 08:46:44
'''
# 01 - 秦九邵

def main(factors: list, x: float) -> float:
    ans = factors[0]
    for i in range(1, len(factors)):
        ans = ans * x + factors[i]
    return ans


if __name__ == '__main__':
    factors = [3, 8, 5, 9, 7, 1]
    print(main(factors, 2))  # 315
