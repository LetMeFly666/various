/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 23:38:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:14:58
 */
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

const change__ = function() {
    var back = document.querySelector("body")
    var para = document.createElement("div");
    var first = document.body.firstChild;
    back.insertBefore(para, first);
    var newP = document.querySelector("div");
    newP.style = "width: 100%; height: 100%; background-color: rgb(252, 252, 252); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    function show(){
        newP.innerHTML = '世界上最遥远的距离，是加与减的距离。仅少一竖，却需重新重载。';
        setTimeout(function(){
            back.removeChild(newP);
        }, 1000);
    }
    show();
}

const problemName = '最遥远的距离';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true, change__);
}