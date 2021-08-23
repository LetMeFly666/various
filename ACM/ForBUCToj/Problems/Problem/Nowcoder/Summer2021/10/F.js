const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">You are now the coordinator for the Nonexistent Old Railway Station! The Nonexistent Old Railway Station only has one track with a dead end, which acts as a stack: everytime you either push a train into the station, or pop the most recently added train out of the station. <br/> <br/> Everyday, n trains gets push into and pop out of the station. The inspector has already decided today\s sequence of ``pushing\\ and ``popping\\. You now have a list of the <br/> colored trains and have to assign each train to one ``pushing\\ in inspector\s sequence. <br/> <br/> Meanwhile, the inspector also requires you to make the sequence of trains remaining on the track unique every time you push a train onto it. Two sequence of trains are considered different if the length is different or the i-th train in the two sequences have a different color. <br/> <br/> Output a solution or decide that it is impossible.<br/> <span></span><br/></div>\n'; const input_description_data = '\<pre>The first line contains one integer <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>(<img src="https://www.nowcoder.com/equation?tex=1%20%5Cleq%20n%20%5Cleq%2010%5E6"/>), indicating the number of trains.<br/><br/>The second line contains a bracket sequence of length <img alt="" src="https://www.nowcoder.com/equation?tex=2n"/>, with each ``(\\ indicating one ``pushing\\ and ``)\\indicating one ``popping\\. The input guarantees that the sequence is always valid and balanced.<br/><br/>The third line contains n numbers <img alt="k_i" src="https://www.nowcoder.com/equation?tex=k_i"/> (<img src="https://www.nowcoder.com/equation?tex=1%20%5Cleq%20k_i%20%5Cleq%20n"/>), indicating the color of the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th train.<br/></pre>\n'; const output_description_data = '\<pre>If there is no solution, output ``NO\\ in one line.<br/><br/>Otherwise, output ``YES\\ in the first line, and <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> intergers in the second line, indicating the color of the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th train that is being pushed.<br/></pre>\n';

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
