const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><div> <span>There is an <img src="https://www.nowcoder.com/equation?tex=n%5Ctimes%20n"/> grid, some positions of it contain non-negative integers <img src="https://www.nowcoder.com/equation?tex=a_%7Bi%2Cj%7D"/>, while others contain nothing.</span> </div> <div> <span>Now, given an empty number grid, and some positions of it (those positions must contain a <span>non-negative</span> integer, while others must contain nothing), and the maximum value of <img src="https://www.nowcoder.com/equation?tex=a_%7Bi%2Cj%7D"/> in each row <img alt="b_i" src="https://www.nowcoder.com/equation?tex=b_i"/>, the maximum value of <img src="https://www.nowcoder.com/equation?tex=a_%7Bi%2Cj%7D"/> in each column <img alt="c_i" src="https://www.nowcoder.com/equation?tex=c_i"/>, you need to find a way to fill <span>non-negative</span> integers in the grid in order to satisfy those conditions.</span> </div> <span>Since there are many possible ways, you are asked to find the minimum value of <img src="https://www.nowcoder.com/equation?tex=%5Csum_%7B1%5Cleq%20i%2Cj%5Cleq%20n%7Da_%7Bi%2Cj%7D"/>,a.k.a the sum of numbers in this grid.</span><br/> <span>It\s guaranteed that there exists a way to fill <span>non-negative</span> integers in the grid in order to satisfy those conditions.</span><br/></div>\n'; const input_description_data = '\<pre>The first line of the input contains three integers n,m,k<img src="https://www.nowcoder.com/equation?tex=(1%5Cleq%20n%5Cleq2%5Ctimes10%5E3%2C1%5Cleq%20m%5Cleq8%5Ctimes10%5E5%2C1%5Cleq%20k%5Cleq10%5E6)"/>, denoting the size of the grid, the total number of positions available to contain integers, and the maximum value of all constraints in the number grid; Remember that you don\t need to make the maximum value of all numbers in the number grid actually k.<br/>The second line of the input contains n integers <img src="https://www.nowcoder.com/equation?tex=b_i%20(1%5Cleq%20b_i%5Cleq%20k)"/>.<br/><div>The third line of the input contains n integers <img src="https://www.nowcoder.com/equation?tex=c_i%20(1%5Cleq%20c_i%5Cleq%20k)"/>.</div><div>It is guaranteed that there doesn\t exist an integer appearing <img src="https://www.nowcoder.com/equation?tex=%5Cgeq500"/> times among all the <img alt="b_i,c_i" src="https://www.nowcoder.com/equation?tex=b_i%2Cc_i"/>.</div>The next m lines of the input contains two integers x,y each, denoting a position <img src="https://www.nowcoder.com/equation?tex=a_%7Bx%2Cy%7D"/>.<br/></pre>\n'; const output_description_data = '\<pre>The only line of the output contains an integer S, denoting the minimum value of <img src="https://www.nowcoder.com/equation?tex=%5Csum_%7B1%5Cleq%20i%2Cj%5Cleq%20n%7Da_%7Bi%2Cj%7D"/>. available to contain an integer.</pre>\n';

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
