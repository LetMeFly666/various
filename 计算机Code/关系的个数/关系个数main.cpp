#include<Windows.h>
#include<stdio.h>
#define M 5
bool gx[M][M]={0};
int duichen=0,fanduichen=0,duiYfd=0,fdYffd=0,zifan=0,fanzifan=0,ziYfzf=0,fzYfzf=0,chuandi=0,all=0;
int n;
int get_gxjz()
{
	puts("�����������ֻ��0��1��:");
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
int J_chuandi()//R*R����R 
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
	printf("�Գƹ�ϵ�ĸ�����%d,���Գƹ�ϵ�ĸ�����%d,���ǶԳ����Ƿ��ԳƵĹ�ϵ�ĸ�����%d,�Ȳ��ǶԳ��ֲ��Ƿ��ԳƵĹ�ϵ�ĸ�����%d\n",duichen,fanduichen,duiYfd,fdYffd);//**
	printf("�Է���ϵ�ĸ�����%d,���Է���ϵ�ĸ�����%d,�����Է����Ƿ��Է��Ĺ�ϵ�ĸ�����%d,�Ȳ����Է��в��ٷ��Է��Ĺ�ϵ�ĸ�����%d\n",zifan,fanzifan,ziYfzf,fzYfzf);
	printf("���ݹ�ϵ�ĸ�����%d\n",chuandi);
	printf("���п����в����غ�,����ϵ���ܸ�����2^(%d)=%d��\n",n*n,all);
}
int main()
{
	printf("�����ϵ����n ��n�Ĵ�Сn��1~5����");
	scanf("%d",&n);
	if(!n){printf("testing...\n");}
	if(n<0){printf("����?!\n");return -1;}
	if(n>M){printf("̫���ˣ�������2^(%d)�������ϵ...\n����ö���Ѿ��޷����ٵó���...\n",n*n);return 1;}
	tongji(0,0);
	ShowAnswer();
	system("pause");
	return 0;
}
