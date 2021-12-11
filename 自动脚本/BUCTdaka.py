import requests
import datetime
import os

def getdate():
    return (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime("%Y%m%d")


def getTh(lastTime=datetime.datetime(2021,8,6)):
    a = str(datetime.datetime.utcnow() - lastTime)
    try:
        a = a.split(',')[0]
    except:
        a = a
    return a


def dbg(a):
    print(a,type(a))

if __name__ == '__main__':
    ADDRESS_BUCTDAKA = os.environ["ADDRESS_BUCTDAKA"]
    AREA_BUCTDAKA = os.environ["AREA_BUCTDAKA"]
    CITY_BUCTDAKA = os.environ["CITY_BUCTDAKA"]
    COOKIE_BUCTDAKA = os.environ["COOKIE_BUCTDAKA"]
    for key in os.environ:
        print(key)
    COOKIE_BUCTDAKAMaoMao = os.environ["COOKIE_BUCTDAKAMaoMao"]
    # COOKIE_BUCTDAKA_MAOMAO = '5'
    CREATED_BUCTDAKA = os.environ["CREATED_BUCTDAKA"]
    DATAS_BUCTDAKA = os.environ["DATAS_BUCTDAKA"]
    GEOAPIINFO_BUCTDAKA = os.environ["GEOAPIINFO_BUCTDAKA"]
    HEADERS_BUCTDAKA = os.environ["HEADERS_BUCTDAKA"]
    ID_BUCTDAKA = os.environ["ID_BUCTDAKA"]
    PROVINCE_BUCTDAKA = os.environ["PROVINCE_BUCTDAKA"]
    UID_BUCTDAKA = os.environ["UID_BUCTDAKA"]
    USERAGENT_BUCTDAKA = os.environ["USERAGENT_BUCTDAKA"]
    TEST = os.environ["TEST"]  # 不能加上‘secrets.’吗

    print("Begin")
    # print("Test for the secrets, TEST", TEST, "Right?")
    # print("ADDRESS_BUCTDAKA:",ADDRESS_BUCTDAKA, 'Is it right?')
    # dbg(ADDRESS_BUCTDAKA)
    # dbg(AREA_BUCTDAKA)
    # dbg(CITY_BUCTDAKA)
    # dbg(COOKIE_BUCTDAKA)
    # dbg(CREATED_BUCTDAKA)
    # dbg(DATAS_BUCTDAKA)
    # dbg(GEOAPIINFO_BUCTDAKA)
    # dbg(HEADERS_BUCTDAKA)
    # dbg(ID_BUCTDAKA)
    # dbg(PROVINCE_BUCTDAKA)
    # dbg(UID_BUCTDAKA)
    # dbg(USERAGENT_BUCTDAKA)
    
    headers = {
    'Host': 'eai.buct.edu.cn',
    'Connection': 'keep-alive',
    'Content-Length': '2014',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Origin': 'https://eai.buct.edu.cn',
    'X-Requested-With':'XMLHttpRequest',
    'User-Agent': USERAGENT_BUCTDAKA,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Referer': 'https://eai.buct.edu.cn/ncov/wap/default/index',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4',
    'Cookie': COOKIE_BUCTDAKA,
    
    }

    datas = {
        'ismoved': '0',
        'jhfjrq' : '',
        'jhfjjtgj': '',
        'jhfjhbcc': '',
        'sfxk': '0',
        'xkqq': '',
        'szgj': '',
        'szcs': '',
        'zgfxdq': '0',
        'mjry': '0',
        'csmjry': '0',
        'tw': '2',
        'sfcxtz': '0',
        'sfjcbh': '0',
        'sfcxzysx': '0',
        'sfyyjc': '0',
        'jcjgqr': '0',
        'remark': f'六点起床第{getTh()}天，早睡早起增强抵抗力',
        'address': ADDRESS_BUCTDAKA,
        'geo_api_info': GEOAPIINFO_BUCTDAKA,
        'area': AREA_BUCTDAKA,
        'province': PROVINCE_BUCTDAKA,
        'city': CITY_BUCTDAKA,
        'sfzx' : '1',
        'sfjcwhry': '0',
        'sfjchbry': '0',
        'sfcyglq': '0',
        'gllx': '',
        'glksrq': '',
        'jcbhlx': '',
        'jcbhrq': '',
        'bztcyy': '',
        'sftjhb': '0',
        'sftjwh': '0',
        'sfsfbh': '0',
        'xjzd': '',
        'jcwhryfs': '',
        'jchbryfs': '',
        'szsqsfybl': '0',
        'sfygtjzzfj': '',
        'gtjzzfjsj': '',
        'jcjg': '',
        'date': getdate(),
        'uid': UID_BUCTDAKA,
        'created': CREATED_BUCTDAKA,
        'id': ID_BUCTDAKA,
        'gwszdd': '',
        'sfyqjzgc': '',
        'jcqzrq': '',
        'sfjcqz': '',
        'jrsfqzys': '',
        'jrsfqzfy': '',
        'sfsqhzjkk': '',
        'sqhzjkkys': '',
        'qksm': '',
        'fxyy': '一直在校集训未回家',
            
        }

    url = 'https://eai.buct.edu.cn/ncov/wap/default/save'
    

def tryOnce(url, headers, datas):
    alreadyTriedTimes, allNeedToTry, succeed = 0, 5, False
    while alreadyTriedTimes < allNeedToTry:
        alreadyTriedTimes += 1
        try:
            result = requests.post(url=url, headers=headers, data = datas)
            succeed = True
            break
        except requests.exceptions.ConnectionError:
            from time import sleep
            sleep(60)
    if succeed:
        print(result.text)
        # print(getdate())
    else:
        from SendAMail import send_email
        send_email("814114971@qq.com", "打卡失败提醒", f"尝试了{allNeedToTry}次打卡均未成功，手动打一下叭~")

tryOnce(url, headers, datas)
headers['Cookie'] = COOKIE_BUCTDAKAMaoMao
datas['remark'] = f'六点起床第{getTh(datetime.datetime(2021,12,9))}天，早睡早起增强抵抗力'
tryOnce(url, headers, datas)
