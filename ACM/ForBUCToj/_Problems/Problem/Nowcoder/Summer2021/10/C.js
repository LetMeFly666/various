const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><span></span>ZYB plans to hold a dance party and has invited <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> ladies and <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> gentlemen, they are both numbered from <img alt="" src="https://www.nowcoder.com/equation?tex=1"/> to <img alt="" src="https://www.nowcoder.com/equation?tex=n"/>. Now ZYB wants to match the lady and gentleman one by one.<br/> <br/> However, each lady holds a blacklist that she wouldn\t like to dance with the man on that list. For the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th lady, she lists <img alt="k_i" src="https://www.nowcoder.com/equation?tex=k_i"/> gentlemen and their IDs are <img src="https://www.nowcoder.com/equation?tex=a_%7Bi%2C1%7D%2Ca_%7Bi%2C2%7D%2C...%2Ca_%7Bi%2Ck_i%7D"/> repectively.<br/> <br/> ZYB wonders whether there exists a perfect matching so that each lady can dance without her dislike.<br/> <span></span><br/></div>\n'; const input_description_data = '\<pre>The first line of input contains one integer <img src="https://www.nowcoder.com/equation?tex=n(1%5Cleq%20n%5Cleq%2030000)"/>, indicating the number of ladies and gentlemen invited.<br/><br/>In the next following <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> lines, there is a integer <img src="https://www.nowcoder.com/equation?tex=k_i(0%5Cleq%20k_i%5Cleq%20100)"/> first, indicating the number of gentlemen that the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th lady dislikes. Then followed with <img alt="k_i" src="https://www.nowcoder.com/equation?tex=k_i"/> integers <img src="https://www.nowcoder.com/equation?tex=a_%7Bi%2C1%7D%2Ca_%7Bi%2C2%7D%2C...%2Ca_%7Bi%2Ck_i%7D(1%5Cleq%20a_%7Bi%2Cj%7D%5Cleq%20n)"/>.<br/></pre>\n'; const output_description_data = '\<pre>You should output <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> integers if there exists a perfect matching, the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th number indicating the gentleman ID that the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th lady chooses. Please output <img alt="" src="https://www.nowcoder.com/equation?tex=-1"/> if no such matching exists.</pre>\n';

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
