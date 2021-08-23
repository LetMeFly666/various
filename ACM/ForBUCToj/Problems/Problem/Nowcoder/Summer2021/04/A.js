const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">The new semester has begun, and Bob needs to start selecting courses.<br/> <br/> There are <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> courses in school, the credit for the i-th course is <img alt="s_i" src="https://www.nowcoder.com/equation?tex=s_i"/>. Bob can select multiple times in the same course, if he select <img alt="k_i" src="https://www.nowcoder.com/equation?tex=k_i"/> times for the i-th course, his total credits are <img src="https://www.nowcoder.com/equation?tex=%5Csum_%7Bi%3D1%7D%5E%7Bn%7Dk_is_i"/>.<br/> <br/> And Bob\s training program has some limitations. The training program is a rooted tree of these <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> courses, each limitation means the total credits in the subtree of <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> need to be at least <img alt="c_x" src="https://www.nowcoder.com/equation?tex=c_x"/>.<br/> <br/> Now Bob wants to know the number of ways to select courses satisfy the limitations of training program and the total credits are <img alt="" src="https://www.nowcoder.com/equation?tex=w"/>.<br/> <br/> Two ways are different if and only if there exists at least one <img src="https://www.nowcoder.com/equation?tex=i%5Cin%20%5B1%2Cn%5D"/> which satisfies that the select times of the i-th courses are different in these two plans.<br/> <br/> The answer may be very large, you only need to output the answer module <img alt="" src="https://www.nowcoder.com/equation?tex=998244353"/>.<br/></div>\n'; const input_description_data = '\<pre>The first line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2CQ"/>.<br/><br/>Then there are <img alt="" src="https://www.nowcoder.com/equation?tex=n-1"/> lines to describe the rooted tree of training program, each line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=a%2Cb"/> denote <img alt="" src="https://www.nowcoder.com/equation?tex=a"/> is the parent node of <img alt="" src="https://www.nowcoder.com/equation?tex=b"/>.<br/><br/>Next line has  <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integers <img src="https://www.nowcoder.com/equation?tex=s_%7B1...n%7D"/>.<br/><br/>Next line has <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integers <img src="https://www.nowcoder.com/equation?tex=c_%7B1...n%7D"/>.<br/><br/>Then there are <img alt="" src="https://www.nowcoder.com/equation?tex=Q"/> lines, each line has one integers <img alt="w_i" src="https://www.nowcoder.com/equation?tex=w_i"/> denote the total credits of the i-th query.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%20100"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20Q%5Cleq%2010"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20s_i%5Cleq%205"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20c_i%5Cleq%20150"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20a%3Cb%5Cleq%20n"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20w_i%5Cleq%2010%5E8"/><br/></pre>\n'; const output_description_data = '\<pre>Output <img alt="" src="https://www.nowcoder.com/equation?tex=Q"/> lines, each line has one integer denote the answer of the i-th query.</pre>\n';

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
