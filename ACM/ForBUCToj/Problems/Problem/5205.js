/*
 * @Author: LetMeFly
 * @Date: 2021-05-12 16:25:14
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:16:11
 */
const problem_description_data = '\n\
<p>自从20世纪90年代初Python语言诞生至今&#xff0c;它已被逐渐广泛应用于系统管理任务的处理和<a href="https://baike.baidu.com/item/Web/150564">Web</a>编程。</p> \n\
<p>Python的创始人为<a href="https://baike.baidu.com/item/%E5%90%89%E5%A4%9A%C2%B7%E8%8C%83%E7%BD%97%E8%8B%8F%E5%A7%86/328361">荷兰人吉多·范罗苏姆</a> &#xff08;Guido van Rossum&#xff09;。1989年圣诞节期间&#xff0c;在<a href="https://baike.baidu.com/item/%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9/2259975">阿姆斯特丹</a>&#xff0c;Guido为了打发<a href="https://baike.baidu.com/item/%E5%9C%A3%E8%AF%9E%E8%8A%82/127881">圣诞节</a>的无趣&#xff0c;决心开发一个新的脚本解释程序&#xff0c;作为<a href="https://baike.baidu.com/item/ABC%E8%AF%AD%E8%A8%80/334996">ABC语言</a>的一种继承。之所以选中Python&#xff08;大蟒蛇的意思&#xff09;作为该编程语言的名字&#xff0c;是取自英国20世纪70年代首播的电视喜剧《蒙提·派森的飞行马戏团》&#xff08;Monty Python’s Flying Circus&#xff09;。</p>\n<p>Python是完全面向对象的语言。函数、模块、数字、字符串都是对象。并且完全支持继承、重载、派生、多继承&#xff0c;有益于增强源代码的复用性。Python支持重载运算符和动态类型。相对于Lisp这种传统的函数式编程语言&#xff0c;Python对函数式设计只提供了有限的支持。有两个标准库(functools, itertools)提供了Haskell和Standard ML中久经考验的函数式程序设计工具。</p>\n<p>有些比赛&#xff0c;不限制语言种类&#xff0c;遇到一些对时间要求不高的&#xff0c;用C缺较复杂的题目&#xff0c;不妨试试用python来做。</p>\n\
<p>比如要计算大整数加法&#xff0c;用Python就很容易&#xff08;此处没有语言偏见&#xff09;。</p> \n\
<p>Python 已经成为最受欢迎的程序设计语言之一。自从2004年以后&#xff0c;python的使用率呈线性增长。Python 2于2000年10月16日发布&#xff0c;稳定版本是Python 2.7。Python 3于2008年12月3日发布&#xff0c;不完全兼容Python 2。 2011年1月&#xff0c;它被TIOBE编程语言排行榜评为2010年度语言。</p> \n\
<p>现在给你两个换行相隔的正整数&#xff0c;范围是1~10的100000次方&#xff0c;保证没有前导零&#xff0c;请你计算这两个数的和&#xff0c;同时也请不要输出前导0。</p> \n\
<p>Python本身被设计为可扩充的。并非所有的特性和功能都集成到语言核心。Python提供了丰富的API和工具&#xff0c;以便程序员能够轻松地使用C语言、C&#43;&#43;、Cython来编写扩充模块。</p> \n\
<p>由于Python语言的简洁性、易读性以及可扩展性&#xff0c;在国外用Python做科学计算的研究机构日益增多&#xff0c;一些知名大学已经采用Python来教授程序设计课程。</p>\n\
<p>非输入输出相关部分来自<a href="https://baike.baidu.com/">百度百科</a></p> \n\
<hr /> \n\
'

const input_description_data = '<p>这是一道阅读理解题&#xff0c;输入描述就在题目中。</p> '

const output_description_data = '<p>当然也在题目中。<br /> 哦&#xff0c;对了&#xff0c;不在题目描述中的只有一点&#xff1a;<strong>这次比赛不能用Python</strong>。</p> '

const problemName = 'Python大法好';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true);
}