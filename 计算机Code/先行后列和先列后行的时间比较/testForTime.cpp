/*
 * @Author: LetMeFly
 * @Date: 2021-10-21 00:13:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-21 00:24:44
 */
#include <bits/stdc++.h>
#include <Windows.h>
using namespace std;
#define mem(a) memset(a, 0, sizeof(a))
#define dbg(x) cout << #x << " = " << x << endl
#define fi(i, l, r) for (int i = l; i < r; i++)
#define cd(a) scanf("%d", &a)
typedef long long ll;
#define SIZE 5000
int a[SIZE][SIZE];
#define Times 100
time_t getTime (void (*func)()) {
    time_t begin = clock();
    func();
    return clock() - begin;
}

void fast() {
    int times = Times;
    ll s = 0;
    while (times--) {
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                s += a[i][j];
            }
        }
    }
}

void slow() {
    int times = Times;
    ll s = 0;
    while (times--) {
        for (int j = 0; j < SIZE; j++) {
            for (int i = 0; i < SIZE; i++) {
                s += a[i][j];
            }
        }
    }
}

int main() {
    cout << "fast: " << getTime(fast) << "ms" << endl;
    cout << "fast: " << getTime(slow) << "ms" << endl;
    system("pause");
    return 0;
}

/*
fast: 4399ms
fast: 11735ms
*/