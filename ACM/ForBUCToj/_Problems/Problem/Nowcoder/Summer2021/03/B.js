const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><div>  Goodeat has a white chessboard with n rows and m columns. </div> <div> <span>Each grid (i, j) has a weight c(i, j). At any time, the grid (i, j) can be dyed black at the cost of c(i, j).</span><br/> </div> Goodeat has a special talent. For the four intersecting squares of any two rows and two columns, if three of them are black squares, Goodeat can dye the fourth square black without any cost.<br/> Please find out the minimum cost of dyeing a black chessboard.<br/> Due to the large number of grids, we use the following method to generate weights:<br/> A0 = a<br/> A(i+1) = (Ai * Ai * b + Ai * c + d)% p<br/> Where A(m*(i-1)+j) is the cost c(i, j) of the grid in the i-th row and j-th column <img src="https://www.nowcoder.com/equation?tex=(1%20%5Cle%20i%20%5Cle%20n%2C%201%5Cle%20j%5Cle%20m)"/>.<br/></div>\n'; const input_description_data = '\<pre><p>The first line contains seven integers n,m,a,b,c,d,p.（<img src="https://www.nowcoder.com/equation?tex=a%2Cb%2Cc%2Cd%20%3Cp%5Cle%20100000%2C%20n%2Cm%5Cle%205000"/>）</p></pre>\n'; const output_description_data = '\<pre>Output a single integer denoting the answer. </pre>\n';

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
