#include<iostream>
#include"头文件.h"
using namespace std;
int main()
{
	FILE*diji;
	int ji;
	cout<<"最多可以保存10组随机数，之后将从第一个生成的随机数文件开始覆盖，请及时保存你所需要的随机数！"<<endl;
	if((diji=fopen("缓存-次数.txt","r"))==NULL)
	//{cout<<"无法打开！";exit(0);}
	{ji=10;goto loop;}
	fscanf(diji,"%d",&ji);
	fclose(diji);
	loop: 
	if(ji==10) ji=0;
	ji++;
	if((diji=fopen("缓存-次数.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(diji,"%d",ji);
	fclose(diji); 
	switch(ji)
	  {case 1: _1();break;
	   case 2: _2();break;
	   case 3: _3();break;
	   case 4: _4();break;
	   case 5: _5();break;
	   case 6: _6();break;
	   case 7: _7();break;
	   case 8: _8();break;
	   case 9: _9();break;
	   case 10: _10();break;
	  }
	system("pause");
	return 0;
} 
