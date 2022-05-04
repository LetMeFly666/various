/*
 * @Author: LetMeFly
 * @Date: 2022-05-04 15:49:14
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-04 17:42:30
 */
const problemDescriptionData = '<p>这是一个日本的创意广告&#xff0c;讲述了一百个人如何交换名片&#xff08;与此题无关&#xff0c;可自行决定是否观看&#xff09;<a href="https://www.bilibili.com/video/BV1wS4y1m7sM">https://www.bilibili.com/video/BV1wS4y1m7sM</a>:</p> \
<iframe src="//player.bilibili.com/player.html?aid=725165451&bvid=BV1wS4y1m7sM&cid=562324021&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>\
<p>20202年疫情结束&#xff0c;小T作为人类记忆的载体&#xff0c;登上了三体星球。</p> \
<p>三体人都十分欢迎小T&#xff0c;每人都用两种语言准备了自己的名片(左手地球语言&#x1f30f;&#xff0c;右手三体语言&#x1fa90;)</p> \
<p>但是三体人太多了&#xff0c;一共有N(N ≤ 100000)个&#xff0c;小T决定只收取M次名片。</p> \
<p>每次&#xff0c;小T都会这样收取名片&#xff1a;</p> \
<blockquote> \
 <ul><li>用左手收取三体人x右手中的名片&#x1fa90;</li><li>用右手收取三体人y左手中的名片&#x1f30f;</li></ul> \
 <p>并将这次名片收取行动记为(x, y)</p> \
</blockquote> \
<p>这样&#xff0c;三体人与地球人的好感度就会增加 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        \n         A\n        \n        \n         x\n        \n       \n       \n        &#43;\n       \n       \n        \n         A\n        \n        \n         y\n        \n       \n      \n      \n       A_x &#43; A_y\n      \n     \
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.83333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 0.969438em; vertical-align: -0.286108em;"></span><span class="mord"><span class="mord mathdefault">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight" style="margin-right: 0.03588em;">y</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.286108em;"><span class=""></span></span></span></span></span></span></span></span></span></span>。</p> \
<p>小T想最大化三体人与地球人的亲密度&#xff0c;但是为了避免其他三体人的嫉妒&#xff0c;小T的M次名片收取行动必须各不相同。</p> \
<blockquote> \
 <p>也就是说&#xff0c;不能存在两次名片收取行动(x1, y1)和(x2, y2)&#xff0c;满足x1 &#61; x2 且 y1 &#61; y2<br /> 但是&#xff0c;x1可以等于y1&#xff08;也就是说一次名片收取行动中可以左手右手收取同一三体人的名片&#xff09;</p> \
</blockquote> \
<p>那么经过M次名片收取活动后&#xff0c;地球人与三体人的亲密度增加了多少呢&#xff1f;</p> '

const inputDescriptionData = '<p><strong>输入格式&#xff1a;</strong></p> \
<pre><code>N M\n\
A1 A2 ... AN\
</code></pre> \
<p>N代表一共有N个三体人&#xff0c;M代表一共收取M次名片。<br /> Ai代表收取一张三体人i的名片&#xff0c;亲密度将会增加Ai&#xff08;1 ≤ i ≤ N&#xff09;</p> \
<p><strong>数据范围&#xff1a;</strong></p> \
<ul><li> <p><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
\n       \n        \n         \n          1\n         \n         \n          ≤\n         \n         \n          N\n         \n         \n          ≤\n         \n         \n          1\n         \n         \n          \n           0\n          \n          \n           5\n          \n         \n        \n        \n         1 \leq N \leq 10^5\n        \n       \
      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></p> </li><li> <p><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
      \n       \n        \n         \n          1\n         \n         \n          ≤\n         \n         \n          M\n         \n         \n          ≤\n         \n         \n          \n           N\n          \n          \n           2\n          \n         \n        \n        \n         1\leq M\leq N ^2\n        \n       \
      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">M</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord"><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></p> </li><li> <p><span class="katex--inline"><span class="katex"><span class="katex-mathml">\
      \n       \n        \n         \n          1\n         \n         \n          ≤\n         \n         \n          \n           A\n          \n          \n           i\n          \n         \n         \n          ≤\n         \n         \n          1\n         \n         \n          \n           0\n          \n          \n           5\n          \n         \n        \n        \n         1\leq A_i\leq 10^5\n        \n       \
      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span></p> </li><li> <p>所有输入的数都是整数</p> </li></ul> \
<p><strong>样例解释&#xff1a;</strong></p> \
<pre><code>5 3\n\
10 14 19 34 33\
</code></pre> \
<p>三体星球共有5个三体人&#xff0c;小T共收取3次名片</p> \
<ul><li>小T每收取一张三体人1的名片&#xff0c;三体人与地球人的亲密度就会增加10</li><li>小T每收取一张三体人2的名片&#xff0c;三体人与地球人的亲密度就会增加14</li><li>小T每收取一张三体人3的名片&#xff0c;三体人与地球人的亲密度就会增加19</li><li>小T每收取一张三体人4的名片&#xff0c;三体人与地球人的亲密度就会增加34</li><li>小T每收取一张三体人5的名片&#xff0c;三体人与地球人的亲密度就会增加33</li></ul> \
'

const outputDescriptionData = '<p>输出一行一个正整数&#xff0c;代表小T进行M次名片收取行动最多能让三体人和地球人的亲密度增加多少。</p> \
<p><strong>样例解释&#xff1a;</strong></p> \
<p>在上述样例中&#xff1a;</p> \
<ul><li>第一次小T左手收取三体人4右手中的名片&#x1fa90;&#xff0c;右手收取三体人4左手中的名片&#x1f30f;&#xff0c;并记为(4, 4)</li><li>第二次小T左手收取三体人4右手中的名片&#x1fa90;&#xff0c;右手收取三体人5左手中的名片&#x1f30f;&#xff0c;并记为(4, 5)</li><li>第三次小T左手收取三体人5右手中的名片&#x1fa90;&#xff0c;右手收取三体人4左手中的名片&#x1f30f;&#xff0c;并记为(5, 4)</li></ul> \
<p>因此亲密度会增加(34 &#43; 34) &#43; (34 &#43; 33) &#43; (33 &#43; 34) &#61; 202。</p> \
<p>找不到亲密度增加多于202的方法。</p> \
<p>因此输出&#xff1a;</p> \
<pre><code>202\
</code></pre> '

const problemName = '十万人如何交换名片';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}