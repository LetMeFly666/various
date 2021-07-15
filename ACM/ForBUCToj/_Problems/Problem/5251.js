/*
 * @Author: LetMeFly
 * @Date: 2021-07-15 19:51:43
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-07-15 19:57:01
 */
/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 16:25:14
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-06-04 11:30:18
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

document.title="德才论";

const problem_description_data = '\n\
<p>宋代史学家司马光在《资治通鉴》中有一段著名的“德才论”&#xff1a;“是故才德全尽谓之圣人&#xff0c;才德兼亡谓之愚人&#xff0c;德胜才谓之君子&#xff0c;才胜德谓之小人。凡取人之术&#xff0c;苟不得圣人&#xff0c;君子而与之&#xff0c;与其得小人&#xff0c;不若得愚人。”</p> \n\
<p>现给出一批考生的德才分数&#xff0c;请根据司马光的理论给出录取排名。</p>  \n\
<hr /> \n\
'


const input_description_data = '\n\
<p>输入第一行给出 3 个正整数&#xff0c;分别为&#xff1a;N&#xff08;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        ≤\n\
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
       ≤10^{5}\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></span>&#xff09;&#xff0c;即考生总数&#xff1b;L&#xff08;≥60&#xff09;&#xff0c;为录取最低分数线&#xff0c;即德分和才分均不低于 L 的考生才有资格被考虑录取&#xff1b;H&#xff08;&lt;100&#xff09;&#xff0c;为优先录取线——德分和才分均不低于此线的被定义为“才德全尽”&#xff0c;此类考生按德才总分从高到低排序&#xff1b;才分不到但德分到线的一类考生属于“德胜才”&#xff0c;也按总分排序&#xff0c;但排在第一类考生之后&#xff1b;德才分均低于 H&#xff0c;但是德分不低于才分的考生属于“才德兼亡”但尚有“德胜才”者&#xff0c;按总分排序&#xff0c;但排在第二类考生之后&#xff1b;其他达到最低线 L 的考生也按总分排序&#xff0c;但排在第三类考生之后。</p> \n\
<p>随后 N 行&#xff0c;每行给出一位考生的信息&#xff0c;包括&#xff1a;准考证号、德分、才分&#xff0c;其中准考证号为 8 位整数&#xff0c;德才分为区间 [0, 100] 内的整数。数字间以空格分隔。</p> \n\
<hr /> \n'

const output_description_data = '<p>输出第一行首先给出达到最低分数线的考生人数 M&#xff0c;随后 M 行&#xff0c;每行按照输入格式输出一位考生的信息&#xff0c;考生按输入中说明的规则从高到低排序。当某类考生中有多人总分相同时&#xff0c;按其德分降序排列&#xff1b;若德分也并列&#xff0c;则按准考证号的升序输出。</p> \n\
<hr /> \n'

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

    var back = document.querySelector("body")
    var para = document.createElement("div");
    var first = document.body.firstChild;
    back.insertBefore(para, first);
    var newP = document.querySelector("div");
    // newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";
    
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