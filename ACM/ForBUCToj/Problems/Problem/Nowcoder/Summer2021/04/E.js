const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Bob has a tree with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> nodes and the weight of i-th node is <img alt="w_i" src="https://www.nowcoder.com/equation?tex=w_i"/>.<br/> <br/> But Bob forgot <img src="https://www.nowcoder.com/equation?tex=w_%7B1...n%7D"/>, he only remembers <img alt="w_i" src="https://www.nowcoder.com/equation?tex=w_i"/> is an integer in <img src="https://www.nowcoder.com/equation?tex=%5Bl_i%2Cr_i%5D"/> and <img src="https://www.nowcoder.com/equation?tex=w_u~xor~w_v"/> for each edge <img alt="" src="https://www.nowcoder.com/equation?tex=(u%2Cv)"/> in the tree.<br/> <br/> Now Bob wants to know the number of possible values of <img src="https://www.nowcoder.com/equation?tex=w_%7B1...n%7D"/>.<br/> <br/> XOR means bitwise exclusive OR<br/></div>\n'; const input_description_data = '\<pre>The first line has one integers <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>.<br/><br/>Then there are <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> lines, the i-th line has two integers <img alt="l_i,r_i" src="https://www.nowcoder.com/equation?tex=l_i%2Cr_i"/>.<br/><br/>Then there are <img alt="" src="https://www.nowcoder.com/equation?tex=n-1"/> lines, each line has three integers <img src="https://www.nowcoder.com/equation?tex=u%2Cv%2Cw_u~xor~w_v"/> denote the infomation for each edge.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%2010%5E5"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20l_i%5Cleq%20r_i%3C2%5E%7B30%7D"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20w_u~xor~w_v%3C2%5E%7B30%7D"/><br/></pre>\n'; const output_description_data = '\<pre>Output the answer.</pre>\n';

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
