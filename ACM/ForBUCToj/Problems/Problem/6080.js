/*
 * @Author: LetMeFly
 * @Date: 2022-03-11 00:55:36
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-03-11 15:13:20
 */
const problemDescriptionData = '<p>某日某楼<font color="gray" title="BUCT7#363">3某3</font>宿舍群名改成了“&#x1f46b;&#x1f436;&#x1f436;&#x1f436;”</p> \n<p>之后<font color="gray" title="ckz">某舟</font>就对“一对”这个词很敏感。</p> \n<p>他从此开始讨厌偶数&#xff0c;同时他想知道&#xff1a;对于一个正整数 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span> &#xff0c;不大于 <span class="katex--inline"><span class="katex"><span class="katex-mathml">\n    \n     \n      \n       \n        N\n       \n      \n      \n       N\n      \n     \n    </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.68333em; vertical-align: 0em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span></span></span></span></span> 的正整数中奇数的概率是多少。</p> \n'

const inputDescriptionData = '<p>一行一个正整数 N</p> \n<p>数据范围&#xff1a;</p> \n<ul><li><span class="katex--inline"><span class="katex"><span class="katex-mathml">\n     \n      \n       \n        \n         1\n        \n        \n         ≤\n        \n        \n         N\n        \n        \n         ≤\n        \n        \n         100\n        \n       \n       \n        1\leq N\leq 100\n       \n      \n     </span><span class="katex-html"><span class="base"><span class="strut" style="height: 0.78041em; vertical-align: -0.13597em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.8193em; vertical-align: -0.13597em;"></span><span class="mord mathdefault" style="margin-right: 0.10903em;">N</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.64444em; vertical-align: 0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span></span></span></span></span></li></ul> \n'

const outputDescriptionData = '<p><small>他喜欢奇数&#xff0c;</small>请输出一行一个小数&#xff0c;<strong>四舍五入</strong>保留10位小数&#xff0c;代表<font color="gray" title="ta: 单身万岁!">奇数</font>出现的概率。</p> '

const problemName = '👫🐶🐶🐶';

var script1=document.createElement('script');  // 创建script标签节点
script1.setAttribute('type','text/javascript');  // 设置script类型
script1.setAttribute('src','https://letmefly.xyz/ACM/ForBUCToj/Common.js?v=' + Math.random());  // 设置js地址
document.head.appendChild(script1);//将js追加为body的子标签

function after() {
    const h1 = document.querySelector("h1");
    h1.innerHTML = h1.innerHTML.replace("一对还是一只", problemName);

    const back = document.querySelector("body")
    const para = document.createElement("div");
    const first = document.body.firstChild;
    back.insertBefore(para, first);
    const newP = document.querySelector("div");
    newP.style = "width: 100%; height: 100%; background-color: rgb(254, 254, 254); position: fixed; z-index: 99999; font-size: 40px; text-align: center;";

    function show(){
        newP.innerHTML = '<svg id="SingleDogSVG" t="1646932257176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="673" width="200" height="200"><path d="M345.711616 469.227l-16.837632 70.654c74.320896-1.946 106.039296-19.359 218.017792-108.401 111.990784-89.029 98.112512-241.945 98.112512-241.945 34.69312-8.709 56.495104-33.879 56.495104-33.879-86.228992-88.063-133.791744 0-133.791744 0l-19.821568 0c-54.509568-29.995-152.619008-13.548-152.619008-13.548-14.86848-86.131-111.665152-17.414-111.665152-17.414 3.309568 29.69 42.957824 24.515 42.962944 24.515 0.013312 0.022 0.034816 0.048 0.048128 0.07-5.976064 77.29-32.164864 114.866-57.283584 133.093-28.628992-2.867-48.479232-5.737-48.479232-5.737-13.213696-45.49-42.615808-39.684-42.615808-39.684-47.565824 3.869-49.549312 128.722 0 186.791C227.782656 481.809 345.711616 469.227 345.711616 469.227zM445.309952 248.08c0.735232-15.481 7.862272-22.595 16.843776-25.447 0.982016 0.581 1.947648 1.154 2.876416 1.716 11.459584 6.939 10.838016 34.543 10.838016 34.543-1.748992 7.785-8.511488 13.662-18.762752 18.026C449.52576 272.741 444.548096 264.179 445.309952 248.08zM349.677568 235.985c13.874176-8.226 26.264576-7.26 26.264576 28.063 0 12.1-9.653248 19.43-22.344704 23.838-1.514496-0.035-3.028992-0.074-4.544512-0.118C343.319552 271.478 338.968576 242.34 349.677568 235.985zM316.6464 487.299l-67.38432-5.169c0 0-23.785472 33.556-25.116672 54.203-1.318912 20.635-11.886592 72.257 42.28608 54.196C320.60416 572.455 316.6464 487.299 316.6464 487.299zM592.812032 413.742c0 0-73.996288 99.359-210.098176 143.238 0 0-62.1056 141.939-76.63616 180.658-14.539776 38.707-39.643136 103.236-13.212672 125.169 26.420224 21.938 101.655552-98.072 128.790528-167.757l15.39584 10.33c0 0-59.61728 101.933-50.371584 140.648 9.245696 38.716 46.532608 74.253 96.448512-56.772 21.1456-55.485 21.1456-55.485 21.1456-55.485s9.2416 68.381 73.991168 100.638c0 0 26.433536-134.187 130.817024-98.052 0 0-107.031552-0.004-101.738496 105.804 0 0-89.851904 16.845-89.851904 39.388 0 22.55 5.27872 51.308 265.601024 17.389 79.280128-10.319 40.950784-149.674 13.206528-193.551C768.545792 661.503 612.630528 500.203 592.812032 413.742zM904.648704 596.98c-29.079552 30.975-113.63328 69.683-113.63328 69.683 26.806272 10.535 34.354176 65.81 34.354176 65.81 13.81376 3.146 22.460416 0 22.460416 0C929.76128 695.05 904.648704 596.98 904.648704 596.98z" p-id="674" fill="#1afa29"></path></svg>';
        
        const svg = document.querySelector("#SingleDogSVG").querySelector("path");
        var colorTime = 0;

        const getRandomColor = function(){
            return (function(m,s,c){
              return (c ? arguments.callee(m,s,c-1) : '#') + s[m.floor(m.random() * 16)]
            })(Math, '0123456789abcdef', 5)
        }

        function changeColor() {
            // 1 + 2 + ... + n = n * (n + 1) / 2 = 1000  -->  n = 31.6
            if (colorTime < 31) {
                colorTime += 1;
                const color = getRandomColor();
                svg.setAttribute("fill", color);
                setTimeout(() => {
                    changeColor();
                }, colorTime);
            }
            else {
                back.removeChild(newP);
            }
        }

        changeColor();
    }
    show();
}

//判断script1是否加载成功
script1.onload = script1.onreadystatechange = function() {
    __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, true, after);
}