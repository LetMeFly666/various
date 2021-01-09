#include<graphics.h>
#include<conio.h>
#include<time.h>
#include<bits/stdc++.h>
using namespace std;
POINT* g_mubiao;
POINT* g_yuan;
int g_wid;
int g_high;
int g_count;
int Getmubiao()
{
	IMAGE img;
	SetWorkingImage(&img);
	TCHAR s[] = _T("Code For Love");
	settextcolor(WHITE);
	settextstyle(100, 0, _T("Segoe Script"));
	//settextstyle(100, 0, _T("Cunia"));


	g_wid = textwidth(s);
	g_high = textheight(s);
	Resize(&img, g_wid, g_high);
	outtextxy(0, 0, s);
	for (int i = 0; i < g_wid; i++)
	{
		for (int j = 0; j < g_high; j++)
		{
			if (getpixel(i, j) == WHITE)
			{
				g_count++;
			}
		}
	}
	g_mubiao = new POINT[g_count];
	int i = 0;
	for (int x = 0; x < g_wid; x++)
	{
		for (int y = 0; y < g_high; y++)
		{
			if (getpixel(x, y) == WHITE)
			{
				g_mubiao[i].x = x + (800 - g_wid) / 2;
				g_mubiao[i].y = y + (600 - g_high) / 2;
				i++;
			}
		}
	}

	SetWorkingImage(NULL);
	return 0;
}
int Getyuan()
{
	srand((unsigned)time(NULL));
	g_yuan = new POINT[g_count];
	for (int i = 0; i < g_count; i++)
	{
		g_yuan[i].x = rand() % 800;
		g_yuan[i].y = rand() % 600;
	}


	return 0;
}
int blur(DWORD* pMem)
{
	for (int i = 800; i < 800 * 599; i++)
	{
		pMem[i] = RGB(
			(GetRValue(pMem[i]) + GetRValue(pMem[i - 800]) + GetRValue(pMem[i + 800]) + GetRValue(pMem[i - 1]) + GetRValue(pMem[i + 1])) / 5,
			(GetGValue(pMem[i]) + GetGValue(pMem[i - 800]) + GetGValue(pMem[i + 800]) + GetGValue(pMem[i - 1]) + GetGValue(pMem[i + 1])) / 5,
			(GetBValue(pMem[i]) + GetBValue(pMem[i - 800]) + GetBValue(pMem[i + 800]) + GetBValue(pMem[i - 1]) + GetBValue(pMem[i + 1])) / 5
		);
	}
	return 0;
}
struct STAR
{
	int x, y;
	double step;
	int color;
}S[400];
int init(int i)
{
	//S[i].x = rand() % 640;
	S[i].x = 0;
	S[i].y = rand() % 480;
	S[i].step = (rand() % 5000) / 1000.0 + 2;
	S[i].color = (int)(S[i].step * 255 / 6.0 + 0.5);
	S[i].color = RGB(S[i].color, S[i].color, S[i].color);
	return 0;
}
int move(int i)
{

	putpixel(S[i].x, S[i].y, 0);
	S[i].x += S[i].step;
	if (S[i].x > 800) init(i);
	putpixel((int)S[i].x, S[i].y, S[i].color);

	return 0;
}
/*int dianji()
{
	MOUSEMSG m;

	while (1)
	{
		if (MouseHit())
		{
			m = GetMouseMsg();
			if (m.uMsg == WM_LBUTTONDOWN)
			{
				if (m.x >= 680 && m.x <= 770 && m.y >= 525 && m.y <= 570)
				{
					goto:loop1;
				}
			}
		}
	}

	return 0;
}*/

