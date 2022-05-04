/*
 * @Author: LetMeFly
 * @Date: 2022-05-03 19:59:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-03 20:49:35
 */
const problemDescriptionData = '<p>小F对小M说&#xff1a;</p> \
<blockquote> \
 <p>你的就是我的&#xff0c;我的还是我的。</p> \
</blockquote> \
<p><strong>初始</strong>时小M有 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\n     \n      \n       \n        A\n       \n      \n      \n        A\n       \n      \
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault">A</span></span></span></span></span> 块饼干&#xff0c;小F有 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
    \n     \n      \n       \n        B\n       \n      \n      \n        B\n       \n      \
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.05017em;">B</span></span></span></span></span> 块饼干。</p> \
<p>小F会进行下面操作共 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\n     \n      \n       \n        K\n       \n      \n      \n        K\n       \n      \
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.07153em;">K</span></span></span></span></span> 次&#xff1a;</p> \
<ul><li> <p>如果小M还有饼干&#xff0c;就吃掉一块儿她的饼干</p> </li><li> <p><strong>否则</strong>&#xff0c;如果小F还有饼干&#xff0c;就吃掉一块儿自己的饼干</p> </li><li> <p>如果两人都没有饼干了&#xff0c;就结束操作</p> </li></ul> '

const inputDescriptionData = '<h3><a id="_50"></a>输入描述</h3> \
<p>输入包括一行空格隔开的三个正整数 A B K</p> \
<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         A\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          12\n         \n        \n       \n       \n        0\leq A \leq 10^{12}\n       \n      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">A</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         B\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          12\n         \n        \n       \n       \n        0\leq B \leq 10^{12}\n       \n      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.05017em;">B</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
     \n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         K\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          12\n         \n        \n       \n       \n        0\leq K \leq 10^{12}\n       \n      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.07153em;">K</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul>'

const outputDescriptionData = '<p>输出一行空格隔开的两个字符串&#xff0c;分别代表小M和小F剩下的饼干数。</p>'

const problemName = '你的就是我的，我的还是我的';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}