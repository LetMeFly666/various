/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-22 03:09:05
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





const problem_description_data = '<p><em>一只青蛙一张嘴&#xff0c; 两只眼睛四条腿</em><br /> <em>两只青蛙两张嘴&#xff0c;四只眼睛八条腿</em><br /> <em><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         ⋯\n        \n       \n       \n        \cdots\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.31em; vertical-align: 0em;"></span><span class="minner">⋯</span></span></span></span></span></em></p> \n<p align="right">——— 来自未来的ACM社团的破冰游戏玩起了数青蛙的游戏</p> \n<p>这个游戏对于通过大脑来计算的<code>&#x1f43e;毛毛&#x1f43e;</code>同学来说太困难了&#xff0c;而对于用CPU计算的<code>小T</code>同学来说又太简单了。</p> \n<p>于是聪明的<a title="我不告诉你她是谁">毛毛</a>同学给<a title="Tisfy">小T</a>同学出了一道跳蛙问题&#xff0c;以检验小T是否足够智能。</p> \n<hr /> \n<p>跳蛙从起点 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        0\n       \n      \n      \n       0\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">0</span></span></span></span></span> 处出发&#xff0c;一共往前跳 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        n\n       \n      \n      \n       n\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span> 次&#xff0c;其中跳蛙第 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        i\n       \n      \n      \n       i\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.65952em; vertical-align: 0em;"></span><span class="mord mathdefault">i</span></span></span></span></span> 次跳的距离是 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        \n         a\n        \n        \n         i\n        \n       \n      \n      \n       a_i\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>。问题是&#xff1a;跳蛙的总距离在超过 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        x\n       \n      \n      \n       x\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span></span> 之前&#xff0c;一共落地了几次。</p> \n'

const input_description_data = '<p>第一行是空格隔开的两个正整数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        n\n       \n      \n      \n       n\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span> 和 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        x\n       \n      \n      \n       x\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span></span>&#xff0c;代表跳蛙的总弹跳次数和询问的距离。</p> \n<p>第二行给你 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        n\n       \n      \n      \n       n\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span> 个空格隔开的正整数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>&#xff0c; 其中 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        \n         a\n        \n        \n         i\n        \n       \n      \n      \n       a_i\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span> 表示青蛙第 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        i\n       \n      \n      \n       i\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.65952em; vertical-align: 0em;"></span><span class="mord mathdefault">i</span></span></span></span></span> 次弹跳的距离。</p> \n<p>输入格式如下&#xff1a;</p> \n<pre><code>n x\na1 a2 ... an\n</code></pre> \n<h5><a id="_58"></a>数据范围&#xff1a;</h5> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         n\n        \n        \n         ≤\n        \n        \n         100\n        \n       \n       \n        1\leq n\leq 100\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         \n          a\n         \n         \n          i\n         \n        \n        \n         ≤\n        \n        \n         100\n        \n       \n       \n        1\leq a_i\leq 100\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.78597em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         x\n        \n        \n         ≤\n        \n        \n         10000\n        \n       \n       \n        1\leq x \leq 10000\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li></ul> \n'

const output_description_data = '<p>输出跳蛙在总距离在超过 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        x\n       \n      \n      \n       x\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span></span> 之前&#xff0c;一共落地了几次。</p> \n'

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
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(4) > div > div");
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

    if(isProblem) {
        try {
            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = 'http://letmefly666.github.io/various/Links/Title.ico';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        catch(TypeError) {}

        document.title = "跳蛙";
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