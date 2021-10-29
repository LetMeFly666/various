/*
 * @Author: LetMeFly
 * @Date: 2021-10-29 11:32:03
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-29 11:42:01
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
                console.log(TypeError);
                console.log("Not at second version page");
                isProblem=0;
            }
        }
    }

    if(isProblem) {
        try {
            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = 'http://letmefly666.github.io/various/Links/Title.ico';
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
}