/*
 * @Author: LetMeFly
 * @Date: 2021-10-29 11:32:03
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-02-22 11:21:49
 */
/*
    用js将数学公式打到BUCT_OJ上去
    Param:
        problemDescriptionData: 题目输入描述的部分(html)
        inputDescriptionData: 题目输出描述的部分(html)
        outputDescriptionData: 题目输入描述的部分(html)
        problemName: 问题名称(string)
        ifChangeUploaderName: 是否修改上传者名称(boolean)
*/
function __LetMeFly_BUCTOJ_ProblemPrinter(problemDescriptionData, inputDescriptionData, outputDescriptionData, problemName, ifChangeUploaderName=true) {
    window.onload = () => { // regin window.onload
    const begin = '<div id="article_content" class="article_content clearfix">\n<link rel="stylesheet" href="https://letmefly.xyz/ACM/ForBUCToj/Problems/ck_htmledit_views-b5506197d8.css">\n<div id="content_views" class="markdown_views prism-atom-one-light">\n<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n<path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n</svg>\n<p></p>'
    const end = '</div><div data-report-view="{&quot;mod&quot;:&quot;1585297308_001&quot;,&quot;dest&quot;:&quot;https://letmefly.blog.csdn.net/article/details/116211565&quot;,&quot;extend1&quot;:&quot;pc&quot;,&quot;ab&quot;:&quot;new&quot;}"><div></div></div>\n<link href="https://letmefly.xyz/ACM/ForBUCToj/Problems/markdown_views-d7a94ec6ab.css" rel="stylesheet">\n<link href="https://letmefly.xyz/ACM/ForBUCToj/Problems/style-f1c5feb645.css" rel="stylesheet">\n</div>'

    var isProblem = 1;
    var problem_description,input_description,output_description;
    try {
        problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
        input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
        output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

        problem_description.innerHTML = begin + problemDescriptionData + end;
        input_description.innerHTML = begin + inputDescriptionData + end;
        output_description.innerHTML = begin + outputDescriptionData + end;
    }
    catch(TypeError){
        console.log("Not at Original page");
        try {
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(6) > div:nth-child(4) > div > div");
            problem_description.innerHTML = begin + problemDescriptionData + end;
            input_description.innerHTML = begin + inputDescriptionData + end;
            output_description.innerHTML = begin + outputDescriptionData + end;
            isProblem=2;
        }
        catch(TypeError) {
            console.log("May 竞赛状态");
            try {
                problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(2) > div > div");
                input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(3) > div > div");
                output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(4) > div > div");
                problem_description.innerHTML = begin + problemDescriptionData + end;
                input_description.innerHTML = begin + inputDescriptionData + end;
                output_description.innerHTML = begin + outputDescriptionData + end;
                isProblem=3; // 竞赛状态
            }
            catch(TypeError) {
                try {
                    problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(8) > div:nth-child(2) > div > div");
                    input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(8) > div:nth-child(3) > div > div");
                    output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(8) > div:nth-child(4) > div > div");
                    problem_description.innerHTML = begin + problemDescriptionData + end;
                    input_description.innerHTML = begin + inputDescriptionData + end;
                    output_description.innerHTML = begin + outputDescriptionData + end;
                    isProblem=4; // 竞赛状态
                }
                catch(TypeError) {
                    try {
                        for (let i = 1; i <= 50; i++) {
                            if (document.querySelector("body > div:nth-child(2) > div > div:nth-child(" + i + ") > div:nth-child(2) > div > div")) {
                                problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(" + i + ") > div:nth-child(2) > div > div");
                                input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(" + i + ") > div:nth-child(3) > div > div");
                                output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(" + i + ") > div:nth-child(4) > div > div");
                                problem_description.innerHTML = begin + problemDescriptionData + end;
                                input_description.innerHTML = begin + inputDescriptionData + end;
                                output_description.innerHTML = begin + outputDescriptionData + end;
                                isProblem=5; // 竞赛状态
                                console.log("now: body > div:nth-child(2) > div > div:nth-child(" + i + ")");
                                break;
                            }
                        }
                    }
                    catch (TypeError) {
                        console.log(TypeError);
                        console.log("Not at second version page");
                        isProblem=0;
                    }
                }
            }
        }
    }

    if(isProblem) {
        try {
            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = 'https://letmefly666.github.io/various/Links/Title.ico';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        catch(TypeError) {}

        document.title = problemName;
    }

    if (ifChangeUploaderName) {
        setTimeout(function () {
            var author = document.querySelector("#creator > a");
            author.href = "userinfo.php?user=2019040474";
            author.innerText="2019040474";
        }, 3000);
    }
    } // endregin window.onload
}

var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','https://letmefly.xyz/Links/Common.js?v=' + Math.random()
);//设置js地址
document.head.appendChild(script1);//将js追加为body的子标签