/*
 * @Author: LetMeFly
 * @Date: 2022-05-05 10:34:21
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-05 10:35:26
 */
const problemDescriptionData = '<p>某厉害的大佬&#xff0c;自己写了个高级的IDLE。它能帮助这位大佬检测一些变量的赋值是否符合逻辑。<br /> 大佬编程时&#xff0c;程序中出现了一些变量&#xff08;x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ··· &#xff09;&#xff0c;并且有 n 个形如 x<sub>i</sub> &#61; x<sub>j</sub> 或 x<sub>i</sub> ≠ x<sub>j</sub> 的变量相等/不想等的约束条件。<br /> 这个IDLE能够自动判断是否可以分别给每一个变量赋予一个恰当的值&#xff0c;使得这 n 个条件能够同时被满足。<br /> 例如&#xff0c;一次编程时&#xff0c;约束条件为&#xff1a;x<sub>1</sub> &#61; x<sub>2</sub>, x<sub>2</sub> &#61; x<sub>3</sub>, x<sub>3</sub> &#61; x<sub>4</sub>, x<sub>1</sub> ≠ x<sub>4</sub>。<br /> 显然这些条件无法同时被满足&#xff0c;因此IDLE会报错&#34;CANNOT&#34;。否则会提示&#34;OK&#34;。<br /> 现给定一些约束条件&#xff0c;请分别判断IDLE会提示什么。</p> '

const inputDescriptionData = '<p>第1行包含1个正整数N&#xff0c;表示大佬的N个代码。注意这些代码之间是相互独立的。<br /> 对于每个代码&#xff0c;包含若干行&#xff1a;<br /> 第1行包含1个正整数n&#xff0c;表示该代码中出现的约束条件的个数。<br /> 接下来n行&#xff0c;每行包括3个整数 u, v, op&#xff0c;描述1个相等/不等的约束条件&#xff0c;相邻整数之间用单个空格隔开。若 op &#61; 1 &#xff0c;则该约束条件为 x<sub>u</sub> &#61; x<sub>v</sub> &#xff1b;若 op &#61; 0 &#xff0c;则该约束条件为 x<sub>u</sub> ≠ x<sub>v</sub> 。</p> \n\
<br /> \n\
<p>数据范围&#xff1a;<br /> 1 ≤ ∑n ≤ 100000<br /> 1 ≤ u ,v ≤ 1000000000</p> '

const outputDescriptionData = '<p>包括N行&#xff0c;代表大佬的N个代码。<br /> 第i行输出一个字符串&#34;CANNOT&#34;或&#34;OK&#34;&#xff0c;&#xff08;不包含引号&#xff0c;字母全大写&#xff09;&#xff0c;&#34;CANNOT&#34;表示给定的n个约束条件不能被同时满足&#xff0c;&#34;OK&#34;表示可以被同时满足</p> '

const problemName = '大佬的高级IDLE';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}