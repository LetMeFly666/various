const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">As a traveler, you once witnessed the war of Inazuma, of which sides are the resistance and the Shogun\s army.<br/> <br/> The map of Inazuma can be viewed as a unit <img alt="" src="https://www.nowcoder.com/equation?tex=n"/><span></span>-dimensional hypercube, which has exactly <img src="https://www.nowcoder.com/equation?tex=2%5En"/> vertices. Each vertex is labeled with an integer from 0 to <img src="https://www.nowcoder.com/equation?tex=2%5En-1"/>. Two vertices are adjacent if and only if there exists exactly one different bit in their <img alt="" src="https://www.nowcoder.com/equation?tex=n" style=""/><span></span><span>-bit </span>binary representation.<br/> <br/> In the war of Inazuma, some vertices were occupied by the resistance army, and others were occupied by the Shogun\s Army. You also noticed that for each vertex <span></span><img alt="" src="https://www.nowcoder.com/equation?tex=u"/>,<span></span> the number of vertices adjacent to <img alt="" src="https://www.nowcoder.com/equation?tex=u"/> and occupied by the same side as <img alt="" src="https://www.nowcoder.com/equation?tex=u"/> was no more than <img src="https://www.nowcoder.com/equation?tex=%5Clceil%20%5Csqrt%20n%20%5Crceil"/>.<br/> <br/> Many years later, you have already forgotten details of the war. Can you construct a hypercube satisfying all the above requirements?<br/></div>\n'; const input_description_data = '\<pre>The only line contains a single integer <img src="https://www.nowcoder.com/equation?tex=n(1%20%5Cleq%20n%20%5Cleq%2022)"/>.</pre>\n'; const output_description_data = '\<pre>Output a 01-string of length <img src="https://www.nowcoder.com/equation?tex=2%5En"/>. The <img src="https://www.nowcoder.com/equation?tex=%5Coverline%7Ba_1%20%5Cdots%20a_n%7D"/>-th bit describes which side is vertex <img src="https://www.nowcoder.com/equation?tex=(a_1%2C%20%5Cdots%2C%20a_n)"/> occupied by, 0 for the resistance army and 1 for the Shogun\s army. Here <img src="https://www.nowcoder.com/equation?tex=%5Coverline%7Ba_1%20%5Cdots%20a_n%7D"/> is an <img alt="" src="https://www.nowcoder.com/equation?tex=n" style=""/>-bit binary representation. Any answer satisfying all requirements will be accepted.</pre>\n';

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
