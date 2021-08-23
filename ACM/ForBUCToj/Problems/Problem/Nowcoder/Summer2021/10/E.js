const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><span></span> <div>  Grammy is a chess enthusiast as well as a famous mathematician. She likes to study chess tactics in higher-dimensional space. <br/> <br/> The movement of every chess piece in k dimensional space is similar to planar ones. All chess pieces must stay inside the board. Note that two of the corners of the board have coordinates <img alt="" src="https://www.nowcoder.com/equation?tex=(1%2C1%2C...%2C1)"/> and <img alt="(a_1,a_2,...,a_k)" src="https://www.nowcoder.com/equation?tex=(a_1%2Ca_2%2C...%2Ca_k)"/>. Detailed movement rules are as follows. <br/> <br/> <br/> - The King: Choose a non-empty subset of dimensions, add <img alt="" src="https://www.nowcoder.com/equation?tex=1"/> or subtract <span></span><img alt="" src="https://www.nowcoder.com/equation?tex=1"/> <span></span>to each of the chosen coordinates. </div> <div>    <br/> - The Queen: Choose a non-empty subset of dimensions and a positive integer <img alt="" src="https://www.nowcoder.com/equation?tex=x"/>, add <img alt="" src="https://www.nowcoder.com/equation?tex=x"/> or subtract <img alt="" src="https://www.nowcoder.com/equation?tex=x"/><span> </span>to each of the chosen coordinates. </div> <div>    <br/> - The Rook: Choose one dimension and a positive integer <img alt="" src="https://www.nowcoder.com/equation?tex=x"/>, add <img alt="" src="https://www.nowcoder.com/equation?tex=x"/><span> </span>or subtract <img alt="" src="https://www.nowcoder.com/equation?tex=x"/><span> </span><span></span>to that coordinate. </div> <div>    <br/> - The Bishop: Choose two dimensions and a positive integer <img alt="" src="https://www.nowcoder.com/equation?tex=x"/>, add <img alt="" src="https://www.nowcoder.com/equation?tex=x"/><span> </span>or subtract <img alt="" src="https://www.nowcoder.com/equation?tex=x"/><span> </span>to each of the chosen coordinates. </div> <div>    <br/> - The Knight: Choose one dimension, add <img alt="" src="https://www.nowcoder.com/equation?tex=1"/> or subtract <img alt="" src="https://www.nowcoder.com/equation?tex=1"/> to that dimension, then choose a different dimension, add <img alt="" src="https://www.nowcoder.com/equation?tex=2"/> or subtract <img alt="" src="https://www.nowcoder.com/equation?tex=2"/><span> </span>to that dimension. </div> <div>    <br/> - The Pawn: The rule is too difficult, so we do not care about this piece in this problem. <br/> <br/> <br/> After telling you about the rules, Grammy brought out a huge k dimensional hyper-cuboid chessboard and a chess piece. The size of the board is <img src="https://www.nowcoder.com/equation?tex=a_1%20%5Ctimes%20a_2%20%5Ctimes%20...%20%5Ctimes%20a_k"/>. She places the chess piece in a particular cell inside the board and asks you to find the number of different cells the piece can arrive in <strong>one</strong> move. Since the answer may be too large, you only need to output the result modulo <img src="https://www.nowcoder.com/equation?tex=998%5C%2C244%5C%2C353"/>.<br/> <br/> However, since this problem is still too easy, Grammy then moves the piece q times according to the movement rule of that piece and challenges you to answer the problem after each move.<br/> </div></div>\n'; const input_description_data = '\<pre><div>The first line contains two integers <img alt="" src="https://www.nowcoder.com/equation?tex=k"/><img src="https://www.nowcoder.com/equation?tex=(1%20%5Cle%20k%20%5Cle%203%20%5Ctimes%2010%5E5)"/> and <img alt="" src="https://www.nowcoder.com/equation?tex=q"/><img src="https://www.nowcoder.com/equation?tex=(0%20%5Cle%20q%20%5Cle%203%20%5Ctimes%2010%5E5)"/>, indicating the dimension of the board and the number of additional movements.<br/><br/>The second line contains the name of the given chess piece, which is either ``King\\, ``Queen\\, ``Rook\\, ``Bishop\\, or ``Knight\\.<br/><br/>The third line contains <img alt="" src="https://www.nowcoder.com/equation?tex=k"/> positive integers <img src="https://www.nowcoder.com/equation?tex=a_1%2C%20a_2%2C%20%5Cldots%2C%20a_k"/> <img src="https://www.nowcoder.com/equation?tex=(1%5Cleq%20a_i%20%5Cleq%2010%5E6)"/>, indicating the size of the board.<br/><br/>The fourth line contains <img alt="" src="https://www.nowcoder.com/equation?tex=k"/> positive integers <img src="https://www.nowcoder.com/equation?tex=b_1%2C%20b_2%2C%20%5Cldots%2C%20b_k"/> <img src="https://www.nowcoder.com/equation?tex=(1%5Cleq%20b_i%20%5Cleq%20a_i)"/>, indicating the starting position of the given piece.<br/><br/>The following <img alt="" src="https://www.nowcoder.com/equation?tex=q"/> lines contains the description of the additional movements.<br/><br/>Each description contains <img alt="" src="https://www.nowcoder.com/equation?tex=2d%2B1"/>numbers, where d denotes the number of moved dimensions.<br/><br/>The first number in the description is <img alt="" src="https://www.nowcoder.com/equation?tex=d"/><img src="https://www.nowcoder.com/equation?tex=(1%5Cleq%20d%20%5Cleq%20k)"/>, and each of the following d pairs of integers <img src="https://www.nowcoder.com/equation?tex=(x_i%2C%5Cdelta_i)"/> in strictly increasing order of <img alt="x_i" src="https://www.nowcoder.com/equation?tex=x_i"/> indicates that the <img alt="x_i" src="https://www.nowcoder.com/equation?tex=x_i"/>-th coordinate of the chess piece changes by <img src="https://www.nowcoder.com/equation?tex=%5Cdelta_i"/> <img src="https://www.nowcoder.com/equation?tex=(%5Cdelta_i%20%5Cneq%200)"/> in the move.<br/><br/>It is guaranteed that each movement is valid that the chess piece still stay inside the board after each movement, and the sum of d in all movements is no greater than <img src="https://www.nowcoder.com/equation?tex=3%20%5Ctimes%2010%5E5"/>.<br/></div></pre>\n'; const output_description_data = '\<pre><div>Output <img alt="" src="https://www.nowcoder.com/equation?tex=q%2B1"/> lines, each of which contains a single integer, indicating the answer before the first movement and after each movement modulo <img src="https://www.nowcoder.com/equation?tex=998%5C%2C244%5C%2C353"/>.<br/></div></pre>\n';

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
