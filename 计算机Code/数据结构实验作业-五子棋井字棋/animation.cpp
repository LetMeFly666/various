#include<graphics.h>
#include<bits/stdc++.h>
using namespace std;
IMAGE* img;

int drawcir(float x,float y,float out_rad,color_t out_col,float inner_rad,color_t inner_col){        //绘制组合圆
    setfillcolor(out_col);
    ege_fillellipse(x-out_rad,y-out_rad,2*out_rad,2*out_rad);
    setfillcolor(inner_col);
    ege_fillellipse(x-inner_rad,y-inner_rad,2*inner_rad,2*inner_rad);
    return 0;
}
int drawtj(float x,float y,float r,float ang){    //绘制（x,y）,半径r,角度ang的图
    float left=x-r,top=y-r;
    float width =2*r,height=2*r;
    color_t col_w=EGEACOLOR(0xff,WHITE),col_b=EGEACOLOR(0xff,BLACK);
    //白色部分
    setfillcolor(col_w);  
    ege_fillpie(left,top,width,height,ang+90,180);
    //黑色
    setfillcolor(col_b);
    ege_fillpie(left,top,width,height,ang-90,180);
    //阴阳鱼眼偏移
    float rad=(ang+90)*PI/180;
    float dx=r/2*cos(rad),dy=r/2*sin(rad);
    //黑头
    drawcir(x+dx,y+dy,r/2,col_b,r/6,col_w);
    //白头
    drawcir(x-dx,y-dy,r/2,col_w,r/6,col_b);
    //黑边界
    setlinewidth(2);
    setcolor(col_b);
    ege_ellipse(left,top,2*r,2*r);
    return 0;
}
int pout(string str,int t,int x,int y)
{
    setfont(32, 0,"宋体");
    setbkmode(TRANSPARENT);
    setcolor(YELLOW);
    // setbkcolor(LIGHTGREEN);
    int dx=x,dy=y;
    for(int i=0;i<str.length();i++)
    {
        if(i==36)
        {
            dx=x;dy=y+40;
        }
        outtextxy(dx,dy,str[i]);
        dx+=20;
        Sleep(t);
    }
    return 0;
}
int main()
{
    setinitmode(0,350,130);
    initgraph(800, 600,INIT_RENDERMANUAL);
    setbkcolor(WHITE);
    ege_enable_aa(TRUE);      //抗锯齿
    float ang=0;
    mouse_msg msg;
    clock_t start=clock();
    for(;is_run();delay_fps(60)){//太极旋转
      cleardevice();
      drawtj(400,300,200,ang);
      ang+=PI;        //每次转PI
      setfont(23, 0,"华文行楷");
      setcolor(BLACK);
    //   outmass();
      clock_t now=clock();
      if(float((now-start)/CLOCKS_PER_SEC)>=0.25)
      {
        outtextxy(0,0,"先手要攻，后手要守");
        outtextxy(600,0,"八卦易守，成角易攻");
        outtextxy(0,480,"多个先手，细算次先");
        outtextxy(600,480,"跳三跳四，暗剑深藏");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=0.45)
      {
        outtextxy(0,25,"以攻为守，以守待攻");
        outtextxy(600,25,"阻断分隔，稳如泰山");
        outtextxy(0,505,"五子要点，次序在前");
        outtextxy(600,505,"己落一子，敌增一兵");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=0.65)
      {
        outtextxy(0,50,"攻守转换，慎思变化");
        outtextxy(600,50,"不思争先，胜比登天");
        outtextxy(0,530,"斜线为阴，直线为阳");
        outtextxy(600,530,"攻其要点，守其必争");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=0.8)
      {
        outtextxy(0,75,"先行争夺，地破天惊");
        outtextxy(600,75,"初盘争二，局终抢三");
        outtextxy(0,555,"阴阳结合，防不胜防");
        outtextxy(600,555,"势已形成，败即降临");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=1)
      {
        outtextxy(0,100,"守取外势，攻聚内力");
        outtextxy(600,100,"留三不冲，变化万千");
        outtextxy(0,580,"连三连四，易见为明");
        outtextxy(600,580,"五子精华，一子输赢");
        break;
      }
          
    }
    setfont(25, 0,"华文行楷");
    setbkmode(TRANSPARENT);
    setcolor(BLACK);
    outtextxy(295,575,"按任意键进入游戏");
    getch();
    system("start Interface.exe -n");
    return 0;
}