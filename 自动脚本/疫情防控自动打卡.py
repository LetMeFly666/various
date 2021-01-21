import requests
import datetime
import json

def getdate():
    return (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime("%Y%m%d")

headers = HEADERS_BUCTDAKA

datas = DATAS_BUCTDAKA

url = 'https://eai.buct.edu.cn/ncov/wap/default/save'


if __name__ == '__main__':
    result = requests.post(url=url, headers=headers, data = datas)
    print(result.text)
    # print(getdate())


