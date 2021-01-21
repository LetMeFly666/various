import requests
import datetime
import json
import os

def getdate():
    return (datetime.datetime.utcnow() + datetime.timedelta(hours=8)).strftime("%Y%m%d")



url = 'https://eai.buct.edu.cn/ncov/wap/default/save'


if __name__ == '__main__':
    HEADERS_BUCTDAKA = os.environ["HEADERS_BUCTDAKA"]
    DATAS_BUCTDAKA = os.environ["DATAS_BUCTDAKA"]
    headers = HEADERS_BUCTDAKA
    datas = DATAS_BUCTDAKA
    print("headers:",headers)
    print("datas:",datas)
    result = requests.post(url=url, headers=json.loads(headers), data = json.loads(datas))
    print(result.text)
    # print(getdate())


