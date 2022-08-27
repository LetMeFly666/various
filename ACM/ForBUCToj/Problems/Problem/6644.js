/*
 * @Author: LetMeFly
 * @Date: 2022-08-22 15:32:30
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-08-27 13:38:57
 */
const problemDescriptionData = '<p>在这道问题中&#xff0c;你需要按照<a href="#LetMeFly_Needs">要求</a>&#xff0c;格式化给定的<a href="#LetMeFly_JSON">JSON对象</a>。</p> \n\
<p><a id="LetMeFly_JSON"></a></p> \n\
<p>JSON(JavaScript Object Notation)是一种轻量级的数据交换格式。</p> \n\
<p>为了方便处理&#xff0c;本题的JSON字符串满足以下限制&#xff1a;</p> \n\
<p><strong>JSON对象</strong>具有以下形式&#xff1a;</p> \n\
<p><b>{<!-- --><small><i>左括号</i></small></b>     <b>,<small><i>逗号</i></small>隔开的数个键值对</b>     <b>}<small><i>右括号</i></small></b></p> \n\
<p>例如&#xff1a;</p> \n\
<ul><li><code>{}</code>&#xff08;0个键值对&#xff09;</li><li><code>{ }</code>&#xff08;0个键值对&#xff09;</li><li><code>{键值对}</code>&#xff08;1个键值对&#xff09;</li><li><code>{键值对,键值对}</code>&#xff08;2个键值对&#xff09;</li><li><code>{键值对 , 键值对 }</code>&#xff08;2个键值对&#xff09;</li><li><code>{键值对, 键值对, 键值对}</code>&#xff08;3个键值对&#xff09;</li></ul> \n\
<p><strong>键值对</strong>具有以下形式&#xff1a;</p> \n\
<p><b>字符串</b>     <b>:</b>     <b>值</b></p> \n\
<p>例如&#xff1a;</p> \n\
<ul><li><code>字符串: 值</code></li><li><code>字符串 :值</code></li></ul> \n\
<p><small>本题不用考虑多个键值对是否相同的问题</small></p> \n\
<p><strong>字符串</strong>具有以下形式&#xff1a;</p> \n\
<p><b>“<small><i>双引号</i></small></b>     <b>字符串内容</b>     <b>”<small><i>双引号</i></small></b></p> \n\
<p>例如&#xff1a;</p> \n\
<ul><li><code>&#34;字符串内容&#34;</code></li></ul> \n\
<p><strong>字符串内容</strong>可以包括字母、数字、以及非<code>&#34;</code>字符&#xff08;本题不需要考虑字符串转义的问题&#xff09;</p> \n\
<p>例如&#xff1a;</p> \n\
<ul><li><code>LetMeFly</code></li><li><code>Tisfy</code></li><li><code>Ha?ks_998Ys</code></li><li><code>.;lsfjie:</code></li></ul> \n\
<p><strong>值</strong>可以是字符串&#xff0c;也可以是JSON对象&#xff08;此题不考虑数字、布尔值、数组等&#xff09;</p> \n\
<p>例如&#xff1a;</p> \n\
<ul><li><code>&#34;LetMeFly&#34;</code>&#xff08;这是一个字符串&#xff09;</li><li><code>{&#34;LetMeFly&#34;: &#34;Tisfy&#34;}</code>&#xff08;这是一个JSON对象&#xff09;</li></ul> \n\
<p>以下都是符合本题题意的JSON对象&#xff1a;</p> \n\
<ul><li><code>{}</code></li><li><code>{&#34;LetMeFly&#34; : &#34;Tisfy&#34;}</code></li><li><code>{&#34;LetMeFly&#34;: &#34;Tisfy&#34;, &#34;aHa?&#34;: &#34;888&#34;}</code></li><li><code>{&#34;LetMeFly&#34; : {&#34;TaoWa?&#34;: &#34;Yes!&#34;}}</code></li><li><code>{&#34;____&#34; : {&#34;TaoWa?&#34;: {&#34;ZaiLaiYiCeng&#34;: &#34;...&#34;}}, &#34;DouHao&#34;: &#34;GeKai&#34;}</code></li><li><code>{&#34;ZiFuChuan_string&#34;: &#34;FakeJSONObject{&#34;}</code></li><li><code>{&#34;data&#34;:{&#34;problemsetStreakCounter&#34;:{&#34;today&#34;:&#34;2022-08-22T16:04:39.145943197&#43;08:00&#34;,&#34;streakCount&#34;: &#34;399&#34;,&#34;daysSkipped&#34;:&#34;0&#34;,&#34;todayCompleted&#34;:&#34;true&#34;,&#34;__typename&#34;:&#34;StreakCounterNode&#34;}}}</code></li><li><code>{&#34;ZuiHouYiTi?&#34; : &#34;MayBe&#34;}</code></li></ul> \n\
<p>到此为止&#xff0c;此题的<code>JSON对象</code>的格式终于讲完了。</p> \n\
<p>但是需求才刚刚开始&#x1f637;</p> \n\
<p><a id="LetMeFly_Needs"></a></p> \n\
<p>这道题的需求是&#xff0c;给你一个符合上述条件的JSON对象&#xff0c;请你按照要求将其格式化。</p> \n\
<p><strong>JSON对象</strong>格式化后为&#xff1a;</p> \n\
<pre><code>{左括号\n\
四个空格的缩进   键值对1  逗号\n\
四个空格的缩进   键值对2  逗号\n\
四个空格的缩进   键值对3\n\
}右括号\n\
</code></pre> \n\
<p>例如&#xff1a;</p> \n\
<pre><code>{\n\
    键值对1,\n\
    键值对2,\n\
    键值对3\n\
}\n\
</code></pre> \n\
<p>或者&#xff08;键值对数量为0&#xff09;</p> \n\
<pre><code>{\n\
}\n\
</code></pre> \n\
<p><small></small><del>空的JSON对象这样格式化好像挺丑的&#xff0c;但是此题就不再要求空的JSON对象要格式化到一行了</del></p> \n\
<p><strong>键值对</strong>格式化后为&#xff1a;</p> \n\
<pre><code>字符串 :冒号 一个空格 值\n\
</code></pre> \n\
<p>例如</p> \n\
<pre><code>&#34;LetMeFly&#34;: &#34;Tisfy&#34;\n\
</code></pre> \n\
<p>或者&#xff08;值为JSON对象&#xff09;</p> \n\
<pre><code>&#34;MaoHaoHouDeKongGeShiJianZhiDuiDeGeShiHuaYaoQiu&#34;: {\n\
    &#34;QianMianYaoZaiYou4GeSuoJin&#34;: &#34;ZheShiJSONDuiXiangDeGeShiHuaYaoQiu&#34;\n\
}\n\
</code></pre> \n\
<p>以下都是符号要求的格式化后的JSON对象</p> \n\
<pre><code>{\n\
}\n\
</code></pre> \n\
<pre><code>{\n\
    &#34;1234567890&#34;: &#34;!&#64;#$%^&amp;*()&#34;\n\
}\n\
</code></pre> \n\
<pre><code>{\n\
    &#34;1&#34;: &#34;2&#34;,\n\
    &#34;3&#34;: &#34;4&#34;\n\
}\n\
</code></pre> \n\
<pre><code>{\n\
    &#34;1&#34;: &#34;2&#34;,\n\
    &#34;3&#34;: {\n\
        &#34;4&#34;: &#34;5&#34;\n\
    },\n\
    &#34;6&#34;: &#34;7&#34;\n\
}\n\
</code></pre> \n\
<pre><code>{\n\
    &#34;^_^&#34;: &#34;^_^&#34;,\n\
    &#34;^_^.&#34;: {\n\
        &#34;^_^&#34;: {\n\
            &#34;^_^&#34;: {\n\
                &#34;^_^&#34;: &#34;^_^&#34;\n\
            }\n\
        }\n\
    },\n\
    &#34;.^_^&#34;: &#34;^_^&#34;\n\
}\n\
</code></pre> '

