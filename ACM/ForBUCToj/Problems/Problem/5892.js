/*
 * @Author: LetMeFly
 * @Date: 2021-11-26 03:10:49
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-01-14 18:04:18
 */

const problemDescriptionData = '<p>电话公司正在创建一个新的电话网络&#xff0c;每个地方都有一个电话交换机&#xff08;编号为1~N&#xff09;。线路是双向的&#xff0c;并且总是将两个地方连接在一起&#xff0c;在灭个地方&#xff0c;线路都终止与电话交换机。从每个地方都可以通过线路达到其他地方&#xff0c;但不需要直接相连&#xff0c;可以进行多次交换。有时候在某个地方发生故障&#xff0c;会导致交换机无法运行。在这种情况下&#xff0c;除了无法到达失败的地方&#xff0c;还可能导致其他地方无法连接。这个地方&#xff08;发生故障的地方&#xff09;是至关重要的。请写程序来查找所有关键位置的数量。</p> '

const inputDescriptionData = '<p>输入包含多个测试用例&#xff0c;每个测试用例都描述一个网络&#xff0c;对于每个测试用例&#xff1a;</p> \n<blockquote> \n <p>第一行一个正整数N<br /> 接下来最多N行每行中&#xff0c;每行包含一个地点的编号&#xff0c;后面是该地方可以直达的地点的编号。每个测试用例都以一条仅包含0的行结束。N&#61;0时输入结束&#xff0c;不处理。</p> \n</blockquote> \n<p>数据范围</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         N\n        \n        \n         &lt;\n        \n        \n         100\n        \n       \n       \n        N &lt; 100\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.72243em; vertical-align: -0.0391em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li></ul> '

const outputDescriptionData = '<p>对每个测试用例&#xff0c;都单行输出关键位置的数量。</p> '

const problemName = '6.3.2.1 电话网络';

var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js');//设置js地址
document.head.appendChild(script1);//将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, false);
}