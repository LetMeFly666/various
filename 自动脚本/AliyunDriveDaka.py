'''
Author: LetMeFly
Date: 2023-08-02 18:19:51
LastEditors: LetMeFly
LastEditTime: 2023-08-02 18:32:18
Description: 参考了https://github.com/libuke/aliyundrive-checkin/blob/main/aliyundrive.py
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
    for i in range(tryTime):
        try:
            main()
            exit(0)
        except:
            time.sleep(5)
    from SendAMail import send_email
    send_email("Tisfy@qq.com", "阿里云盘自动签到失败提醒", f"尝试了{tryTime}次均未签到成功，手动签一下叭~")