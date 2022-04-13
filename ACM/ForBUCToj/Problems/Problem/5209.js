/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 23:38:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:11:18
 */
const problem_description_data = '<ul><li> <p>2021年5月15日&#xff0c;中国探测器登上火星&#xff01;这是一个值得纪念的日子。</p> </li><li> <p>2137年&#xff0c;中国<a title="中国国家航天局">CNSA</a>研制成功了可以登上火星的载人飞船。</p> </li></ul> \n\
<p>n个人乘坐k个飞船去火星&#xff0c;每个飞船视为相同&#xff0c;问有多少中乘坐方法&#xff1f;</p> \n\
<p>注意&#xff0c;如果有空的飞船&#xff0c;CNSA是不会点火的。所以请保证每艘飞船都有人。</p> \n'


const input_description_data = '\n\
<p>给你两个数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>和<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        k\n\
       \n\
      \n\
      \n\
       k\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span></span></span></span></span>&#xff0c;通过空格隔开&#xff0c;保证<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        n\n\
       \n\
       \n\
        ≥\n\
       \n\
       \n\
        k\n\
       \n\
      \n\
      \n\
       n\geq k\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span></span></span></span></span>&#xff0c;代表<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>个人乘坐<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        k\n\
       \n\
      \n\
      \n\
       k\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span></span></span></span></span>艘飞船。<br /> 科技在进步&#xff0c;当年最多承载<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        25\n\
       \n\
      \n\
      \n\
       25\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span><span class="mord">5</span></span></span></span></span>人去火星&#xff0c;总共有<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        25\n\
       \n\
      \n\
      \n\
       25\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span><span class="mord">5</span></span></span></span></span>艘飞船。&#xff08;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
    \n\
      \n\
       \n\
        0\n\
       \n\
       \n\
        &lt;\n\
       \n\
       \n\
        n\n\
       \n\
       \n\
        ≤\n\
       \n\
       \n\
        25\n\
       \n\
       \n\
        ,\n\
       \n\
       \n\
        0\n\
       \n\
       \n\
        &lt;\n\
       \n\
       \n\
        k\n\
       \n\
       \n\
        ≤\n\
       \n\
       \n\
        n\n\
       \n\
      \n\
      \n\
       0&lt;n\leq 25,0&lt;k\leq n\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68354em; vertical-align: -0.0391em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83888em; vertical-align: -0.19444em;"></span><span class="mord">2</span><span class="mord">5</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83041em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.03148em;">k</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>&#xff09;</p> \n\
<hr /> \n\
\n\
'

const output_description_data = '<p>请输出有多少种不同的乘坐方法</p>  '

const problemName = '登上火星';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true);
}