#include<stdio.h>
#include<graphics.h>	//ͼ�ο�ͷ�ļ�
#include<mmsystem.h>	//��������ͷ�ļ�
#include<math.h>
#include<conio.h>
#include<random>
#include<time.h>
#include<Windows.h>
#pragma comment(lib, "winmm.lib")	//�������ֿ��ļ�

int mp[3][3];
int circlecolor, Xcolor;
bool isEnd = false;

int SetColor();
int init(HWND& h);
int Compute(int& x, int& y, int c);
int DrawX(int x, int y);
int DrawO(int a, int b);
int Judge(int x, int y, HWND& h);
int PlayChess(HWND &h);
int ReStart(HWND &h);
int ReStart(HWND& h) {
	memset(mp, 0, sizeof(mp));
	isEnd = false;
	srand(time(0));
	h = initgraph(800, 600, EW_SHOWCONSOLE);
	MoveWindow(h, 350, 130, 800, 600, true);
	circlecolor = SetColor();
	Xcolor = SetColor();
	while (Xcolor == circlecolor) {
		Xcolor = SetColor();
	}
	loadimage(NULL, "./source/picture.jpg", NULL, NULL, false);	//��ͼƬ
	setlinecolor(0x53868B);
	//���С 480*480  ���϶���(60,60)
	setlinestyle(PS_SOLID | PS_ENDCAP_SQUARE, 7);
	line(60, 60, 540, 60);
	line(60, 60, 60, 540);
	line(60, 540, 540, 540);
	line(540, 60, 540, 540);
	line(220, 60, 220, 540);
	line(380, 60, 380, 540);
	line(60, 220, 540, 220);
	line(60, 380, 540, 380);
	int a = 60, b = 60;
	setlinecolor(BLACK);
	//���С 480*480  ���϶���(60,60)
	//DrawX(140, 140);
	setbkmode(TRANSPARENT);
	// ���õ�ǰ����Ϊ�� 50 ���صġ�Consolas����(VC6 / VC2008 / VC2010 / VC2012)
	settextstyle(50, 30, _T("Consolas"));
	settextcolor(BLACK);
	outtextxy(150, 0, _T("�������ս"));	//title
	setbkcolor(WHITE);
	settextcolor(GREEN);
	setbkmode(OPAQUE);
	settextstyle(20, 12, _T("Consolas"));
	outtextxy(600, 480, _T("���¿�ʼ"));
	outtextxy(600, 510, _T("������ҳ"));
	outtextxy(600, 450, _T("�л������˶�ս"));
	setlinecolor(0xFF6347);
	setlinestyle(PS_SOLID | PS_ENDCAP_FLAT, 3);
	rectangle(600, 480, 696, 500);
	rectangle(600, 510, 695, 530);
	rectangle(600, 450, 770, 470);
	PlayChess(h);
	return 0;
}
int SetColor() {
	switch (rand() % 15)
	{
	case 0:return 0x3CB371; 	//MediumSeaGreen
	case 1:return 0x00CD00; 	//Green3
	case 2:return 0x8B658B;		//DarkGoldenrod4
	case 3:return 0xCD9B9B;		//RosyBrown3
	case 4:return 0x9932CC; 	//DarkOrchid
	case 5:return 0xFF1493; 	//DeepPink1
	case 6:return 0x000080; 	//NavyBlue
	case 7:return 0x8B658B; 	//DarkGoldenrod4
	case 8:return 0x008B8B; 	//DarkCyan
	case 9:return 0xFF6347; 	//Tomato
	case 10:return 0xCD5C5C;	//IndianRed	
	case 11:return 0x9B30FF;	//Purple1
	case 12:return 0xEE30A7;	//Maroon2
	case 13:return 0x363636;	//grey21
	case 14:return 0x8B008B;	//DarkMagenta
	default:
		break;
	}
	return 0;
}
int init(HWND& h) {
	srand(time(0));
	h = initgraph(800, 600);
	MoveWindow(h, 350, 130, 800, 600, true);
	circlecolor = SetColor();
	Xcolor = SetColor();
	while (Xcolor == circlecolor) {
		Xcolor = SetColor();
	}
	loadimage(NULL, "./source/picture.jpg", NULL, NULL, false);	//��ͼƬ
	setlinecolor(0x53868B);
	//���С 480*480  ���϶���(60,60)
	setlinestyle(PS_SOLID | PS_ENDCAP_SQUARE, 7);
	line(60, 60, 540, 60);
	line(60, 60, 60, 540);
	line(60, 540, 540, 540);
	line(540, 60, 540, 540);
	line(220, 60, 220, 540);
	line(380, 60, 380, 540);
	line(60, 220, 540, 220);
	line(60, 380, 540, 380);
	int a = 60, b = 60;
	setlinecolor(BLACK);
	//���С 480*480  ���϶���(60,60)
	//DrawX(140, 140);
	setbkmode(TRANSPARENT);
	// ���õ�ǰ����Ϊ�� 50 ���صġ�Consolas����(VC6 / VC2008 / VC2010 / VC2012)
	settextstyle(50, 30, _T("Consolas"));
	settextcolor(BLACK);
	outtextxy(150, 0, _T("�������ս"));	//title
	setbkcolor(WHITE);
	settextcolor(GREEN);
	setbkmode(OPAQUE);
	settextstyle(20, 12, _T("Consolas"));
	outtextxy(600, 480, _T("���¿�ʼ"));
	outtextxy(600, 510, _T("������ҳ"));
	outtextxy(600, 450, _T("�л������˶�ս"));
	setlinecolor(0xFF6347);
	setlinestyle(PS_SOLID | PS_ENDCAP_FLAT, 3);
	rectangle(600, 480, 696, 500);
	rectangle(600, 510, 695, 530);
	rectangle(600, 450, 770, 470);
	return 0;
}
int Compute(int& x, int& y, int c)
{
	int i, j;
	if (mp[1][1] == 0) {
		mp[1][1] = c % 2 + 1;
		x = 1, y = 1;
		return 0;
	}
	if (c == 1) {
		mp[0][0] = 2;
		x = 0, y = 0;
		return 0;
	}

	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			if (i == 0 && mp[i][j] == 0) {
				if (mp[i + 1][j] != 0 && mp[i + 1][j] != c % 2 + 1 && mp[i + 1][j] == mp[i + 2][j]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (i == 1 && mp[i][j] == 0) {
				if (mp[i + 1][j] != 0 && mp[i + 1][j] != c % 2 + 1 && mp[i + 1][j] == mp[i - 1][j]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (i == 2 && mp[i][j] == 0) {
				if (mp[i - 1][j] != 0 && mp[i - 1][j] != c % 2 + 1 && mp[i - 1][j] == mp[i - 2][j]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (j == 0 && mp[i][j] == 0) {
				if (mp[i][j + 1] != 0 && mp[i][j + 1] != c % 2 + 1 && mp[i][j + 1] == mp[i][j + 2]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (j == 1 && mp[i][j] == 0) {
				if (mp[i][j + 1] != 0 && mp[i][j + 1] != c % 2 + 1 && mp[i][j + 1] == mp[i][j - 1]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (j == 2 && mp[i][j] == 0) {
				if (mp[i][j - 1] != 0 && mp[i][j - 1] != c % 2 + 1 && mp[i][j - 1] == mp[i][j - 2]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (i == 0 && j == 0 && mp[0][0] == 0) {
				if (mp[1][1] != 0 && mp[1][1] != c % 2 + 1 && mp[1][1] == mp[2][2]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (i == 2 && j == 2 && mp[2][2] == 0) {
				if (mp[1][1] != 0 && mp[1][1] != c % 2 + 1 && mp[1][1] == mp[0][0]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (i == 0 && j == 2 && mp[0][2] == 0) {
				if (mp[1][1] != 0 && mp[1][1] != c % 2 + 1 && mp[1][1] == mp[2][0]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (i == 2 && j == 0 && mp[2][0] == 0) {
				if (mp[1][1] != 0 && mp[1][1] != c % 2 + 1 && mp[1][1] == mp[0][2]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
		}
	}
	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			if (i == 0 && mp[i][j] == 0) {
				if (mp[i + 1][j] == c % 2 + 1 && mp[i + 1][j] == mp[i + 2][j]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (i == 1 && mp[i][j] == 0) {
				if (mp[i + 1][j] == c % 2 + 1 && mp[i + 1][j] == mp[i - 1][j]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (i == 2 && mp[i][j] == 0) {
				if (mp[i - 1][j] == c % 2 + 1 && mp[i - 1][j] == mp[i - 2][j]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (j == 0 && mp[i][j] == 0) {
				if (mp[i][j + 1] == c % 2 + 1 && mp[i][j + 1] == mp[i][j + 2]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (j == 1 && mp[i][j] == 0) {
				if (mp[i][j + 1] == c % 2 + 1 && mp[i][j + 1] == mp[i][j - 1]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			else if (j == 2 && mp[i][j] == 0) {
				if (mp[i][j - 1] == c % 2 + 1 && mp[i][j - 1] == mp[i][j - 2]) {
					x = i, y = j;
					mp[i][j] = c % 2 + 1;
					return 0;
				}
			}
			if (j == i && i == 0 && mp[0][0] == 0) {
				if (mp[1][1] == c % 2 + 1 && mp[2][2] == mp[1][1]) {
					x = 0, y = 0;
					mp[0][0] = c % 2 + 1;
					return 0;
				}
			}
			if (j == i && i == 2 && mp[2][2] == 0) {
				if (mp[1][1] == c % 2 + 1 && mp[1][1] == mp[0][0]) {
					x = 2, y = 2;
					mp[2][2] = c % 2 + 1;
					return 0;
				}
			}
			if (j == 0 && i == 2 && mp[0][2] == 0) {
				if (mp[1][1] == c % 2 + 1 && mp[1][1] == mp[2][0]) {
					x = 0, y = 2;
					mp[0][2] = c % 2 + 1;
					return 0;
				}
			}
			if (j == 2 && i == 0 && mp[2][0] == 0) {
				if (mp[1][1] == c % 2 + 1 && mp[1][1] == mp[0][2]) {
					x = 2, y = 0;
					mp[2][0] = c % 2 + 1;
					return 0;
				}
			}
		}
	}
	if (c == 2) {
		for (i = 0; i < 3; i++)
			for (j = 0; j < 3; j++) {
				if (mp[i][j] == 2&& mp[i - 1][j]) {
					if (i == 1&&mp[i-1][j]==0) {
						mp[i - 1][j] = 1;
						x = i - 1, y = j;
						return 0;
					}
					if (j == 1) {
						mp[i][j - 1] = 1;
						x = i, y = j - 1;
						return 0;
					}
					if (i == 2) {
						mp[i - 2][j] = 1;
						x = i - 2, y = j;
						return 0;
					}
					if (j == 2) {
						mp[i + 2][j] = 1;
						x = i + 2, y = j;
						return 0;
					}
				}
			}
	}
	if (c == 3) {
		if (mp[0][0] == 1 && mp[2][2] == 1&&mp[1][0]==0) {
			x = 1, y = 0;
			mp[1][0] = 2;
			return 0;
		}
		if (mp[2][0] == 1 && mp[0][2] == 1 && mp[0][1] == 0) {
			x = 0, y = 1;
			mp[0][1] = 2;
			return 0;
		}
	}
	if (mp[0][0] == 0) {
		if ((mp[0][1] == c % 2 + 1 || mp[0][2] == c % 2 + 1) && (mp[1][0] == c % 2 + 1 || mp[2][0] == c % 2 + 1)) {
			x = 0, y = 0;
			mp[0][0] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[2][0] == 0) {
		if ((mp[2][1] == c % 2 + 1 || mp[2][2] == c % 2 + 1) && (mp[1][0] == c % 2 + 1 || mp[0][0] == c % 2 + 1)) {
			x = 2, y = 0;
			mp[2][0] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[0][2] == 0) {
		if ((mp[0][1] == c % 2 + 1 || mp[0][0] == c % 2 + 1) && (mp[1][2] == c % 2 + 1 || mp[2][2] == c % 2 + 1)) {
			x = 0, y = 2;
			mp[0][2] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[2][2] == 0) {
		if ((mp[2][1] == c % 2 + 1 || mp[2][0] == c % 2 + 1) && (mp[1][2] == c % 2 + 1 || mp[0][2] == c % 2 + 1)) {
			x = 2, y = 2;
			mp[2][2] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[1][1] == c % 2 + 1) {
		if ((mp[0][0] == c % 2 + 1 && mp[2][0] == 0 && mp[1][2] == 0 && mp[1][0] == 0) || (mp[2][0] == c % 2 + 1 && mp[0][0] == 0 && mp[1][2] == 0 && mp[1][0] == 0)) {
			x = 1, y = 0;
			mp[1][0] = c % 2 + 1;
			return 0;
		}
		if ((mp[0][0] == c % 2 + 1 && mp[0][2] == 0 && mp[2][1] == 0 && mp[0][1] == 0) || (mp[0][2] == c % 2 + 1 && mp[0][0] == 0 && mp[2][1] == 0 && mp[0][1] == 0)) {
			x = 0, y = 1;
			mp[0][1] = c % 2 + 1;
			return 0;
		}
		if ((mp[2][2] == c % 2 + 1 && mp[0][2] == 0 && mp[1][0] == 0 && mp[1][2] == 0) || (mp[0][2] == c % 2 + 1 && mp[2][2] == 0 && mp[1][0] == 0 && mp[1][2] == 0)) {
			x = 1, y = 2;
			mp[1][2] = c % 2 + 1;
			return 0;
		}
		if ((mp[2][2] == c % 2 + 1 && mp[2][0] == 0 && mp[0][1] == 0 && mp[2][1] == 0) || (mp[2][0] == c % 2 + 1 && mp[2][2] == 0 && mp[0][1] == 0 && mp[2][1] == 0)) {
			x = 2, y = 1;
			mp[2][1] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[0][0] == 0) {
		if (((mp[0][1] != 0 && mp[0][1] != c % 2 + 1) || (mp[0][2] != 0 && mp[0][2] != c % 2 + 1)) && ((mp[1][0] != 0 && mp[1][0] != c % 2 + 1) || (mp[2][0] != 0 && mp[2][0] != c % 2 + 1))) {
			x = 0, y = 0;
			mp[0][0] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[2][0] == 0) {
		if (((mp[2][1] != 0 && mp[2][1] != c % 2 + 1) || (mp[2][2] != 0 && mp[2][2] != c % 2 + 1)) && ((mp[1][0] != 0 && mp[1][0] != c % 2 + 1) || (mp[0][0] != 0 && mp[0][0] != c % 2 + 1))) {
			x = 2, y = 0;
			mp[2][0] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[0][2] == 0) {
		if (((mp[0][1] != 0 && mp[0][1] != c % 2 + 1) || (mp[0][0] != 0 && mp[0][0] != c % 2 + 1)) && ((mp[1][2] != 0 && mp[1][2] != c % 2 + 1) || (mp[2][2] != 0 && mp[2][2] != c % 2 + 1))) {
			x = 0, y = 2;
			mp[0][2] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[2][2] == 0) {
		if (((mp[2][1] != 0 && mp[2][1] != c % 2 + 1) || (mp[2][0] != 0 && mp[2][0] != c % 2 + 1)) && ((mp[1][2] != 0 && mp[1][2] != c % 2 + 1) || (mp[0][2] != 0 && mp[0][2] != c % 2 + 1))) {
			x = 2, y = 2;
			mp[2][2] = c % 2 + 1;
			return 0;
		}
	}
	if (mp[1][1] == (c + 1) % 2 + 1 && mp[2][2] == mp[1][1]&&mp[0][2]==0) {
		x = 0, y = 2;
		mp[0][2] = c % 2 + 1;
		return 0;
	}
	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			if (mp[i][j] == 0) {
				mp[i][j] = c % 2 + 1;
				x = i, y = j;
				return 0;
			}
		}
	}
	return 0;
}
int DrawX(int x, int y) {
	setlinecolor(Xcolor);
	setlinestyle(PS_SOLID | PS_ENDCAP_ROUND, 15);
	line(x - 55, y - 55, x + 55, y + 55);
	line(x + 55, y - 55, x - 55, y + 55);
	return 0;
}
int DrawO(int a, int b) {
	setlinecolor(circlecolor);
	setlinestyle(PS_SOLID | PS_ENDCAP_SQUARE, 16);
	circle(a, b, 60);
	return 0;
}
int Judge(int x, int y, HWND& h) {
	settextstyle(25, 14, _T("Consolas"));
	settextcolor(RED);
	if (mp[x][0] == mp[x][1] && mp[x][0] == mp[x][2] && mp[x][0] != 0) {
		if (mp[x][0] == 1) {
			mciSendString("close ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("open ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("play ./source/ʤ��.wav", 0, 0, 0);
			MessageBox(h, "��ʤ����", "���", MB_OK);
			outtextxy(600, 140, _T("��ʤ����"));
		}
		if (mp[x][0] == 2) {
			mciSendString("close ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("open ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("play ./source/ʧ��.mp3", 0, 0, 0);
			MessageBox(h, "����ʤ��", "���", MB_OK);
			outtextxy(600, 140, _T("����ʤ��"));
		}
		isEnd = true;
	}
	if (mp[0][y] == mp[1][y] && mp[0][y] == mp[2][y] && mp[0][y] != 0) {
		if (mp[0][y] == 1) {
			mciSendString("close ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("open ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("play ./source/ʤ��.wav", 0, 0, 0);
			MessageBox(h, "��ʤ����", "���", MB_OK);
			outtextxy(600, 140, _T("��ʤ����"));
		}
		if (mp[0][y] == 2) {
			mciSendString("close ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("open ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("play ./source/ʧ��.mp3", 0, 0, 0);
			MessageBox(h, "����ʤ��", "���", MB_OK);
			outtextxy(600, 140, _T("����ʤ��"));
		}
		isEnd = true;
	}
	if (mp[0][0] == mp[1][1] && mp[0][0] == mp[2][2] && mp[0][0] != 0) {
		if (mp[0][0] == 1) {
			mciSendString("close ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("open ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("play ./source/ʤ��.wav", 0, 0, 0);
			MessageBox(h, "��ʤ����", "���", MB_OK);
			outtextxy(600, 140, _T("��ʤ����"));
		}
		if (mp[0][0] == 2) {
			mciSendString("close ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("open ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("play ./source/ʧ��.mp3", 0, 0, 0);
			MessageBox(h, "����ʤ��", "���", MB_OK);
			outtextxy(600, 140, _T("����ʤ��"));
		}
		isEnd = true;
	}
	if (mp[2][0] == mp[1][1] && mp[2][0] == mp[0][2] && mp[2][0] != 0) {
		if (mp[2][0] == 1) {
			mciSendString("close ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("open ./source/ʤ��.wav", 0, 0, 0);
			mciSendString("play ./source/ʤ��.wav", 0, 0, 0);
			MessageBox(h, "��ʤ����", "���", MB_OK);
			outtextxy(600, 140, _T("��ʤ����"));
		}
		if (mp[2][0] == 2) {
			mciSendString("close ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("open ./source/ʧ��.mp3", 0, 0, 0);
			mciSendString("play ./source/ʧ��.mp3", 0, 0, 0);
			MessageBox(h, "����ʤ��", "���", MB_OK);
			outtextxy(600, 140, _T("����ʤ��"));
		}
		isEnd = true;
	}
	if (isEnd)
		return 0;
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			if (mp[i][j] == 0) {
				return 0;
			}
		}
	}
	mciSendString("close ./source/ƽ��.mp3", 0, 0, 0);
	mciSendString("open ./source/ƽ��.mp3", 0, 0, 0);
	mciSendString("play ./source/ƽ��.mp3", 0, 0, 0);
	MessageBox(h, "ƽ��", "���", MB_OK);
	outtextxy(600, 140, _T("ƽ��"));
	isEnd = true;
	return 0;
}
int PlayChess(HWND& h) {
	int order = 1;
	int choice = MessageBox(h, "�Ƿ�����?", "ѡ��", MB_YESNO);
	if (choice == 6) {
		order = 1;
	}
	else {
		order = 2;
	}
	//order==1 ���� ���� order==2 ������ ����
	int times = 0;
	MOUSEMSG m;
	while (1) {
		if (isEnd)
			order = 1;
		if (order == 2) {//������
			if (isEnd)
				continue;
			int x, y;
			Compute(x, y, times);
			int a = 160 * x + 140;
			int b = 160 * y + 140;
			Sleep(200);
			DrawO(a, b);
			mp[x][y] = 2;
			times++;
			order = 1;
			Judge(x, y, h);
		}
		if(order == 1) {
			if (MouseHit()) {
				m = GetMouseMsg();
				if (m.uMsg == WM_LBUTTONDOWN) {
					if (m.x >= 600 && m.x <= 696 && m.y >= 480 && m.y <= 500) {
						//restart
						ReStart(h);
					}
					if (m.x >= 600 && m.x <= 770 && m.y >= 450 && m.y <= 470) {
						//�������˶�ս
						system("start HappyVally.exe");
						exit(0);
					}
					if (m.x >= 600 && m.x <= 720 && m.y >= 510 && m.y <= 530) {
						//���ؽӿ� 
						system("start Interface.exe -h");
						exit(0);
					}
					if (isEnd) {
						mciSendString("close ./source/Can't.mp3", 0, 0, 0);
						mciSendString("open ./source/Can't.mp3", 0, 0, 0);
						mciSendString("play ./source/Can't.mp3", 0, 0, 0);
						continue;
					}
					//printf("%d %d\n", m.x, m.y);
					if (m.x < 60 || m.y < 60 || m.x>540 || m.y>540) {
						mciSendString("close ./source/Can't.mp3", 0, 0, 0);
						mciSendString("open ./source/Can't.mp3", 0, 0, 0);
						mciSendString("play ./source/Can't.mp3", 0, 0, 0);
						continue;
					}
					int x = (m.x - 60) / 160;
					int y = (m.y - 60) / 160;
					int a = 160 * x + 140;
					int b = 160 * y + 140;
					if (mp[x][y]) {
						mciSendString("close ./source/Can't.mp3", 0, 0, 0);
						mciSendString("open ./source/Can't.mp3", 0, 0, 0);
						mciSendString("play ./source/Can't.mp3", 0, 0, 0);
						continue;
					}
					DrawX(a, b);
					mciSendString("close ./source/laser.wav", 0, 0, 0);
					mciSendString("open ./source/laser.wav", 0, 0, 0);
					mciSendString("play ./source/laser.wav", 0, 0, 0);
					mp[x][y] = 1;
					times++;
					order = 2;
					Judge(x, y, h);
				}
			}
		}
	}
}
int main(){
	mciSendString("open ./source/Summer.mp3", 0, 0, 0);
	mciSendString("play ./source/Summer.mp3 repeat", 0, 0, 0);
	HWND h;
	init(h);
	PlayChess(h);
	char c = getchar();
	closegraph();
	return 0;
}