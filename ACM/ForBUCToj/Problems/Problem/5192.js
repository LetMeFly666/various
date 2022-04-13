/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 22:17:05
 */
const problem_description_data = '\n\
<h3><a id="_19"></a>题目描述</h3> \n\
<p>星空点点&#xff0c;墨日曜淡。世界芳华灼灼&#xff0c;不及眼前的她。</p> \n\
<p>你只用了几毫秒就得到了小L想要的答案&#xff0c;小L为此惊叹于计算机的算力&#xff0c;他天真地以为&#xff0c;计算机就是一步一步地计算下去才得到答案的。</p> \n\
<p><a href="problem.php?id=5189"><small>不知道上面在说什么请点我</small></a></p>\n\
<p>女神会心一笑&#xff0c;甩给小L一道题&#xff1a;<br /> 给你一个十进制正数&#xff0c;总共不超过<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
     \n\
      \n\
       \n\
        15\n\
       \n\
      \n\
      \n\
       15\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">5</span></span></span></span></span>位。让你把他转换成<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         1\n\
        \n\
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
          \n\
           a\n\
          \n\
          \n\
           2\n\
          \n\
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
            \n\
             a\n\
            \n\
            \n\
             3\n\
            \n\
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
              \n\
               a\n\
              \n\
              \n\
               4\n\
              \n\
             \n\
             \n\
              &#43;\n\
             \n\
             \n\
              \n\
               1\n\
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
      \n\
       a_1&#43;\frac{1}{a_2&#43;\frac{1}{a_3&#43;\frac{1}{a_4&#43;\frac{1}{\cdots}}}}\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.73333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 2.33177em; vertical-align: -1.48666em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.317314em;"><span class="" style="top: -2.357em; margin-left: 0em; margin-right: 0.0714286em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.143em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.43976em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: 0em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.64444em;"></span><span class="mord mtight">3</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.29964em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.1765em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: 0em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.64444em;"></span><span class="mord mtight">4</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.29964em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.468em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="minner mtight">⋯</span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.387em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.532em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span><span class="" style="top: -3.25694em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.41844em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.38694em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.55091em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.48666em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>的形式。<br /> 在此&#xff0c;我们只关注<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         1\n\
        \n\
       \n\
       \n\
        、\n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         2\n\
        \n\
       \n\
       \n\
        、\n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         3\n\
        \n\
       \n\
       \n\
        、\n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         4\n\
        \n\
       \n\
       \n\
        、\n\
       \n\
       \n\
        ⋯\n\
       \n\
      \n\
      \n\
       a_1、a_2、a_3、a_4、\cdots\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord cjk_fallback">、</span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord cjk_fallback">、</span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord cjk_fallback">、</span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">4</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord cjk_fallback">、</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="minner">⋯</span></span></span></span></span>&#xff0c;小L只需要依次回答这些<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        a\n\
       \n\
      \n\
      \n\
       a\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>即可。</p> \n\
<p>如&#xff1a;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        1.3125\n\
       \n\
       \n\
        &#61;\n\
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
          3\n\
         \n\
         \n\
          &#43;\n\
         \n\
         \n\
          \n\
           1\n\
          \n\
          \n\
           5\n\
          \n\
         \n\
        \n\
       \n\
      \n\
      \n\
       1.3125&#61;1&#43;\frac{1}{3&#43;\frac{1}{5}}\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">.</span><span class="mord">3</span><span class="mord">1</span><span class="mord">2</span><span class="mord">5</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">&#61;</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.72777em; vertical-align: -0.08333em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 1.48693em; vertical-align: -0.64182em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.656em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.344em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.64182em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>&#xff0c;小L只需要回答<code>1 3 5</code>即可。</p> \n\
    '


const input_description_data = '\n\
<h3><a id="_34"></a>输入描述</h3> \n\
<p>给你一个十进制的正数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>&#xff0c;其中<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
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
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>的位数不超过<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        15\n\
       \n\
      \n\
      \n\
       15\n\
      \n\
     \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">5</span></span></span></span></span>位<small>&#xff08;即&#xff0c;小数点前后出现的单个数字的个数之和小于15&#xff09;</small></p> \n\
    '

const output_description_data = '\n\
<h3><a id="_41"></a>输出描述</h3> \n\
<p>你需要把这个数转换成<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         1\n\
        \n\
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
          \n\
           a\n\
          \n\
          \n\
           2\n\
          \n\
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
            \n\
             a\n\
            \n\
            \n\
             3\n\
            \n\
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
              \n\
               a\n\
              \n\
              \n\
               4\n\
              \n\
             \n\
             \n\
              &#43;\n\
             \n\
             \n\
              \n\
               1\n\
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
      \n\
       a_1&#43;\frac{1}{a_2&#43;\frac{1}{a_3&#43;\frac{1}{a_4&#43;\frac{1}{\cdots}}}}\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.73333em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.222222em;"></span><span class="mbin">&#43;</span><span class="mspace" style="margin-right: 0.222222em;"></span></span><span class="base"><span class="strut" style="height: 2.33177em; vertical-align: -1.48666em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.845108em;"><span class="" style="top: -2.59898em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.317314em;"><span class="" style="top: -2.357em; margin-left: 0em; margin-right: 0.0714286em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.143em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.844314em;"><span class="" style="top: -2.43976em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: 0em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.64444em;"></span><span class="mord mtight">3</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.29964em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.1765em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="mord mtight"><span class="mord mtight"><span class="mord mathdefault mtight">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: 0em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.64444em;"></span><span class="mord mtight">4</span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.29964em;"><span class=""></span></span></span></span></span></span><span class="mbin mtight">&#43;</span><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.03144em;"><span class="" style="top: -2.468em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="minner mtight">⋯</span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.387em;"><span class="pstrut" style="height: 3em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.532em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span><span class="" style="top: -3.25694em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.41844em;"><span class="pstrut" style="height: 3.03144em;"></span><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.38694em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span><span class="" style="top: -3.2255em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line mtight" style="border-bottom-width: 0.049em;"></span></span><span class="" style="top: -3.384em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.55091em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size3 size6"></span></span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 1.48666em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>的形式&#xff0c;并输出<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
        \n\
         a\n\
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
         a\n\
        \n\
        \n\
         2\n\
        \n\
       \n\
       \n\
         \n\
       \n\
       \n\
        \n\
         a\n\
        \n\
        \n\
         3\n\
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
         a\n\
        \n\
        \n\
         n\n\
        \n\
       \n\
      \n\
      \n\
       a_1\ a_2\ a_3\ \cdots\ a_n\n\
       \n\
       \n\
    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>&#xff0c;它们之间用一个空格隔开。</p> \n\
'

const change__ = function() {
    var back = document.querySelector("body")
    var para = document.createElement("div");
    var first = document.body.firstChild;
    back.insertBefore(para, first);
    var newP = document.querySelector("div");
    newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    function show(){
        newP.innerHTML = '星空点点，墨日曜淡。世界芳华灼灼，不及眼前的她。';
        setTimeout(function(){
            back.removeChild(newP);
        }, 500);
    }
    show();
}

const problemName = '女神的考验';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true, change__);
}