/*
 * @Author: LetMeFly
 * @Date: 2022-02-22 21:47:15
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-03-11 01:38:17
 */
const problemDescriptionData = '<p><font face="楷体" title="Tisfy">小T</font>喜欢收集图片。</p> \n<p>有次她阅读英语短文的时候&#xff0c;突发奇想&#xff0c;想要统计一下短文中字母“<code>img</code>”出现的次数。</p> \n<p><font face="楷体" title="Tisfy">AI小T</font>当然不会手动统计“<code>img</code>”的出现次数&#xff0c;而是写了一段程序来统计。</p> '

const inputDescriptionData = '<p>输入共有一个样例&#xff0c;包括多行&#xff0c;可以理解为一篇文章。</p> \n<p>数据保证输入不超过512k</p> \n<p><small>本题数据爬取了70个网页源码&#xff0c;具有一定程度的随机性</small></p> '

const outputDescriptionData = '<p>输出给定“文章”中共包含多少个“img”</p> '

const problemName = '图片收集者';

var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random()
);//设置js地址
document.head.appendChild(script1);//将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}