const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">For a sequence <img src="https://www.nowcoder.com/equation?tex=t_%7B1...n%7D"/>, we define the weight of it is the number of pairs <img alt="" src="https://www.nowcoder.com/equation?tex=(i%2Cj)"/> satisfy <img alt="" src="https://www.nowcoder.com/equation?tex=i%3Cj"/> and <img src="https://www.nowcoder.com/equation?tex=t_i%3Et_j"/>.<br/> <br/> Now give you a permutation <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/>, you need to choose a sequence <img src="https://www.nowcoder.com/equation?tex=b_%7B1...n%7D"/> satisfies <img src="https://www.nowcoder.com/equation?tex=b_i%5Cin%20%5C%7B0%2C1%5C%7D"/> to minimize the weight of sequence <img src="https://www.nowcoder.com/equation?tex=c_%7B1...n%7D"/> which satisfies <img src="https://www.nowcoder.com/equation?tex=c_i%3Da_i%2Bb_i"/>.<br/></div>\n'; const input_description_data = '\<pre>The first line has one integer <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>.<br/><br/>The second line has <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integers <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/>.<br/><br/>It\s guaranteed that <img alt="a_i" src="https://www.nowcoder.com/equation?tex=a_i"/> is a permutation of <img alt="" src="https://www.nowcoder.com/equation?tex=%5C%7B1%2C2...n%5C%7D"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%202%5Ctimes%2010%5E5"/><br/></pre>\n'; const output_description_data = '\<pre>Output the minimum weight of <img src="https://www.nowcoder.com/equation?tex=c_%7B1...n%7D"/> you can get.</pre>\n';

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
