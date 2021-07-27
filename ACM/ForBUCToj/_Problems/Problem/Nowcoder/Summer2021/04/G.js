const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">Bob has three integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2Ck%2CD"/>.<br/> <br/> For a non-negative integer sequence <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/>, we denote the weight of it is:<br/> <br/> <img src="https://www.nowcoder.com/equation?tex=%5Cfrac%7BD!%7D%7B%5Cprod_%7Bi%3D1%7D%5E%7Bn%7D(a_i%2Bk)!%7D"/><br/> <br/> Now Bob wants to know the sum of the weight of all of the sequences <img src="https://www.nowcoder.com/equation?tex=a_%7B1...n%7D"/> which satisfies the following conditions:<br/> <br/> 1. <img src="https://www.nowcoder.com/equation?tex=%5Cforall%20i%20%5Cin%20%5B1%2Cn%5D%2C%20a_i%5Cgeq%200"/><br/> <br/> 2. <img src="https://www.nowcoder.com/equation?tex=%5Csum_%7Bi%3D1%7D%5E%7Bn%7Da_i%3DD"/><br/> <br/> <div>  If the answer is irreducible fraction <img src="https://www.nowcoder.com/equation?tex=%5Cfrac%7Bx%7D%7By%7D"/>, you need to output an integer <img alt="" src="https://www.nowcoder.com/equation?tex=d"/> in <img alt="" src="https://www.nowcoder.com/equation?tex=%5B0%2C998244352%5D"/> which satisfies <img src="https://www.nowcoder.com/equation?tex=d%20%5Ctimes%20y~mod~998244353%3Dx~mod~998244353"/>.  </div> <div> <br/> </div> <div>  It\s guaranteed that <img src="https://www.nowcoder.com/equation?tex=y~mod~998244353%5Cneq%200"/>. </div></div>\n'; const input_description_data = '\<pre>The first line has three integers <img alt="" src="https://www.nowcoder.com/equation?tex=n%2Ck%2CD"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%2050"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20k%5Cleq%2050"/>.<br/><br/><img src="https://www.nowcoder.com/equation?tex=0%5Cleq%20D%5Cleq%2010%5E8"/>.<br/></pre>\n'; const output_description_data = '\<pre>Output the answer.</pre>\n';

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
