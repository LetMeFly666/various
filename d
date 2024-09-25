帮忙写一个网页，主要适配手机端



写一个HTML，2s后显示第一段话，之后8, 15, 8秒后显示第二第三第四段话，再过10秒后显示两个按钮。




```
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>段落显示</title>
    <style>
        #content p {
            display: none;
        }
        #buttons {
            display: none;
        }
    </style>
</head>
<body>

<div id="content">
    <p id="para1">这是第一段话。</p>
    <p id="para2">这是第二段话。</p>
    <p id="para3">这是第三段话。</p>
    <p id="para4">这是第四段话。</p>
</div>
<div id="buttons">
    <button>按钮1</button>
    <button>按钮2</button>
</div>

<script>
    setTimeout(() => {
        document.getElementById('para1').style.display = 'block';
    }, 2000);

    setTimeout(() => {
        document.getElementById('para2').style.display = 'block';
    }, 11000);

    setTimeout(() => {
        document.getElementById('para3').style.display = 'block';
    }, 22000);

    setTimeout(() => {
        document.getElementById('para4').style.display = 'block';
    }, 30000);

    setTimeout(() => {
        document.getElementById('buttons').style.display = 'block';
    }, 40000);
</script>

</body>
</html>
```
再次基础上修改，如果点击按钮2，就显示“再给你一次机会”，如果点击按钮1，就跳转到../WeCan






每点击一次按钮2，就显示一个“再给你一次选择机会”





给这段代码加上美化，要符合内容主题，主要适配手机端

```
<!DOCTYPE html>
<html lang="zn">
<head>
    <meta charset="UTF-8">
    <title>Hi</title>
    <script src="/Links/Common.js"></script>
    <style>
        #content p {
            display: none;
        }
        #buttons {
            display: none;
        }
        .message {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div id="content">
    <p id="para1">虽然我觉得我已经猜到了答案，但我现在仍然十分忐忑。</p>
    <p id="para2">每当看到你的回眸一笑，每当听到你的声音轻轻唤我，我的心都会不由自主地加速跳动。</p>
    <p id="para3">我想陪你走过每一个四季，探索世界的每一个角落。</p>
    <p id="para4">沈鸿艺，我喜欢你，可以做我的女朋友，让我成为你的人生战友吗？</p>
</div>
<div id="buttons">
    <button id="button1">好的！</button>
    <button id="button2"><small>我不</small></button>
</div>

<script>
    setTimeout(() => {
        document.getElementById('para1').style.display = 'block';
    }, 2000);

    setTimeout(() => {
        document.getElementById('para2').style.display = 'block';
    }, 11000);

    setTimeout(() => {
        document.getElementById('para3').style.display = 'block';
    }, 22000);

    setTimeout(() => {
        document.getElementById('para4').style.display = 'block';
    }, 30000);

    setTimeout(() => {
        document.getElementById('buttons').style.display = 'block';
    }, 40000);

    document.getElementById('button1').addEventListener('click', () => {
        window.location.href = '../WeCan';
    });

    document.getElementById('button2').addEventListener('click', () => {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = '再给你一次选择机会';
        document.body.appendChild(message);
    });
</script>

</body>
</html>
```




不够浪漫，浪漫一点






修改这段代码：
1. 删掉左边div#code
2. 右边爱心适配手机端
3. 将时间`together.setFullYear(2020, 5, 13); together.setHours(11); together.setMinutes(43); together.setSeconds(30); together.setMilliseconds(0);`设置为页面的访问日期
