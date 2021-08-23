const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Goodeat gets a matrix of N * N. We use (x,y) to denote the entry in the x-th row and the y-th column (<img src="https://www.nowcoder.com/equation?tex=1%5Cle%20x%2C%20y%5Cle%20N"/>).<br/> Now Goodeat wants to choose C entries, and the following conditions must be met:<br/> 1. In each row, at least one entry is chosen<br/> 2.<span> In each column, at least one entry is chosen</span><br/> 3. On the diagonal line (that is, all the entries satisfying x=y), <span>at least one entry is chosen</span><br/> 4. On the negative diagonal (that is, all the <span>entries</span> satisfying x+y=N+1), <span>at least one entry is chosen</span><br/> <div>  There are K entries that can’t be chosen.  </div> <div>  Now Goodeat wants to know about the number of ways for choosing entries. Since the number may be too large, you only need to output the answer modulo 10007. </div></div>\n'; const input_description_data = '\<pre>The first line contains three integers <img src="https://www.nowcoder.com/equation?tex=N(1%20%5Cle%20N%20%5Cle%2032)%2C%20K(1%5Cle%20K%5Cle%207)%2C%20C(K%5Cle%20C%5Cle%20N%5E2-K)"/>.<br/>In the next K lines, each line contains two positive integers x, y, which means the entry (x, y) cannot be chosen. <br/>It\s guaranteed that each entry is given at most once. <br/></pre>\n'; const output_description_data = '\<pre>Output a single integer denoting the answer. </pre>\n';

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
