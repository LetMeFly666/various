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

# 手动登录
while True:
    sleep(0.5)
    if len(browser.window_handles) == 2:
        browser.switch_to.window(browser.window_handles[1])
    current_url = browser.current_url
    if 'http://i.mooc.chaoxing.com/space/index' in current_url:
        status_th = 1
    elif 'http://mooc1.chaoxing.com/mycourse/studentcourse' in current_url:
        status_th = 2
        # elif 'http://mooc1.chaoxing.com/mycourse/studentstudy' in current_url:
        #     status_th = 3
        break
    system("cls")
    # print(status[status_th])

# 找到未完成任务
sleep(2)
tasks = []
tasks_class = browser.find_elements_by_class_name('clearfix')
print(len(tasks_class))
for task in tasks_class:
    try:
        task_num = task.find_elements_by_class_name('orange')[0].text
        href = task.find_element_by_tag_name('a').get_attribute('href')
        tasks.append(href)
        print(f'{href}有任务{task_num}个')
    except:
        pass
print(tasks)

# 进入每个任务开始播放
