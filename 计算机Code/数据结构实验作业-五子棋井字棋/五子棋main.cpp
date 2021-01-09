#include<iostream>
#include<algorithm>
#include<conio.h>
#include<graphics.h>
#include<mmsystem.h>
#include<time.h>

//using namespace std;
#pragma comment(lib, "winmm.lib")
#define exeName "���ӳ���"
#define xCB 30 //�������Ͻ�x
#define yCB 30 //�������Ͻ�y
#define dCB 35 //�������̴�С
#define allNum 15 //�ܹ�20*20
#define dClick 9 //�ݲΧ�������λ�����׼λ�õĲ�
#define rCircle 11
#define rPoint 3

IMAGE backImg;
HWND hWnd; //ͼ�δ���
struct OnTheWay
{
	int x, y;
}goon[400];//��������Щ����

struct MyRectangle
{
	int l, top, r, buttom;
	char msg[10];
	int color;
	int xt, yt;//����λ��
};
#define allRectangleNum 9
MyRectangle allRectangle[allRectangleNum];

int chessState[20][20] = { 0 };
int sumStep = 0;
bool ifRobot = 1;
bool whichRobot = 1; //0 Tisfy


/*��������,���FoS=true�����*/
void putOneChess(int x, int y, bool FoS)
{
	if (FoS)
		setfillcolor(BLACK);
	else
		setfillcolor(WHITE);
	solidcircle(xCB + x * dCB, yCB + y * dCB, rCircle);
}
/*
	���ڽ��У�0
	���һ��ʤ��1
	��Ҷ���ʤ��2
	����ƽ�֣�3
*/
int state(int x, int y)
{
	for (int i = -4; i <= 0; i++)
	{
		if (x + i < 0)
		{
			continue;
		}
		for (int j = 1; j < 5; j++)
		{
			if (x + i + j >= allNum)
			{
				goto notX;
			}
			if (chessState[x + i + j][y] != chessState[x + i][y])
			{
				goto notX;
			}
		}
		return (sumStep + 1) % 2 + 1;
	notX:;
	}
	for (int j = -4; j <= 0; j++)
	{
		if (y + j < 0)
		{
			continue;
		}
		for (int i = 1; i < 5; i++)
		{
			if (y + j + i >= allNum)
			{
				goto notY;
			}
			if (chessState[x][y + j + i] != chessState[x][y + j])
			{
				goto notY;
			}
		}
		return (sumStep + 1) % 2 + 1;
	notY:;
	}
	for (int i = -4; i <= 0; i++)
	{
		if (x + i < 0 || y + i < 0)
		{
			continue;
		}
		for (int j = 1; j < 5; j++)
		{
			if (x + i + j >= allNum || y + i + j >= allNum)
			{
				goto notF;
			}
			if (chessState[x + i + j][y + i + j] != chessState[x + i][y + i])
			{
				goto notF;
			}
		}
		return (sumStep + 1) % 2 + 1;
	notF:;
	}
	for (int i = -4; i <= 0; i++)
	{
		if (x + i < 0 || y - i >= allNum)
		{
			continue;
		}
		for (int j = 1; j < 5; j++)
		{
			if (x + i + j >= allNum || y - i - j < 0)
			{
				goto notZ;
			}
			if (chessState[x + i + j][y - i - j] != chessState[x + i][y - i])
			{
				goto notZ;
			}
		}
		return (sumStep + 1) % 2 + 1;
	notZ:;
	}
	if (sumStep == 400)
		return 3;
	return 0;
}

void revolveAnimation()
{
	int sleepTime = 5;
	float S = 1, L = 0.5f;
	int x0 = 18, y0 = 30;
	for (int i = 0; i < 30; i++)
	{
		setlinecolor(HSLtoRGB(x0, S, L));
		line(x0, y0, 550, x0);
		x0 += 18;
		Sleep(sleepTime);
	}

	for (int i = 0; i < 30; i++)
	{
		setlinecolor(HSLtoRGB(x0, S, L));
		line(y0, x0, x0, 550);
		x0 -= 18;
		Sleep(sleepTime);
	}
}

void redraw(bool ifRevolveAnimation)
{
	if(ifRevolveAnimation)revolveAnimation();
	BeginBatchDraw();
	loadimage(&backImg, "./source/ľ��.jpg");
	putimage(0, 0, &backImg);
	int xchessBoard = xCB, ychessBoard = yCB;
	int diffCB = dCB;
	setlinecolor(WHITE);
	for (int i = 0; i < allNum; i++)
	{
		line(xchessBoard, ychessBoard + diffCB * i, xchessBoard + (allNum - 1) * diffCB + 1, ychessBoard + diffCB * i);
		line(xchessBoard + diffCB * i, ychessBoard, xchessBoard + diffCB * i, ychessBoard + (allNum - 1) * diffCB + 1);
	}
	setfillcolor(WHITE);
	solidcircle(xCB + 7 * dCB, yCB + 7 * dCB, rPoint);
	solidcircle(xCB + 3 * dCB, yCB + 3 * dCB, rPoint);
	solidcircle(xCB + 3 * dCB, yCB + 12 * dCB, rPoint);
	solidcircle(xCB + 12 * dCB, yCB + 3 * dCB, rPoint);
	solidcircle(xCB + 12 * dCB, yCB + 12 * dCB, rPoint);

	if (whichRobot == 1)
	{
		allRectangle[1].color = BLUE;
		allRectangle[0].color = BROWN;
	}
	else
	{
		allRectangle[0].color = BLUE;
		allRectangle[1].color = BROWN;
	}
	for (int i = 0; i < allRectangleNum; i++)
	{
		rectangle(allRectangle[i].l, allRectangle[i].top, allRectangle[i].r, allRectangle[i].buttom);
		settextcolor(allRectangle[i].color);
		outtextxy(allRectangle[i].xt, allRectangle[i].yt, allRectangle[i].msg);
	}

	for (int i = 0; i < allNum; i++)
	{
		for (int j = 0; j < allNum; j++)
		{
			if (chessState[i][j])
			{
				putOneChess(i, j, chessState[i][j] % 2);
			}
		}
	}
	EndBatchDraw();
}

void play();


void end(bool ifOneMore)
{
	if (ifOneMore)
	{
		memset(chessState, 0, sizeof(chessState));
		for (int i = 0; i < sumStep; i++)
		{
			goon[i].x = goon[i].x = 0;
		}
		sumStep = 0;
		redraw(1);
		return play();
	}
	else
	{
		mciSendString(_T("close ./source/vectory.wav"), 0, 0, 0);
		closegraph();
	}

}

bool withDrawWhileJudje(int x, int y)
{
	if (x >= allRectangle[2].l && x <= allRectangle[2].r && y >= allRectangle[2].top && y <= allRectangle[2].buttom)
	{
		if (!sumStep)
		{
			MessageBox(hWnd, "�����ٳ��أ�", "����", MB_OK);
			return 0;
		}
		int ifCancle = MessageBox(hWnd, "ȷ��Ҫ������", "ȷ��", MB_OKCANCEL);
		if (ifCancle != IDOK)return 0;
		int times = 1 + ifRobot;
		for (int i = 0; i < times; i++)
		{
			sumStep--;
			chessState[goon[sumStep].x][goon[sumStep].y] = 0;
			goon[sumStep].x = goon[sumStep].y = 0;
		}
		redraw(1);
		return 1;
	}
	return 0;
}

bool savePicWithJudge(int x, int y)
{
	if (x >= allRectangle[5].l && x <= allRectangle[5].r && y >= allRectangle[5].top && y <= allRectangle[5].buttom)
	{
		saveimage(_T("ChessState.bmp"));
		MessageBox(hWnd, "�ɹ�����Ϊ��ChessState.bmp����", "Success!", MB_OK);
		return 1;
	}
	return 0;
}

bool rebeginWithJudge(int x, int y)
{
	if (x >= allRectangle[3].l && x <= allRectangle[3].r && y >= allRectangle[3].top && y <= allRectangle[3].buttom)
	{
		if (sumStep)
		{
			int ifCancle = MessageBox(hWnd, "ȷ��Ҫ���¿�ʼ��", "ȷ��", MB_OKCANCEL);
			if (ifCancle != IDOK)return 0;
		}
		memset(chessState, 0, sizeof(chessState));
		strcpy_s(allRectangle[2].msg, "����");
		strcpy_s(allRectangle[8].msg, "��������");
		strcpy_s(allRectangle[0].msg, "Tisfy");
		strcpy_s(allRectangle[1].msg, "�M");
		strcpy_s(allRectangle[7].msg, "����Rob?");
		redraw(0);
		for (int i = 0; i < sumStep; i++)
		{
			goon[i].x = goon[i].x = 0;
		}
		sumStep = 0;
		redraw(1);
		return 1;
	}
	return 0;
}

