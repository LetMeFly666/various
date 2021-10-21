/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-22 03:43:40
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



const problem_description_data = '<p>取经成功的斗战胜佛又犯了事&#xff0c;这次他召唤了很多分身来逃离如来佛主的五指山。</p> \n<p>悟空召唤了<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n       \n        −\n       \n       \n        1\n       \n      \n      \n       N-1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.76666em; vertical-align: -0.08333em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>个分身&#xff08;加上真身&#xff0c;共有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span>个孙猴子&#xff09;&#xff0c;每个猴子只能朝固定的一个方向移动&#xff0c;移动速度相同。</p> \n<p>如来佛想要一掌压住所有的猴子&#xff0c;问你佛主的手掌的最小面积是多少。</p> \n<hr /> \n<p>为了简化问题&#xff0c;我们把天庭想象成一个二维坐标平面。</p> \n<p>初始时&#xff0c;每个猴子都具有一个坐标和一个逃离方向&#xff1a;</p> \n<blockquote> \n <ul><li><code>U</code>代表向上逃&#xff0c;即<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          y\n         \n        \n        \n         y\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.03588em;">y</span></span></span></span></span>轴的正方向</li><li><code>D</code>代表向下逃&#xff0c;即<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          y\n         \n        \n        \n         y\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.03588em;">y</span></span></span></span></span>轴的负方向</li><li><code>L</code>代表向左逃&#xff0c;即<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          x\n         \n        \n        \n         x\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span></span>轴的负方向</li><li><code>R</code>代表向右逃&#xff0c;即<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          x\n         \n        \n        \n         x\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span></span>轴的正方向</li></ul> \n</blockquote> \n<p>如来佛主的手掌想象成一个矩形&#xff0c;要压住所有的猴子&#xff0c;即某时刻所有的猴子都在矩形之内&#xff08;或边界上&#xff09;</p> \n'

const input_description_data = '<p>第一行一个正整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span>&#xff0c;代表共有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span>只猴子</p> \n<p>接下来<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span>行&#xff0c;每行有空格隔开的两个正整数和一个字符&#xff0c;分别代表这只猴子初始位置的<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        x\n       \n      \n      \n       x\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">x</span></span></span></span></span>、<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        y\n       \n      \n      \n       y\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.03588em;">y</span></span></span></span></span>坐标及其逃离方向。</p> \n<p>输入格式如下&#xff1a;</p> \n<pre><code>N\nx1 y1 d1\nx2 y2 d2\n...\nxn yn dn\n</code></pre> \n<p>其中&#xff1a;</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         N\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          5\n         \n        \n       \n       \n        1\leq N\leq10^5\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         −\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          8\n         \n        \n        \n         ≤\n        \n        \n         \n          x\n         \n         \n          i\n         \n        \n        \n         ,\n        \n        \n         \n          y\n         \n         \n          i\n         \n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          8\n         \n        \n       \n       \n        -10^8\leq x_i, y_i\leq 10^8\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.950078em; vertical-align: -0.13597em;"></span><span class="mord">−</span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83041em; vertical-align: -0.19444em;"></span><span class="mord"><span class="mord mathdefault">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord"><span class="mord mathdefault" style="margin-right: 0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: -0.03588em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         \n          d\n         \n         \n          i\n         \n        \n       \n       \n        d_i\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.84444em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>是<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         U\n        \n       \n       \n        U\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">U</span></span></span></span></span>, <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         D\n        \n       \n       \n        D\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.02778em;">D</span></span></span></span></span>, <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         L\n        \n       \n       \n        L\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault">L</span></span></span></span></span> 或 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         R\n        \n       \n       \n        R\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.00773em;">R</span></span></span></span></span>。</li></ul> \n'

const output_description_data = '<p>输出如来佛手掌的最小面积&#xff0c;答案保留6位小数。</p> '

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
            console.log("May 竞赛状态");
            try {
                problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(2) > div > div");
                input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(3) > div > div");
                output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(4) > div > div");
                problem_description.innerHTML = begin + problem_description_data + end;
                input_description.innerHTML = begin + input_description_data + end;
                output_description.innerHTML = begin + output_description_data + end;
                isProblem=3; // 竞赛状态
            }
            catch(TypeError) {
                console.log(TypeError);
                console.log("Not at second version page");
                isProblem=0;
            }
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

        document.title = "逃离";
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