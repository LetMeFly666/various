'''
Author: LetMeFly
Date: 2023-08-02 18:19:51
LastEditors: LetMeFly
LastEditTime: 2023-09-09 09:45:21
Description: 参考了https://github.com/libuke/aliyundrive-checkin/blob/main/aliyundrive.py
Description: token获取：https://alist.nn.ci/zh/guide/drivers/aliyundrive.html
'''
import requests
import time
import os


ALIYUNDRIVE_REFRESH_TOKEN = os.environ["ALIYUNDRIVE_REFRESH_TOKEN"]

def main():
    # 获取access_token
    response = requests.post(
        url='https://auth.aliyundrive.com/v2/account/token',
        json={
            'grant_type': 'refresh_token',
            'refresh_token': ALIYUNDRIVE_REFRESH_TOKEN
        },
    )

    print(response)
    # print(response.text)  # 可能含有token，还是不要随便print为好
    access_token = response.json()['access_token']

    # 签到
    response = requests.post(
        url='https://member.aliyundrive.com/v1/activity/sign_in',
        headers={
            'Authorization': f'Bearer {access_token}',
        },
        json={
            'X-Canary': 'client=web,app=adrive,version=v4.3.1',
        },
    )

    print(response)
    print(response.text)


if __name__ == '__main__':
    tryTime = 3
    errMsg = ''
    for i in range(tryTime):
        try:
            main()
            print("打卡成功")
            exit(0)
        except Exception as e:
            errMsg = e
            print("打卡失败~")
            print(e)
            time.sleep(5)
    from SendAMail import send_email
    send_email("Tisfy@qq.com", "阿里云盘自动签到失败提醒", f"尝试了{tryTime}次均未签到成功，手动签一下叭~\n{errMsg}")