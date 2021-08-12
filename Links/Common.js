/*
 * @Author: LetMeFly
 * @Date: 2021-08-08 13:28:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-08-12 22:52:04
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