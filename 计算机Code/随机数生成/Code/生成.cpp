#include<iostream>
#include"suiji.h"
using namespace std;
void _1()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数1.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数1.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数1.txt”中复制生成的随机数\n";
}
void _2()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数2.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数2.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数2.txt”中复制生成的随机数\n";
}
void _3()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数3.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数3.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数3.txt”中复制生成的随机数\n";
}
void _4()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数4.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数4.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数4.txt”中复制生成的随机数\n";
}
void _5()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数5.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数5.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数5.txt”中复制生成的随机数\n";
}
void _6()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数6.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数6.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数6.txt”中复制生成的随机数\n";
}
void _7()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数7.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数7.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数7.txt”中复制生成的随机数\n";
}
void _8()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数8.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数8.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数8.txt”中复制生成的随机数\n";
}
void _9()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数9.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数9.txt","w"))==NULL)
	  {cout<<"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r);
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数9.txt”中复制生成的随机数\n";
}
void _10()
{
    int n,l,r;
    cout<<"输入随机数组中元素的个数，下限，上限,将生成文件“随机数10.txt”\n";
    cout<<"例如，输入  ‘ 10000 1 100  ’将会产生10000个从1到100的随机数\n";
	cin>>n>>l>>r;
	FILE*fp;
	if((fp=fopen("生成的随机数10.txt","w"))==NULL)
	  {cout<<fp,"无法打开！";exit(0);}
	fprintf(fp,"此文件共有%d个从%d到%d的随机数。\n",n,l,r); 
	int*arr=suiji1::RandomArray(n,l,r);
	for(int i=0;i<n;i++)
	  {cout<<arr[i]<<" ";
	   fprintf(fp,"%d ",arr[i]);
	  }
	delete[] arr;fclose(fp);
	cout<<"\n你可以在“随机数10.txt”中复制生成的随机数\n";
}
