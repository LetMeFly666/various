#include<Windows.h>
#include<stdio.h>
#define M 5
bool gx[M][M]={0};
int duichen=0,fanduichen=0,duiYfd=0,fdYffd=0,zifan=0,fanzifan=0,ziYfzf=0,fzYfzf=0,chuandi=0,all=0;
int n;
int get_gxjz()
{
	puts("输入这个矩阵（只有0和1）:");
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			scanf("%d",&gx[i][j]);
		}
	}
	return 0;
}
int J_duichen()
{
	bool dui=1,fan=1;
	for(int i=0;i<n;i++)
	{
		for(int j=i+1;j<n;j++)
		{
			if(gx[i][j]==gx[j][i])fan=0;
			else dui=0;
			if(fan==0&&dui==0)goto loop;
		}
	}
	loop:
		if(dui==1)duichen++;
		if(fan==1)fanduichen++;
		if(dui==1&&fan==1)duiYfd++;
		if(dui==0&&fan==0)fdYffd++;
}
int J_zifan()
{
	bool zi=1,fei=1;
	for(int i=0;i<n;i++)
	{
		if(gx[i][i]==1)fei=0;
		else zi=0;
		if(zi==0&&fei==0)goto loop;
	}
	loop:
		if(zi==1)zifan++;
		if(fei==1)fanzifan++;
		if(zi==1&&fei==1)ziYfzf++;
		if(zi==0&&fei==0)fzYfzf++;
}
int J_chuandi()//R*R属于R 
{
//	bool g[M][M];
//	for(int i=0;i<n;i++)
//	{
//		for(int j=0;j<n;j++)
//		{
//			g[i][j]=gx[i][j];
//		}
//	}
	//R*R
	bool x[M][M];
	for(int xi=0;xi<n;xi++)
	{
		for(int xj=0;xj<n;xj++)
		{
			int t=0;
			for(int i=0;i<n;i++)
			{
				t+=gx[xi][i]*/*g*/gx[i][xj];
				x[xi][xj]=(t!=0);
			}
		}
	}
	//for(int i=0;i<n;i++){for(int j=0;j<n;j++)printf("%d ",gx[i][j]);puts("");}puts("***");
	//for(int i=0;i<n;i++){for(int j=0;j<n;j++)printf("%d ", x[i][j]);puts("");}puts("***");
	bool chu=1;
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			if((x[i][j])&&(!gx[i][j]))
			{
				chu=0;
				//printf("000\n");
				goto loop;
			}
		}
	}
	loop:
		chuandi+=chu;
}
int Judge()
{
	J_duichen();
	J_zifan();
	J_chuandi();
}
int prtjz()
{
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			printf("%d ",gx[i][j]);
		}
		puts("");
	}
	puts("");
}
int tongji(int i,int j)
{
	int N=i*n+j;
	if(N>=n*n)
	{
		all++;
		Judge();
		//prtjz();
		return 0;
	}
	N++;
	gx[i][j]=1;
	tongji(N/n,N%n);
	gx[i][j]=0;
	tongji(N/n,N%n);
	return 0;
}
int ShowAnswer()
{
	printf("对称关系的个数是%d,反对称关系的个数是%d,既是对称又是反对称的关系的个数是%d,既不是对称又不是反对称的关系的个数是%d\n",duichen,fanduichen,duiYfd,fdYffd);//**
	printf("自反关系的个数是%d,反自反关系的个数是%d,既是自反又是反自反的关系的个数是%d,既不是自反有不少反自反的关系的个数是%d\n",zifan,fanzifan,ziYfzf,fzYfzf);
	printf("传递关系的个数是%d\n",chuandi);
	printf("其中可能有部分重合,但关系的总个数是2^(%d)=%d个\n",n*n,all);
}
int main()
{
	printf("输入关系矩阵n ×n的大小n（1~5）：");
	scanf("%d",&n);
	if(!n){printf("testing...\n");}
	if(n<0){printf("负数?!\n");return -1;}
	if(n>M){printf("太大了，将会有2^(%d)个矩阵关系...\n暴力枚举已经无法快速得出答案...\n",n*n);return 1;}
	tongji(0,0);
	ShowAnswer();
	system("pause");
	return 0;
}
