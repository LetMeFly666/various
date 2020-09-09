#include<ctime>
#include<iostream>
#include<cassert>
using namespace std;
namespace suiji1//命名空间 
{
	int* RandomArray(int n,int left ,int right)
	  {assert(left<=right);//保证left<right 
	   int*arr=new int [n];
	   srand(time(NULL));//标准随机种子 
	   for(int i=0;i<n;i++)
	     arr[i]=rand()%(right-left+1)+left;
	   return arr;
	  }
}
