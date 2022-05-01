/*
 * @Author: LetMeFly
 * @Date: 2022-05-01 12:46:26
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-01 12:58:48
 */
const problemDescriptionData = '<p>坏坏的小F递给了MM一张纸条&#xff0c;上面写着&#xff1a;</p> \
<p><span class="katex--display"><span class="katex-display"><span class="katex"><span class="katex-mathml">\
     \
      \
       \
        \
         只\
        \
        \
         有\
        \
        \
         不\
        \
        \
         聪\
        \
        \
         明\
        \
        \
         的\
        \
        \
         人\
        \
        \
         才\
        \
        \
         能\
        \
        \
         看\
        \
        \
         到\
        \
       \
       \
        只有不聪明的人才能看到\
       \
      \
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0em; vertical-align: 0em;"></span><span class="mord cjk_fallback">只</span><span class="mord cjk_fallback">有</span><span class="mord cjk_fallback">不</span><span class="mord cjk_fallback">聪</span><span class="mord cjk_fallback">明</span><span class="mord cjk_fallback">的</span><span class="mord cjk_fallback">人</span><span class="mord cjk_fallback">才</span><span class="mord cjk_fallback">能</span><span class="mord cjk_fallback">看</span><span class="mord cjk_fallback">到</span></span></span></span></span></span></p> \
<p>MM看到后&#xff0c;一气之下把这张纸条撕成了很多份&#xff0c;并扔到了碎纸盒中。冷笑道&#xff1a;“有本事把它给我还原出来”。</p> \
<p>细心的小F观察到了MM扔纸条的规律&#xff1a;</p> \
<blockquote> \
 <p>MM每次都会从纸条的左边撕掉一段&#xff08;假设不会撕坏上面的字&#xff09;&#xff0c;然后放入碎纸盒里&#xff08;的最上面&#xff09;。</p> \
 <p>最后剩下的一段纸条也会扔到碎纸盒中</p> \
</blockquote> \
<p>如果不能理解&#xff0c;请参考视频版描述&#xff1a;(视频地址<a href="https://www.bilibili.com/video/BV1VB4y117vL">https://www.bilibili.com/video/BV1VB4y117vL</a>)</p> \
<iframe src="//player.bilibili.com/player.html?aid=596169980&bvid=BV1VB4y117vL&cid=589022887&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="500px" width="100%"> <a href="https://www.bilibili.com/video/BV1VB4y117vL">BiliBili视频地址：https://www.bilibili.com/video/BV1VB4y117vL</a> </iframe> \
<p>或者播放题目描述PPT&#xff1a;<a href="https://letmefly.xyz/Links/Redirect/id.html?10">https://letmefly.xyz/Links/Redirect/id.html?10</a></p> \
<p><strong>视频的意思是&#xff1a;</strong></p> \
<ol><li> <p>原始纸条是“只有不聪明的人才能看到”</p> </li><li> <p>MM在左边剪了一刀&#xff0c;变成了“只有不聪”和“明的人才能看到”</p> </li><li> <p>MM把左边的纸条扔进了碎纸盒&#xff0c;碎纸盒中的纸条为“只有不聪”&#xff0c;MM手中的纸条为“明的人才能看到”</p> </li><li> <p>MM在左边剪了一刀&#xff0c;变成了“明的人才”和“能看到”</p> </li><li> <p>MM把左边的纸条扔进了碎纸盒&#xff0c;碎纸盒中的纸条从上到下依次为“明的人才”和“只有不聪”&#xff0c;MM手中的纸条为“能看到”</p> </li><li> <p>MM把手中剩下的纸条“能看到”也扔入了碎纸盒&#xff0c;<strong>最终碎纸盒中的纸条从上到下一次是&#xff1a;</strong> “能看到”&#xff0c;“明的人才”和“只有不聪”</p> </li></ol> \
 '

const inputDescriptionData = '<p>输入包括一行空格隔开的一些字符串&#xff0c;代表碎纸盒中从上到下的纸条上的内容</p> \
<p>请放心&#xff0c;和样例不同&#xff0c;<strong>测试数据中纸条上的文字全是英文&#xff0c;不包含中文</strong></p> '

const outputDescriptionData = '<p>输出包括一行一个字符串</p> \
<p>请你根据碎纸盒中纸条上的内容&#xff0c;来还原出原始纸条并输出</p> '

const problemName = '还原撕碎的字条，哄笑生气的毛毛';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true);
}