import requests
from bs4 import BeautifulSoup
headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
            'referer': 'https://www.csdn.net/',
            
        }

def getArticleHref(url = "https://blog.csdn.net/Tisfy"):
    response = requests.get(url="https://blog.csdn.net/Tisfy", headers=headers)
    soup = BeautifulSoup(response.text,'lxml')
    articleList = []
    article = soup.find_all('article',attrs={"class":"blog-list-box"})
    for i in article:
        href = i.find('a')['href']
        articleList.append(href)
    return articleList

if __name__ == "__main__":
    articleList = getArticleHref()
    print(articleList)
