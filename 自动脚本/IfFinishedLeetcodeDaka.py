'''
Author: LetMeFly
Date: 2021-08-25 12:13:59
LastEditors: LetMeFly
LastEditTime: 2021-08-25 12:34:38
'''
from bs4 import BeautifulSoup
from 自动脚本.SendAMail import send_email
import datetime

def getdate() -> str:
    return (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime("%Y-%m-%d")


def alreadyDaka() -> bool:
    soup = BeautifulSoup(open("ACM/LeetCode/index.html", "r", encoding="utf-8"))
    allA = soup.findAll('a')
    dateToday = getdate()
    for a in allA:
        try:
            thisString = a.string
            if thisString == dateToday:
                return True
        except:
            pass
    return False


if alreadyDaka():
    print("今日LeetCode打卡已完成！")
else:
    print("今日打卡未完成")
    send_email(to_who='814114971@qq.com', title="力扣打卡提醒", text="今日力扣还未打卡，快来打卡吧")
    