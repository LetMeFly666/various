/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-09-23 20:37:53
 */
/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:51:41
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-09-10 19:23:41
 */

const begin = '<div id="article_content" class="article_content clearfix">\n\
        <link rel="stylesheet" href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/ck_htmledit_views-b5506197d8.css">\n\
                <div id="content_views" class="markdown_views prism-atom-one-light">\n\
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n\
                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n\
                    </svg>\n\
                    <p></p>'

const end = '                </div><div data-report-view="{&quot;mod&quot;:&quot;1585297308_001&quot;,&quot;dest&quot;:&quot;https://letmefly.blog.csdn.net/article/details/116211565&quot;,&quot;extend1&quot;:&quot;pc&quot;,&quot;ab&quot;:&quot;new&quot;}"><div></div></div>\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/markdown_views-d7a94ec6ab.css" rel="stylesheet">\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/style-f1c5feb645.css" rel="stylesheet">\n\
        </div>'



const problem_description_data = '<p>Ron Milner 在 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1977\n       \n      \n      \n       1977\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">9</span><span class="mord">7</span><span class="mord">7</span></span></span></span></span> 年的游戏 《<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        S\n       \n       \n        t\n       \n       \n        a\n       \n       \n        r\n       \n       \n        s\n       \n       \n        h\n       \n       \n        i\n       \n       \n        p\n       \n       \n         \n       \n       \n        1\n       \n      \n      \n       Starship\ 1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.88888em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.05764em;">S</span><span class="mord mathdefault">t</span><span class="mord mathdefault">a</span><span class="mord mathdefault" style="margin-right: 0.02778em;">r</span><span class="mord mathdefault">s</span><span class="mord mathdefault">h</span><span class="mord mathdefault">i</span><span class="mord mathdefault">p</span><span class="mspace"> </span><span class="mord">1</span></span></span></span></span>》中隐藏了<a id="ColorEgg" href="#ColorEgg">彩蛋</a>&#xff0c;玩家进行一系列操作后游戏会说&#xff1a;“<code>HI RON!</code>”并赠送玩家<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        10\n       \n      \n      \n       10\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span></span></span></span></span>条命。</p> \n<p>随着时间的流逝 Ron Milner 忘记了彩蛋如何触发&#xff0c;但确实在程序里找到了<code>HI RON!</code>的字样。</p> \n<center>\n \
<img src="https://img-blog.csdnimg.cn/05fde1680fe24ddea626981460232c72.png" />\n\
</center> \n<p><a title="Tisfy">小T</a>的<a title="LetMeFly">男神</a>做了一款游戏&#xff0c;程序十进制序列为 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>&#xff0c;<a title="Tisfy">小T</a>认为某彩蛋&#xff08;十进制序列为<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        b\n       \n      \n      \n       b\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff09;藏在其中&#xff0c;想让你确认序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        a\n       \n      \n      \n       a\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>中是否有一段连续的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        b\n       \n      \n      \n       b\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff0c;如果有&#xff0c;就认为该彩蛋藏在游戏中。</p> \n<ul><li> <p>例如程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          a\n         \n        \n        \n         a\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>是<code>53 81 33 93 93 31 74</code>&#xff0c; 彩蛋的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          b\n         \n        \n        \n         b\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>是<code>93 93 31 74</code>&#xff08;能在<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          a\n         \n        \n        \n         a\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>中找到连续的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          b\n         \n        \n        \n         b\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff09;&#xff0c;就认为程序中隐藏有该彩蛋。</p> </li><li> <p>例如程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          a\n         \n        \n        \n         a\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>是<code>23 93 31 74 22</code>&#xff0c;彩蛋的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          b\n         \n        \n        \n         b\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>是<code>72 74 73 23</code>&#xff08;不能在<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          a\n         \n        \n        \n         a\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>中找到连续的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n      \n       \n        \n         \n          b\n         \n        \n        \n         b\n        \n       \n      </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff09;&#xff0c;就认为此程序中没隐藏该彩蛋。</p> </li></ul> \n<hr /> '


