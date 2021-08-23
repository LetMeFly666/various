const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question">You are given a convex polygon with <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> vertices and <img alt="" src="https://www.nowcoder.com/equation?tex=m"/> different points strictly outside the polygon which are all legal positions to install illuminants.<br/> <br/> <div>  An illuminant can light up some exterior boundaries of the polygon. Your task is to install the least number of illuminants to light up all exterior boundaries of the polygon and provide a feasible scheme. </div> <div> <br/> </div> <div> <img alt="" src="https://uploadfiles.nowcoder.com/images/20210815/364723_1629039744213/6888C5EBC58CD04575488C4F0EC6BDAD"/><br/> </div></div>\n'; const input_description_data = '\<pre>The first line contains two integers <img src="https://www.nowcoder.com/equation?tex=n(3%20%5Cle%20n%20%5Cle%202%20%5Ctimes%2010%5E5)"/> and <img src="https://www.nowcoder.com/equation?tex=m(1%20%5Cle%20m%20%5Cle%202%20%5Ctimes%2010%5E5)"/>.<br/><br/>Each of the following <img alt="" src="https://www.nowcoder.com/equation?tex=n"/> lines describes a vertex on the convex polygon with two integers x and y <img src="https://www.nowcoder.com/equation?tex=(%7Cx%7C%2C%20%7Cy%7C%20%5Cle%2010%5E9)"/>, indicating the coordinates of a vertex on the polygon. All these vertices are given in counter-clockwise order and any three of them are not collinear.<br/><br/>Then the following <img alt="" src="https://www.nowcoder.com/equation?tex=m"/> lines contain m different points outside the polygon describing all legal positions to install illuminants. The i-th line contains two integers <img alt="" src="https://www.nowcoder.com/equation?tex=x"/>  and<img alt="" src="https://www.nowcoder.com/equation?tex=y"/> <img src="https://www.nowcoder.com/equation?tex=(%7Cx%7C%2C%20%7Cy%7C%20%5Cle%2010%5E9)"/>, indicating the coordinates of the <img alt="" src="https://www.nowcoder.com/equation?tex=i"/>-th position. All these positions would not lie in some extension lines for the sides of the polygon.<div><br/></div></pre>\n'; const output_description_data = '\<pre>If it is impossible to light up all exterior boundaries of the polygon, output a single line with a single integer <img alt="" src="https://www.nowcoder.com/equation?tex=-1"/>.<br/><br/>Otherwise output two lines. Firstly, output a line with a single integer <img alt="" src="https://www.nowcoder.com/equation?tex=k"/>, representing the least number of illuminants needed to light up all the boundaries. Then, output a line with <img alt="" src="https://www.nowcoder.com/equation?tex=k"/> space-separated distinct integers, describing a feasible scheme, each of which is the index of a selected position.<br/><br/>All feasible schemes are allowed, so you can output any of them.<div><br/></div></pre>\n';

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
