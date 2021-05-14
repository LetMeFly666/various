/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 23:38:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-05-14 23:04:32
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

const input_description_data = '<p>输入描述就在题目中。</p> '

const output_description_data = '<p>当然也在题目中。</p> '

window.onload = function () {
    var problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
    var input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
    var output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

    problem_description.innerHTML = begin + problem_description_data + end;
    input_description.innerHTML = begin + input_description_data + end;
    output_description.innerHTML = begin + output_description_data + end;
    document.title = "尝试看到这道题吧-BUCTOJ";

    var back = document.querySelector("body")
    var para = document.createElement("div");
    var first = document.body.firstChild;
    back.insertBefore(para, first);
    var newP = document.querySelector("div");
    newP.style = "width: 100%; height: 100%; background-color: rgb(252, 252, 252); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    function show() {
        newP.innerHTML = '<iframe src="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/Live2D.html" width="100%" height="100%"></iframe>';
    }
    show();

    setTimeout(function () {
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";

    }, 3000);

    
    var res = `
       __  __     ____         _       __           __    __
      / / / /__  / / /___     | |     / /___  _____/ /___/ /
     / /_/ / _ \\/ / / __ \\    | | /| / / __ \\/ ___/ / __  / 
    / __  /  __/ / / /_/ /    | |/ |/ / /_/ / /  / / /_/ /  
   /_/ /_/\\___/_/_/\\____/     |__/|__/\\____/_/  /_/\\__,_/   
   提示一下吧，可以参考https://LetMeFly.blog.csdn.net/article/details/116806646     
   对了，2021-5-21 16:20:00 之前是无法访问的^-^                                       
`
    setTimeout(() => {
        console.clear();
        console.log(res);
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