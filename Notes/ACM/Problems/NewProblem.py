'''
Author: LetMeFly
Date: 2021-07-27 15:27:47
LastEditors: LetMeFly
LastEditTime: 2021-07-27 15:27:48
'''

index_qian = '''<iframe id="frame1" src="Description" frameborder="0" scrolling="no" width="100%"></iframe>

<script>
    function setIframeHeight(iframe) {
			if (iframe) {
				var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
				if (iframeWin.document.body) {
					iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
				}
			}
		};

		window.onload = function () {
			setIframeHeight(document.getElementById('frame1'));
		};
</script>

'''

import os
name = input("新问题的名称[64位整数乘法]：")
online_name = input("在线题目名称[AcWing90]：")
online_address = input("题目地址[https://www.acwing.com/problem/content/92/]：")

if not os.path.exists(name):
    os.mkdir(name)
    os.mkdir(f'{name}\\Description')
    with open("{name}\\Description\\Readme.md", 'w', encoding='utf-8')as f:
        f.write(f'# {name}')
    with open(f"{name}\\index.html", 'w', encoding='utf-8')as f:
        f.write(index_qian)
    with open(f"{name}\\main.cpp", 'w', encoding='utf-8')as f:
        f.write('')
    with open("index.html", "a+", encoding='utf-8')as f:
        f.write(f'<a href="{name}/">{name}</a> <small><a href="{online_address}">{online_name}</a></small><br /><hr />')
else:
    print("此文件夹已存在")
