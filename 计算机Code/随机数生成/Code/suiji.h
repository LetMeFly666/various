#include<ctime>
#include<iostream>
#include<cassert>
using namespace std;
namespace suiji1//�����ռ� 
{
	int* RandomArray(int n,int left ,int right)
	  {assert(left<=right);//��֤left<right 
	   int*arr=new int [n];
	   srand(time(NULL));//��׼������� 
	   for(int i=0;i<n;i++)
	     arr[i]=rand()%(right-left+1)+left;
	   return arr;
	  }
}
