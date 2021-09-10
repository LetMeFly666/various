/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-09-10 19:26:03
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

const problem_description_data = '<p>一些比赛出题是会发气球的&#xff0c;比如昨天因比赛选手过于凶猛&#xff0c;导致需要送的气球数量指数式增长。因此赛方决定不管气球的颜色&#xff0c;只管气球的数量。</p> \n\
<p>因共有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        10\n\
       \n\
      \n\
      \n\
       10\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span></span>道题目&#xff0c;故赛方准备了<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        10\n\
       \n\
      \n\
      \n\
       10\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span></span>种颜色的气球。现在要统计总共还剩下几个气球&#xff0c;赛方请你写个程序辅助计算。</p> \n\
<hr /> '

const input_description_data = '<p>一行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
10\n\
\n\
\n\
\n\
10\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span></span>个数&#xff0c;以空格隔开&#xff0c;分别代表<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
10\n\
\n\
\n\
\n\
10\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span></span>种气球的个数。其中每种气球的个数不超过<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
500\n\
\n\
\n\
\n\
500\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">5</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span>。</p> \n\
'

const output_description_data = '<p>输出一行一个数&#xff0c;表示总共还剩下多少个气球。</p> '

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

    // var back = document.querySelector("body")
    // var para = document.createElement("div");
    // var first = document.body.firstChild;
    // back.insertBefore(para, first);
    // var newP = document.querySelector("div");
    // newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    // function show(){
    //     newP.innerHTML = '后天就是五一假期了，小L约好了女生一起出去玩。他还剩下最后一道数论作业，写完就可以去嗨了。';
    //     setTimeout(function(){
    //         back.removeChild(newP);
    //     }, 800);
    // }
    // show();

    // let i = 0,
    // timer = 0,
    // str = '后天就是五一假期了，小L约好了女生一起出去玩。他还剩下最后一道数论作业，写完就可以去嗨了。';

    // function typing() {
    //     if (i <= str.length) {
    //         newP.innerHTML = str.slice(0, i++) + '_';
    //         timer = setTimeout(typing, 50);
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