bool changeOppinent(int x, int y)
{
	if (x >= allRectangle[4].l && x <= allRectangle[4].r && y >= allRectangle[4].top && y <= allRectangle[4].buttom)
	{
		if (sumStep)//����տ��־ͻ��Ͳ�ѯ��
		{
			int ifCancle = MessageBox(hWnd, "��Ҫ���¿�ʼ������ֲ��ᱻ���档", "ȷ��Ҫ���¿�ʼ��", MB_OKCANCEL);
			if (ifCancle != IDOK)return 0;
		}
		memset(chessState, 0, sizeof(chessState));
		for (int i = 0; i < sumStep; i++)
		{
			goon[i].x = goon[i].x = 0;
		}
		sumStep = 0;
		ifRobot = ifRobot ? 0 : 1;
		strcpy_s(allRectangle[4].msg, ifRobot ? "��Ϊ����" : "��Ϊ�˻�");
		redraw(1);
		return 1;
	}
	return 0;
}

bool returnToLast(int x, int y)
{
	if (x >= allRectangle[6].l && x <= allRectangle[6].r && y >= allRectangle[6].top && y <= allRectangle[6].buttom)
	{
		if (sumStep)
		{
			int ifCancle = MessageBox(hWnd, "����ֲ��ᱻ���档", "ȷ�������ϲ���", MB_OKCANCEL);
			if (ifCancle != IDOK)return 0;
		}
		system("start Interface.exe -h");
		exit(0);
	}
	return 0;
}

bool ifTisfy(int x,int y)
{
	if (whichRobot == 0)return 0;
	if (x >= allRectangle[0].l && x <= allRectangle[0].r && y >= allRectangle[0].top && y <= allRectangle[0].buttom)
	{
		whichRobot = 0;
		redraw(0);
		return 1;
	}
	return 0;
}

bool ifKeZhou(int x, int y)
{
	if (whichRobot == 1)return 0;
	if (x >= allRectangle[1].l && x <= allRectangle[1].r && y >= allRectangle[1].top && y <= allRectangle[1].buttom)
	{
		whichRobot = 1;
		redraw(0);
		return 1;
	}
	return 0;
}

bool ifChangeRob(int x, int y)
{
	if (x >= allRectangle[7].l && x <= allRectangle[7].r && y >= allRectangle[7].top && y <= allRectangle[7].buttom)
	{
		whichRobot = whichRobot?0:1;
		redraw(0);
		return 1;
	}
	return 0;
}

bool robRobWithJudje(int x, int y)
{
	if (x >= allRectangle[8].l && x <= allRectangle[8].r && y >= allRectangle[8].top && y <= allRectangle[8].buttom)
	{
		if (sumStep)
		{
			int ifCancle = MessageBox(hWnd, "SmartRob�����������֡�", "Ҫ�ۿ�����������", MB_OKCANCEL);
			if (ifCancle != IDOK)return 0;
		}
		return 1;
	}
	return 0;
}

