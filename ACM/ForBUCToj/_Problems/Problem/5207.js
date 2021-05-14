/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 23:38:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-05-14 22:21:55
 */

const begin = '<div id="article_content" class="article_content clearfix">\n\
        <link rel="stylesheet" href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/ck_htmledit_views-b5506197d8.css">\n\
                <div id="content_views" class="markdown_views prism-atom-one-light">\n\
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n\
                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n\
                    </svg>\n\
                    <p></p>'

const end = '                </div><div data-report-view="{&quot;mod&quot;:&quot;1585297308_001&quot;,&quot;dest&quot;:&quot;https://letmefly.blog.csdn.net/article/details/116211565&quot;,&quot;extend1&quot;:&quot;pc&quot;,&quot;ab&quot;:&quot;new&quot;}"><div></div></div>\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/markdown_views-d7a94ec6ab.css" rel="stylesheet">\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/style-f1c5feb645.css" rel="stylesheet">\n\
        </div>'



const problem_description_data = '<p>世界上最遥远的距离&#xff0c;是加与减的距离。仅少一竖&#xff0c;却需重新重载。</p> \n\
<p><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        2021\n\
       \n\
       \n\
        −\n\
       \n\
       \n\
        1921\n\
       \n\
       \n\
        &#61;\n\
       \n\
      \n\
      \n\
       2021-1921&#61;\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">2</span><span class="mord">0</span><span class="mord">2</span><span class="mord">1</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">9</span><span class="mord">2</span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&#61;</span></span></span></span></span> <font size="1px">建党</font><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        100\n\
       \n\
      \n\
      \n\
       100\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span><font size="1px">周年&#xff01;</font></p> \n\
<p>给你两行两个正整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        a\n\
       \n\
      \n\
      \n\
       a\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>和<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        b\n\
       \n\
      \n\
      \n\
       b\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff0c;范围是<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        1\n\
       \n\
      \n\
      \n\
       1\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span> ~ <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        1\n\
       \n\
       \n\
        \n\
         0\n\
        \n\
        \n\
         \n\
          1\n\
         \n\
         \n\
          \n\
           0\n\
          \n\
          \n\
           5\n\
          \n\
         \n\
        \n\
       \n\
      \n\
      \n\
       10^{10^5}\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.98692em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.98692em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.891314em;"><span class="" style="top: -2.931em; margin-right: 0.0714286em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>&#xff0c;数据不包含前导零&#xff0c;请输出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        a\n\
       \n\
       \n\
        −\n\
       \n\
       \n\
        b\n\
       \n\
      \n\
      \n\
       a-b\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.66666em; vertical-align: -0.08333em;"></span><span class="mord mathdefault">a</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>的结果。</p> \n\
    '

