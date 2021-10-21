/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-22 03:09:26
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





const problem_description_data = '<p><em>Tisfy: 这是一道数学题&#xff1f;</em></p> \n<p>给你长度为<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        n\n       \n      \n      \n       n\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>的数组<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>和一个正整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        k\n       \n      \n      \n       k\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span></span></span></span></span>&#xff0c;问你<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>有多少个 和大于等于<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        k\n       \n      \n      \n       k\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span></span></span></span></span> 的连续子序列。</p> \n'

const input_description_data = '<p>第一行空格隔开的两个正整数&#xff0c;分别代表数组长度和要大于的数。</p> \n<p>第二行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        n\n       \n      \n      \n       n\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>个空格隔开的正整数&#xff0c;代表数组<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>。</p> \n<p>输入格式如下&#xff1a;</p> \n<pre><code>n k\na1 a2 ... an\n</code></pre> \n<p>其中&#xff1a;</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         \n          a\n         \n         \n          i\n         \n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          5\n         \n        \n       \n       \n        1\leq a_i\leq10^5\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.78597em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         n\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          5\n         \n        \n       \n       \n        1\leq n\leq 10^5\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         k\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          10\n         \n        \n       \n       \n        1\leq k\leq 10^{10}\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83041em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight">0</span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul> \n'

const output_description_data = '<p>输出一行一个正整数代表数组<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>的 和大于等于<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        k\n       \n      \n      \n       k\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span></span></span></span></span>的连续子序列 的个数。</p> \n'

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

        document.title = "数学？";
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