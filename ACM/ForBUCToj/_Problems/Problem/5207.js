/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 23:38:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-06-04 11:25:10
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



const problem_description_data = '\n\
<p><font color="pink">不论怎样&#xff0c;我终于见到了你。</font></p> \n\
<p>鉴于<a title="2021.5.21">今天</a>的节日&#xff0c;给你<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        3\n\
       \n\
      \n\
      \n\
       3\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">3</span></span></span></span></span>个数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        a\n\
       \n\
       \n\
        ,\n\
       \n\
       \n\
        b\n\
       \n\
       \n\
        ,\n\
       \n\
       \n\
        c\n\
       \n\
      \n\
      \n\
       a,b,c\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.88888em; vertical-align: -0.19444em;"></span><span class="mord mathdefault">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault">b</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault">c</span></span></span></span></span>&#xff0c;你只需要输出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        5\n\
       \n\
       \n\
        ×\n\
       \n\
       \n\
        a\n\
       \n\
       \n\
        &#43;\n\
       \n\
       \n\
        2\n\
       \n\
       \n\
        ×\n\
       \n\
       \n\
        b\n\
       \n\
       \n\
        &#43;\n\
       \n\
       \n\
        1\n\
       \n\
       \n\
        ×\n\
       \n\
       \n\
        c\n\
       \n\
       \n\
        &#43;\n\
       \n\
       \n\
        1314\n\
       \n\
      \n\
      \n\
       5\times a&#43;2\times b&#43; 1\times c &#43; 1314\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">5</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.66666em; vertical-align: -0.08333em;"></span><span class="mord mathdefault">a</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">2</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.77777em; vertical-align: -0.08333em;"></span><span class="mord mathdefault">b</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.66666em; vertical-align: -0.08333em;"></span><span class="mord mathdefault">c</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">3</span><span class="mord">1</span><span class="mord">4</span></span></span></span></span>的值即可。</p> \n\
<h2><a id="div_35"></a></h2> '

const input_description_data = '\n\
<p>输入包含一行&#xff0c;是三个由空格隔开的正整数&#xff0c;大小不超过<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        2021\n\
       \n\
      \n\
      \n\
       2021\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span><span class="mord">0</span><span class="mord">2</span><span class="mord">1</span></span></span></span></span>。</p> \n\
<hr /> \n\
'

const output_description_data = '<p>输出一行&#xff0c;为对应的值。</p> '

window.onload = function () {
    var isProblem = 1;
    var problem_description, input_description, output_description;
    try {
        problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
        input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
        output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

        problem_description.innerHTML = begin + problem_description_data + end;
        input_description.innerHTML = begin + input_description_data + end;
        output_description.innerHTML = begin + output_description_data + end;
    }
    catch (TypeError) {
        console.log("Not at Original page");
        try {
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(4) > div > div");
            problem_description.innerHTML = begin + problem_description_data + end;
            input_description.innerHTML = begin + input_description_data + end;
            output_description.innerHTML = begin + output_description_data + end;
            isProblem = 2;
        }
        catch (TypeError) {
            console.log(TypeError);
            console.log("Not at second version page");
            isProblem = 0;
        }
    }

    if (isProblem) {
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
    }

    setTimeout(function () {
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";
        author.innerText = "2019040474";
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