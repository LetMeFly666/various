const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Bob has a random number generator, it will generate <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> with probability <img alt="p_x" src="https://www.nowcoder.com/equation?tex=p_x"/>. <br/> <br/> Now Bob will do the following operations:<br/> <br/> Step 1. Generate a number <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> by random number generator.<br/> <br/> Step 2. If <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> is the largest number among the generated numbers (i.e., <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> is no smaller than any previously generated numbers), go to step 1, otherwise, go to step 3.<br/> <br/> Step 3. If Bob generates <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> numbers totally, Bob will get <img src="https://www.nowcoder.com/equation?tex=x%5E2"/> score.<br/> <br/> Now Bob wants to know the expected value of the score he will get.<br/> <br/> If the answer is irreducible fraction <img src="https://www.nowcoder.com/equation?tex=%5Cfrac%7Bx%7D%7By%7D"/>, you need to output an integer <img alt="" src="https://www.nowcoder.com/equation?tex=d"/> in [0,998244352] which satisfies <img src="https://www.nowcoder.com/equation?tex=d%20%5Ctimes%20y~mod~998244353%3Dx~mod~998244353"/>. It\s guaranteed that <img src="https://www.nowcoder.com/equation?tex=y~mod~998244353%5Cneq%200"/>.<br/></div>\n'; const input_description_data = '\<pre>The first line has one integers <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>, it means the random number generator can only generate integers in <img alt="" src="https://www.nowcoder.com/equation?tex=%5B1%2Cn%5D"/>.<br/><br/>The second line has <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> positive integers <img src="https://www.nowcoder.com/equation?tex=w_%7B1...n%7D"/>, it means <img src="https://www.nowcoder.com/equation?tex=p_i%3D%5Cfrac%7Bw_i%7D%7B%5Csum_%7Bj%3D1%7D%5E%7Bn%7Dw_j%7D"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=2%5Cleq%20n%5Cleq%20100"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20w_i%5Cleq%2010%5E6"/>.<br/></pre>\n'; const output_description_data = '\<pre>Output the answer.</pre>\n';

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
