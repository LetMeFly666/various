const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><strong>The memory limit of this problem (32 megabytes) is unusual!</strong><br/> <br/> In the upcoming <img src="https://www.nowcoder.com/equation?tex=n"/> <span></span> days, <img src="https://www.nowcoder.com/equation?tex=n"/> browser games will be released on a new website. According to the plan, the administrator will release a new game per day. Users have to open the corresponding URL (Uniform Resource Locator) and get feedback from the server to download a game.<br/> <br/> However, the setup of the server uses unreadable legacy codes. Once a user somehow finds the URL of an unreleased game, the data of the game would leak out. To temporarily fix the problem, the administrator decided to add a series of <u>confirmation prefixes</u>, which are non-empty strings, at the server-side. The server will respond with the correct game data when the requested URL does correspond to a game (no matter released or unreleased) and at least one <u>confirmation prefix</u> is a prefix of the URL; otherwise, the server will declare that the game is not found.<br/> <br/> To make the work easier, the administrator asks you to find the minimum number of <u>confirmation prefixes</u> the server required to avoid data leaks every time after a new game release.<br/> <div> <br/> </div></div>\n'; const input_description_data = '\<pre>The first line contains an integer <img src="https://www.nowcoder.com/equation?tex=n(1%20%5Cleq%20n%20%5Cleq%2010%5E5)"/>, indicating the number of browser games to be released.<br/><br/>In the next <img src="https://www.nowcoder.com/equation?tex=n"/> lines, the <img src="https://www.nowcoder.com/equation?tex=i"/>-th line contains a non-empty string, consisting of only lowercase letters (`a\ to `z\), uppercase letters (`A\ to `Z\), digits (`0\ to `9\), dots (`.\) and forward slashes (`/\), indicating the URL of the browser game released on the <img src="https://www.nowcoder.com/equation?tex=i"/>-th day.<br/><br/>It is guaranteed that the length of each given URL is at most 100, and no given URL is the prefix of any other given URL.<br/><div><br/></div></pre>\n'; const output_description_data = '\<pre>Output <img src="https://www.nowcoder.com/equation?tex=n"/> lines, the <img src="https://www.nowcoder.com/equation?tex=i"/>-th of which contains an single integer, indicating the minimum number of required confirmation prefixes after the <img src="https://www.nowcoder.com/equation?tex=i"/>-th new game released.<br/><div><br/></div></pre>\n';

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
