from selenium import webdriver
from time import sleep
from os import system
import CheckNetwork

__exeName__ = "007_auto_chaoxing"
__exeVersion__ = 1
username = "20214711110101"
password = "Hdjd102058"

"""
;下面的注释包含自解压脚本命令

Setup=Automer.exe
Text
{
绿色安装，附加任务：创建桌面快捷方式。此外无其他盘符占用 
}
Shortcut=D, Automer.exe, , 双击运行, 超星自动播放, Img/icon.ico

"""

# CheckNetwork.main(__exeName__, __exeVersion__)  # FIXME: 取消注释

# webdriver.ChromeOptions().binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
browser = webdriver.Chrome()
browser.get("http://ecjtucj.jxjy.chaoxing.com/login")
status, status_th = ['login', 'space', 'courseList', 'study'], 0


while True:
    sleep(0.5)
    print(browser.window_handles)
    print(browser.current_window_handle)
    current_url = browser.current_url
    if 'http://i.mooc.chaoxing.com/space/index' in current_url:
        status_th = 1
    elif 'http://mooc1.chaoxing.com/mycourse/studentcourse' in current_url:
        status_th = 2
    elif 'http://mooc1.chaoxing.com/mycourse/studentstudy' in current_url:
        status_th = 3
        break
    system("cls")
    print(status[status_th])



