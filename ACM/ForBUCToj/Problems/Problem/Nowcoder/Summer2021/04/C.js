const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Let <img alt="LCS(s_1,s_2)" src="https://www.nowcoder.com/equation?tex=LCS(s_1%2Cs_2)"/> denote the length of the longest common subsequence (not necessary continuity) of string <img alt="s_1" src="https://www.nowcoder.com/equation?tex=s_1"/> and string <img alt="s_2" src="https://www.nowcoder.com/equation?tex=s_2"/>.<br/> <br/> <div>  Now give you four integers <img alt="" src="https://www.nowcoder.com/equation?tex=a%2Cb%2Cc%2Cn"/>, you need to find three lowercase character strings <img alt="s_1,s_2,s_3" src="https://www.nowcoder.com/equation?tex=s_1%2Cs_2%2Cs_3"/> satisfy that <img src="https://www.nowcoder.com/equation?tex=%7Cs_1%7C%3D%7Cs_2%7C%3D%7Cs_3%7C%3Dn"/>  </div> <div> <br/> </div> <div>  and  <img src="https://www.nowcoder.com/equation?tex=LCS(s_1%2Cs_2)%3Da%2C%20LCS(s_2%2Cs_3)%3Db%2C%20LCS(s_1%2Cs_3)%3Dc"/>. </div> <br/></div>\n'; const input_description_data = '\<pre>The first line has four integers <img alt="" src="https://www.nowcoder.com/equation?tex=a%2Cb%2Cc%2Cn"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20a%2Cb%2Cc%5Cleq%20n"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%201000"/>.<br/></pre>\n'; const output_description_data = '\<pre>If there is no solution, output "NO" (without double quotation marks).<br/><br/>If there exists solutions, you only need to output any one: output three lines, the i-th line has one strings <img alt="s_i" src="https://www.nowcoder.com/equation?tex=s_i"/>.<br/></pre>\n';

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
            problem_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(2) > div > div");
            input_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(3) > div > div");
            output_description = document.querySelector("body > div:nth-child(2) > div > div:nth-child(5) > div:nth-child(4) > div > div");
            problem_description.innerHTML = begin + problem_description_data + end;
            input_description.innerHTML = begin + input_description_data + end;
            output_description.innerHTML = begin + output_description_data + end;
            isProblem=2;
        }
        catch(TypeError)
        {
            console.log(TypeError);
            console.log("Not at second version page");
            isProblem=0;
        }
    }


    setTimeout(function () {
        var author = document.querySelector("#creator > a");
        author.href = "userinfo.php?user=2019040474";
        author.innerText="2019040474";
    }, 3000);
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
