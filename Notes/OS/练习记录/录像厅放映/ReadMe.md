<!--
 * @Author: LetMeFly
 * @Date: 2021-07-18 20:38:49
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-18 21:01:40
-->

# 录像厅放映

## 题目描述

> 假设一个录像厅有0,1,2三种不同的录像片可由观众选择放映。录像厅的放映规则为：
> 1. 任何时刻最多只能放映一种录像片，正在放映的录像片是自动循环放映的。最后一个观众主动离开时结束当前录像片的放映。
> 2. 选择当前正在放映录像片的观众可立即进入，允许同时有多位选择同一中录像片的观众同时观看，同时观看的观众数量不受限制。
> 3. 等待观看其他录像片的观众按到达顺序排队，当一种新的录像片开始放映时，所有等待观看该录像片的观众可一次进入录像厅同时观看。

## 题目要求

> 用一个进程代表观众，试实现观众进程的观看录像函数VideoShow(vid:integer)，以遵守放映规则。其中vid表示观众选择的录像片编号。要求：用信号量方法，并给出定义及初值。

```cpp
// semaphore showing[3]={0, 0, 0}, change=1;
int count[3] = {0, 0, 0}; // 每个vid的目前人数
semaphore mutex=1; // 切换权
semaphore m[3] = {1, 1, 1}; // 修改该vid人数的权力

void VideoShow(int vid)
{
    P(m[vid])
    if(count[vid]==0)
    {
        P(mutex);
        change video to vid;
    }
    count[vid]++;
    V(m[vid]);
    enjoy the movie;
    P(m[vid]);
    count[vid]--;
    if(count[vid]==0)
        V(mutex);
    V(m[vid]);
}
```