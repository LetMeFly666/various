/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:09:59
 */
// 现5249
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

const problemName = 'Balloon';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true);
}