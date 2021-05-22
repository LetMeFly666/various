/*
 * @Author: LetMeFly
 * @Date: 2021-05-22 16:38:17
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-05-22 20:26:33
 */
const studentList=[
    {"num": 2019040460, "th": 11},
    {"num": 2019040461, "th": 2},
    {"num": 2019040462, "th": 15},
    {"num": 2019040463, "th": 4},
    {"num": 2019040464, "th": 17},
    {"num": 2019040465, "th": 24},
    {"num": 2019040466, "th": 7},
    {"num": 2019040468, "th": 20},
    {"num": 2019040469, "th": 9},
    {"num": 2019040470, "th": 10},
    {"num": 2019040471, "th": 1},
    {"num": 2019040472, "th": 12},
    {"num": 2019040473, "th": 22},
    {"num": 2019040474, "th": 14},
    {"num": 2019040475, "th": 3},
    {"num": 2019040476, "th": 16},
    {"num": 2019040477, "th": 5},
    {"num": 2019040478, "th": 18},
    {"num": 2019040479, "th": 19},
    {"num": 2019040480, "th": 8},
    {"num": 2019040481, "th": 21},
    {"num": 2019040482, "th": 13},
    {"num": 2019040483, "th": 23},
    {"num": 2019130273, "th": 6},
    {"num": 2017060158, "th": 25},
];

const url_0 = "https://LetMeFly666.github.io/FileStorge/Files/For%E5%9B%9B%E5%8F%B2/all/";

function getThByNum(num)
{
    for(var i=0;i<studentList.length;i++)
    {
        if(studentList[i].num==num)
        {
            return studentList[i].th;
        }
    }
    return -1;
}
var theNum=-1;
function ensureTheNum()
{
    const inputBox=document.querySelector("#inputBox");
    theNum=getThByNum(inputBox.value);
    if(theNum==-1)
    {
        alert("Sorry! 未被收录的学号，可能是出了什么BUG，可联系814114971@qq.com（如果想的话）");
    }
    var theName=url_0;
    const one=document.querySelectorAll("#a01010101");
    if(theNum<10)theName+='0';
    theName+=theNum;
    one.forEach(each=> each.src=theName+'1.jpg');

    theName=url_0;
    const two=document.querySelectorAll("#a02020202");
    if(theNum<10)theName+='0';
    theName+=theNum;
    two.forEach(each=> each.src=theName+'2.jpg');

    theName=url_0;
    const three=document.querySelectorAll("#a03030303");
    if(theNum<10)theName+='0';
    theName+=theNum;
    three.forEach(each=> each.src=theName+'3.jpg');

    theName=url_0;
    const four=document.querySelectorAll("#a04040404");
    if(theNum<10)theName+='0';
    theName+=theNum;
    four.forEach(each=> each.src=theName+'4.jpg');
}

function daBaoXiaZai()
{
    if(theNum==-1)
    {
        alert("请先输入学号，再使用该功能吧");
        return;
    }
    //FIXME:
}

function alert(word, hei = 50, Time = 2000) {
    var length = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] > 255) {//字符编码大于255，说明是双字节字符
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
    reminder.style.cssText = "width: " + length * 24 + "px;z-index: 99999;height: " + hei + "px;position: fixed;display: block;border-radius: 5px;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 24px;word-break:break-all;";
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