const inner_html = '<!DOCTYPE html>\n\
<html>\n\
<head>\n\
<meta charset="UTF-8">\n\
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\
<title>能看到这道题吗</title>\n\
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css">\n\
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">\n\
<script src="../live2d.min.js"></script>\n\
<style>\n\
html, body {\n\
	height: 100%;\n\
}\n\
body {\n\
	display: flex;\n\
	align-items: center;\n\
	justify-content: center;\n\
	padding-top: 40px;\n\
	padding-bottom: 40px;\n\
	background-color: #f5f5f5;\n\
}\n\
.form-signin {\n\
	width: 100%;\n\
	max-width: 330px;\n\
	padding: 15px;\n\
	margin: 0 auto;\n\
}\n\
.form-signin .checkbox {\n\
	font-weight: 400;\n\
}\n\
.form-signin .form-control {\n\
	position: relative;\n\
	box-sizing: border-box;\n\
	height: auto;\n\
	padding: 10px;\n\
	font-size: 16px;\n\
}\n\
.form-signin .form-control:focus {\n\
	z-index: 2;\n\
}\n\
.form-signin input[type=text] {\n\
	margin-bottom: -1px;\n\
	border-bottom-right-radius: 0;\n\
	border-bottom-left-radius: 0;\n\
}\n\
.form-signin input[type=password] {\n\
	margin-bottom: 10px;\n\
	border-top-left-radius: 0;\n\
	border-top-right-radius: 0;\n\
}\n\
#stage {\n\
	position: relative;\n\
}\n\
#stage img {\n\
	width: 100%;\n\
	margin-bottom: 20px;\n\
	border-radius: 20px;\n\
}\n\
#stage a {\n\
	position: absolute;\n\
	width: 2em;\n\
	height: 2em;\n\
	border-radius: 50%;\n\
}\n\
#inner {\n\
	position: relative;\n\
	background-color: #999;\n\
	clip-path: circle(120px at center);\n\
}\n\
#cover {\n\
	position: absolute;\n\
	background-color: #CB3837;\n\
	width: 100%;\n\
	height: 100%;\n\
	bottom: 10%;\n\
	transition: all 1s;\n\
	box-shadow: 0 0 0 5px rgba(0, 0, 0, .1);\n\
}\n\
#text {\n\
	position: absolute;\n\
	bottom: 30%;\n\
	font-size: 2em;\n\
	left: 50%;\n\
	transform: translateX(-50%);\n\
	opacity: 0.4;\n\
	font-weight: bold;\n\
}\n\
#detail {\n\
	position: absolute;\n\
	background: rgba(255, 255, 255, .1);\n\
	width: 100%;\n\
	height: 10px;\n\
	bottom: 0;\n\
}\n\
#handle {\n\
	position: absolute;\n\
	background: #ccc;\n\
	bottom: -2px;\n\
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, .1);\n\
	height: 8px;\n\
	left: 50%;\n\
	margin-left: -15px;\n\
	width: 30px;\n\
	cursor: pointer;\n\
}\n\
#info {\n\
	left: 40px;\n\
	bottom: 20px;\n\
}\n\
#refresh {\n\
	right: 40px;\n\
	bottom: 20px;\n\
}\n\
#live2d {\n\
	cursor: grab;\n\
	height: 300px;\n\
	width: 300px;\n\
}\n\
#live2d:active {\n\
	cursor: grabbing;\n\
}\n\
</style>\n\
</head>\n\
<body class="text-center">\n\
<form class="form-signin" action="login.php" method="post">\n\
	<div id="stage">\n\
		<div id="inner">\n\
			<div id="cover">\n\
				<div id="text">\n\
					<span style="color: cyan;">MIMI</span><span style="color: white;">POWERED</span>\n\
				</div>\n\
				<div id="detail"></div>\n\
				<div id="handle"></div>\n\
			</div>\n\
			<canvas class="mb-4" id="live2d" width="800" height="800"></canvas>\n\
		</div>\n\
		<a id="info" href="javascript:info()"><i class="fa fa-lg fa-info"></i></a>\n\
		<a id="refresh" href="javascript:refresh()"><i class="fa fa-lg fa-refresh"></i></a>\n\
	</div>\n\
	<h1 class="h3 mb-3 fw-normal">看板娘登陆平台</h1>\n\
	<label for="room" class="sr-only">用户名</label>\n\
	<input type="text" name="room" class="form-control" placeholder="用户名" required autofocus>\n\\n\
	<label for="pass" class="sr-only">密码</label>\n\
	<input type="password" name="pass" class="form-control" placeholder="密码" required>\n\
	<div class="checkbox mb-4">\n\
		<label>\n\
			<input type="checkbox" value="remember-me"> 记住我\n\
		</label>\n\
	</div>\n\
	<div class="d-grid">\n\
		<button class="btn btn-lg btn-primary" type="submit">登录</button>\n\
	</div>\n\
	<p class="mt-5 mb-3 text-muted">Copyleft &copy; Mimi 2019</p>\n\
</form>\n\
<script>\n\
/*\n\
 * _(:з」∠)_\n\
 * Created by Shuqiao Zhang in 2019.\n\
 * https://zhangshuqiao.org\n\
 */\n\
\n\
/*\n\
 * This program is free software: you can redistribute it and/or modify\n\
 *  it under the terms of the GNU General Public License as published by\n\
 *  the Free Software Foundation, either version 3 of the License, or\n\
 *  (at your option) any later version.\n\
 *\n\
 * This program is distributed in the hope that it will be useful,\n\
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of\n\
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n\
 *  GNU General Public License for more details.\n\
 */\n\
window.addEventListener("load", () => {\n\
	"use strict";\n\
\n\
	if (!CSS.supports("clip-path", "circle(120px at center)")) {\n\
		document.getElementById("stage").innerHTML = \'<img src="../assets/screenshot-1.png">\';\n\
		return;\n\
	}\n\
\n\
	let apiPath = "https://live2d.fghrsh.net/api", state = 0,\n\
		modelId = localStorage.getItem("modelId"),\n\
		modelTexturesId = localStorage.getItem("modelTexturesId");\n\
	if (modelId === null) {\n\
		modelId = 1;\n\
		modelTexturesId = 53;\n\
	}\n\
	loadModel(modelId, modelTexturesId);\n\
\n\
	function loadModel(modelId, modelTexturesId) {\n\
		localStorage.setItem("modelId", modelId);\n\
		if (modelTexturesId === undefined) modelTexturesId = 0;\n\
		localStorage.setItem("modelTexturesId", modelTexturesId);\n\
		loadlive2d("live2d", `${apiPath}/get/?id=${modelId}-${modelTexturesId}`, null);\n\
		console.log("live2d", `模型 ${modelId}-${modelTexturesId} 加载完成`);\n\
		setTimeout(() => {\n\
			coverPosition("80%");\n\
			state = 2;\n\
		}, 2000);\n\
	}\n\
\n\
	function loadRandModel() {\n\
		const modelId = localStorage.getItem("modelId"),\n\
			modelTexturesId = localStorage.getItem("modelTexturesId");\n\
		fetch(`${apiPath}/rand_textures/?id=${modelId}-${modelTexturesId}`)\n\
			.then(response => response.json())\n\
			.then(result => {\n\
				loadModel(modelId, result.textures.id);\n\
				setTimeout(() => {\n\
					state = 2;\n\
					coverPosition("80%");\n\
					document.getElementById("refresh").setAttribute("href", "javascript:refresh()");\n\
				}, 1000);\n\
			});\n\
	}\n\
\n\
	function loadOtherModel() {\n\
		const modelId = localStorage.getItem("modelId");\n\
		fetch(`${apiPath}/switch/?id=${modelId}`)\n\
			.then(response => response.json())\n\
			.then(result => {\n\
				loadModel(result.model.id);\n\
			});\n\
	}\n\
\n\
	function coverPosition(pos) {\n\
		document.getElementById("cover").style.bottom = pos;\n\
	}\n\
\n\
	window.info = function() {\n\
		fetch("https://v1.hitokoto.cn")\n\
			.then(response => response.json())\n\
			.then(result => {\n\
				alert("「" + result.hitokoto + "」——" + result.from);\n\
			});\n\
	};\n\
\n\
	window.refresh = function() {\n\
		state = 0;\n\
		coverPosition("10%");\n\
		document.getElementById("refresh").setAttribute("href", "javascript:void(0)");\n\
		setTimeout(loadRandModel, 1000);\n\
	};\n\
\n\
	document.getElementById("handle").addEventListener("click", () => {\n\
		if (state === 1) {\n\
			state = 2;\n\
			coverPosition("80%");\n\
		}\n\
		else if (state === 2) {\n\
			state = 1;\n\
			coverPosition("20%");\n\
		}\n\
	});\n\
\n\
	document.querySelector("input[type=password]").addEventListener("focus", () => {\n\
		if (state === 2) {\n\
			state = 1;\n\
			coverPosition("20%");\n\
		}\n\
	});\n\
	document.querySelector("input[type=password]").addEventListener("blur", () => {\n\
		if (state === 1) {\n\
			state = 2;\n\
			coverPosition("80%");\n\
		}\n\
	});\n\
});\n\
</script>\n\
</body>\n\
</html>\n\
'

