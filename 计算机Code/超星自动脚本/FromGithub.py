import pyautogui
import os
import win32gui
import win32con
from time import sleep

screenWidth, screenHeight = pyautogui.size()
cnt = 0
b = False
n = 1
wn = 0


def test():
    play = pyautogui.locateOnScreen('end.png')
    if (play):
        print('end')
        print(play)
    else:
        print('not found')


def waitEnd():
    global wn
    isEnd = pyautogui.locateOnScreen('end.png')
    if (isEnd):
        print('end')
        wn = 0
    else:
        wn += 1
        t = 5 * 60
        print('waited', t * wn)
        sleep(t)
        waitEnd()


def play():
    global n
    play = pyautogui.locateOnScreen('play.png')
    if (play):
        print('已检测到待观看的目标')
        # print('play')
        # print(play)
        x, y = pyautogui.center(play)
        # print(x, y)
        pyautogui.moveTo(838, 699)
        sleep(0.5)
        pyautogui.click(838, 699)
        print()
        print('正在观看课程', n)
        n += 1
        waitEnd()
    else:
        print("未检测到需要观看的任务点, saving screenshot to file.")
        pyautogui.screenshot('my_screenshot.png')
        sleep(100)
        exit(0)


def getTask():
    loc = pyautogui.locateOnScreen('2.png')
    if (loc):
        print(loc)
        x, y = pyautogui.center(loc)
        x = x - 100
        pyautogui.click(x, y)
        sleep(1.5)
        play()
    else:
        global cnt
        global b
        if (cnt % 8 == 0):
            b = not b
            x = 1609
            y = 450
            pyautogui.moveTo(x, y)
            pyautogui.click(x, y)
        cnt += 1
        move = screenHeight + 200
        if (b):
            move = -move
        print("未检测到需要观看的任务课程，当前是检测次数为", cnt)
        if cnt > 1000:
            print('检测到检测次数超过1000次，请检查并退出程序')
            os.system('pause')
        pyautogui.scroll(move)


def auPlay():
    im2 = pyautogui.screenshot('my_screenshot.png')
    getTask()


def show():
    hWndList = []
    win32gui.EnumWindows(lambda hWnd, param: param.append(hWnd), hWndList)
    for hwnd in hWndList:
        clsname = win32gui.GetClassName(hwnd)
        title = win32gui.GetWindowText(hwnd)
        if (clsname == 'ConsoleWindowClass'):
            if not title.find('main.exe') == -1:
                # print('clsname = ', clsname, 'title = ', title)
                win32gui.SetWindowPos(hwnd, win32con.HWND_TOPMOST, 50, 50, 420, 300,
                                      win32con.SWP_NOMOVE | win32con.SWP_NOACTIVATE | win32con.SWP_NOOWNERZORDER | win32con.SWP_SHOWWINDOW)


if __name__ == '__main__':
    show()
    sleep(3)
    currentMouseX, currentMouseY = pyautogui.position()
    print('当前屏幕分辨率', screenWidth, screenHeight)
    # print('当前鼠标位置', currentMouseX, currentMouseY)
    # test()
    while True:
        auPlay()
    # while(True):
    #     sleep(300)
