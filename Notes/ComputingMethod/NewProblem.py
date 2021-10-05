'''
Author: LetMeFly
Date: 2021-10-05 23:25:11
LastEditors: LetMeFly
LastEditTime: 2021-10-05 23:35:03
'''
import os
basePath='f:\\OtherApps\\Program\\Git\\Store\\Store2_Web_Various\\various\\Notes\\ComputingMethod\\Codes\\'
problemName = input("新问题的名称[01 - 开根号]：")
fileName = basePath + problemName
smallDirName = input('创建文件夹的名称[Ch01_KaiGenHao]')
dirName = basePath + smallDirName

if not os.path.exists(dirName):
    os.mkdir(dirName)
    with open(f"{dirName}\\Readme.md", 'w', encoding='utf-8')as f:
        f.write(f'# {problemName}')
    with open(f"{dirName}\\{smallDirName}.py", 'w', encoding='utf-8')as f:
        f.write(f'# {problemName}')
    with open(f"{basePath}index.html", "a+", encoding='utf-8')as f:
        f.write(f'\n    <a href="{smallDirName}/">{problemName}</a>\n    <br /><hr />\n')
else:
    print("此文件夹已存在")