const input_description_data = '<p>输入包括<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        3\n       \n      \n      \n       3\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">3</span></span></span></span></span>行</p> \n<ul><li>第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n       \n       \n        1\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>行是空格隔开的两个整数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         m\n        \n        \n          \n        \n        \n         n\n        \n       \n       \n        m\ n\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">m</span><span class="mspace"> </span><span class="mord mathdefault">n</span></span></span></span></span>&#xff0c;其中 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         m\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          5\n         \n        \n        \n         ,\n        \n        \n         1\n        \n        \n         ≤\n        \n        \n         n\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          5\n         \n        \n       \n       \n        1\leq m\leq 10^5,1\leq n\leq 10^5\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">m</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1.00855em; vertical-align: -0.19444em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">n</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span>&#xff0c;分别代表程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         a\n        \n       \n       \n        a\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>和彩蛋的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         b\n        \n       \n       \n        b\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>的长度&#xff08;十进制数的个数&#xff09;</li><li>第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         2\n        \n       \n       \n        2\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">2</span></span></span></span></span>行是空格隔开的<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         m\n        \n       \n       \n        m\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">m</span></span></span></span></span>个整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         \n          a\n         \n         \n          1\n         \n        \n        \n          \n        \n        \n         \n          a\n         \n         \n          2\n         \n        \n        \n          \n        \n        \n         ⋯\n        \n        \n          \n        \n        \n         \n          a\n         \n         \n          m\n         \n        \n       \n       \n        a_1\ a_2\ \cdots\ a_m\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.58056em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>&#xff0c;代表程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         a\n        \n       \n       \n        a\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">a</span></span></span></span></span>&#xff0c;其中 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         \n          a\n         \n         \n          i\n         \n        \n        \n         ≤\n        \n        \n         255\n        \n        \n           \n        \n        \n         ∀\n        \n        \n         i\n        \n        \n         ∈\n        \n        \n         {\n        \n        \n         1\n        \n        \n         ,\n        \n        \n         2\n        \n        \n         ,\n        \n        \n         ⋯\n         \n        \n         ,\n        \n        \n         m\n        \n        \n         }\n        \n       \n       \n        0\leq a_i \leq 255\ \ \forall i\in \{1,2,\cdots, m\}\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.78597em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.73354em; vertical-align: -0.0391em;"></span><span class="mord">2</span><span class="mord">5</span><span class="mord">5</span><span class="mspace"> </span><span class="mspace"> </span><span class="mord">∀</span><span class="mord mathdefault">i</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">{<!-- --></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault">m</span><span class="mclose">}</span></span></span></span></span></li><li>第<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         3\n        \n       \n       \n        3\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">3</span></span></span></span></span>行是空格隔开的<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         n\n        \n       \n       \n        n\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathdefault">n</span></span></span></span></span>个整数<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         \n          b\n         \n         \n          1\n         \n        \n        \n          \n        \n        \n         \n          b\n         \n         \n          2\n         \n        \n        \n          \n        \n        \n         ⋯\n        \n        \n          \n        \n        \n         \n          b\n         \n         \n          n\n         \n        \n       \n       \n        b_1\ b_2\ \cdots\ b_n\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.84444em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.301108em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace"> </span><span class="mord"><span class="mord mathdefault">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.151392em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>&#xff0c;代表程序的序列<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         b\n        \n       \n       \n        b\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.69444em; vertical-align: 0em;"></span><span class="mord mathdefault">b</span></span></span></span></span>&#xff0c;其中 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         \n          b\n         \n         \n          i\n         \n        \n        \n         ≤\n        \n        \n\
         511\n\
\n        \n           \n        \n        \n         ∀\n        \n        \n         i\n        \n        \n         ∈\n        \n        \n         {\n        \n        \n         1\n        \n        \n         ,\n        \n        \n         2\n        \n        \n         ,\n        \n        \n         ⋯\n         \n        \n         ,\n        \n        \n         n\n        \n        \n         }\n        \n       \n       \n        0\leq b_i \leq 255\ \ \forall i\in \{1,2,\cdots, n\}\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.84444em; vertical-align: -0.15em;"></span><span class="mord"><span class="mord mathdefault">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.311664em;"><span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.73354em; vertical-align: -0.0391em;"></span><span class="mord">2</span><span class="mord">5</span><span class="mord">5</span><span class="mspace"> </span><span class="mspace"> </span><span class="mord">∀</span><span class="mord mathdefault">i</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">{<!-- --></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault">n</span><span class="mclose">}</span></span></span></span></span></li></ul> \n<hr /> '

const output_description_data = '<p>输出包括<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        1\n       \n      \n      \n       1\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span></span></span></span></span>个字符串</p> \n<ul><li>如果程序中隐藏有该彩蛋&#xff0c;输出<code>Yes</code></li><li>如果程序没有隐藏该彩蛋&#xff0c;输出<code>No</code></li></ul> \n<hr /> '

