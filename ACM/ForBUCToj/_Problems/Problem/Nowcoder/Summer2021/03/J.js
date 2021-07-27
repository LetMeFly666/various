const begin = ''; const end=''; const problem_description_data = '\<div class="subject-question"><div> <span style="color: rgb(51,51,51);"> <div>   Goodeat finds an undirected complete graph with n vertices. Each edge of the graph is painted black or white. He wants you to help him find the number of triangles (a, b, c) (a &lt; b &lt; c), such that the edges between (a, b), (b, c), (c, a) have the same color. To avoid the input scale being too large, we use the following code to generate edges in the graph.  </div> <div> <pre class="prettyprint lang-cpp">namespace GenHelper\n{\n    unsigned z1,z2,z3,z4,b,u;\n    unsigned get()\n    {\n        b=((z1&lt;&lt;6)^z1)&gt;&gt;13;\n        z1=((z1&amp;4294967294U)&lt;&lt;18)^b;\n        b=((z2&lt;&lt;2)^z2)&gt;&gt;27;\n        z2=((z2&amp;4294967288U)&lt;&lt;2)^b;\n        b=((z3&lt;&lt;13)^z3)&gt;&gt;21;\n        z3=((z3&amp;4294967280U)&lt;&lt;7)^b;\n        b=((z4&lt;&lt;3)^z4)&gt;&gt;12;\n        z4=((z4&amp;4294967168U)&lt;&lt;13)^b;\n        return (z1^z2^z3^z4);\n    }\n    bool read() {\n      while (!u) u = get();\n      bool res = u &amp; 1;\n      u &gt;&gt;= 1; return res;\n    }\n    void srand(int x)\n    {\n        z1=x;\n        z2=(~x)^0x233333333U;\n        z3=x^0x1234598766U;\n        z4=(~x)+51;\n      	u = 0;\n    }\n}\nusing namespace GenHelper;\nbool edge[8005][8005];\nint main() {\n  int n, seed;\n  cin &gt;&gt; n &gt;&gt; seed;\n  srand(seed);\n  for (int i = 0; i &lt; n; i++)\n    	for (int j = i + 1; j &lt; n; j++)\n        	edge[j][i] = edge[i][j] = read();\n 	return 0;\n}</pre> <br/> The <em>edge</em> array in the above code stores the color of the edges in the graph. <em>edge[i][j]=1</em> means that the edge from i to j is black, otherwise it is white (<img src="https://www.nowcoder.com/equation?tex=%5Cforall%200%20%5Cle%20i%20%5Cneq%20j%20%5Cle%20n-1"/>).<br/> <br/> Ensure that there is an approach that does not depend on the way the data is generated.<br/> <br/> </div> </span> </div> <div> </div></div>\n'; const input_description_data = '\<pre class="prettyprint lang-cpp">namespace GenHelper\n{\n    unsigned z1,z2,z3,z4,b,u;\n    unsigned get()\n    {\n        b=((z1&lt;&lt;6)^z1)&gt;&gt;13;\n        z1=((z1&amp;4294967294U)&lt;&lt;18)^b;\n        b=((z2&lt;&lt;2)^z2)&gt;&gt;27;\n        z2=((z2&amp;4294967288U)&lt;&lt;2)^b;\n        b=((z3&lt;&lt;13)^z3)&gt;&gt;21;\n        z3=((z3&amp;4294967280U)&lt;&lt;7)^b;\n        b=((z4&lt;&lt;3)^z4)&gt;&gt;12;\n        z4=((z4&amp;4294967168U)&lt;&lt;13)^b;\n        return (z1^z2^z3^z4);\n    }\n    bool read() {\n      while (!u) u = get();\n      bool res = u &amp; 1;\n      u &gt;&gt;= 1; return res;\n    }\n    void srand(int x)\n    {\n        z1=x;\n        z2=(~x)^0x233333333U;\n        z3=x^0x1234598766U;\n        z4=(~x)+51;\n      	u = 0;\n    }\n}\nusing namespace GenHelper;\nbool edge[8005][8005];\nint main() {\n  int n, seed;\n  cin &gt;&gt; n &gt;&gt; seed;\n  srand(seed);\n  for (int i = 0; i &lt; n; i++)\n    	for (int j = i + 1; j &lt; n; j++)\n        	edge[j][i] = edge[i][j] = read();\n 	return 0;\n}</pre>\n'; const output_description_data = '\<pre><div>The first line contains two integers <img src="https://www.nowcoder.com/equation?tex=n(n%20%5Cle%208000)%2C%20seed%20(seed%20%5Cle%2010%5E9)"/>, denote the number of vertices and the seed of random generator. </div></pre>\n';

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
