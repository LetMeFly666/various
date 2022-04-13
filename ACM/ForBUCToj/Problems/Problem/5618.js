/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 21:22:18
 */
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

const problemName = '彩蛋的游戏';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true);
}