window.onload = function () {
    var isProblem = 1;
    var problem_description,input_description,output_description;
    try {
        problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
        input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
        output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

        problem_description.innerHTML = begin + problem_description_data + end;
        input_description.innerHTML = begin + input_description_data + end;
        output_description.innerHTML = begin + output_description_data + end;
    }
    catch(TypeError){
        console.log("Not at Original page");
        try {
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(4) > div > div");
            problem_description.innerHTML = begin + problem_description_data + end;
            input_description.innerHTML = begin + input_description_data + end;
            output_description.innerHTML = begin + output_description_data + end;
            isProblem=2;
        }
        catch(TypeError)
        {
            console.log("May 竞赛状态");
            try {
                problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(2) > div > div");
                input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(3) > div > div");
                output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(4) > div > div");
                problem_description.innerHTML = begin + problem_description_data + end;
                input_description.innerHTML = begin + input_description_data + end;
                output_description.innerHTML = begin + output_description_data + end;
                isProblem=3; // 竞赛状态
            }
            catch(TypeError) {
                console.log(TypeError);
                console.log("Not at second version page");
                isProblem=0;
            }
        }
    }

    // var back = document.querySelector("body")
    // var para = document.createElement("div");
    // var first = document.body.firstChild;
    // back.insertBefore(para, first);
    // var newP = document.querySelector("div");
    // newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    // function show(){
    //     newP.innerHTML = '后天就是五一假期了，小L约好了女生一起出去玩。他还剩下最后一道数论作业，写完就可以去嗨了。';
    //     setTimeout(function(){
    //         back.removeChild(newP);
    //     }, 800);
    // }
    // show();

    // let i = 0,
    // timer = 0,
    // str = '后天就是五一假期了，小L约好了女生一起出去玩。他还剩下最后一道数论作业，写完就可以去嗨了。';

    // function typing() {
    //     if (i <= str.length) {
    //         newP.innerHTML = str.slice(0, i++) + '_';
    //         timer = setTimeout(typing, 50);
    //     }
    //     else {
    //         newP.innerHTML = str; //结束打字,移除 _ 光标
    //         clearTimeout(timer);
    //         back.removeChild(newP);
    //     }
    // };
    // typing();

    if(isProblem) {
        try {
            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = 'http://letmefly666.github.io/various/Links/Title.ico';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        catch(TypeError) {}

        try {
            const colorEgg = document.querySelector("#ColorEgg");
            addClick(colorEgg, " KMP ");
        }
        catch(TypeError) {}

        try {
            function getStudentNum(){} //FIXME:
        }
        catch(TypeError) {}
        
        document.title = "游戏的彩蛋";
    }

    // setTimeout(function () {
    //     var author = document.querySelector("#creator > a");
    //     author.href = "userinfo.php?user=2019040474";
    //     author.innerText="2019040474";
    // }, 3000);
}

var timer = null;
var waitTime = 200; // 该时间间隔内点击才算连续点击（单位：ms）
var lastTime = new Date().getTime(); // 上次点击时间
var count = 0; // 连续点击次数
const addClick = function (object, toSay, clickTimes=5) {
    object.onclick = function (event) {
        var currentTime = new Date().getTime();
        // 计算两次相连的点击时间间隔
        count = (currentTime - lastTime) < waitTime ? count + 1 : 1;
        lastTime = new Date().getTime();
        clearTimeout(timer);
        timer = setTimeout(function () {
            clearTimeout(timer);
            // 处理点击事件
            console.log(count);

            if (count == clickTimes) {
                // 连续点击五次
                console.log(`连续点击了${clickTimes}次`);
                alert(toSay);
            }
        }, waitTime + 10)
    };
}

function alert(word, hei = 50, Time = 1500) {
    var length = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] > 255) {
            length += 2;
        } else {
            length++;
        }
    }
    var rwid = length;
    var line = 1;
    while (rwid > 40) {
        length = 40;
        hei += hei;
        rwid -= 40;
        line++;
    }
    var reminder = document.createElement('div');
    document.body.appendChild(reminder);
    reminder.style.cssText = "width: " + length * 24 + "px;height: " + hei + "px;position: fixed;display: block;border-radius: 5px;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 24px;word-break:break-all;";
    var left__ = 0.5 * document.body.offsetWidth - 0.5 * reminder.offsetWidth;
    var top__ = 0.5 * window.innerHeight - 0.5 * reminder.offsetHeight;
    reminder.id = "alert";
    reminder.style.color = "#fff";
    reminder.style.left = left__ + 'px';
    reminder.style.top = top__ + 'px';
    reminder.style.lineHeight = reminder.offsetHeight / line + 'px';
    reminder.innerHTML = word;
    setTimeout(function () {
        reminder.style.display = "none";
    }, Time);
}