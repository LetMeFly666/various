const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><span></span>Given a integer <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>, you are asked to calculate the sum of the diameter of all unrooted labeled trees with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> nodes labeled from <img alt="" src="https://www.nowcoder.com/equation?tex=1"/> to <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>. Here the diameter of a tree is the length of the longest simple path on this tree, and the length of a path is the number of edges along this path.<br/> <br/> Since the answer may be too large, you only need to output the result modulo a given prime number <img alt="" src="https://www.nowcoder.com/equation?tex=p"/><span></span>.<br/> <div> <span></span><br/> </div></div>\n'; const input_description_data = '\<pre>The input contains two integers <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> and <img alt="" src="https://www.nowcoder.com/equation?tex=p"/> <img src="https://www.nowcoder.com/equation?tex=(1%20%5Cle%20n%20%5Cle%20500%2C%2010%5E8%20%5Cle%20p%20%3C%202%5E%7B31%7D)"/>, where <img alt="" src="https://www.nowcoder.com/equation?tex=p"/> is a prime number. </pre>\n'; const output_description_data = '\<pre>Output a single integer, indicating the sum of the diameter of all labeled trees with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> nodes modulo <img alt="" src="https://www.nowcoder.com/equation?tex=p"/>.</pre>\n';

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
