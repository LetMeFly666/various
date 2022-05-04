/*
 * @Author: LetMeFly
 * @Date: 2022-05-03 21:25:09
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-03 21:26:36
 */
const problemDescriptionData = '<p>小T说&#xff1a;请找到不小于T的最小的素数</p> \n<blockquote> \n <p>素数是除了1和自身外不能被其他整数整除的大于1的正整数</p> \n</blockquote> '

const inputDescriptionData = '<p>输入包括一行一个正整数T</p> \n<p><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        2\n       \n       \n        ≤\n       \n       \n        T\n       \n       \n        ≤\n       \n       \n        1\n       \n       \n        \n         0\n        \n        \n         5\n        \n       \n      \n      \n       2\leq T\leq 10^5\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">2</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.13889em;">T</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></p> \n'

const outputDescriptionData = '<p>输出一行一个正整数&#xff0c;代表不小于T的最小素数</p> '

const problemName = '下一个素数';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}