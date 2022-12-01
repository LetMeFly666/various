/*
 * @Author: LetMeFly
 * @Date: 2021-08-08 13:28:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-12-01 15:55:21
 */

//#region 是否重复加载
if (window._LINKS_COMMONJS) {
    console.log("多次引用");
}
else {
    window._LINKS_COMMONJS = true;

// 下面开始代码部分

// 缅怀🕯️
const THEGRAYSTYLE = document.createElement("style");
THEGRAYSTYLE.innerHTML = "html { \n-webkit-filter: grayscale(100%); \n-moz-filter: grayscale(100%); \n-ms-filter: grayscale(100%); \n-o-filter: grayscale(100%); \nfilter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);  \n_filter:none; \n}"
function ifChange() {
    const href = location.href;
    const mainHref = href.indexOf("://") ? href.substring(href.indexOf("://") + 3) : href;
    for (var i = 0; i + 1 < mainHref.length; i++) {
        if (mainHref[i] == '/' && mainHref[i + 1] != '?')
            return false;
    }
    return true;
}
if (ifChange()) {
    document.querySelector("head").append(THEGRAYSTYLE);
}

//#region favicon.ico
(function() {
    if (window._LINKS_COMMONJS_NOTCHANGEICO) {  // Donnot change ico
        return;
    }
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://letmefly.xyz/Links/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}());
//#endregion

//#region PV统计
function PV() {
    try{
        const data = { 'url': location.href};
        const request = new XMLHttpRequest();
        request.open("POST", "https://www.letmefly.xyz/ForProgram/HtmlPVer", false);
        request.send(JSON.stringify(data));
    }
    catch(error) {}
}
(function(){setTimeout(() => {PV();}, 200);}());
//#endregion

//#region 百度统计
var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?bfecd9dd681e05b42e4a227c42453c15";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();
//#endregion

//#region 多次点击后跳转
var timer = null;
var waitTime = 200; // 该时间间隔内点击才算连续点击（单位：ms）
var lastTime = new Date().getTime(); // 上次点击时间
var count = 0; // 连续点击次数
function addClick(object, href, clickTimes=5) {
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

//#region alert
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
//#endregion

//#region 平滑展开
/*
    function: 平滑展开一个“按钮”，并用iframe显示按钮点击后要在下方显示的页面
    para: 
        theLink: 要显示的页面
        thisElement: 被点击的元素
*/
function expand(theLink, thisElement) {
    const theDiv = thisElement.parentNode;
    const iframe = theDiv.querySelector('iframe');
    if (iframe) {
        if (iframe.style.display == 'none') {
            iframe.style.display = 'block';
            thisElement.setAttribute('class', 'expand')
            expandSmoothly(iframe, eval(iframe.getAttribute('shouldHeight')));
            theDiv.querySelector('.packUp').style.display = 'block';
        }
        else {
            expandSmoothly(iframe, 0, 0.8, callBackFunction = ()=>{iframe.style.display='none';});
            thisElement.setAttribute('class', 'unexpand');
            theDiv.querySelector('.packUp').style.display = 'none';
        }
    } else {
        const iframe = document.createElement('iframe');
        iframe.src = theLink;
        iframe.width = '100%';
        iframe.height = 0;
        theDiv.appendChild(iframe);
        setIframeHeight(iframe);
        thisElement.setAttribute('class', 'expand')
        const packUp = document.createElement('a');
        packUp.innerText = '▲ 收起';
        packUp.setAttribute('class', 'packUp');
        packUp.setAttribute('onclick', "this.parentNode.querySelector('.expand').click();");
        packUp.style.display = 'block';
        theDiv.appendChild(packUp);
    }
}

/* 将元素平滑展开（高度变成height） */
/*      v
        ↑
        |   ________________
        |  /                \
        | /                  \
        |/                    \
    ----+--+---------------+---+-----> t
       0| 0.2             0.8  1
        |
    
    0.8 * V0 = diff  ==>  V0 = diff / 0.8
*/
function expandSmoothly(element, height, time = 0.8, callBackFunction = null) {
    const nowHeight = element.offsetHeight;
    const diff = height - nowHeight;
    const beginSlowTime = time * 0.2;
    const endSlowTime = time * 0.2;
    const evenlyTime = time * 0.6;
    const V0 = diff / (time * 0.8);
    const a = V0 / (time * 0.2);
    var totalTime = 0;

    function begin() {
        element.height = nowHeight + 0.5 * a * totalTime * totalTime;
        totalTime += 0.01;
        if (totalTime <= beginSlowTime) {
            setTimeout(() => {
                begin();
            }, 0.01);
        } else {
            // console.log('After the first expand, the height is:', element.height);
            // console.log('Should: ', nowHeight + diff / 8);
            middle();
        }
    }

    function middle() {
        element.height = nowHeight + 0.5 * a * beginSlowTime * beginSlowTime + V0 * (totalTime - beginSlowTime);
        totalTime += 0.01;
        if (totalTime <= beginSlowTime + evenlyTime) {
            setTimeout(() => {
                middle();
            }, 0.01);
        } else {
            end();
        }
    }

    function end() {
        const thisTime = totalTime - beginSlowTime - evenlyTime;
        element.height = nowHeight + 0.5 * a * beginSlowTime * beginSlowTime + V0 * evenlyTime + V0 * thisTime - 0.5 * a * thisTime * thisTime;
        totalTime += 0.01;
        if (totalTime <= time) {
            setTimeout(() => {
                end();
            }, 0.01);
        } else {
            // console.log("Expanded");
            if (callBackFunction) {
                callBackFunction();
            }
        }
    }

    begin();
}

function setIframeHeight(iframe, onload=true) {
    if (onload) {
        iframe.onload = () => {main();}
    } else {
        main();
    }
    function main() {
        try {
            const iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
                const body = iframeWin.document.body;
                iframe.setAttribute('shouldHeight', body.offsetHeight);
                iframe.setAttribute('scrolling', 'no');
                expandSmoothly(iframe, body.offsetHeight);
            } else {
                console.log('iframeWin.document.body 为空');
            }
        } catch(error) {
            expandSmoothly(iframe, 500);
            iframe.setAttribute('shouldHeight', 500);
        }
    }
}
//#endregion

//#region in
/* Return if a in b */
function ifIn(a, b) {
    if (a.length > b.length)
        return false;
    for (let i = 0; i + a.length - 1 < b.length; i++) {
        var ifOk = true;
        for (let j = 0; j < a.length; j++) {
            if (a[j] != b[i + j]) {
                ifOk = false;
                break;
            }
        }
        if (ifOk)
            return true;
    }
    return false;
}
//#endregion

}
//#endregion 是否重复加载