const input_description_data = '<p>输入描述就在题目中。</p> '

const output_description_data = '<p>当然也在题目中。</p> '

window.onload = function () {
    var problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
    var input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
    var output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

    problem_description.innerHTML = begin + problem_description_data + end;
    input_description.innerHTML = begin + input_description_data + end;
    output_description.innerHTML = begin + output_description_data + end;

    var back = document.querySelector("body")
    var para = document.createElement("div");
    var first = document.body.firstChild;
    back.insertBefore(para, first);
    var newP = document.querySelector("div");
    newP.style = "width: 100%; height: 100%; background-color: rgb(252, 252, 252); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    function show(){
        newP.innerHTML = '想办法看到这道题吧，毕竟这不是很难。';
        // setTimeout(function(){
        //     back.removeChild(newP);
        // }, 1000);
    }
    show();

    // let i = 0,
    //     timer = 0,
    //     str = '星空点点，墨日曜淡。世界芳华灼灼，不及眼前的她。';

    // function typing() {
    //     if (i <= str.length) {
    //         newP.innerHTML = str.slice(0, i++) + '_';
    //         timer = setTimeout(typing, 25);
    //     }
    //     else {
    //         newP.innerHTML = str; //结束打字,移除 _ 光标
    //         clearTimeout(timer);
    //         back.removeChild(newP);
    //     }
    // };
    // typing();

    setTimeout(function () {
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";

    }, 3000);
}

function alert(word, hei = 50, Time = 1500) {
    var length = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] > 255) {
            length += 2;
        } else {
            length++;
        }
    }
    var rwid = length;
    var line = 1;
    while (rwid > 40) {
        length = 40;
        hei += hei;
        rwid -= 40;
        line++;
    }
    var reminder = document.createElement('div');
    document.body.appendChild(reminder);
    reminder.style.cssText = "width: " + length * 24 + "px;height: " + hei + "px;position: fixed;display: block;border-radius: 5px;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 24px;word-break:break-all;";
    var left__ = 0.5 * document.body.offsetWidth - 0.5 * reminder.offsetWidth;
    var top__ = 0.5 * window.innerHeight - 0.5 * reminder.offsetHeight;
    reminder.id = "alert";
    reminder.style.color = "#fff";
    reminder.style.left = left__ + 'px';
    reminder.style.top = top__ + 'px';
    reminder.style.lineHeight = reminder.offsetHeight / line + 'px';
    reminder.innerHTML = word;
    setTimeout(function () {
        reminder.style.display = "none";
    }, Time);
}