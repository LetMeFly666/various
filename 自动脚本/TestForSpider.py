import requests
import random
import time
from TFpacket import getCSDNarticle2

if __name__ == "__main__":
    headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
            'referer': 'https://www.csdn.net/',
            
        }
    print("Getting Articles...",end='')
    articles = getCSDNarticle2.getArticleHref()
    print("Got!")

    for url in articles:
        print(url)
        response = requests.get(url=url,headers=headers)
        # print(response.text)
        print(response.ok)
        print(response.headers)
        sleepTime = random.randint(5,15)
        print("Sleep:",sleepTime)
        time.sleep(sleepTime)

    print("All Finished!")
