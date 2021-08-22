/*
 * @Author: LetMeFly
 * @Date: 2021-08-22 16:56:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-08-22 17:02:23
 */

const begin = '<div id="article_content" class="article_content clearfix">\n        <link rel="stylesheet" href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/ck_htmledit_views-b5506197d8.css">\n                <div id="content_views" class="markdown_views prism-atom-one-light">\n                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                    </svg>\n                    <p></p>'

const end = '                </div><div data-report-view="{&quot;mod&quot;:&quot;1585297308_001&quot;,&quot;dest&quot;:&quot;https://letmefly.blog.csdn.net/article/details/116211565&quot;,&quot;extend1&quot;:&quot;pc&quot;,&quot;ab&quot;:&quot;new&quot;}"><div></div></div>\n                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/markdown_views-d7a94ec6ab.css" rel="stylesheet">\n                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/style-f1c5feb645.css" rel="stylesheet">\n        </div>'



const problem_description_data = '<p>堆栈是一种经典的后进先出的线性结构&#xff0c;通常有<code>入栈</code>(Push)和<code>出栈</code>(Pop)两个操作。</p> \n\
<p>某人觉得这样不够好玩&#xff0c;就自己模拟了一个栈&#xff0c;并加上了<code>取中值</code>(GetMedia)操作。</p> \n\
<p>即&#xff0c;返回(不取出)栈中所有元素的最中间那个元素。若最中间的元素有两个&#xff0c;则返回更靠前的那个。</p> \n\
<hr /> '


const input_description_data = '<p>输入包括很多行(<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
行\n\
\n\
\n\
数\n\
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
行数\leq10^5\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord cjk_fallback">行</span><span class="mord cjk_fallback">数</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span>)&#xff0c;每行都是一个操作。</p> \n\
<ol><li> <p>如果操作命令是<code>Push</code>&#xff0c;则后面会紧跟一个空格和数字<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
 \n\
  t\n\
 \n\
 \n\
  (\n\
 \n\
 \n\
  0\n\
 \n\
 \n\
  ≤\n\
 \n\
 \n\
  t\n\
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
  )\n\
 \n\
\n\
\n\
 t(0\leq t\leq 10^5)\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault">t</span><span class="mopen">(</span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">t</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1.06411em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span>&#xff0c;表示要把<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
 \n\
  t\n\
 \n\
\n\
\n\
 t\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.61508em; vertical-align: 0em;"></span><span class="mord mathdefault">t</span></span></span></span></span>入栈。如&#xff1a;<code>Push 3</code>。</p> </li><li> <p>如果操作命令是<code>Pop</code>&#xff0c;则此行它后面什么都不会出现&#xff0c;表示要<font color="red">出栈</font>一个元素。</p> </li><li> <p>如果操作命令是<code>GetMedia</code>&#xff0c;则此行它后面什么都不会出现&#xff0c;表示要<font color="red">返回</font>栈中最中间的那个数。</p> </li></ol> \n\
<p>数据保证每个操作命令不包含空格&#xff0c;即不会出现操作<code>Get Media</code>等。</p> \n\
<hr /> \n'

const output_description_data = '<p>符合上述3种描述的输入都是合法输入&#xff0c;但不一定是合法操作。例如在栈空时尝试<code>Pop</code>命令就是非法的。</p> \n\
<ol><li> <p>如果是<code>Push</code>命令&#xff0c;就把它后面的整数入栈。</p> </li><li> <p>如果是<code>Pop</code>命令&#xff0c;就出栈一个元素并<font color="red">输出</font>。</p> </li><li> <p>如果是<code>GetMedia</code>命令&#xff0c;就<font color="red">输出</font>中间的元素。</p> </li></ol> \n\
<p>操作过程中若出现<font color="red">任何非法情况</font>&#xff0c;则这个操作取消并输出<code>What are you Nong Sha Li?</code>。</p> \n\
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

    if(isProblem){
        document.title = "What are you Nong Sha Li?";
    }
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