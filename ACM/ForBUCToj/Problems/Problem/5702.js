/*
 * @Author: LetMeFly
 * @Date: 2021-09-22 23:47:00
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 21:20:23
 */
const problem_description_data = '<p>在一个二维坐标平面上&#xff0c;有一个四边形。<br /> 它的四个顶点的坐标分别是 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        (\n       \n       \n        0\n       \n       \n        ,\n       \n       \n        0\n       \n       \n        )\n       \n       \n        ,\n       \n       \n        (\n       \n       \n        W\n       \n       \n        ,\n       \n       \n        0\n       \n       \n        )\n       \n       \n        ,\n       \n       \n        (\n       \n       \n        W\n       \n       \n        ,\n       \n       \n        H\n       \n       \n        )\n       \n      \n      \n       (0,0),(W,0),(W,H)\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mopen">(</span><span class="mord mathdefault" style="margin-right: 0.13889em;">W</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mopen">(</span><span class="mord mathdefault" style="margin-right: 0.13889em;">W</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault" style="margin-right: 0.08125em;">H</span><span class="mclose">)</span></span></span></span></span>和<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        (\n       \n       \n        0\n       \n       \n        ,\n       \n       \n        H\n       \n       \n        )\n       \n      \n      \n       (0,H)\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault" style="margin-right: 0.08125em;">H</span><span class="mclose">)</span></span></span></span></span></p> \n<p>四边形内部&#xff08;或边界上&#xff09;&#xff0c;有一个点。<br /> 它的坐标是<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        (\n       \n       \n        x\n       \n       \n        ,\n       \n       \n        y\n       \n       \n        )\n       \n      \n      \n       (x,y)\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord mathdefault">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault" style="margin-right: 0.03588em;">y</span><span class="mclose">)</span></span></span></span></span>。</p> \n<p>从这个点画一条直线&#xff0c;把四边形分成两个部分。<br /> 问你面积最小的那个部分的最大面积是多少。</p> \n<p>同时&#xff0c;还要问你得到这个面积的划分方法数。</p> '

const input_description_data = '<p>输入一行<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        4\n       \n      \n      \n       4\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">4</span></span></span></span></span>个空格隔开的正整数&#xff0c;具体意义见题目描述。</p> \n<p>输入格式如下&#xff1a;</p> \n<pre><code>W H x y\n</code></pre> \n<p>其中&#xff1a;</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         W\n        \n        \n         ,\n        \n        \n         H\n        \n        \n         ≤\n        \n        \n         1\n        \n        \n         \n          0\n         \n         \n          9\n         \n        \n       \n       \n        1\leq W,H\leq10^9\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.87777em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.13889em;">W</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.166667em;"></span><span class="mord mathdefault" style="margin-right: 0.08125em;">H</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">9</span></span></span></span></span></span></span></span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         x\n        \n        \n         ≤\n        \n        \n         W\n        \n       \n       \n        0\leq x\leq W\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.77194em; vertical-align: -0.13597em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.13889em;">W</span></span></span></span></span></li><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         0\n        \n        \n         ≤\n        \n        \n         y\n        \n        \n         ≤\n        \n        \n         H\n        \n       \n       \n        0\leq y\leq H\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.83041em; vertical-align: -0.19444em;"></span><span class="mord mathdefault" style="margin-right: 0.03588em;">y</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.08125em;">H</span></span></span></span></span></li></ul> \n'

const output_description_data = '<p>输出一行空格隔开的两个数</p> \n<ul><li>第一个数是划分成的两部分的面积最小的那部分的最大面积&#xff0c;<font color="red">7舍8入</font>保留6位小数。</li><li>第二个数代表划分成这个面积的方案&#xff0c;0代表只有一种划分方案&#xff0c;1代表有多种划分方案。</li></ul> \n'

function setCookie(cname,cvalue,exmins){
    console.log(cvalue);
    var d = new Date();
    d.setTime(d.getTime()+(exmins*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function alertTheThirdProblemsError() {
    const already = getCookie("LetThirdProblem");
    if (!already) {
        alert("C题样例已更正，十分抱歉", hei=50, Time=3000);
        setTimeout(() => {
            setCookie("LetThirdProblem", "HadSeen", 60*24*10); // 3天
        }, 2000);
    }
}

const problemName = '剪切';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true, alertTheThirdProblemsError);
}