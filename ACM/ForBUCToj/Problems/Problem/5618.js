/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-09-23 20:23:40
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



const problem_description_data = '<h3><a id="_31"></a>题目描述</h3> \
<p><a title="Tisfy">小T</a>找完了<a title="LetMeFly">男神</a>游戏的彩蛋后自己做了一款找彩蛋的游戏&#xff0c;游戏十分简单&#xff1a;</p> \
<blockquote> \
 <p>和<big><a title="游戏的彩蛋">上题</a></big>类似&#xff0c;用序列表示程序。彩蛋的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         b\
        \
       \
       \
        b\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>长度为<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         1\
        \
       \
       \
        1\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>&#xff08;只有1个数字&#xff09;&#xff0c;程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         a\
        \
       \
       \
        a\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>长度为<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         n\
        \
       \
       \
        n\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>&#xff08;有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         n\
        \
       \
       \
        n\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>个数字&#xff09;</p> \
 <p>你只需要找出程序中有多少个彩蛋即可。&#xff08;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         a\
        \
       \
       \
        a\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>中有多少个<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         b\
        \
       \
       \
        b\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff09;</p> \
</blockquote> \
<hr /> '


const input_description_data = '<p>输入包括<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\
 \
  \
   \
    2\
   \
  \
  \
   2\
  \
 \
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span></span></span></span></span>行</p> \
<ul><li>第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     1\
    \
   \
   \
    1\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>行两个以空格隔开的整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     m\
    \
   \
   \
    m\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">m</span></span></span></span></span> <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     b\
    \
   \
   \
    b\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff0c;代表序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     a\
    \
   \
   \
    a\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>的长度和彩蛋<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     b\
    \
   \
   \
    b\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span></li><li>第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     2\
    \
   \
   \
    2\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span></span></span></span></span>行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     m\
    \
   \
   \
    m\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">m</span></span></span></span></span>个空格隔开的整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     \
      a\
     \
     \
      1\
     \
    \
   \
   \
    a_1\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span> <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     \
      a\
     \
     \
      2\
     \
    \
   \
   \
    a_2\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span> <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     ⋯\
    \
   \
   \
    \cdots\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.31em; vertical-align: 0em;"></span><span class="minner">⋯</span></span></span></span></span> <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     \
      a\
     \
     \
      m\
     \
    \
   \
   \
    a_m\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>&#xff0c;代表程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     a\
    \
   \
   \
    a\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span></li></ul> \
<p>数据范围</p> \
<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     1\
    \
    \
     ≤\
    \
    \
     m\
    \
    \
     ≤\
    \
    \
     1000\
    \
   \
   \
    1\leq m \leq 1000\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">m</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
 \
  \
   \
    \
     0\
    \
    \
     ≤\
    \
    \
     b\
    \
    \
     ≤\
    \
    \
     1000\
    \
   \
   \
    0\leq b \leq 1000\
   \
  \
 </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83041em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">b</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li></ul> \
<hr /> '

const output_description_data = '<p>输出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\
 \
  \
   \
    1\
   \
  \
  \
   1\
  \
 \
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\
 \
  \
   \
    1\
   \
  \
  \
   1\
  \
 \
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>个整数&#xff0c;代表序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\
 \
  \
   \
    a\
   \
  \
  \
   a\
  \
 \
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>中含有多少个<span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\
 \
  \
   \
    b\
   \
  \
  \
   b\
  \
 \
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span></p> \
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

        document.title = "彩蛋的游戏";
    }

    // setTimeout(function () {
    //     var author = document.querySelector("#creator > a");
    //     author.href = "userinfo.php?user=2019040474";
    //     author.innerText="2019040474";
    // }, 3000);
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