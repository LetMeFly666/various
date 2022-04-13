/*
 * @Author: LetMeFly
 * @Date: 2021-08-29 15:35:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-04-13 21:54:27
 */
const problem_description_data = '<p>给定一棵二叉搜索树的先序遍历序列&#xff0c;要求你找出任意两结点的最近公共祖先结点&#xff08;简称 LCA&#xff09;。</p> \n\
<hr /> '


const input_description_data = '<p>输入的第一行给出两个正整数&#xff1a;待查询的结点对数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
M\n\
\n\
\n\
(\n\
\n\
\n\
≤\n\
\n\
\n\
1000\n\
\n\
\n\
)\n\
\n\
\n\
\n\
M(\leq 1 000)\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">M</span><span class="mopen">(</span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span>和二叉搜索树中结点个数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
M\n\
\n\
\n\
(\n\
\n\
\n\
≤\n\
\n\
\n\
10000\n\
\n\
\n\
)\n\
\n\
\n\
\n\
M(\leq 10 000)\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">M</span><span class="mopen">(</span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mord">0</span><span class="mclose">)</span></span></span></span></span>。随后一行给出 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
N\n\
\n\
\n\
\n\
N\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span> 个不同的整数&#xff0c;为二叉搜索树的先序遍历序列。最后 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
M\n\
\n\
\n\
\n\
M\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">M</span></span></span></span></span> 行&#xff0c;每行给出一对整数键值 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
U\n\
\n\
\n\
\n\
U\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">U</span></span></span></span></span> 和 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
V\n\
\n\
\n\
\n\
V\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.22222em;">V</span></span></span></span></span>。所有键值都在整型<strong>int</strong>范围内。</p> \n\
<hr /> '

const output_description_data = '<p>对每一对给定的 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
    \n\
     \n\
      \n\
       \n\
U\n\
\n\
\n\
\n\
U\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">U</span></span></span></span></span> 和 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
V\n\
\n\
\n\
\n\
V\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.22222em;">V</span></span></span></span></span>&#xff0c;如果找到 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
A\n\
\n\
\n\
\n\
A\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault">A</span></span></span></span></span> 是它们的最近公共祖先结点的键值&#xff0c;则在一行中输出 <code>LCA of U and V is A.</code>。但如果 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
U\n\
\n\
\n\
\n\
U\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">U</span></span></span></span></span> 和 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
V\n\
\n\
\n\
\n\
V\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.22222em;">V</span></span></span></span></span> 中的一个结点是另一个结点的祖先&#xff0c;则在一行中输出 <code>X is an ancestor of Y.</code>&#xff0c;其中 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
X\n\
\n\
\n\
\n\
X\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.07847em;">X</span></span></span></span></span> 是那个祖先结点的键值&#xff0c;<span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
Y\n\
\n\
\n\
\n\
Y\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.22222em;">Y</span></span></span></span></span> 是另一个键值。如果 二叉搜索树中找不到以 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
U\n\
\n\
\n\
\n\
U\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">U</span></span></span></span></span> 或 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n\
\n\
\n\
\n\
\n\
V\n\
\n\
\n\
\n\
V\n\
\n\
\n\
</span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.22222em;">V</span></span></span></span></span> 为键值的结点&#xff0c;则输出 <code>ERROR: U is not found.</code>或者 <code>ERROR: V is not found.</code>&#xff0c;或者 <code>ERROR: U and V are not found.</code>。</p> \n\
<hr /> '

const changes = function() {
    var back = document.querySelector("body")
    var para = document.createElement("div");
    var first = document.body.firstChild;
    back.insertBefore(para, first);
    var newP = document.querySelector("div");
    newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    // function show(){
    //     newP.innerHTML = '后天就是五一假期了，小L约好了女生一起出去玩。他还剩下最后一道数论作业，写完就可以去嗨了。';
    //     setTimeout(function(){
    //         back.removeChild(newP);
    //     }, 800);
    // }
    // show();

    let i = 0,
    timer = 0,
    str = '这是BUCToj上浙大版《数据结构学习与实验指导（第2版）》的最后一道题了(目前是)，坚持就是胜利，奥里给！',
    stopTime = 1000;

    function setDealyTime(){
        function setCookie(cname,cvalue,exdays){
            var d = new Date();
            d.setTime(d.getTime()+(exdays*24*60*60*1000));
            var expires = "expires="+d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }
        function getCookie(cname){
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name)==0) return c.substring(name.length,c.length);
            }
            return "";
        }
        function checkCookie(){
            var thisProblemCookie=getCookie("LetMeFlyProblem5579");
            if (thisProblemCookie=="LetMeFlyYYDS!5579") {
                stopTime = 0;
            }
            else {
                setCookie("LetMeFlyProblem5579","LetMeFlyYYDS!5579",3);
            }
        }
        checkCookie();
    }
    setDealyTime();

    function typing() {
        if (stopTime == 0) { // 已经显示过了
            back.removeChild(newP);
            return ;
        }
        if (i <= str.length) {
            newP.innerHTML = str.slice(0, i++) + '_';
            timer = setTimeout(typing, 5);
        }
        else {
            newP.innerHTML = str; //结束打字,移除 _ 光标
            clearTimeout(timer);
            setTimeout(() => {
                back.removeChild(newP);
            }, stopTime);
        }
    };
    typing();
}

const problemName = '二叉搜索树的最近公共祖先';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);  // 将js追加为body的子标签

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problem_description_data, input_description_data, output_description_data, problemName, true, changes);
}