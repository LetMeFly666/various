from selenium import webdriver
import CheckNetwork

__exeName__ = "007_auto_chaoxing"
__exeVersion__ = 1

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

webdriver.ChromeOptions().binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
browser = webdriver.Chrome("chromedriver.exe")
browser.get("https://www.baidu.com/")

