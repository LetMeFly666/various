#include<graphics.h>
#include<bits/stdc++.h>
using namespace std;
IMAGE* img;

int drawcir(float x,float y,float out_rad,color_t out_col,float inner_rad,color_t inner_col){        //�������Բ
    setfillcolor(out_col);
    ege_fillellipse(x-out_rad,y-out_rad,2*out_rad,2*out_rad);
    setfillcolor(inner_col);
    ege_fillellipse(x-inner_rad,y-inner_rad,2*inner_rad,2*inner_rad);
    return 0;
}
int drawtj(float x,float y,float r,float ang){    //���ƣ�x,y��,�뾶r,�Ƕ�ang��ͼ
    float left=x-r,top=y-r;
    float width =2*r,height=2*r;
    color_t col_w=EGEACOLOR(0xff,WHITE),col_b=EGEACOLOR(0xff,BLACK);
    //��ɫ����
    setfillcolor(col_w);  
    ege_fillpie(left,top,width,height,ang+90,180);
    //��ɫ
    setfillcolor(col_b);
    ege_fillpie(left,top,width,height,ang-90,180);
    //��������ƫ��
    float rad=(ang+90)*PI/180;
    float dx=r/2*cos(rad),dy=r/2*sin(rad);
    //��ͷ
    drawcir(x+dx,y+dy,r/2,col_b,r/6,col_w);
    //��ͷ
    drawcir(x-dx,y-dy,r/2,col_w,r/6,col_b);
    //�ڱ߽�
    setlinewidth(2);
    setcolor(col_b);
    ege_ellipse(left,top,2*r,2*r);
    return 0;
}
int pout(string str,int t,int x,int y)
{
    setfont(32, 0,"����");
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
    ege_enable_aa(TRUE);      //�����
    float ang=0;
    mouse_msg msg;
    clock_t start=clock();
    for(;is_run();delay_fps(60)){//̫����ת
      cleardevice();
      drawtj(400,300,200,ang);
      ang+=PI;        //ÿ��תPI
      setfont(23, 0,"�����п�");
      setcolor(BLACK);
    //   outmass();
      clock_t now=clock();
      if(float((now-start)/CLOCKS_PER_SEC)>=0.25)
      {
        outtextxy(0,0,"����Ҫ��������Ҫ��");
        outtextxy(600,0,"�������أ��ɽ��׹�");
        outtextxy(0,480,"������֣�ϸ�����");
        outtextxy(600,480,"�������ģ��������");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=0.45)
      {
        outtextxy(0,25,"�Թ�Ϊ�أ����ش���");
        outtextxy(600,25,"��Ϸָ�������̩ɽ");
        outtextxy(0,505,"����Ҫ�㣬������ǰ");
        outtextxy(600,505,"����һ�ӣ�����һ��");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=0.65)
      {
        outtextxy(0,50,"����ת������˼�仯");
        outtextxy(600,50,"��˼���ȣ�ʤ�ȵ���");
        outtextxy(0,530,"б��Ϊ����ֱ��Ϊ��");
        outtextxy(600,530,"����Ҫ�㣬�������");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=0.8)
      {
        outtextxy(0,75,"�������ᣬ�����쾪");
        outtextxy(600,75,"������������������");
        outtextxy(0,555,"������ϣ�����ʤ��");
        outtextxy(600,555,"�����γɣ��ܼ�����");
      }
      if(float((now-start)/CLOCKS_PER_SEC)>=1)
      {
        outtextxy(0,100,"��ȡ���ƣ���������");
        outtextxy(600,100,"�������壬�仯��ǧ");
        outtextxy(0,580,"�������ģ��׼�Ϊ��");
        outtextxy(600,580,"���Ӿ�����һ����Ӯ");
        break;
      }
          
    }
    setfont(25, 0,"�����п�");
    setbkmode(TRANSPARENT);
    setcolor(BLACK);
    outtextxy(295,575,"�������������Ϸ");
    getch();
    system("start Interface.exe -n");
    return 0;
}