const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">There are <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> players. Each player chooses exactly one player except himself with the same probability, and then every player shoots the player he chooses simultaneously. Each shot hits the chosen player with probability <img alt="" src="https://www.nowcoder.com/equation?tex=p"/>. All choices and hits are independent. A player dies if and only if hit by at least one shot. For each <img src="https://www.nowcoder.com/equation?tex=k%3D0%2C1%2C%5Ccdots%2Cn"/>, find the probability <img alt="p_k" src="https://www.nowcoder.com/equation?tex=p_k"/> exactly <img alt="" src="https://www.nowcoder.com/equation?tex=k"/> player alive.</div>\n'; const input_description_data = '\<pre>The only line contains three integers  <img src="https://www.nowcoder.com/equation?tex=n%20(2%5Cle%20n%5Cle%203%20%5Ctimes%2010%5E5)"/>,  <img src="https://www.nowcoder.com/equation?tex=a%2C%20b(1%5Cle%20a%5Cle%20b%3C998244353)"/>, where <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> is the number of players and <img src="https://www.nowcoder.com/equation?tex=p%3D%5Cdfrac%7Ba%7D%7Bb%7D"/> is the probability of hit for each shot.</pre>\n'; const output_description_data = '\<pre>Output <img alt="" src="https://www.nowcoder.com/equation?tex=n%2B1"/> lines. In the <img alt="" src="https://www.nowcoder.com/equation?tex=(k%2B1)"/>-th line, output one integer indicating <img alt="p_k" src="https://www.nowcoder.com/equation?tex=p_k"/> module 998244353.<br/><br/>Formally, it can be proved that <img alt="p_k" src="https://www.nowcoder.com/equation?tex=p_k"/> is a rational number and it can be represented by <img src="https://www.nowcoder.com/equation?tex=%5Cdfrac%7BA_k%7D%7BB_k%7D"/> where the greatest common divisor of <img alt="A_k" src="https://www.nowcoder.com/equation?tex=A_k"/> and <img alt="B_k" src="https://www.nowcoder.com/equation?tex=B_k"/> is <img alt="" src="https://www.nowcoder.com/equation?tex=1"/>. You should output one integer <img src="https://www.nowcoder.com/equation?tex=x_k(0%5Cle%20x_k%20%3C998244353)"/> such that <img src="https://www.nowcoder.com/equation?tex=B_kx_k%5Cequiv%20A_k%5Cpmod%7B998244353%7D"/>.<br/></pre>\n';

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
