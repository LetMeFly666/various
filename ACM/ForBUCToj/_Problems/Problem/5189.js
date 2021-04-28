/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-04-28 10:09:36
 */
var problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
const problem_description_data = '<h3><a id="_16"></a>题目描述</h3> \n\
<p>后天就是五一假期了&#xff0c;小L约好了女生一起出去玩。他还剩下最后一道数论作业&#xff0c;写完就可以去嗨了。</p> \n\
<p>题目是&#xff0c;求<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        1\n\
       \n\
       \n\
        &#43;\n\
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
          &#43;\n\
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
            &#43;\n\
           \n\
           \n\
            \n\
             1\n\
             \n\
             \n\
             \n\\n\
              1\n\
             \n\
             \n\
              &#43;\n\
             \n\
             \n\
              ⋯\n\
             \n\
            \n\
           \n\
          \n\
         \n\
        \n\
       \n\
      \n\
      \n\
       1&#43;\frac{1}{1&#43;\frac{1}{1&#43;\frac{1}{1&#43;\cdots}}}\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 1.94596em; vertical-align: -1.10085em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.43976em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.468em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="minner mtight">⋯</span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.387em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.61533em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.999764em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.10085em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>的值。</p> \n\
<p>怀揣着与女神约会的激动心情&#xff0c;小L飞快地算了起来。一天、两天、<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
     \n\
      \n\
       \n\
        ⋯\n\
       \n\
      \n\
      \n\
       \cdots\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.31em; vertical-align: 0em;"></span><span class="minner">⋯</span></span></span></span></span>眼看五一假期就要来了&#xff0c;这个计算何时才到尽头&#xff01;</p> \n\
<p>于是他找到了会编程的你&#xff0c;想让你编个程序&#xff0c;在五一放假之前得到答案。</p> '

window.onload = function () {
    document.write("<script src='../Templates.js'></script>");
	problem_description.innerHTML = begin+problem_description_data+end;
}