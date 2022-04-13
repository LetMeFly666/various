/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:10:45
 */

const problem_description_data = '<p>哥哥在生活中经常扮演者保护妹妹的角色。有的“好”妹妹懂得心疼哥哥。但是心疼哥哥的前提是拥有哥哥。</p> \n\
<p>这是一些常见的亲戚关系中英文对应表&#xff1a;</p> \n\
<table><thead><tr><th style="text-align:center">中文</th><th style="text-align:center">英文</th></tr></thead><tbody><tr><td>哥哥</td><td>elder brother</td></tr><tr><td>姐姐</td><td>elder sister</td></tr><tr><td>弟弟</td><td>younger brother</td></tr><tr><td>妹妹</td><td>younger sister</td></tr><tr><td>爸爸妈妈</td><td>parents</td></tr><tr><td>爷爷奶奶</td><td>grandparents</td></tr><tr><td>儿子</td><td>son</td></tr><tr><td>女儿</td><td>daughter</td></tr><tr><td>爸爸的哥哥</td><td>father\'s elder brother</td></tr></tbody></table>\n\
<p>当然还有很多其他的称谓&#xff0c;但是保证本题只会出现这些称谓。</p> \n\
<hr /> '

const input_description_data = '<p>给你一行一个字符串&#xff08;长度 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
≤\n\
\n\
\n\
5000\n\
\n\
\n\
\n\
\leq 5000\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">5</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span>&#xff09;&#xff0c;是小T的亲戚关系。</p> \n\
<p>每个亲戚之间&#xff0c;用一个逗号和一个空格隔开。</p> \n\
<p>例如&#xff1a;小T有一个哥哥和一个姐姐&#xff0c;输入为&#xff1a;<code>elder brother, elder sister</code>。</p> \n\
<hr /> '

const output_description_data = '<p>如果小T拥有哥哥&#xff08;输入中含有“elder brother”&#xff09;&#xff0c;那么请输出<code>I can do nothing but to &#39;Xin Teng Gie Gie&#39;</code>&#xff0c;否则请输出<code>I have no elder brother ~_~</code>。</p> \n\
<hr /> '

const problemName = '我只会心疼哥哥';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true);
}