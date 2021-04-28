/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-04-28 21:21:11
 */

const begin='<div id="article_content" class="article_content clearfix">\n\
        <link rel="stylesheet" href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/ck_htmledit_views-b5506197d8.css">\n\
                <div id="content_views" class="markdown_views prism-atom-one-light">\n\
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n\
                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n\
                    </svg>\n\
                    <p></p>'

const end='                </div><div data-report-view="{&quot;mod&quot;:&quot;1585297308_001&quot;,&quot;dest&quot;:&quot;https://letmefly.blog.csdn.net/article/details/116211565&quot;,&quot;extend1&quot;:&quot;pc&quot;,&quot;ab&quot;:&quot;new&quot;}"><div></div></div>\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/markdown_views-d7a94ec6ab.css" rel="stylesheet">\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/style-f1c5feb645.css" rel="stylesheet">\n\
        </div>'



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


const input_description_data = '\n\
<h3><a id="_29"></a>输入描述</h3> \n\
<p>给你一个正整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>&#xff0c;请你计算出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        n\n\
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
          n\n\
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
            n\n\
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
              n\n\
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
       n&#43;\frac{1}{n&#43;\frac{1}{n&#43;\frac{1}{n&#43;\cdots}}}\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.66666em; vertical-align: -0.08333em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 1.94596em; vertical-align: -1.10085em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathdefault mtight">n</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.43976em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathdefault mtight">n</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.468em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mathdefault mtight">n</span><span class="mbin mtight">&#43;</span><span class="minner mtight">⋯</span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.387em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.61533em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.999764em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.10085em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>的值。</p> \n\
<p>如&#xff1a;<strong>样例一</strong></p> \n\
<pre><code>1\n\
</code></pre> \n\
<p>即求<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
             \n\
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
<p>数据范围&#xff1a;<br /> <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
        1\n\
       \n\
       \n\
        \n\
         0\n\
        \n\
        \n\
         8\n\
        \n\
       \n\
      \n\
      \n\
       1\leq n \leq 10^8\n\
      \n\
      \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span></span></span></span></span></p> \n\
'

const output_description_data = '\n\
<h3><a id="_45"></a>输出描述</h3> \n\
<p>为了避免根号不易打出的尴尬&#xff0c;老师决定允许小L用3个整数来表示答案。<br /> 如&#xff1a;<strong>样例一</strong><br /> <s>经过计算机夜以继日的运算</s> &#xff0c;得到<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
             \n\
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
        &#61;\n\
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
           5\n\
          \n\
         \n\
        \n\
        \n\
         2\n\
        \n\
       \n\
      \n\
      \n\
       1&#43;\frac{1}{1&#43;\frac{1}{1&#43;\frac{1}{1&#43;\cdots}}}&#61;\frac{1&#43;\sqrt5}{2}\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 1.94596em; vertical-align: -1.10085em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.43976em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.468em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="minner mtight">⋯</span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.387em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.61533em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.999764em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.10085em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&#61;</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1.383em; vertical-align: -0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.038em;"><span class="" style="top: -2.655em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.39901em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mbin mtight">&#43;</span><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.912845em;"><span class="svg-align" style="top: -3em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight" style="padding-left: 0.833em;">5</span></span><span class="" style="top: -2.87284em;"><span class="pstrut" style="height: 3em;"></span><span class="hide-tail mtight" style="min-width: 0.853em; height: 1.08em;">\n\
                   <svg width="400em" height="1.08em" viewbox="0 0 400000 1080" preserveaspectratio="xMinYMin slice">\n\
                    <path d="M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n\
-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n\
-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n\
35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n\
-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\n\
s-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\n\
s-65,47,-65,47z M834 80H400000v40H845z"></path>\n\
                   </svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.127155em;"><span class=""></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.345em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>。<br /> 我们用三个数字<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
                   \n\
                   \n\
                   \n\
                   \n\
        a\n\
       \n\
       \n\
        、\n\
       \n\
       \n\
        b\n\
       \n\
       \n\
        、\n\
       \n\
       \n\
        c\n\
       \n\
      \n\
      \n\
       a、b、c\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span><span class="mord cjk_fallback">、</span><span class="mord mathdefault">b</span><span class="mord cjk_fallback">、</span><span class="mord mathdefault">c</span></span></span></span></span>来代表答案<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         \n\
          a\n\
         \n\
         \n\
          &#43;\n\
         \n\
         \n\
          \n\
           b\n\
          \n\
         \n\
        \n\
        \n\
         c\n\
        \n\
       \n\
      \n\
      \n\
       \frac{a&#43;\sqrt b}{c}\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1.39549em; vertical-align: -0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.05049em;"><span class="" style="top: -2.655em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathdefault mtight">c</span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="mbin mtight">&#43;</span><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.937845em;"><span class="svg-align" style="top: -3em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mathdefault mtight" style="padding-left: 0.833em;">b</span></span><span class="" style="top: -2.89785em;"><span class="pstrut" style="height: 3em;"></span><span class="hide-tail mtight" style="min-width: 0.853em; height: 1.08em;">\n\
                   <svg width="400em" height="1.08em" viewbox="0 0 400000 1080" preserveaspectratio="xMinYMin slice">\n\
                    <path d="M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n\
-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n\
-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n\
35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n\
-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\n\
s-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\n\
s-65,47,-65,47z M834 80H400000v40H845z"></path>\n\
                   </svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.102155em;"><span class=""></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.345em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p> \n\
<pre><code>1 5 2\n\
</code></pre>\n\
'

window.onload = function () {
	var problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
    var input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
	var output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");
	
	problem_description.innerHTML = begin+problem_description_data+end;
    input_description.innerHTML = begin+input_description_data+end;
    output_description.innerHTML = begin+output_description_data+end;

    // document.write('<div style="width: 40%; height: 40%; background-color: rgb(255,255,255);" id="mask__"></div>');

    var back = document.querySelector("body > div.container > div.panel.panel-default > div.panel-heading > center");
    var para = document.createElement("div");
    back.appendChild(para);
    var newP = document.querySelector("body > div.container > div.panel.panel-default > div.panel-heading > center > div:nth-child(0)")
    newP.style = "width: 100%; height: 100%; background-color: pink;";
    

    setTimeout(function(){
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";
    }, 3000);
}

function alert( word ,hei = 50,Time = 1500){
    var length = 0;
    for(var i=0;i<word.length;i++){
        if(word[i]>255) {
            length += 2;
        }else {
            length++;
        }
    }
    var rwid = length;
    var line = 1;
    while(rwid>40){
        length = 40;
        hei+=hei;
        rwid-=40;
        line++;
    }
    var reminder = document.createElement('div');
    document.body.appendChild(reminder);
    reminder.style.cssText = "width: " + length*24+ "px;height: " + hei + "px;position: fixed;display: block;border-radius: 5px;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 24px;word-break:break-all;";
    var left__ = 0.5*document.body.offsetWidth - 0.5*reminder.offsetWidth;
    var top__ = 0.5*window.innerHeight - 0.5*reminder.offsetHeight;
    reminder.id = "alert";
    reminder.style.color = "#fff";
    reminder.style.left = left__ + 'px';
    reminder.style.top = top__ + 'px';
    reminder.style.lineHeight = reminder.offsetHeight/line + 'px';
    reminder.innerHTML = word;
    setTimeout(function(){
        reminder.style.display = "none";
    },Time );
}