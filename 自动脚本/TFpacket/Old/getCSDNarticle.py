# 2021.1.27 about 17:00
import requests
from bs4 import BeautifulSoup
headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
            'referer': 'https://www.csdn.net/',
            
        }

def getArticleHref(url = "https://blog.csdn.net/Tisfy"):
    response = requests.get(url="https://blog.csdn.net/Tisfy", headers=headers)
    soup = BeautifulSoup(response.text,'lxml')
    # /html/body/div[6]/main/div[2]/div[2]/div[1]/h4/a
    articleList = []
    articles = soup.select('div[class="article-list"]')
    article = articles[0].find_all('div',attrs={"class":"article-item-box csdn-tracking-statistics"})
    for i in article:
        href = i.find('a')['href']
        articleList.append(href)
    return articleList

if __name__ == "__main__":
    articleList = getArticleHref()
    print(articleList)