class pointJudge
{
#define ChengWu 6500
#define HuoSi 3000
#define ChongSi 900
#define MianSi 950
#define ChongSan 180
#define HuoSan 200
#define MianSan 190
#define HuoEr 30
#define ChongEr 20
#define MianEr 20
private:
	int suiPing(int x, int y)
	{
		//��5?
		for (int i = -4; i <= 0; i++)
		{
			int startX = x + i;
			if (startX < 0)continue;
			int endX = startX + 4;
			if (endX >= allNum)break;
			if (chessState[startX][y] == chessState[startX + 1][y] && chessState[startX][y] == chessState[startX + 2][y] && chessState[startX][y] == chessState[startX + 3][y] && chessState[startX][y] == chessState[startX + 4][y])
			{
				//��5!
				return ChengWu;
			}
		}
	notFive:;
		//��4?
		for (int i = -4; i < 0; i++)
		{
			int startX = x + i;
			if (startX < 0)continue;
			int endX = startX + 5;
			if (endX >= allNum)break;
			if (chessState[startX][y] == 0 && chessState[startX + 1][y] == chessState[startX + 2][y] && chessState[startX + 1][y] == chessState[startX + 3][y] && chessState[startX + 1][y] == chessState[startX + 4][y] && chessState[startX + 5][y] == 0)
			{
				//��4!
				return HuoSi;
			}
		}
	notLiveFour:;
		//��4? //����5��������4��ͬɫһ���գ���ʱ�����ǻ�����
		for (int i = -4; i <= 0; i++)
		{
			int startX = x + i;
			if (startX < 0)continue;
			int endX = startX + 4;
			if (endX >= allNum)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 5; j++)
			{
				switch (chessState[startX + j][y])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); printf("chessState[%d][%d]:%d\n", startX + j, y, chessState[startX + j][y]);// 0 / 0;
				}
			}
			if (sumKong == 1 && (sumBai == 4 || sumHei == 4))
			{
				return ChongSi;
			}
		}
	notChongFour:;
		//��4?
		for (int i = -3; i <= 0; i++)
		{
			int startX = x + i;
			if (startX < 0)continue;
			int endX = startX + 3;
			if (endX >= allNum)break;
			if ((startX - 1 < 0 || (chessState[startX - 1][y] != 0 && chessState[startX - 1][y] != chessState[x][y])) && (startX + 4 < allNum && chessState[startX + 4][y] == 0))
			{
				if (chessState[startX][y] == chessState[startX + 1][y] && chessState[startX][y] == chessState[startX + 2][y] && chessState[startX][y] == chessState[startX + 3][y])
				{
					//��4!
					return MianSi;
				}
			}
			if ((startX + 4 >= allNum || (chessState[startX + 4][y] != 0 && chessState[startX + 4][y] != chessState[x][y])) && (startX - 1 >= 0 && chessState[startX - 1][y] == 0))
			{
				if (chessState[startX][y] == chessState[startX + 1][y] && chessState[startX][y] == chessState[startX + 2][y] && chessState[startX][y] == chessState[startX + 3][y])
				{
					//��4!
					return MianSi;
				}
			}
		}
	notMianFour:;
		//��3?
		for (int i = -3; i <= 0; i++)
		{
			int startX = x + i;
			if (startX < 0)continue;
			int endX = startX + 3;
			if (endX >= allNum)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 4; j++)
			{
				switch (chessState[startX + j][y])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); printf("chessState[%d][%d]:%d\n", startX + j, y, chessState[startX + j][y]);// 0 / 0;
				}
			}
			if (sumKong == 1 && (sumBai == 3 || sumHei == 3))
			{
				//��3!
				return ChongSan;
			}
		}
	notChongThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startX = x + i - 1;
			if (startX < 0)continue;
			int endX = startX + 4;
			if (endX >= allNum)break;
			if (chessState[startX][y] == 0 && chessState[startX + 1][y] == chessState[startX + 2][y] && chessState[startX + 1][y] == chessState[startX + 3][y] && chessState[startX + 4][y] == 0)
			{
				return HuoSan;
			}
		}
	notLiveThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startX = x + i;
			if (startX < 0)continue;
			int endX = startX + 2;
			if (endX >= allNum)break;
			if ((startX - 1 < 0 || chessState[startX - 1][y] != chessState[x][y]) && (startX + 3 < allNum && chessState[startX + 3][y] == 0))
			{
				if (chessState[startX][y] == chessState[startX + 1][y] && chessState[startX][y] == chessState[startX + 2][y])
				{
					//��3!
					return MianSan;
				}
			}
			if ((startX + 3 >= allNum || chessState[startX + 3][y] != chessState[x][y]) && (startX - 1 >= 0 && chessState[startX - 1][y] == 0))
			{
				if (chessState[startX][y] == chessState[startX + 1][y] && chessState[startX][y] == chessState[startX + 2][y])
				{
					//��3!
					return MianSan;
				}
			}
		}
	notMianThree:;
		//��2?
		if (x - 2 >= 0 && x + 1 < allNum)
		{
			if (chessState[x - 2][y] == 0 && chessState[x - 1][y] == chessState[x][y] && chessState[x + 1][y] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
		if (x - 1 >= 0 && x + 2 < allNum)
		{
			if (chessState[x - 1][y] == 0 && chessState[x][y] == chessState[x + 1][y] && chessState[x + 2][y] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
	notLiveTwo:;
		//��2?
		if (x - 2 >= 0)
		{
			if (chessState[x - 2][y] == chessState[x][y] && chessState[x - 1][y] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
		if (x + 2 < allNum)
		{
			if (chessState[x + 2][y] == chessState[x][y] && chessState[x + 1][y] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
	notChongTwo:;
		//��2?
		if (x - 1 >= 0 && x + 1 < allNum)
		{
			if (x - 2 < 0 || chessState[x - 2][y] != chessState[x][y])
			{
				if (chessState[x - 1][y] == chessState[x][y] && chessState[x + 1][y] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x + 2 < allNum)
		{
			if (x - 1 < 0 || chessState[x - 1][y] != chessState[x][y])
			{
				if(chessState[x][y]== chessState[x+1][y]&& chessState[x+2][y]==0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x - 2 >= 0)
		{
			if (x + 1 >= allNum || chessState[x + 1][y] != chessState[x][y])
			{
				if (chessState[x][y] == chessState[x - 1][y] && chessState[x - 2][y] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x - 1 >= 0 && x + 1 < allNum)
		{
			if (x + 2 >= allNum || chessState[x + 2][y] != chessState[x][y])
			{
				if(chessState[x][y]== chessState[x+1][y]&& chessState[x-1][y]==0)
				{
					//��2!
					return MianEr;
				}
			}
		}
	notMianTwo:;
		return 0;
	}
	int shuZhi(int x, int y)
	{
		//��5?
		for (int i = -4; i <= 0; i++)
		{
			int startY = y + i;
			if (startY < 0)continue;
			int endY = startY + 4;
			if (endY >= allNum)break;
			if (chessState[x][startY] == chessState[x][startY + 1] && chessState[x][startY] == chessState[x][startY + 2] && chessState[x][startY] == chessState[x][startY + 3] && chessState[x][startY] == chessState[x][startY + 4])
			{
				//��5!
				return ChengWu;
			}
		}
	notFive:;
		//��4?
		for (int i = -4; i < 0; i++)
		{
			int startY = y + i;
			if (startY < 0)continue;
			int endY = startY + 5;
			if (endY >= allNum)break;
			if (chessState[x][startY] == 0 && chessState[x][startY + 1] == chessState[x][startY + 2] && chessState[x][startY + 1] == chessState[x][startY + 3] && chessState[x][startY + 1] == chessState[x][startY + 4] && chessState[x][startY + 5] == 0)
			{
				//��4!
				return HuoSi;
			}
		}
	notLiveFour:;
		//��4?
		for (int i = -4; i <= 0; i++)
		{
			int startY = y + i;
			if (startY < 0)continue;
			int endY = startY + 4;
			if (endY >= allNum)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 5; j++)
			{
				switch (chessState[x][startY + j])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); //0 / 0;
				}
			}
			if (sumKong == 1 && (sumHei == 4 || sumBai == 4))
			{
				//��4!
				return ChongSi;
			}
		}
	notChongFour:;
		for (int i = -3; i <= 0; i++)
		{
			int startY = y + i;
			if (startY < 0)continue;
			int endY = startY + 3;
			if (endY >= allNum)break;
			if ((startY - 1 < 0 || (chessState[x][startY - 1] != 0 && chessState[x][startY - 1] != chessState[x][y])) && (startY + 4 < allNum && chessState[x][startY + 4] == 0))
			{
				if (chessState[x][startY] == chessState[x][startY + 1] && chessState[x][startY] == chessState[x][startY + 2] && chessState[x][startY] == chessState[x][startY + 3])
				{
					//��4!
					return MianSi;
				}
			}
			if ((startY + 4 >= allNum || (chessState[x][startY + 4] != 0 && chessState[x][startY + 4] != chessState[x][y])) && (startY - 1 >= 0 && chessState[x][startY - 1] == 0))
			{
				if (chessState[x][startY] == chessState[x][startY + 1] && chessState[x][startY] == chessState[x][startY + 2] && chessState[x][startY] == chessState[x][startY + 3])
				{
					//��4!
					return MianSi;
				}
			}
		}
	notMianFour:;
		//��3?
		for (int i = -3; i <= 0; i++)
		{
			int startY = y + i;
			if (startY < 0)continue;
			int endY = startY + 3;
			if (endY >= allNum)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 4; j++)
			{
				switch (chessState[x][startY+j])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); printf("chessState[%d][%d]:%d\n", x, startY+j, chessState[x][startY+j]);// 0 / 0;
				}
			}
			if (sumKong == 1 && (sumBai == 3 || sumHei == 3))
			{
				//��3!
				return ChongSan;
			}
		}
	notChongThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startY = y + i - 1;
			if (startY < 0)continue;
			int endY = startY + 4;
			if (endY >= allNum)break;
			if (chessState[x][startY] == 0 && chessState[x][startY + 1] == chessState[x][startY + 2] && chessState[x][startY + 1] == chessState[x][startY + 3] && chessState[x][startY+4] == 0)
			{
				//��3!
				return HuoSan;
			}
		}
	notLiveThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startY = y + i;
			if (startY < 0)continue;
			int endY = startY + 2;
			if (endY >= allNum)break;
			if ((startY - 1 < 0 || chessState[x][startY - 1] != chessState[x][y]) && (startY + 3 < allNum && chessState[x][startY + 3] == 0))
			{
				if (chessState[x][startY] == chessState[x][startY+1] && chessState[x][startY] == chessState[x][startY + 2])
				{
					//��3!
					return MianSan;
				}
			}
			if ((startY + 3 >= allNum || chessState[x][startY + 3] != chessState[x][y]) && (startY - 1 >= 0 && chessState[x][startY - 1] == 0))
			{
				if (chessState[x][startY] == chessState[x][startY+1] && chessState[x][startY] == chessState[x][startY + 2])
				{
					//��3!
					return MianSan;
				}
			}
		}
	notMianThree:;
		//��2?
		if (y - 2 >= 0 && y + 1 < allNum)
		{
			if (chessState[x ][y- 2] == 0 && chessState[x ][y- 1] == chessState[x][y] && chessState[x ][y+ 1] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
		if (y - 1 >= 0 && y + 2 < allNum)
		{
			if (chessState[x][y - 1] == 0 && chessState[x][y] == chessState[x][y + 1] && chessState[x][y + 2] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
	notLiveTwo:;
		//��2?
		if (y - 2 >= 0)
		{
			if (chessState[x][y-2] == chessState[x][y] && chessState[x][y - 1] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
		if (y + 2 < allNum)
		{
			if (chessState[x ][y+ 2] == chessState[x][y] && chessState[x ][y+ 1] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
	notChongTwo:;
		//��2?
		if (y - 1 >= 0 && y + 1 < allNum)
		{
			if (y - 2 < 0 || chessState[x ][y- 2] != chessState[x][y])
			{
				if (chessState[x ][y- 1] == chessState[x][y] && chessState[x][y + 1] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (y + 2 < allNum)
		{
			if (y - 1 < 0 || chessState[x][y - 1] != chessState[x][y])
			{
				if (chessState[x][y] == chessState[x][y + 1] && chessState[x ][y+ 2] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (y - 2 >= 0)
		{
			if (y + 1 >= allNum || chessState[x ][y+ 1] != chessState[x][y])
			{
				if (chessState[x][y] == chessState[x ][y- 1] && chessState[x ][y- 2] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (y - 1 >= 0 && y + 1 < allNum)
		{
			if (y + 2 >= allNum || chessState[x][y + 2] != chessState[x][y])
			{
				if (chessState[x][y] == chessState[x ][y+ 1] && chessState[x ][y- 1] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
	notMianTwo:;
		return 0;
	}
	int zhengXie(int x, int y)
	{
		//��5?
		for (int i = -4; i <= 0; i++)
		{
			int startX = x + i, startY = y + i;
			if (startX < 0 || startY < 0)continue;
			int endX = startX + 4, endY = startY + 4;
			if (startX >= allNum || startY >= allNum)break;
			if (chessState[startX][startY] == chessState[startX + 1][startY + 1] && chessState[startX][startY] == chessState[startX + 2][startY + 2] && chessState[startX][startY] == chessState[startX + 3][startY + 3] && chessState[startX][startY] == chessState[startX + 4][startY + 4])
			{
				//��5!
				return ChengWu;
			}
		}
	notFive:;
		//��4?
		for (int i = -4; i < 0; i++)
		{
			int startX = x + i, startY = y + i;
			if (startX < 0 || startY < 0)continue;
			int endX = startX + 5, endY = startY + 5;
			if (startX >= allNum || startY >= allNum)break;
			if (chessState[startX][startY] == 0 && chessState[startX + 1][startY + 1] == chessState[startX + 2][startY + 2] && chessState[startX + 1][startY + 1] == chessState[startX + 3][startY + 3] && chessState[startX + 1][startY + 1] == chessState[startX + 4][startY + 4] && chessState[startX + 5][startY + 5] == 0)
			{
				//��4!
				return HuoSi;
			}
		}
	notLiveFour:;
		//��4?
		for (int i = -4; i <= 0; i++)
		{
			int startX = x + i, startY = y + i;
			if (startX < 0 || startY < 0)continue;
			int endX = startX + 4, endY = startY + 4;
			if (endX >= allNum || endY >= allNum)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 5; j++)
			{
				switch (chessState[startX + j][startY + j])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); //0 / 0;
				}
			}
			if (sumKong == 1 && (sumHei == 4 || sumBai == 4))
			{
				//��4!
				//printf("���ģ�\n");//**************
				return ChongSi;
			}
		}
	notChongFour:;
		//��4?
		for (int i = -3; i <= 0; i++)
		{
			int startX = x + i, startY = y + i;
			if (startX < 0||startY<0)continue;
			int endX = startX + 3,endY=startY+3;
			if (endX >= allNum||endY>=allNum)break;
			if ((startX - 1 < 0||startY-1<0 || (chessState[startX - 1][startY-1] != 0 && chessState[startX - 1][startY-1] != chessState[x][y])) && (startX + 4 < allNum&&startY+4<allNum && chessState[startX + 4][startY+4] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY+1] && chessState[startX][startY] == chessState[startX + 2][startY+2] && chessState[startX][startY] == chessState[startX + 3][startY+3])
				{
					//��4!
					printf("��4!\n");//************
					return MianSi;
				}
			}
			if ((startX + 4 >= allNum ||startY+4>=allNum|| (chessState[startX + 4][startY+4] != 0 && chessState[startX + 4][startY+4] != chessState[x][y])) && (startX - 1 >= 0 &&startY-1>=0&& chessState[startX - 1][startY-1] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY+1] && chessState[startX][startY] == chessState[startX + 2][startY+2] && chessState[startX][startY] == chessState[startX + 3][startY+3])
				{
					//��4!
					printf("��4!\n");//************
					return MianSi;
				}
			}
		}
	notMianFour:;
		//��3?
		for (int i = -3; i <= 0; i++)
		{
			int startX = x + i,startY=y+i;
			if (startX < 0||startY<0)continue;
			int endX = startX + 3,endY=startY+3;
			if (endX >= allNum||endY>=allNum)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 4; j++)
			{
				switch (chessState[startX + j][startY+j])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); printf("chessState[%d][%d]:%d\n", startX + j, startY+j, chessState[startX + j][startY+j]);// 0 / 0;
				}
			}
			if (sumKong == 1 && (sumBai == 3 || sumHei == 3))
			{
				//��3!
				return ChongSan;
			}
		}
	notChongThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startX = x + i - 1,startY=y+i-1;
			if (startX < 0||startY<0)continue;
			int endX = startX + 4,endY=startY+4;
			if (endX >= allNum||endY>=allNum)break;
			if (chessState[startX][startY] == 0 && chessState[startX + 1][startY+1] == chessState[startX + 2][startY+2] && chessState[startX + 1][startY+1] == chessState[startX + 3][startY+3] && chessState[startX + 4][startY+4] == 0)
			{
				//��3!
				return HuoSan;
			}
		}
	notLiveThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startX = x + i,startY=y+i;
			if (startX < 0||startY<0)continue;
			int endX = startX + 2,endY=startY+2;
			if (endX >= allNum||startY>=allNum)break;
			if (((startX - 1 < 0||startY-1<0) || ((startX-1>=0&&startY-1>=0)&&chessState[startX - 1][startY-1] != chessState[x][y])) && (startX + 3 < allNum &&startY+3<allNum&& chessState[startX + 3][startY+3] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY+1] && chessState[startX][startY] == chessState[startX + 2][startY+2])
				{
					//��3!
					return MianSan;
				}
			}
			if (((startX + 3 >= allNum||startY+3>=allNum) ||(startX+3<allNum&&startY+3<allNum)&& chessState[startX + 3][startY+3] != chessState[x][y]) && (startX - 1 >= 0&&startY-1>=0 && chessState[startX - 1][y] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY+1] && chessState[startX][startY] == chessState[startX + 2][startY+2])
				{
					//��3!
					return MianSan;
				}
			}
		}
	notMianThree:;
		//��2?
		if (x - 2 >= 0 && x + 1 < allNum&&y-2>=0&&y+1<allNum)
		{
			if (chessState[x - 2][y-2] == 0 && chessState[x - 1][y-1] == chessState[x][y] && chessState[x + 1][y+1] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
		if (x - 1 >= 0 && x + 2 < allNum&&y-1>=0&&y+2<allNum)
		{
			if (chessState[x - 1][y-1] == 0 && chessState[x][y] == chessState[x + 1][y+1] && chessState[x + 2][y+2] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
	notLiveTwo:;
		//��2?
		if (x - 2 >= 0&&y-2>=0)
		{
			if (chessState[x - 2][y-2] == chessState[x][y] && chessState[x - 1][y-1] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
		if (x + 2 < allNum&&y+2<allNum)
		{
			if (chessState[x + 2][y+2] == chessState[x][y] && chessState[x + 1][y+1] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
	notChongTwo:;
		//��2?
		if (x - 1 >= 0 && x + 1 < allNum&&y-1>=0&&y+1<allNum)
		{
			if (x - 2 < 0||y-2<0 ||( x-2>=0&&y-2>=0&&chessState[x - 2][y-2] != chessState[x][y]))
			{
				if (chessState[x - 1][y-1] == chessState[x][y] && chessState[x + 1][y+1] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x + 2 < allNum&&y+2<allNum)
		{
			if (x - 1 < 0 ||y-1<0||(x-1>=0&&y-1>=0&& chessState[x - 1][y-1] != chessState[x][y]))
			{
				if (chessState[x][y] == chessState[x + 1][y+1] && chessState[x + 2][y+2] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x - 2 >= 0&&y-2>=0)
		{
			if (x + 1 >= allNum||y+1>=allNum ||( x+1<allNum&&y+1<allNum&&chessState[x + 1][y+1] != chessState[x][y]))
			{
				if (chessState[x][y] == chessState[x - 1][y-1] && chessState[x - 2][y-2] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x - 1 >= 0 && x + 1 < allNum&&y-1>=0&&y+1<allNum)
		{
			if (x + 2 >= allNum ||y+2>=allNum||( x+2<allNum&&y+2<allNum&&chessState[x + 2][y+2] != chessState[x][y]))
			{
				if (chessState[x][y] == chessState[x + 1][y+1] && chessState[x - 1][y-1] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
	notMianTwo:;
		return 0;
	}
	int fuXie(int x, int y)
	{
		//��5��
		for (int i = -4; i <= 0; i++)
		{
			int startX = x + i, startY = y - i;
			if (startX < 0 || startY >= allNum)continue;
			int endX = startX + 4, endY = startY - 4;
			if (endX >= allNum || endY < 0)break;
			if (chessState[startX][startY] == chessState[startX + 1][startY - 1] && chessState[startX][startY] == chessState[startX + 2][startY - 2] && chessState[startX][startY] == chessState[startX + 3][startY - 3] && chessState[startX][startY] == chessState[startX + 4][startY - 4])
			{
				//��5!
				return ChengWu;
			}
		}
	notFive:;
		for (int i = -4; i < 0; i++)
		{
			int startX = x + i, startY = y - i;
			if (startX < 0 || startY >= allNum)continue;
			int endX = startX + 5, endY = startY - 5;
			if (endX >= allNum || endY < 0)break;
			if (chessState[startX][startY] == 0 && chessState[startX + 1][startY - 1] == chessState[startX + 2][startY - 2] && chessState[startX + 1][startY - 1] == chessState[startX + 3][startY - 3] && chessState[startX + 1][startY - 1] == chessState[startX + 4][startY - 4] && chessState[startX + 5][startY - 5] == 0)
			{
				//��4!
				return HuoSi;
			}
		}
	notLiveFour:;
		//��4?
		for (int i = -4; i <= 0; i++)
		{
			int startX = x + i, startY = y - i;
			if (startX < 0 || startY >= allNum)continue;
			int endX = startX + 4, endY = startY - 4;
			if (endX >= allNum || endY < 0)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 5; j++)
			{
				switch (chessState[startX + j][startY - j])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); //0 / 0;
				}
			}
			if (sumKong == 1 && (sumHei == 4 || sumBai == 4))
			{
				//��4!
				//printf("���ģ�\n");//**************
				return ChongSi;
			}
		}
	notChongFour:;
		//��4?
		for (int i = -3; i <= 0; i++)
		{
			int startX = x + i, startY = y - i;
			if (startX < 0 || startY >=allNum )continue;
			int endX = startX + 3, endY = startY - 3;
			if (endX >= allNum || endY <0)break;
			if ((startX - 1 < 0 || startY + 1 >=allNum || (chessState[startX - 1][startY + 1] != 0 && chessState[startX - 1][startY + 1] != chessState[x][y])) && (startX + 4 < allNum && startY - 4 >=0 && chessState[startX + 4][startY - 4] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY - 1] && chessState[startX][startY] == chessState[startX + 2][startY - 2] && chessState[startX][startY] == chessState[startX + 3][startY -3])
				{
					//��4!
					return MianSi;
				}
			}
			if ((startX + 4 >= allNum || startY - 4 <0 || (chessState[startX + 4][startY - 4] != 0 && chessState[startX + 4][startY - 4] != chessState[x][y])) && (startX - 1 >= 0 && startY + 1 <allNum && chessState[startX - 1][startY + 1] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY - 1] && chessState[startX][startY] == chessState[startX + 2][startY - 2] && chessState[startX][startY] == chessState[startX + 3][startY - 3])
				{
					//��4!
					return MianSi;
				}
			}
		}
	notMianFour:;
		//��3?
		for (int i = -3; i <= 0; i++)
		{
			int startX = x + i,startY=y-i;
			if (startX < 0||startY>=allNum)continue;
			int endX = startX + 3,endY=startY-3;
			if (endX >= allNum||endY<0)break;
			int sumKong = 0, sumHei = 0, sumBai = 0;
			for (int j = 0; j < 4; j++)
			{
				switch (chessState[startX + j][startY-j])
				{
				case 0:sumKong++; break;
				case 1:sumHei++; break;
				case 2:sumBai++; break;
				default:printf("���ᣡ���ڹ�"); printf("chessState[%d][%d]:%d\n", startX + j, startY-j, chessState[startX + j][startY-j]);// 0 / 0;
				}
			}
			if (sumKong == 1 && (sumBai == 3 || sumHei == 3))
			{
				//��3!
				return ChongSan;
			}
		}
	notChongThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startX = x + i - 1,startY=y-i+1;
			if (startX < 0||startY>=allNum)continue;
			int endX = startX + 4,endY=startY-4;
			if (endX >= allNum||endY<0)break;
			if (chessState[startX][startY] == 0 && chessState[startX + 1][startY-1] == chessState[startX + 2][startY-2] && chessState[startX + 1][startY-1] == chessState[startX + 3][startY-3] && chessState[startX + 4][startY-4] == 0)
			{
				//��3!
				return HuoSan;
			}
		}
	notLiveThree:;
		//��3?
		for (int i = -2; i <= 0; i++)
		{
			int startX = x + i, startY = y - i;
			if (startX < 0 || startY >=allNum)continue;
			int endX = startX + 2, endY = startY - 2;
			if (endX >= allNum || startY <0)break;
			if (((startX - 1 < 0 || startY + 1 >=allNum) || ((startX - 1 >= 0 && startY + 1 <allNum) && chessState[startX - 1][startY + 1] != chessState[x][y])) && (startX + 3 < allNum && startY - 3 >=0 && chessState[startX + 3][startY - 3] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY - 1] && chessState[startX][startY] == chessState[startX + 2][startY - 2])
				{
					//��3!
					return MianSan;
				}
			}
			if (((startX + 3 >= allNum || startY - 3 <0) || (startX + 3 < allNum && startY - 3 >=0) && chessState[startX + 3][startY - 3] != chessState[x][y]) && (startX - 1 >= 0 && startY + 1 <allNum && chessState[startX - 1][startY+1] == 0))
			{
				if (chessState[startX][startY] == chessState[startX + 1][startY - 1] && chessState[startX][startY] == chessState[startX + 2][startY - 2])
				{
					//��3!
					return MianSan;
				}
			}
		}
	notMianThree:;
		//��2?
		if (x - 2 >= 0 && x + 1 < allNum&&y+2<allNum&&y-1>=0)
		{
			if (chessState[x - 2][y+2] == 0 && chessState[x - 1][y+1] == chessState[x][y] && chessState[x + 1][y-1] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
		if (x - 1 >= 0 && x + 2 < allNum&&y+1<allNum&&y-1>=0)
		{
			if (chessState[x - 1][y+1] == 0 && chessState[x][y] == chessState[x + 1][y-1] && chessState[x + 2][y-2] == 0)
			{
				//��2!
				return HuoEr;
			}
		}
	notLiveTwo:;
		//��2?
		if (x - 2 >= 0&&y+2<allNum)
		{
			if (chessState[x - 2][y+2] == chessState[x][y] && chessState[x - 1][y+1] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
		if (x + 2 < allNum&&y+2>=0)
		{
			if (chessState[x + 2][y-2] == chessState[x][y] && chessState[x + 1][y-1] == 0)
			{
				//��2!
				return ChongEr;
			}
		}
	notChongTwo:;
		//��2?
		if (x - 1 >= 0 && x + 1 < allNum&&y+1<allNum&&y-1>=0)
		{
			if (x - 2 < 0||y+2>=allNum ||( x-2>=0&&y+2<allNum&&chessState[x - 2][y+2] != chessState[x][y]))
			{
				if (chessState[x - 1][y+1] == chessState[x][y] && chessState[x + 1][y-1] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x + 2 < allNum&&y-2>=0)
		{
			if (x - 1 < 0 ||y+1>=allNum||(x-1>=0&&y+1<allNum&& chessState[x - 1][y+1] != chessState[x][y]))
			{
				if (chessState[x][y] == chessState[x + 1][y-1] && chessState[x + 2][y-2] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x - 2 >= 0&&y+2<allNum)
		{
			if (x + 1 >= allNum||y-1<0 ||( x+1<allNum&&y-1>=0&&chessState[x + 1][y-1] != chessState[x][y]))
			{
				if (chessState[x][y] == chessState[x - 1][y+1] && chessState[x - 2][y+2] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
		if (x - 1 >= 0 && x + 1 < allNum&&y+1<allNum&&y-1>=0)
		{
			if (x + 2 >= allNum ||y-2<0||( x+2<allNum&&y-2>=0&&chessState[x + 2][y-2] != chessState[x][y]))
			{
				if (chessState[x][y] == chessState[x + 1][y-1] && chessState[x - 1][y+1] == 0)
				{
					//��2!
					return MianEr;
				}
			}
		}
	notMianTwo:;
		return 0;
	}
	/*���������ӣ�ֻ���𵥲����ж�*/
	/*�������������ڵļ�value*/
	int sampleValue(int x, int y)
	{
		return suiPing(x, y) + shuZhi(x, y) + zhengXie(x, y) + fuXie(x, y);
	}
public:
	/*��Ⱦ�����ż��*/
	/*������ΪthisDeepth��һ����Ҫ���allDepth*/
	/*��locMaxX,locMaxY�޸�Ϊ���λ���Ǹ����x,y�޸�*/
	int judgePoint(int needDeepth, int& locMaxX, int& locMaxY)
	{
		int theMostValue = -500000;//����һ�����value�Ǹ�ֵ�����Գ�ֵҪ��С
		bool differentValue = 0, ifTheFirstValue = 1;
		int lastValue = 0;
		if (needDeepth <=0)return 0;
		int nx, ny;//���������������´ε����޸�
		for (int i = 0; i < allNum; i++)
		{
			for (int j = 0; j < allNum; j++)
			{
				if (chessState[i][j])
					continue;

				//����µ�����
				chessState[i][j] = sumStep % 2 + 1;//*****************���Ȳ��޸�goon��
				sumStep++;

				//�ж������valueֵ
				/*�����value=��ǰ״̬�ļ�value(sampleValue)-�µ�������������ȡ�õ����value(judgePoint)*/
				int thisValue = 0;
				thisValue = sampleValue(i, j);
				thisValue -= judgePoint(needDeepth-1, nx, ny);
				//������������
				if (thisValue > theMostValue)
				{
					theMostValue = thisValue;
					locMaxX = i, locMaxY = j;
				}
				if (ifTheFirstValue)
				{
					ifTheFirstValue = 0;
					lastValue = thisValue;
				}
				else
				{
					if (thisValue != lastValue)differentValue = 1;
				}
				//��ԭ״̬
				sumStep--;
				chessState[i][j] = 0;
			}
		}
		return theMostValue*12/10;
	}
};

//�������ӣ����޸�rx,ry
void robotPut(int& rx, int& ry)
{
	int x = 0, y = 0;
	if (sumStep < 2)
	{
		int lastX = 7, lastY = 7;
		if (sumStep)//����һ��������һ����һ�����ֵ�robot�ˣ�˵�������Ǻ��ֵڶ���
		{
			lastX = goon[sumStep - 1].x, lastY = goon[sumStep - 1].y;
		}	
		while (1)
		{
			int randX = rand() % 3 - 1, randY = rand() % 3 - 1;
			if (randX == 0 && randY == 0)continue;
			rx = lastX + randX, ry = lastY + randY;
			x = rx, y = ry;
			break;
		}
	}
	else
	{
		pointJudge PJ;
		PJ.judgePoint(2, x, y);
	}
	
	chessState[x][y] = sumStep % 2 + 1;
	goon[sumStep].x = x, goon[sumStep].y = y;
	sumStep++;
	rx = x, ry = y;
	putOneChess(x, y, sumStep % 2);

}


class KeZhou
{
private:
#define c5 2000000
#define h4 400000
#define c4 90000
#define h3 20000
#define m4 95000
#define c3 18000
#define m3 19000
#define h2 3000
#define c2 2000
#define m2 2000

	struct robmind
	{
		int x, y, value;
	};

	int it2_value(int A1, int B1, int A2, int B2)
	{
		if (A1 == 15 || A2 == 15 || (A1 % 2 == 1 && A2 % 8 == 7) || (A1 % 4 == 3 && A2 % 4 == 3) || (A1 % 8 == 7 && A2 % 2 == 1)) //��5
			return c5;
		if ((A1 == 7 && B1 == 16 && B2 > 1) || (A2 == 7 && B2 == 16 && B1 > 1) || (A1 == 3 && A2 == 1 && B1 > 4 && B2 > 2) || (A2 == 3 && A1 == 1 && B2 > 4 && B1 > 2)) //��4
			return h4;
		if (A1 == 14 || A2 == 14 || A1 == 13 || A2 == 13 || A1 == 11 || A2 == 11 || (A1 == 1 && (A2 == 5 || A2 == 6)) || (A2 == 1 && (A1 == 5 || A1 == 6))) //��4
			return c4;
		if ((A1 == 3 && B1 > 4 && B2 > 1) || (A2 == 3 && B2 > 4 && B1 > 1) || (A1 == 1 && A2 == 1 && B1 > 2 && B2 > 2)) //��3
			return h3;
		if ((A1 == 7 && B1 == 8 && B2 > 1) || (A2 == 7 && B2 == 8 && B1 > 1) || (A1 == 7 && B1 > 8 && B2 == 1) || (A2 == 7 && B2 > 8 && B1 == 1) || (A1 == 3 && B1 == 4 && A2 == 1 && B2 > 2) || (A2 == 3 && B2 == 4 && A1 == 1 && B1 > 2) || (A1 == 3 && B1 > 4 && A2 == 1 && B2 == 2) || (A2 == 3 && B2 > 4 && A1 == 1 && B1 == 2)) //��4
			return m4;
		if (((B1 > 8 || B2 > 1) && (A1 == 5 || A1 == 6)) || ((B2 > 8 || B1 > 1) && (A2 == 5 || A2 == 6)) || ((B1 > 4 || B2 > 2) && A1 == 2 && A2 == 1) || ((B2 > 4 || B1 > 2) && A2 == 2 && A1 == 1)) //��3
			return c3;
		if ((A1 == 3 && B1 == 4 && B2 > 2) || (A2 == 3 && B2 == 4 && B1 > 2) || (A1 == 1 && A2 == 1 && ((B1 == 2 && B2 > 4) || (B2 == 2 && B1 > 4)))) //��3
			return m3;
		if (A1 == 1 && ((B1 > 2 && B2 > 2) || (B1 > 4 && B2 > 1)) || A2 == 1 && ((B2 > 2 && B1 > 2) || (B2 > 4 && B1 > 1))) //��2
			return h2;
		if (A1 == 2 && ((B1 > 4 || B2 > 2) || (B1 > 8 || B2 > 1)) || A2 == 2 && ((B2 > 4 || B1 > 2) || (B2 > 8 || B1 > 1))) //��2
			return c2;
		if (A1 > 0 || A2 > 0) //��2
			return m2;
		return 0;
	}

	int it1_value(int i0, int j0, int x, int y, int now, int other)
	{
		int i, j, key, A1, A2, B1, B2;
		i = i0, j = j0;
		key = 1;
		A1 = 0, B1 = 0, A2 = 0, B2 = 0;
		while (abs(i) < 5 && abs(j) < 5)
		{ //����һ��
			if (x + i > 14 || x + i < 0 || y + j > 14 || y + j < 0)
			{
				B1 += key;
				break;
			}
			if (chessState[x + i][y + j] == now)
			{
				A1 += key;
			}
			else if (chessState[x + i][y + j] == other)
			{
				B1 += key;
				break;
			}
			key *= 2;
			if (key == 16 && B1 == 0)
			{
				B1 += 16;
			}
			i += i0;
			j += j0;
		}
		i = -i0, j = -j0;
		key = 1;
		while (abs(i) < 5 && abs(j) < 5)
		{ //������һ��
			if (x + i > 19 || x + i < 0 || y + j > 19 || y + j < 0)
			{
				B2 += key;
				break;
			}
			if (chessState[x + i][y + j] == now)
			{
				A2 += key;
			}
			else if (chessState[x + i][y + j] == other)
			{
				B2 += key;
				break;
			}
			key *= 2;
			if (key == 16 && B2 == 0)
			{
				B2 += 16;
			}
			i -= i0;
			j -= j0;
		}
		return it2_value(A1, B1, A2, B2); //���ú���������ֵ
	}

	int find_value(int x, int y, int color)
	{
		int i, j, now = color + 1, other, sum = 0;
		if (now == 1)
			other = 2;
		else
			other = 1;
		//��
		sum += it1_value(1, 0, x, y, now, other);
		//��
		sum += it1_value(0, 1, x, y, now, other);
		//����
		sum += it1_value(1, 1, x, y, now, other);
		//����
		sum += it1_value(1, -1, x, y, now, other);
		return sum;
	}

	int best_rob(int& x, int& y, int loop, int color, int lastv, int lastmax)
	{
		int i, j, nowv, nextv = 0, x0, y0;
		robmind ans;
		ans.value = INT_MIN;
		loop--;
		for (i = 0; i < 15; i++)
		{
			for (j = 0; j < 15; j++)
			{
				if (chessState[i][j] == 0)
				{
					nowv = find_value(i, j, color);
					if (nowv >= c5)
					{
						x = i;
						y = j;
						loop++;
						return nowv;
					}
					if (loop > 0)
					{
						chessState[i][j] = color + 1;
						nextv = best_rob(x0, y0, loop, 1 - color, nowv, ans.value);
						chessState[i][j] = 0;
						if (nowv - nextv > ans.value)
						{
							ans.value = nowv - nextv;
							ans.x = i;
							ans.y = j;
						}
					}
					else
					{
						if (nowv > ans.value)
						{
							ans.value = nowv;
							ans.x = i;
							ans.y = j;
						}
					}
				}
				if (lastv - (ans.value * 8 / 10) <= lastmax)
				{
					return ans.value * 8 / 10;
				}
				//            if(loop==3)
				//                printf("x=%d y=%d nowv=%d nextv=%d \n",i,j,nowv,nextv);
			}
		}
		loop++;
		x = ans.x;
		y = ans.y;
		return ans.value * 8 / 10;
	}

public:
	int initrob(int& x, int& y, int loop)
	{
		int i, j;
		if (sumStep)
		{
			while (sumStep <= 1)
			{
				i = rand() % 3 - 1;
				j = rand() % 3 - 1;
				if (goon[sumStep - 1].x + i >= 0 && goon[sumStep - 1].x + i < 15 && goon[sumStep - 1].y + j >= 0 && goon[sumStep - 1].y + j < 15 && chessState[goon[sumStep - 1].x+i][goon[sumStep - 1].y+j]==0)
				{
					x = goon[sumStep - 1].x + i, y = goon[sumStep - 1].y + j;
					return -1;
				}
			}
		}
		else
		{
			x = 7 + rand() % 3 - 1, y = 7 + rand() % 3 - 1;
			return -1;
		}
		if ((loop == 4 && sumStep <= 10) || loop == 2)
		{
			return best_rob(x, y, 2, sumStep % 2, INT_MAX, INT_MIN);
		}
		else
		{
			return best_rob(x, y, 4, sumStep % 2, INT_MAX, INT_MIN);
		}
	}
};

bool ifGoon()
{
	while (1)
	{
		MOUSEMSG msg;
		if (MouseHit())
		{
			msg = GetMouseMsg();
			int lx = msg.x, ly = msg.y;
			if (msg.uMsg == WM_LBUTTONDOWN)
			{
				returnToLast(lx, ly);
				if (rebeginWithJudge(lx, ly) || changeOppinent(lx, ly))
				{
					strcpy_s(allRectangle[2].msg, "����");
					strcpy_s(allRectangle[8].msg, "��������");
					strcpy_s(allRectangle[0].msg, "Tisfy");
					strcpy_s(allRectangle[1].msg, "�M");
					strcpy_s(allRectangle[7].msg, "����Rob?");
					redraw(0);
					return 1;
				}
				savePicWithJudge(lx, ly);
			}
		}
	}
	return 0;//�����������
}

void robRob()
{
	int sleepTime = 200;//******************
	mciSendString(_T("close ./source/backGround.mp3"), 0, 0, 0);
	mciSendString(_T("open ./source/Kalimba.mp3"), 0, 0, 0);
	mciSendString(_T("play ./source/Kalimba.mp3 repeat"), 0, 0, 0);
	int first = whichRobot = rand() % 2;
	redraw(0);
	int ifWin = 0;
	while (1)
	{
		if (whichRobot)
		{
			KeZhou KZ;
			int rx, ry;
			int returned = KZ.initrob(rx, ry, 2);
			chessState[rx][ry] = sumStep % 2 + 1;
			goon[sumStep].x = rx, goon[sumStep].y = ry;
			putOneChess(rx, ry, (sumStep + 1) % 2);
			sumStep++;
			ifWin = state(rx, ry);
			if (ifWin)break;
			whichRobot = 0;
		}
		else
		{
			int rx, ry;
			robotPut(rx, ry);
			ifWin = state(rx, ry);
			if (ifWin)break;
			whichRobot = 1;
		}
		redraw(0);
		Sleep(sleepTime);
	}
	char toSay[2][16] = {"Rob�Mʤ����","Tisfyʤ��!"};
	bool whi = 1;
	if (ifWin == 1) //����ʤ
		whi = (first) ? (0) : (1);
	else
		whi = (first) ? (1) : (0);
	mciSendString(_T("close ./source/Kalimba.mp3"), 0, 0, 0);
	mciSendString(_T("close ./source/vectory.wav"), 0, 0, 0);
	mciSendString(_T("open ./source/vectory.wav"), 0, 0, 0);
	mciSendString(_T("play ./source/vectory.wav"), 0, 0, 0);
	MessageBox(hWnd, toSay[whi], "��ս������", MB_OK);
	strcpy_s(allRectangle[0].msg, "");
	strcpy_s(allRectangle[1].msg, "");
	strcpy_s(allRectangle[2].msg, "");
	strcpy_s(allRectangle[7].msg, "");
	strcpy_s(allRectangle[8].msg, "");
	redraw(1);
	ifGoon();
	return play();
}

void play()
{
	mciSendString(_T("close ./source/backGround.mp3"), 0, 0, 0);
	mciSendString(_T("open ./source/backGround.mp3"), 0, 0, 0);
	mciSendString(_T("play ./source/backGround.mp3 repeat"), 0, 0, 0);
	while (1)
	{
		MOUSEMSG msg;
		//while (MouseHit())
		int ifWin = 0;
		if (MouseHit())
		{
			msg = GetMouseMsg();
			if (msg.uMsg == WM_LBUTTONDOWN)
			{
				int lx = msg.x, ly = msg.y;
				int wx = 0, wy = 0;
				int dx = lx + dClick - xCB, dy = ly + dClick - yCB;
				wx = dx / dCB, wy = dy / dCB;
				if (withDrawWhileJudje(lx, ly))
						goto loopBreakEmpty;
				if (rebeginWithJudge(lx, ly))
					goto loopBreakEmpty;
				if (changeOppinent(lx, ly))
					goto loopBreakEmpty;
				if(savePicWithJudge(lx, ly))
					goto loopBreakEmpty;
				if(returnToLast(lx, ly))
					goto loopBreakEmpty;
				if(ifTisfy(lx, ly))
						goto loopBreakEmpty;
				if(ifKeZhou(lx, ly))
						goto loopBreakEmpty;
				if (ifChangeRob(lx, ly))
						goto loopBreakEmpty;
				if (robRobWithJudje(lx, ly))
						return robRob();
				//printf("lx=%d,ly=%d,dx=%d,dy=%d,wx=%d,wy=%d\n", lx, ly, dx,dy,wx, wy);
				if (wx >= 0 && wx < allNum && wy >= 0 && wy < allNum && abs(xCB + wx * dCB - lx) < dClick && abs(yCB + wy * dCB - ly) < dClick)
				{
					if (chessState[wx][wy])
					{
						//*************�޸ģ��Ѿ�������
						goto loopEmptyChess;
					}
					chessState[wx][wy] = sumStep % 2 + 1;
					goon[sumStep].x = wx, goon[sumStep].y = wy;
					goto loopPut;
				}
				goto loopEmptyChess;
				//continue;
				//*********************û�����ӵ���Ӧλ�ã���Ҫ�������ӣ��˴����������ʾ
			loopPut:;
				mciSendString(_T("close ./source/laser.wav"), 0, 0, 0);
				mciSendString(_T("open ./source/laser.wav"), 0, 0, 0);
				mciSendString(_T("play ./source/laser.wav"), 0, 0, 0);
				sumStep++;
				putOneChess(wx, wy, sumStep % 2);
				ifWin = state(wx, wy);
				if (ifWin)
					goto loopBreakEmpty;
				if (ifRobot)
				{
					if (whichRobot)//�M
					{
						KeZhou KZ;
						int rx, ry;
						int returned = KZ.initrob(rx, ry, 2);
						chessState[rx][ry] = sumStep % 2 + 1;
						goon[sumStep].x = rx, goon[sumStep].y = ry;
						putOneChess(rx, ry, (sumStep + 1) % 2);
						sumStep++;
						ifWin = state(rx, ry);
					}
					else
					{
						int rx, ry;
						robotPut(rx, ry);
						ifWin = state(rx, ry);
					}
				}

				goto loopBreakEmpty;
			loopEmptyChess:;
				mciSendString(_T("close ./source/can't.mp3"), 0, 0, 0);
				mciSendString(_T("open ./source/can't.mp3"), 0, 0, 0);
				mciSendString(_T("play ./source/can't.mp3"), 0, 0, 0);
			loopBreakEmpty:;
			}
		}
		if (ifWin)
		{
			if (ifWin == 1) //���һʤ
			{
				mciSendString(_T("close ./source/vectory.wav"), 0, 0, 0);
				mciSendString(_T("open ./source/vectory.wav"), 0, 0, 0);
				mciSendString(_T("play ./source/vectory.wav"), 0, 0, 0);
				mciSendString(_T("close ./source/backGround.mp3"), 0, 0, 0);
				if (ifRobot)
				{
					MessageBox(hWnd, "You Wins!", "Wow!", MB_OK);
				}
				else
				{
					MessageBox(hWnd, "The First Wins.", "PlayerI Wins!", MB_OK);
				}
			}
			else if (ifWin == 2) //��Ҷ�ʤ
			{
				if (ifRobot)
				{
					mciSendString(_T("close ./source/lose.mp3"), 0, 0, 0);
					mciSendString(_T("open ./source/lose.mp3"), 0, 0, 0);
					mciSendString(_T("play ./source/lose.mp3"), 0, 0, 0);
					mciSendString(_T("close ./source/backGround.mp3"), 0, 0, 0);
					MessageBox(hWnd, "You Lose ~-~", "Oh.", MB_OK);
				}
				else
				{
					mciSendString(_T("open ./source/vectory.wav"), 0, 0, 0);
					mciSendString(_T("play ./source/vectory.wav"), 0, 0, 0);
					mciSendString(_T("close ./source/backGround.mp3"), 0, 0, 0);
					MessageBox(hWnd, "The Second Wins.", "PlayerII Wins!", MB_OK);
				}

			}
			else//What?!400����������
			{
				mciSendString(_T("open ./source/vectory.wav"), 0, 0, 0);
				mciSendString(_T("play ./source/vectory.wav"), 0, 0, 0);
				mciSendString(_T("close ./source/backGround.mp3"), 0, 0, 0);
				MessageBox(hWnd, "You two filled the chessBoard!\nDon't want to fight 300times more?", "Wow!", MB_OK);
			}
			break;
		}
		//Sleep(50);
	}
	int choice = MessageBox(hWnd, "������������\n���������˳�\n��ȡ������ԭ״", "More?Ҫ����һ����", MB_YESNOCANCEL);
	bool ifOneMore = 0;
	if (choice == 6)//��
	{
		ifOneMore = 1;
	}
	else if (choice == 7)//��
	{
		ifOneMore = 0;
	}
	else //2ȡ��
	{
		strcpy_s(allRectangle[2].msg, "");
		redraw(0);
		bool ifThen = ifGoon();
		if (ifThen == 1)return play();
	}
	return end(ifOneMore);
}

void init(int argc,char *argv[])
{
	srand(time(0));
	hWnd = initgraph(800, 600);
	MoveWindow(hWnd, 350, 130, 800, 600, true);
	setbkmode(TRANSPARENT);//͸������

	int xrec0 = 600, yrec0 = 32;
	int dxrec = 140, dyrec = 30;
	int dxrect0 = 50, dyrect0 = 8;
	allRectangle[0].l = xrec0, allRectangle[0].top = yrec0, allRectangle[0].r = xrec0 + dxrec, allRectangle[0].buttom = yrec0 + dyrec;
	strcpy_s(allRectangle[0].msg, "Tisfy");
	allRectangle[0].color = BROWN;
	allRectangle[0].xt = xrec0 + dxrect0, allRectangle[0].yt = yrec0 + dyrect0;

	int xrec1 = xrec0 + 0, yrec1 = yrec0 + 70;
	int dxrect1 = 59, dyrect1 = 8;
	allRectangle[1].l = xrec1, allRectangle[1].top = yrec1, allRectangle[1].r = xrec1 + dxrec, allRectangle[1].buttom = yrec1 + dyrec;
	strcpy_s(allRectangle[1].msg, "�M");
	allRectangle[1].color = BROWN;
	allRectangle[1].xt = xrec1 + dxrect1, allRectangle[1].yt = yrec1 + dyrect1;

	int xrec2 = xrec0 + 0, yrec2 = yrec0 + 382;
	int dxrect2 = 52, dyrect2 = 8;
	allRectangle[2].l = xrec2, allRectangle[2].top = yrec2, allRectangle[2].r = xrec2 + dxrec, allRectangle[2].buttom = yrec2 + dyrec;
	strcpy_s(allRectangle[2].msg, "����");
	allRectangle[2].color = 0x165033;
	allRectangle[2].xt = xrec2 + dxrect2, allRectangle[2].yt = yrec2 + dyrect2;

	int xrec3 = xrec0 + 0, yrec3 = yrec0 + 420;
	int dxrect3 = 36, dyrect3 = 8;
	allRectangle[3].l = xrec3, allRectangle[3].top = yrec3, allRectangle[3].r = xrec3 + dxrec, allRectangle[3].buttom = yrec3 + dyrec;
	strcpy_s(allRectangle[3].msg, "���¿�ʼ");
	allRectangle[3].color = 0x145213;
	allRectangle[3].xt = xrec3 + dxrect3, allRectangle[3].yt = yrec3 + dyrect3;

	int xrec4 = xrec0 + 0, yrec4 = yrec0 + 238;
	int dxrect4 = 36, dyrect4 = 8;
	allRectangle[4].l = xrec4, allRectangle[4].top = yrec4, allRectangle[4].r = xrec4 + dxrec, allRectangle[4].buttom = yrec4 + dyrec;
	strcpy_s(allRectangle[4].msg, "��Ϊ����");
	allRectangle[4].color = 0x145213;
	allRectangle[4].xt = xrec4 + dxrect4, allRectangle[4].yt = yrec4 + dyrect4;

	int xrec5 = xrec0 + 0, yrec5 = yrec0 + 200;
	int dxrect5 = 36, dyrect5 = 8;
	allRectangle[5].l = xrec5, allRectangle[5].top = yrec5, allRectangle[5].r = xrec5 + dxrec, allRectangle[5].buttom = yrec5 + dyrec;
	strcpy_s(allRectangle[5].msg, "����ͼƬ");
	allRectangle[5].color = 0x145213;
	allRectangle[5].xt = xrec5 + dxrect5, allRectangle[5].yt = yrec5 + dyrect5;

	int xrec6 = xrec0 + 0, yrec6 = yrec0 + 456;
	int dxrect6 = 36, dyrect6 = 8;
	allRectangle[6].l = xrec6, allRectangle[6].top = yrec6, allRectangle[6].r = xrec6 + dxrec, allRectangle[6].buttom = yrec6 + dyrec;
	strcpy_s(allRectangle[6].msg, "������ҳ");
	allRectangle[6].color = 0x145213;
	allRectangle[6].xt = xrec6 + dxrect6, allRectangle[6].yt = yrec6 + dyrect6;

	int xrec7 = xrec0 + 0, yrec7 = yrec0 + 35;
	int dxrect7 = 36, dyrect7 = 8;
	allRectangle[7].l = xrec7, allRectangle[7].top = yrec7, allRectangle[7].r = xrec7 + dxrec, allRectangle[7].buttom = yrec7 + dyrec;
	strcpy_s(allRectangle[7].msg, "����Rob?");
	allRectangle[7].color = RGB(65, 105, 225);
	allRectangle[7].xt = xrec7 + dxrect7, allRectangle[7].yt = yrec7 + dyrect7;

	int xrec8 = xrec0 + 0, yrec8 = yrec0 + 305;
	int dxrect8 = 36, dyrect8 = 8;
	allRectangle[8].l = xrec8, allRectangle[8].top = yrec8, allRectangle[8].r = xrec8 + dxrec, allRectangle[8].buttom = yrec8 + dyrec;
	strcpy_s(allRectangle[8].msg, "��������");
	allRectangle[8].color = RGB(139, 0, 0);
	allRectangle[8].xt = xrec8 + dxrect8, allRectangle[8].yt = yrec8 + dyrect8;

	if (argc == 2 && _stricmp(argv[1], "-h") == 0)
	{
		changeOppinent(allRectangle[4].l, allRectangle[4].top);
	}

	redraw(1);

}


int main(int argc,char*argv[])
{
	init(argc,argv);
	play();
	return 0;
}