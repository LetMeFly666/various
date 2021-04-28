/*
 * @Author: LetMeFly
 * @Date: 2021-04-28 09:34:12
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-04-28 11:46:20
 */
const begin = '<div id="article_content" class="article_content clearfix">\n\
        <link rel="stylesheet" href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/ck_htmledit_views-b5506197d8.css">\n\
                <div id="content_views" class="markdown_views prism-atom-one-light">\n\
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n\
                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n\
                    </svg>\n\
                    <p></p>'

const end = '                </div><div data-report-view="{&quot;mod&quot;:&quot;1585297308_001&quot;,&quot;dest&quot;:&quot;https://letmefly.blog.csdn.net/article/details/116211565&quot;,&quot;extend1&quot;:&quot;pc&quot;,&quot;ab&quot;:&quot;new&quot;}"><div></div></div>\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/markdown_views-d7a94ec6ab.css" rel="stylesheet">\n\
                <link href="http://letmefly666.gitee.io/various/ACM/ForBUCToj/_Problems/style-f1c5feb645.css" rel="stylesheet">\n\
        </div>'

const toWrite = 'document.write("<script src=\'one.js\'></script>");'

//var problem_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(1) > div.panel-body.content");
//var input_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(2) > div.panel-body.content");
//var output_description = document.querySelector("body > div.container > div.panel.panel-default > div.panel.panel-body > div:nth-child(3) > div.panel-body.content");

// function alert(word, hei = 50, Time = 1500) {
//         var length = 0;
//         for (var i = 0; i < word.length; i++) {
//                 if (word[i] > 255) {//瀛楃缂栫爜澶т簬255锛岃鏄庢槸鍙屽瓧鑺傚瓧绗�
//                         length += 2;
//                 } else {
//                         length++;
//                 }
//         }
//         var rwid = length;
//         var line = 1;
//         while (rwid > 40) {
//                 length = 40;
//                 hei += hei;
//                 rwid -= 40;
//                 line++;
//         }
//         var reminder = document.createElement('div');
//         document.body.appendChild(reminder);
//         reminder.style.cssText = "width: " + length * 24 + "px;height: " + hei + "px;position: fixed;display: block;border-radius: 5px;background-color: rgba(0, 0, 0, 0.3);text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-size: 24px;word-break:break-all;";
//         var left__ = 0.5 * document.body.offsetWidth - 0.5 * reminder.offsetWidth;
//         var top__ = 0.5 * window.innerHeight - 0.5 * reminder.offsetHeight;
//         reminder.id = "alert";
//         reminder.style.color = "#fff";
//         reminder.style.left = left__ + 'px';
//         reminder.style.top = top__ + 'px';
//         reminder.style.lineHeight = reminder.offsetHeight / line + 'px';
//         reminder.innerHTML = word;
//         setTimeout(function () {
//                 reminder.style.display = "none";
//         }, Time);
// }