/*
 * @Author: LetMeFly
 * @Date: 2021-08-08 13:28:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-08-08 13:35:43
 */
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