int main(int argc, char* argv[])
{

	HWND hWnd=initgraph(800, 600);
	MoveWindow(hWnd, 350, 130, 800, 600, true);

	setbkmode(TRANSPARENT);
	Getmubiao();
	Getyuan();
	TCHAR s1[] = _T("以棋会友，其乐无穷！");
	TCHAR s2[] = _T("1.欢乐五子棋");
	TCHAR s3[] = _T("2.快乐井字棋");
	DWORD* pMem = GetImageBuffer();

	if (argc == 2 && _stricmp(argv[1], "-h") == 0)
	{
		goto loop1;
	}
	


	for (int i = 2; i <= 256; i += 2)
	{
		blur(pMem);
		COLORREF t = RGB(i - 1, i - 1, i - 1);
		for (int j = 0; j < g_count; j++)
		{
			int x = g_yuan[j].x + (g_mubiao[j].x - g_yuan[j].x) * i / 256;
			int y = g_yuan[j].y + (g_mubiao[j].y - g_yuan[j].y) * i / 256;
			pMem[800 * y + x] = t;
		}

		Sleep(20);
	}
	Sleep(1000);
	for (int i = 256; i >= 150; i -= 2)
	{
		//blur(pMem);
		COLORREF t = RGB(i - 1, i - 1, i - 1);
		for (int j = 0; j < g_count; j++)
		{
			int x = g_yuan[j].x + (g_mubiao[j].x - g_yuan[j].x) * i / 256;
			int y = g_yuan[j].y + (g_mubiao[j].y - g_yuan[j].y) * i / 256;
			pMem[800 * y + x] = t;
		}

		Sleep(20);
	}

	Sleep(500);
	
	delete g_mubiao;
	delete g_yuan;
loop1:
	cleardevice();
	loadimage(NULL, _T("./source/true.jpg"));
	
	settextstyle(50, 0, _T("华文行楷"));

	outtextxy(190, 100, s1);

	roundrect(280, 220, 520, 280, 20, 20);
	
	settextstyle(30, 0, _T("华文行楷"));
	outtextxy(320, 235, s2);

	roundrect(280, 340, 520, 400, 20, 20);
	
	settextstyle(30, 0, _T("华文行楷"));
	outtextxy(320, 355, s3);

	srand((unsigned)time(NULL));

	for (int i = 0; i < 480; i++)
	{

		init(i);
		S[i].x = rand() % 800;
	}

	MOUSEMSG M;
	while (1)
	{
		if (MouseHit())
		{
			M = GetMouseMsg();
			if (M.uMsg == WM_LBUTTONDOWN)
			{

				//printf(" %d %d\n", M.x, M.y);
				if (M.x >= 260 && M.x <= 500 && M.y >= 220 && M.y <= 280)
				{

					cleardevice();
					TCHAR s88[] = _T("五子棋正在加载，可以看一会星空哦");
					settextstyle(30, 0, _T("华文行楷"));
					outtextxy(150, 525, s88);
					for (int j = 0; j < 300; j++)
					{
						for (int i = 0; i < 300; i++)
						{

							move(i);

						}
						Sleep(10);
					}
					//system("start animation.exe");
					//exit(0);
					//loop2:
					cleardevice();
					loadimage(NULL, _T("./source/5.jpg"));
					TCHAR s1[] = _T("        欢乐五子棋");
					settextstyle(50, 0, _T("华文行楷"));
					outtextxy(190, 100, s1);

					roundrect(280, 220, 520, 280, 20, 20);
					TCHAR s2[] = _T(" 1.人机博弈");
					settextstyle(30, 0, _T("华文行楷"));
					outtextxy(326, 235, s2);

					roundrect(280, 340, 520, 400, 20, 20);
					TCHAR s3[] = _T(" 2.人人对战");
					settextstyle(30, 0, _T("华文行楷"));
					outtextxy(326, 355, s3);

					roundrect(680, 525, 770, 570, 10, 10);
					TCHAR s66[] = _T("返回首页");
					settextstyle(20, 0, _T("华文行楷"));
					outtextxy(685, 540, s66);
					MOUSEMSG m1;

					while (1)
					{
						if (MouseHit())
						{
							m1 = GetMouseMsg();
							if (m1.uMsg == WM_LBUTTONDOWN)
							{
								if (m1.x >= 680 && m1.x <= 770 && m1.y >= 525 && m1.y <= 570)
								{
									goto loop1;
									break;
								}
								else if (m1.x >= 280 && m1.x <= 520 && m1.y >= 220 && m1.y <= 280)//人机
								{
									system("start 五子棋.exe");
									return 0;
								}
								else if (m1.x >= 280 && m1.x <= 520 && m1.y >= 340 && m1.y <= 400)//人人
								{
									system("start 五子棋.exe -h");
									return 0;
								}
							}

						}
					}

					break;
				}
				else if (M.x >= 260 && M.x <= 500 && M.y >= 340 && M.y <= 400)
				{

					cleardevice();
					TCHAR s4[] = _T("井字棋正在加载，可以看一会星空哦");
					settextstyle(30, 0, _T("华文行楷"));
					outtextxy(150, 525, s4);
					for (int j = 0; j < 300; j++)
					{
						for (int i = 0; i < 300; i++)
						{

							move(i);

						}
						Sleep(10);
					}
					cleardevice();
					loadimage(NULL, _T("./source/5.jpg"));
					//settextcolor(BLACK);
					TCHAR s1[] = _T("        快乐井字棋");
					settextstyle(50, 0, _T("华文行楷"));
					outtextxy(190, 100, s1);

					roundrect(280, 220, 520, 280, 20, 20);
					TCHAR s2[] = _T(" 1.人人对战");
					settextstyle(30, 0, _T("华文行楷"));
					outtextxy(326, 235, s2);

					roundrect(280, 340, 520, 400, 20, 20);
					TCHAR s3[] = _T(" 2.人机博弈");
					settextstyle(30, 0, _T("华文行楷"));
					outtextxy(326, 355, s3);

					roundrect(680, 525, 770, 570, 10, 10);
					TCHAR s67[] = _T("返回首页");
					settextstyle(20, 0, _T("华文行楷"));
					outtextxy(685, 540, s67);

					MOUSEMSG m2;

					while (1)
					{
						if (MouseHit())
						{
							m2 = GetMouseMsg();
							if (m2.uMsg == WM_LBUTTONDOWN)
							{
								if (m2.x >= 680 && m2.x <= 770 && m2.y >= 525 && m2.y <= 570)
								{
									goto loop1;
									break;
								}
								else if (m2.x >= 280 && m2.x <= 520 && m2.y >= 220 && m2.y <= 280)//人机
								{
									system("start HappyVally.exe");
									return 0;
								}
								else if (m2.x >= 280 && m2.x <= 520 && m2.y >= 340 && m2.y <= 400)//人人
								{
									system("start manVsbot.exe");
									return 0;
								}
							}


						}

					}



				}
			}

		}
	}

	//while (!_kbhit())
	//{


	//}

	//setfillcolor(BLUE);
	getchar();
	closegraph();
	return 0;
}



