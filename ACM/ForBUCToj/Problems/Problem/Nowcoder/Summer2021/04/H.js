const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Bob invented a new operation <img src="https://www.nowcoder.com/equation?tex=%5Cotimes"/><br/> <br/> Let <img alt="p_i" src="https://www.nowcoder.com/equation?tex=p_i"/> denote the i-th prime number. If <img src="https://www.nowcoder.com/equation?tex=x%3D%5Cprod_%7Bi%7Dp_i%5E%7Ba_i%7D"/> and <img src="https://www.nowcoder.com/equation?tex=y%3D%5Cprod_%7Bi%7Dp_i%5E%7Bb_i%7D"/>, then<br/> <br/> <img src="https://www.nowcoder.com/equation?tex=x%5Cotimes%20y%3D%5Cprod_%7Bi%7Dp_i%5E%7B%7Ca_i-b_i%7C%7D"/><br/> <br/> Now Bob have a sequence <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/>, he wants to calculate sequence <img src="https://www.nowcoder.com/equation?tex=b_%7B1...n%7D"/> satisfies:<br/> <br/> <img src="https://www.nowcoder.com/equation?tex=b_i%3D%5Csum_%7B1%5Cleq%20j%2Ck%5Cleq%20n%2Cj%5Cotimes%20k%3Di%7Da_jk%5Ec"/><br/> <br/> The answer may be very large, you only need to output:<br/> <br/> <img src="https://www.nowcoder.com/equation?tex=(b_1%5Cmod%20998244353)~xor~(b_2%5Cmod%20998244353)~...~xor~(b_n%5Cmod%20998244353)"/><br/> <br/> XOR means bitwise exclusive OR<br/></div>\n'; const input_description_data = '\<pre>The first line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2Cc"/>.<br/><br/>The second line has <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integers <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%2010%5E6"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20a_i%20%3C%20998244353"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20c%5Cleq%2010%5E9"/><br/></pre>\n'; const output_description_data = '\<pre>Output the answer.</pre>\n';

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
