/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 16:25:14
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-05-12 21:33:12
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
'
// <p>自从20世纪90年代初Python语言诞生至今&#xff0c;它已被逐渐广泛应用于系统管理任务的处理和<a href="https://baike.baidu.com/item/Web/150564">Web</a>编程。</p> \n\
// <p>Python的创始人为<a href="https://baike.baidu.com/item/%E5%90%89%E5%A4%9A%C2%B7%E8%8C%83%E7%BD%97%E8%8B%8F%E5%A7%86/328361">荷兰人吉多·范罗苏姆</a> &#xff08;Guido van Rossum&#xff09;。1989年圣诞节期间&#xff0c;在<a href="https://baike.baidu.com/item/%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9/2259975">阿姆斯特丹</a>&#xff0c;Guido为了打发<a href="https://baike.baidu.com/item/%E5%9C%A3%E8%AF%9E%E8%8A%82/127881">圣诞节</a>的无趣&#xff0c;决心开发一个新的脚本解释程序&#xff0c;作为<a href="https://baike.baidu.com/item/ABC%E8%AF%AD%E8%A8%80/334996">ABC语言</a>的一种继承。之所以选中Python&#xff08;大蟒蛇的意思&#xff09;作为该编程语言的名字&#xff0c;是取自英国20世纪70年代首播的电视喜剧《蒙提·派森的飞行马戏团》&#xff08;Monty Python’s Flying Circus&#xff09;。</p>\n\ 
// <p>Python是完全面向对象的语言。函数、模块、数字、字符串都是对象。并且完全支持继承、重载、派生、多继承&#xff0c;有益于增强源代码的复用性。Python支持重载运算符和动态类型。相对于Lisp这种传统的函数式编程语言&#xff0c;Python对函数式设计只提供了有限的支持。有两个标准库(functools, itertools)提供了Haskell和Standard ML中久经考验的函数式程序设计工具。</p> \n\
// <p>有些比赛&#xff0c;不限制语言种类&#xff0c;遇到一些对时间要求不高的&#xff0c;用C缺较复杂的题目&#xff0c;不妨试试用python来做。</p> \n\
// <p>比如要计算大整数加法&#xff0c;用Python就很容易&#xff08;此处没有语言偏见&#xff09;。</p> \n\
// <p>Python 已经成为最受欢迎的程序设计语言之一。自从2004年以后&#xff0c;python的使用率呈线性增长。Python 2于2000年10月16日发布&#xff0c;稳定版本是Python 2.7。Python 3于2008年12月3日发布&#xff0c;不完全兼容Python 2。 2011年1月&#xff0c;它被TIOBE编程语言排行榜评为2010年度语言。</p> \n\
// <p>现在给你两个空格相隔的正整数&#xff0c;范围是1~10的100000次方&#xff0c;保证没有前导零&#xff0c;请你计算这两个数的和&#xff0c;同时也请不要输出前导0。</p> \n\
// <p>Python本身被设计为可扩充的。并非所有的特性和功能都集成到语言核心。Python提供了丰富的API和工具&#xff0c;以便程序员能够轻松地使用C语言、C&#43;&#43;、Cython来编写扩充模块。</p> \n\
// <p>由于Python语言的简洁性、易读性以及可扩展性&#xff0c;在国外用Python做科学计算的研究机构日益增多&#xff0c;一些知名大学已经采用Python来教授程序设计课程。</p>\n\
// <p>非输入输出相关部分来自<a href="https://baike.baidu.com/">百度百科</a></p> \n\
// <hr /> \n\
// '


const input_description_data = '\n\
<h3><a id="_34"></a>输入描述</h3> \n\
<p>给你一个十进制的正数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
     \n\
      \n\
       \n\
        n\n\
       \n\
      \n\
      \n\
       n\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>&#xff0c;其中<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        n\n\
       \n\
      \n\
      \n\
       n\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>的位数不超过<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        15\n\
       \n\
      \n\
      \n\
       15\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">5</span></span></span></span></span>位<small>&#xff08;即&#xff0c;小数点前后出现的单个数字的个数之和小于15&#xff09;</small></p> \n\
    '

const output_description_data = '\n\
<h3><a id="_41"></a>输出描述</h3> \n\
<p>你需要把这个数转换成<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         1\n\
        \n\
       \n\
       \n\
        &#43;\n\
       \n\
       \n\
        \n\
         1\n\
        \n\
        \n\
         \n\
          \n\
           a\n\
          \n\
          \n\
           2\n\
          \n\
         \n\
         \n\
          &#43;\n\
         \n\
         \n\
          \n\
           1\n\
          \n\
          \n\
           \n\
            \n\
             a\n\
            \n\
            \n\
             3\n\
            \n\
           \n\
           \n\
            &#43;\n\
           \n\
           \n\
            \n\
             1\n\
            \n\
            \n\
             \n\
              \n\
               a\n\
              \n\
              \n\
               4\n\
              \n\
             \n\
             \n\
              &#43;\n\
             \n\
             \n\
              \n\
               1\n\
              \n\
              \n\
               ⋯\n\
              \n\
             \n\
            \n\
           \n\
          \n\
         \n\
        \n\
       \n\
      \n\
      \n\
       a_1&#43;\frac{1}{a_2&#43;\frac{1}{a_3&#43;\frac{1}{a_4&#43;\frac{1}{\cdots}}}}\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.73333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 2.33177em; vertical-align: -1.48666em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.317314em;"><span class="" style="top: -2.357em; margin-left: 0em; margin-right: 0.0714286em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.143em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.43976em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: 0em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.64444em;"></span><span class="mord mtight">3</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.29964em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.1765em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: 0em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.64444em;"></span><span class="mord mtight">4</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.29964em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.468em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="minner mtight">⋯</span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.387em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.532em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span><span class="" style="top: -3.25694em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.41844em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.38694em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.55091em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.48666em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>的形式&#xff0c;并输出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         1\n\
        \n\
       \n\
       \n\
         \n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         2\n\
        \n\
       \n\
       \n\
         \n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         3\n\
        \n\
       \n\
       \n\
         \n\
       \n\
       \n\
        ⋯\n\
       \n\
       \n\
         \n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         n\n\
        \n\
       \n\
      \n\
      \n\
       a_1\ a_2\ a_3\ \cdots\ a_n\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>&#xff0c;它们之间用一个空格隔开。</p> \n\
'

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
    newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";
    
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