const inputDescriptionData = '<p><strong>输入格式&#xff1a;</strong></p> \n\
<p>输入为一行一个没有空格的JSON对象字符串&#xff0c;保证数据合法</p> \n\
<p><strong>数据范围&#xff1a;</strong></p> \n\
<p>输入字符串的长度不超过2000</p> '

const outputDescriptionData = '<p>输出按照题目要求格式化后的JSON字符串</p> \n\
<p><strong>例如&#xff1a;</strong></p> \n\
<pre><code>{&#34;^_^&#34;:&#34;^_^&#34;,&#34;^_^.&#34;:{&#34;^_^&#34;:{&#34;^_^&#34;:{&#34;^_^&#34;:&#34;^_^&#34;}}},&#34;.^_^&#34;:&#34;^_^&#34;}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;^_^&#34;: &#34;^_^&#34;,\n\
    &#34;^_^.&#34;: {\n\
        &#34;^_^&#34;: {\n\
            &#34;^_^&#34;: {\n\
                &#34;^_^&#34;: &#34;^_^&#34;\n\
            }\n\
        }\n\
    },\n\
    &#34;.^_^&#34;: &#34;^_^&#34;\n\
}\n\
</code></pre> \n\
<p>再例如&#xff1a;</p> \n\
<pre><code>{&#34;LetMeFly&#34;:{&#34;Tisfy&#34;:&#34;^_^&#34;},&#34;BeCarefulOfMe:&#34;:&#34;TheCharacter&#39;{&#39;IsFake&#34;}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;LetMeFly&#34;: {\n\
        &#34;Tisfy&#34;: &#34;^_^&#34;\n\
    },\n\
    &#34;BeCarefulOfMe:&#34;: &#34;TheCharacter&#39;{&#39;IsFake&#34;\n\
}\n\
</code></pre> \n\
<p>再例如&#xff1a;</p> \n\
<pre><code>{&#34;1&#34;:&#34;2&#34;,&#34;3&#34;:{&#34;4&#34;:&#34;5&#34;},&#34;6&#34;:&#34;7&#34;}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;1&#34;: &#34;2&#34;,\n\
    &#34;3&#34;: {\n\
        &#34;4&#34;: &#34;5&#34;\n\
    },\n\
    &#34;6&#34;: &#34;7&#34;\n\
}\n\
</code></pre> \n\
<p>再例如&#xff1a;</p> \n\
<pre><code>{&#34;1&#34;:{&#34;2&#34;:{&#34;3&#34;:{&#34;4&#34;:{&#34;5&#34;:&#34;6&#34;}}}}}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;1&#34;: {\n\
        &#34;2&#34;: {\n\
            &#34;3&#34;: {\n\
                &#34;4&#34;: {\n\
                    &#34;5&#34;: &#34;6&#34;\n\
                }\n\
            }\n\
        }\n\
    }\n\
}\n\
</code></pre> \n\
<p>再例如&#xff1a;</p> \n\
<pre><code>{&#34;1&#34;:{&#34;2&#34;:{&#34;3&#34;:{&#34;4&#34;:&#34;5&#34;}}},&#34;6&#34;:&#34;7&#34;}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;1&#34;: {\n\
        &#34;2&#34;: {\n\
            &#34;3&#34;: {\n\
                &#34;4&#34;: &#34;5&#34;\n\
            }\n\
        }\n\
    },\n\
    &#34;6&#34;: &#34;7&#34;\n\
}\n\
</code></pre> \n\
<p>再例如&#xff1a;</p> \n\
<pre><code>{&#34;1&#34;:&#34;2&#34;,&#34;3&#34;:{&#34;4&#34;:&#34;5&#34;}}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;1&#34;: &#34;2&#34;,\n\
    &#34;3&#34;: {\n\
        &#34;4&#34;: &#34;5&#34;\n\
    }\n\
}\n\
</code></pre> \n\
<p>再例如&#xff1a;</p> \n\
<pre><code>{&#34;1&#34;:{}}\n\
</code></pre> \n\
<p>↓</p> \n\
<pre><code>{\n\
    &#34;1&#34;: {\n\
    }\n\
}\n\
</code></pre> \n\
<hr /> \n\
<h3><a id="_348"></a>样例一</h3> \n\
<h4><a id="_350"></a>输入</h4> \n\
<pre><code>{&#34;LetMeFly&#34;:{&#34;Tisfy&#34;:&#34;^_^&#34;},&#34;BeCarefulOfMe:&#34;:&#34;TheCharacter&#39;{&#39;IsFake&#34;}\n\
</code></pre> \n\
<h4><a id="_356"></a>输出</h4> \n\
<pre><code>{\n\
    &#34;LetMeFly&#34;: {\n\
        &#34;Tisfy&#34;: &#34;^_^&#34;\n\
    },\n\
    &#34;BeCarefulOfMe:&#34;: &#34;TheCharacter&#39;{&#39;IsFake&#34;\n\
}\n\
</code></pre> '

const problemName = 'You love JSON. Aren\'t you?';

window._LINKS_COMMONJS_NOTCHANGEICO = true;

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}