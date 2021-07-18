<!--
 * @Author: LetMeFly
 * @Date: 2021-07-18 20:15:38
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-18 20:33:38
-->

# 爸爸放水果儿子女儿吃
桌上有一空盘，允许存放一只水果。爸爸可向盘中放苹果，也可向盘中放桔子，儿子专等吃盘中的桔子，女儿专等吃盘中的苹果。规定当盘空时一次只能放一只水果供吃者取用，请用P、V原语实现爸爸、儿子、女儿三个并发进程的同步。

```cpp
semaphore empty=1, orange=0, apple=0;

void father()
{
    while(true)
    {
        Fruit thisFruit = aNewFruit();
        P(empty);
        put the fruit into the plate;
        if(thisFruit == Orange) V(orange);
        else V(apple);
    }
}

void daughter()
{
    while(true)
    {
        P(apple);
        get the apple from the plate;
        V(empty);
        Enjoy the apple;
    }
}

void son()
{
    while(true)
    {
        P(orange);
        get the orange from the plate;
        V(empty);
        Enjoy the orange;
    }
}

void main()
{
    cobegin
        father();
        daughter();
        son();
    coend
}
```

<large><font color="red">100分√</font></large>

参考答案：PPT老师代码：(semaphore拼错啦)
```cpp
semphore S＝1;
semphore Sa＝0;
semphore So＝0;
main()
{cobegin
    father();      /*父亲进程*/
    son();        /*儿子进程*/
    daughter();    /*女儿进程*/
coend
｝ 

son( )
{   while(True)
    { P(So);
        从盘中取出桔子;
        V(S);
        吃桔子;
    ｝
}

father( )
{   while(True)
    {   P(S);
        将水果放入盘中;
        if（放入的是桔子）V(So);
        else  V(Sa);
    }
}

daughter( )
{   while(True)
    {  P(Sa);
        从盘中取出苹果;
        V(S);
        吃苹果;
    ｝
｝
```
自己写的时候完全没有看PPT哦，基本上完全一样👍,加油！