/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-06-04 11:22:45
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




const problem_description_data = '<p>哥哥在生活中经常扮演者保护妹妹的角色。有的“好”妹妹懂得心疼哥哥。但是心疼哥哥的前提是拥有哥哥。</p> \n\
<p>这是一些常见的亲戚关系中英文对应表&#xff1a;</p> \n\
<table><thead><tr><th style="text-align:center">中文</th><th style="text-align:center">英文</th></tr></thead><tbody><tr><td>哥哥</td><td>elder brother</td></tr><tr><td>姐姐</td><td>elder sister</td></tr><tr><td>弟弟</td><td>younger brother</td></tr><tr><td>妹妹</td><td>younger sister</td></tr><tr><td>爸爸妈妈</td><td>parents</td></tr><tr><td>爷爷奶奶</td><td>grandparents</td></tr><tr><td>儿子</td><td>son</td></tr><tr><td>女儿</td><td>daughter</td></tr><tr><td>爸爸的哥哥</td><td>father\'s elder brother</td></tr></tbody></table>\n\
<p>当然还有很多其他的称谓&#xff0c;但是保证本题只会出现这些称谓。</p> \n\
<hr /> '

const input_description_data = '<p>给你一行一个字符串&#xff08;长度 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
≤\n\
\n\
\n\
5000\n\
\n\
\n\
\n\
\leq 5000\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">5</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span>&#xff09;&#xff0c;是小T的亲戚关系。</p> \n\
<p>每个亲戚之间&#xff0c;用一个逗号和一个空格隔开。</p> \n\
<p>例如&#xff1a;小T有一个哥哥和一个姐姐&#xff0c;输入为&#xff1a;<code>elder brother, elder sister</code>。</p> \n\
<hr /> '

const output_description_data = '<p>如果小T拥有哥哥&#xff08;输入中含有“elder brother”&#xff09;&#xff0c;那么请输出<code>I can do nothing but to &#39;Xin Teng Gie Gie&#39;</code>&#xff0c;否则请输出<code>I have no elder brother ~_~</code>。</p> \n\
<hr /> '

window.onload = function () {
    var isProblem = 1;
    var problem_description,input_description,output_description;
    try {
        problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
        input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
        output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

        problem_description.innerHTML = begin + problem_description_data + end;
        input_description.innerHTML = begin + input_description_data + end;
        output_description.innerHTML = begin + output_description_data + end;
    }
    catch(TypeError){
        console.log("Not at Original page");
        try {
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(4) > div > div");
            problem_description.innerHTML = begin + problem_description_data + end;
            input_description.innerHTML = begin + input_description_data + end;
            output_description.innerHTML = begin + output_description_data + end;
            isProblem=2;
        }
        catch(TypeError)
        {
            console.log(TypeError);
            console.log("Not at second version page");
            isProblem=0;
        }
    }

    setTimeout(function () {
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";
        author.innerText="2019040474";
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