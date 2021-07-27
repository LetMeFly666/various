const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Alice and Bob are playing a game.<br/> <br/> At the beginning, there is an undirected graph <img alt="" src="https://www.nowcoder.com/equation?tex=G"/> with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> nodes.<br/> <br/> Alice and Bob take turns to operate, Alice will play first. The player who can\t operate will lose the game.<br/> <br/> Each turn, the player should do one of the following operations.<br/> <br/> 1. Select an edge of <img alt="" src="https://www.nowcoder.com/equation?tex=G"/> and delete it from <img alt="" src="https://www.nowcoder.com/equation?tex=G"/>.<br/> <br/> 2. Select a connected component of <img alt="" src="https://www.nowcoder.com/equation?tex=G"/> which doesn\t have any loop, then delete it from <img alt="" src="https://www.nowcoder.com/equation?tex=G"/>.<br/> <br/> Alice and Bob are smart enough, you need to find who will win this game.<br/> <br/> A connected component of an undirected graph is a set of nodes such that each pair of nodes is connected by a path, and other nodes in the graph are not connected to the nodes in this set.<br/> <br/> For example, for graph with <img alt="" src="https://www.nowcoder.com/equation?tex=3"/> nodes and edge set <img alt="" src="https://www.nowcoder.com/equation?tex=%5C%7B(1%2C2)%2C(2%2C3)%2C(1%2C3)%5C%7D.%20%20%5C%7B1%2C2%2C3%5C%7D"/> is a connected component but <img alt="" src="https://www.nowcoder.com/equation?tex=%5C%7B1%2C2%5C%7D%2C%5C%7B1%2C3%5C%7D"/> are not. <br/> <br/> <br/> <br/></div>\n'; const input_description_data = '\<pre>The first line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2Cm"/>.<br/><br/>Then there are <img alt="" src="https://www.nowcoder.com/equation?tex=m"/> lines, each line has two integers <img alt="" src="https://www.nowcoder.com/equation?tex=(u%2Cv)"/> describe an edge in <img alt="" src="https://www.nowcoder.com/equation?tex=G"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%20100"/><br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20m%5Cleq%20min(200%2Cn(n-1)%2F2)"/><br/><br/>It\s guaranteed that graph <img alt="" src="https://www.nowcoder.com/equation?tex=G"/> doesn\t have self loop and multiple edge.<br/></pre>\n'; const output_description_data = '\<pre>Output the name of the player who will win the game.</pre>\n';

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
