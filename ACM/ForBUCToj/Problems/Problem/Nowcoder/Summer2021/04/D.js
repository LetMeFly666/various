const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Bob has a tree with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> nodes, the set of the edges of this tree is <img alt="" src="https://www.nowcoder.com/equation?tex=T"/>.<br/> <br/> Let <img alt="" src="https://www.nowcoder.com/equation?tex=B"/> denote the edge set of n-clique, formally <img src="https://www.nowcoder.com/equation?tex=B%3D%5C%7B(i%2Cj)%7C1%5Cleq%20i%3Cj%5Cleq%20n%5C%7D"/><br/> <br/> Now give you an integer <img alt="" src="https://www.nowcoder.com/equation?tex=k"/>, you need to find the number of pair <img alt="" src="https://www.nowcoder.com/equation?tex=(X%2CY)"/> satisfies the following conditions:<br/> <br/> 1. <img src="https://www.nowcoder.com/equation?tex=X%5Csubseteq%20T"/>, <img src="https://www.nowcoder.com/equation?tex=Y%5Csubseteq%20B"/>.<br/> <br/> 2. <img alt="" src="https://www.nowcoder.com/equation?tex=%7CX%7C%3Dn-1-k"/>, <img alt="" src="https://www.nowcoder.com/equation?tex=%7CY%7C%3Dk"/>.<br/> <br/> 3. <img src="https://www.nowcoder.com/equation?tex=X%5Ccup%20Y"/> is an edge set of a tree with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> nodes.<br/> <br/> The answer may be very large, you only need to output the answer module <img alt="" src="https://www.nowcoder.com/equation?tex=998244353"/>.<br/></div>\n'; const input_description_data = '\<pre>The first line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2Ck"/>.<br/><br/>Then there are <img alt="" src="https://www.nowcoder.com/equation?tex=n-1"/> lines, each line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=u%2Cv"/> denote an edge <img alt="" src="https://www.nowcoder.com/equation?tex=(u%2Cv)"/> in <img alt="" src="https://www.nowcoder.com/equation?tex=T"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=2%5Cleq%20n%5Cleq%205%5Ctimes%2010%5E4"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20k%5Cleq%20min(100%2Cn-1)"/><br/></pre>\n'; const output_description_data = '\<pre>Output the answer.</pre>\n';

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
