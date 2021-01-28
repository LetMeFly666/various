import requests
import random
import time
from TFpacket import getCSDNarticle
from TFpacket import getCSDNarticle2
from TFpacket import nowArticles

if __name__ == "__main__":
    headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
            'referer': 'https://www.csdn.net/',
            
        }
    print("Getting Articles...",end='')
    articles = []
    try:
        articles = getCSDNarticle.getArticleHref()
        assert len(articles) >= len(nowArticles.nowArticles)
    except:
        try:
            articles = getCSDNarticle2.getArticleHref()
            assert len(articles) >= len(nowArticles.nowArticles)
        except:
            articles = nowArticles.nowArticles
            
    print("Got!")

    for url in articles:
        print(url)
        response = requests.get(url=url,headers=headers)
        # print(response.text)
        print(response.ok)
        print(response.headers)
        sleepTime = random.randint(2,8)
        print("Sleep:",sleepTime)
        time.sleep(sleepTime)

    print("All Finished!")
