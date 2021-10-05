'''
Author: LetMeFly
Date: 2021-07-26 19:42:18
LastEditors: LetMeFly
LastEditTime: 2021-10-05 23:16:07
'''
from os import environ, system
from sys import argv
import pyperclip
import requests
import json

if len(argv) < 2:
    print("请传递文件参数\naa.bat bb.cpp\naa.bat bb.cpp ccname")
    system("pause")
    exit(-1)


api = environ.get("GithubGistApi")
filename = argv[1].split('\\')[-1] if len(argv) == 2 else argv[2]
content = open(argv[1], 'r', encoding='utf-8').read()

response = requests.post(
    url="https://api.github.com/gists",
    headers={
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"token {api}",
    },
    data=json.dumps(
        {
            "files": {
                filename: {
                    "content": content,
                }
            },
            "public": True
        }
    ),
)
try:
    gistId = response.json()['id']
    print(gistId)
    src = f'https://gist.github.com/LetMeFly666/{gistId}.js'
    print(f'<script src="{src}"></script>')
    script = requests.get(src).text
    toWrite = '<div id="codes"><script>'+script+'</script></div>'
    pyperclip.copy(toWrite)
    print("已复制到剪贴板")
except:
    print(response.text)