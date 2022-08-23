/*
 * @Author: LetMeFly
 * @Date: 2022-08-23 10:41:37
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-08-23 18:18:37
 */
const problemDescriptionData = '<p><i><font color="#d6d6d6">在只有女生的今天里&#xff0c;我要征服世界&#xff01;</font></i></p> \n\
<p align="right"><i><font color="#d6d6d6">—— Tisfy</font></i></p> \n\
<p>小T今天也来参加女生赛了&#xff0c;也许她就在你们身边。</p> \n\
<p>相比于都在认真做题的她们&#xff0c;小T有一个野心&#xff0c;就是想用魅力征服今天在场的所有人。</p> \n\
<p>每个女人啊&#xff0c;都有着她自己的魅力值。</p> \n\
<p>当两个女生相遇时&#xff0c;魅力值高的女生就能把魅力值低的女生征服&#xff0c;然后两人一起&#xff08;魅力值相加&#xff09;去尝试征服其他人。</p> \n\
<p>如果两个女生魅力值相同&#xff0c;那么谁都当不了今天的女王。</p> \n\
<p>因为其他女生都在做题&#xff0c;因此小T必须静悄悄地&#xff0c;<strong>按顺序</strong>尝试一个个地征服在场的所有人&#xff0c;然后成为今天的女王。</p> \n\
<p>如果读不懂题目可以观看<a href="https://www.bilibili.com/video/BV1rY4y1F7B5">视频演示</a>以帮助理解。</p> \n\
 \n\
<p></p>\n\
<div class="csdn-video-box">\n\
<iframe src="//player.bilibili.com/player.html?aid=644863915&bvid=BV1rY4y1F7B5&cid=811690814&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500px"> </iframe>\n\
 <p>谁才是今天的女王</p>\n\
</div>\n\
<p></p> '

const inputDescriptionData = '<p><strong>输入格式&#xff1a;</strong></p> \n\
<p>输入第一行是空格隔开的两个数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        T\n\
       \n\
      \n\
      \n\
       T\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6833em;"></span><span class="mord mathnormal" style="margin-right: 0.1389em;">T</span></span></span></span></span>和<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        n\n\
       \n\
      \n\
      \n\
       n\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span></span>&#xff0c;分别代表“小T的魅力值”和“除小T之外其他女生的人数”</p> \n\
<p>第二行是空格隔开的<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        n\n\
       \n\
      \n\
      \n\
       n\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span></span>个整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         M\n\
        \n\
        \n\
         1\n\
        \n\
       \n\
       \n\
         \n\
       \n\
       \n\
        \n\
         M\n\
        \n\
        \n\
         2\n\
        \n\
       \n\
       \n\
         \n\
       \n\
       \n\
        ⋯\n\
       \n\
       \n\
         \n\
       \n\
       \n\
        \n\
         M\n\
        \n\
        \n\
         n\n\
        \n\
       \n\
      \n\
      \n\
       M_1\ M_2\ \cdots\ M_n\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.8333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.109em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.109em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.109em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.109em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="minner">⋯</span><span class="mspace"> </span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.109em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.1514em;"><span class="" style="top: -2.55em; margin-left: -0.109em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>&#xff0c;依次代表小T想要征服的第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        1\n\
       \n\
      \n\
      \n\
       1\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1</span></span></span></span></span>个女生、第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        2\n\
       \n\
      \n\
      \n\
       2\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">2</span></span></span></span></span>个女生、……</p> \n\
<p>为了避免造成太大的动静&#xff0c;小T必须按顺序依次征服她们。</p> \n\
<p><strong>数据范围&#xff1a;</strong></p> \n\
<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
     \n\
      \n\
       \n\
        \n\
         1\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         n\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         1000\n\
        \n\
       \n\
       \n\
        1\leq n\leq 1000\n\
       \n\
      \n\
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.7804em; vertical-align: -0.136em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7719em; vertical-align: -0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1000</span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
     \n\
      \n\
       \n\
        \n\
         1\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         T\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         1000\n\
        \n\
       \n\
       \n\
        1\leq T\leq 1000\n\
       \n\
      \n\
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.7804em; vertical-align: -0.136em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.136em;"></span><span class="mord mathnormal" style="margin-right: 0.1389em;">T</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1000</span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
     \n\
      \n\
       \n\
        \n\
         1\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         \n\
          M\n\
         \n\
         \n\
          i\n\
         \n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         1000\n\
        \n\
       \n\
       \n\
        1\leq M_i\leq 1000\n\
       \n\
      \n\
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.7804em; vertical-align: -0.136em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.109em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3117em;"><span class="" style="top: -2.55em; margin-left: -0.109em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1000</span></span></span></span></span>&#xff0c;其中<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
     \n\
      \n\
       \n\
        \n\
         1\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         i\n\
        \n\
        \n\
         ≤\n\
        \n\
        \n\
         n\n\
        \n\
       \n\
       \n\
        1\leq i\leq n\n\
       \n\
      \n\
     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.7804em; vertical-align: -0.136em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7955em; vertical-align: -0.136em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span></span></li></ul> \n\
'

const outputDescriptionData = '<p>你作为小T&#xff0c;能成为今天的女王吗&#xff1f;</p> \n\
<p>如果能&#xff0c;请输出一行一个字符串&#xff1a;<code>I&#39;m the queen today!</code></p> \n\
<p>否则&#xff0c;请输出一行一个字符串&#xff1a;<code>Oh no, so charming she is.</code></p> '

const problemName = '谁是今天的女王';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

function callBack() {
    alert("谁是今天的女王");
}

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true, callBack);
}