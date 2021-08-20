const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">There is an <img src="https://www.nowcoder.com/equation?tex=n%20%5Ctimes%20m"/> maze with two of the corners of the board having coordinates (1, 1) and (n, m).<br/> <br/> Once you are located in the cell (x, y), you can move to the four adjacent cells (x - 1, y), (x + 1, y), (x, y - 1) and (x, y + 1) in one second, and you must keep moving, which means that you cannot stay in one cell. Also, you cannot move outside the maze.<br/> <br/> Now you start at (a, b), and you should keep moving for t seconds. You are asked to figure out the number of possible moving trails.<br/> <br/> Here a moving trail is the sequence of the moving strategy during your moving. For example, if you start at (1, 1) and at the following 5 seconds you move to (2, 1), (3, 1), (3, 2), (4, 2) and (3, 2) step by step, the moving trail is (1, 0), (1, 0), (0, 1), (1, 0), and (-1, 0).<br/> <br/> Since the answer may be too large, you only need output the result modulo <img src="https://www.nowcoder.com/equation?tex=998%5C%2C244%5C%2C353"/>.<br/></div>\n'; const input_description_data = '\<pre>The only line contains five integers <img src="https://www.nowcoder.com/equation?tex=t%2C%20n%2C%20m(1%20%5Cle%20t%2C%20n%2C%20m%20%5Cle%205%20%5Ctimes%2010%5E5)"/>, <img src="https://www.nowcoder.com/equation?tex=a(1%20%5Cle%20a%20%5Cle%20n)"/> and <img src="https://www.nowcoder.com/equation?tex=b(1%20%5Cle%20b%20%5Cle%20m)"/>.</pre>\n'; const output_description_data = '\<pre>Output a single integer, indicating the answer modulo <img src="https://www.nowcoder.com/equation?tex=998%5C%2C244%5C%2C353"/>.</pre>\n';

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
