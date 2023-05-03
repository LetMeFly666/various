/*
 * @Author: LetMeFly
 * @Date: 2023-05-03 20:54:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2023-05-03 22:02:05
 */
const html = `
<!--
 * @Author: LetMeFly
 * @Date: 2023-05-03 20:32:19
 * @LastEditors: LetMeFly
 * @LastEditTime: 2023-05-03 21:52:59
-->
<!doctype html>
<html>
<head>
    <script src='https://letmefly.xyz/Links/Common.js'></script>
    <title>LetMeFly - 移动剪贴板</title>
</head>
<body>
    <h1><a href='https://letmefly.xyz'>LetMeFly</a> - 移动剪贴板</h1>
    <p>所有人都可以对其进行更改，所有人都可以看到其内容。</p>
    <p>使用完请点击“清空内容”按钮</p>
    <br>
    <textarea id='textarea' cols='30' rows='10'>{REPLACE}</textarea>
    <br>
    <button onclick='CopyToClipBoard()'>复制到剪贴板</button>
    <button onclick='ClearTextarea()'>清空内容</button>
    <button onclick='SaveClipBoard()'>保存内容</button>

    <script>
        const textarea = document.querySelector('#textarea');

        function CopyToClipBoard() {
            textarea.select();
            document.execCommand('copy');
            alert('已复制到剪贴板');
        }

        function ClearTextarea() {
            textarea.value = '';
            SaveClipBoard(false);
            alert('云端内容已清除，可以放心退出了');
        }

        function SaveClipBoard(ifAlert=true) {
            const textareaData = textarea.value;
            fetch(window.location.pathname, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'data': textareaData})
            }).then(response => {
                console.log(response);
                if (ifAlert) {
                    alert('剪贴板内容已保存，快去跨设备使用吧');
                }
            });
        }
    </script>
</body>
</html>
`
async function SaveData(request) {
    const json = await request.json();
    const ClipBoardData = json['data'];
    await ClipBoard.put('data', ClipBoardData);
    return new Response(`{'code': 0}`, {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        }
    });
}

async function GetPage(request) {
    const ClipBoardData = await ClipBoard.get('data');

    return new Response(html.replace(/{REPLACE}/gm, ClipBoardData), {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        }
    });
}

async function main(request) {
    if (request.method == 'POST') {
        return await SaveData(request);
    }
    else {
        return await GetPage(request);
    }
    
}

addEventListener('fetch', async event => {
    event.respondWith(main(event.request));
});