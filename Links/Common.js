/*
 * @Author: LetMeFly
 * @Date: 2021-08-08 13:28:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-10-29 11:31:31
 */

//#region Title.ico
(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/Links/Title.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}());
//#endregion

//#region 百度统计
var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?bfecd9dd681e05b42e4a227c42453c15";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();
//#endregion

//#region 多次点击后跳转
var timer = null;
var waitTime = 200; // 该时间间隔内点击才算连续点击（单位：ms）
var lastTime = new Date().getTime(); // 上次点击时间
var count = 0; // 连续点击次数
const addClick = function (object, href, clickTimes=5) {
    object.onclick = function (event) {
        var currentTime = new Date().getTime();
        // 计算两次相连的点击时间间隔
        count = (currentTime - lastTime) < waitTime ? count + 1 : 1;
        lastTime = new Date().getTime();
        clearTimeout(timer);
        timer = setTimeout(function () {
            clearTimeout(timer);
            // 处理点击事件
            console.log(count);

            if (count == clickTimes) {
                // 连续点击五次
                console.log(`连续点击了${clickTimes}次`);
                location.href = href;
            }
        }, waitTime + 10)
    };
}
//#endregion

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