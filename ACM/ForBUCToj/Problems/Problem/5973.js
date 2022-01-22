/*
 * @Author: LetMeFly
 * @Date: 2022-01-22 15:53:55
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-01-22 15:55:02
 */
const problemDescriptionData = '<p>鲍勃喜欢完战略游戏&#xff0c;但他有时候找不到够快的解决方案。</p> \n<p>限制他必须保卫一座中世纪城市&#xff0c;城市的道路形成一棵树。</p> \n<p>他必须把最小数量的士兵放在节点上&#xff0c;这样才可以观察到所有道路。</p> \n<p>请帮鲍勃找到放置的最小士兵数。</p> \n<p>例如下图所示的树&#xff0c;解决方案是放置1个士兵(放置在节点1处)。</p> \n<center>\n <img src="data:image/jpeg;base64,R0lGODlhmgCSAJEAAH9/fwAAAP///wAAACH5BAAAAAAALAAAAACaAJIAAAL/lI&#43;py&#43;0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fy7AH2Ted0wCt8oAuygA&#43;i8EgyFpFMkBLybEorUej0SqlGtNiugbv1ihPcngM8bmqJYHT6WP4u3924AO2m5&#43;x4PZY/5ycFeCY4RdiQZwiDyKC46NLm9gjZQulTqaZxmanCifDZiRIaKjpqUWp6OpGqumrleggbe2gGakv794ObKwbQ6/cLTCc8nFZs7Jt8vDyG3Hz1DC0lPc1UbX2EnR20zZ3j/T0TLh5DXv5yjt6ivr7S7p4CH38yT19ifz&#43;Srx/C3//hH8AOAgduKGgwA8KEFxYyrODw4YSIEhPt4lWxww8E/8I2ZtyAcUHIj2GykKRyoZXBUir7tWp5r82skyIb2MgDc90kCTnL7SxJE9TMQkGFBjpa9OfQoEqRMl3qqKhRjVKnbqpqNUNPnSCxkunqNavJsF9Rka059qzQkWS2xlTisS0Qt/HKXHzC9ilYrHnTJg3RdyXdOycHHwhc13DZhIrRDmzsCLIgxCUk07HslBvlFJtzYfY77TMV0UJIm02Go0tqz3pMr&#43;iMxPWryaZki7A9&#43;u4tUbAtjdwVa83dz4pwn4D7u/dpnrSAbzHMybgJ2HRJubLu5Cpv7VQjN12kEuaaw5lbe2g5Xg5RSJP6hgeaiP2sPtzjQ31Dib7W8pjAg2buv5998PlR3HfLATigeazwx1xUC/r3oIAY2BWXhAT&#43;t1iA9dEWiH4afmhIex6CmFIm4p23IYQprpigfCRyEF1wEyaBYScxVtagZwWOkpx0r/Xom27WDOejWkYeiWSSSi7JZJMKFAAAOw&#61;&#61;" />\n</center> '

const inputDescriptionData = '<p>输入多个测试用例。</p> \n<blockquote> \n <p>对每个测试用例&#xff1a;</p> \n <p>第一行包含节点数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         n\n        \n        \n         (\n        \n        \n         0\n        \n        \n         &lt;\n        \n        \n         n\n        \n        \n         ≤\n        \n        \n         1500\n        \n        \n         )\n        \n       \n       \n        n(0&lt;n\leq1500)\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault">n</span><span class="mopen">(</span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord">5</span><span class="mord">0</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span></p> \n <p>接下来的<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         n\n        \n       \n       \n        n\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>行&#xff0c;每行的描述为“节点编号:(道路数) 节点编号1 节点编号2 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         ⋯\n        \n       \n       \n        \cdots\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.31em; vertical-align: 0em;"></span><span class="minner">⋯</span></span></span></span></span>” 或 “节点编号:(0)”</p> \n <p>节点编号为0~n-1&#xff0c;每个节点连接的道路数不超过10条。每条道路在输入数据中都只出现一次</p> \n</blockquote> '

const outputDescriptionData = '<p>对于每个测试用例&#xff0c;都单行输出放置的最小士兵数。</p> '

const problemName = '进阶7.5.2 战略游戏';

var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js');//设置js地址
document.head.appendChild(script1);//将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, false);
}