/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 23:38:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:14:19
 */
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

const problemName = '尝试看到这道题吧';

const change__ = function() {
    try {
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
    catch(e) {}

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
        // console.clear();
        console.log(res);
    }, 3000);
}

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true, change__);
}