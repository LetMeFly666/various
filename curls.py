'''
Author: LetMeFly
Date: 2021-07-26 19:42:18
LastEditors: LetMeFly
LastEditTime: 2021-07-27 09:31:17
'''
from os import environ, system
from sys import argv
import requests
import json

if len(argv) < 2:
    print("请传递文件参数")
    system("pause")
    exit(-1)


api = environ.get("GithubGistApi")
filename = argv[1].split('\\')[-1] if len(argv) == 2 else argv[2]
content = open(argv[1]).read()

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
    print(f'<script src="https://gist.github.com/LetMeFly666/{gistId}.js"></script>')
except:
    print(response.text)