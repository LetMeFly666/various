const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Ema is playing a new game with her friends! <br/> <br/> <div>  Each of the <img src="https://www.nowcoder.com/equation?tex=n"/> players has a number on its forehead. The numbers range from <img src="https://www.nowcoder.com/equation?tex=1"/> to <img src="https://www.nowcoder.com/equation?tex=m"/>, and no two players have the same number. A player can see everyone else\s number, but not the number on itself. All players know the lower bound <img src="https://www.nowcoder.com/equation?tex=1"/> and the upper bound $m$ beforehand. </div> <div> <br/> </div> Players win by pointing out how many other players have a number smaller than its own number. To decide the winner, each turn every player writes down whether or not it can win using the information from previous turns, then everyone shows the result simultaneously. The game ends when at least one player wins on some turn.<br/> <br/> Given the starting situation, determine when will the game end, and who wins at the end. It can be shown that the game will always end.<br/> <br/></div>\n'; const input_description_data = '\<pre>There are multiple test cases. The first line of the input contains an integer <img src="https://www.nowcoder.com/equation?tex=T"/> indicating the number of test cases. For each test case:<br/><br/>The first line contains two integers <img src="https://www.nowcoder.com/equation?tex=n"/> and <img src="https://www.nowcoder.com/equation?tex=m"/><img src="https://www.nowcoder.com/equation?tex=(1%20%5Cle%20n%20%5Cle%20m%20%5Cle%2010%5E9%2C%201%20%5Cle%20n%20%5Cle%2010%5E3)"/>, indicating the number of players and the range of numbers.<br/><br/>The next line contains <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integer <img alt="a_i" src="https://www.nowcoder.com/equation?tex=a_i"/> (<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20a_i%20%5Cle%20m"/>), in ascending order, the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th number indicating the number on the $i$-th player.<br/><br/>It\s guaranteed that the sum of <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> of all test cases will not exceed <img src="https://www.nowcoder.com/equation?tex=10%5E3"/>.<br/></pre>\n'; const output_description_data = '\<pre>For each test case, output the first line containing <img alt="" src="https://www.nowcoder.com/equation?tex=2"/> integers <img alt="" src="https://www.nowcoder.com/equation?tex=ans"/> and <img alt="" src="https://www.nowcoder.com/equation?tex=cnt"/>, indicating the turn where the game ends and the number of player that will win on that turn, and the second line containing <img alt="" src="https://www.nowcoder.com/equation?tex=cnt"/> integers <img alt="s_i" src="https://www.nowcoder.com/equation?tex=s_i"/>, indicating the indices of the players that win on turn <img alt="" src="https://www.nowcoder.com/equation?tex=ans"/>. The indices should be printed in increasing order.</pre>\n';

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
