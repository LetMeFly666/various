/*
 * @Author: LetMeFly
 * @Date: 2021-08-22 16:56:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 21:56:13
 */
const problem_description_data = '<p>堆栈是一种经典的后进先出的线性结构&#xff0c;通常有<code>入栈</code>(Push)和<code>出栈</code>(Pop)两个操作。</p> \n\
<p>某人觉得这样不够好玩&#xff0c;就自己模拟了一个栈&#xff0c;并加上了<code>取中值</code>(GetMedia)操作。</p> \n\
<p>即&#xff0c;返回(不取出)栈中所有元素的最中间那个元素。若最中间的元素有两个&#xff0c;则返回更靠前的那个。</p> \n\
<hr /> '


const input_description_data = '<p>输入包括很多行(<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
行\n\
\n\
\n\
数\n\
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
 5\n\
\n\
\n\
\n\
\n\
行数\leq10^5\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord cjk_fallback">行</span><span class="mord cjk_fallback">数</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span></span>)&#xff0c;每行都是一个操作。</p> \n\
<ol><li> <p>如果操作命令是<code>Push</code>&#xff0c;则后面会紧跟一个空格和数字<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
 \n\
  t\n\
 \n\
 \n\
  (\n\
 \n\
 \n\
  0\n\
 \n\
 \n\
  ≤\n\
 \n\
 \n\
  t\n\
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
   5\n\
  \n\
 \n\
 \n\
  )\n\
 \n\
\n\
\n\
 t(0\leq t\leq 10^5)\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault">t</span><span class="mopen">(</span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">t</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1.06411em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></span>&#xff0c;表示要把<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
 \n\
  t\n\
 \n\
\n\
\n\
 t\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.61508em; vertical-align: 0em;"></span><span class="mord mathdefault">t</span></span></span></span></span>入栈。如&#xff1a;<code>Push 3</code>。</p> </li><li> <p>如果操作命令是<code>Pop</code>&#xff0c;则此行它后面什么都不会出现&#xff0c;表示要<font color="red">出栈</font>一个元素。</p> </li><li> <p>如果操作命令是<code>GetMedia</code>&#xff0c;则此行它后面什么都不会出现&#xff0c;表示要<font color="red">返回</font>栈中最中间的那个数。</p> </li></ol> \n\
<p>数据保证每个操作命令不包含空格&#xff0c;即不会出现操作<code>Get Media</code>等。</p> \n\
<hr /> \n'

const output_description_data = '<p>符合上述3种描述的输入都是合法输入&#xff0c;但不一定是合法操作。例如在栈空时尝试<code>Pop</code>命令就是非法的。</p> \n\
<ol><li> <p>如果是<code>Push</code>命令&#xff0c;就把它后面的整数入栈。</p> </li><li> <p>如果是<code>Pop</code>命令&#xff0c;就出栈一个元素并<font color="red">输出</font>。</p> </li><li> <p>如果是<code>GetMedia</code>命令&#xff0c;就<font color="red">输出</font>中间的元素。</p> </li></ol> \n\
<p>操作过程中若出现<font color="red">任何非法情况</font>&#xff0c;则这个操作取消并输出<code>What are you Nong Sha Li?</code>。</p> \n\
<hr /> '

const changes = function() {
    document.title = "What are you Nong Sha Li?";
}

const problemName = '特殊堆栈';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true, changes);
}