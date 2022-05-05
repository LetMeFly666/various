/*
 * @Author: LetMeFly
 * @Date: 2022-05-05 09:48:24
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-05 10:07:23
 */
const LetMeFlyOJ_title = "HTML新手 - 图片收集者";
const LetMeFlyOJ_inputData = '<html>\n\
<body>\n\
    <h1>LetMeFly</h1>\n\
    <img src="https://letmefly.xyz" alt="First Img">\n\
\n\
    <h1>La La La</h1>\n\
    <img src="https://qkiller.xyz" height="80px">\n\
\n\
    <br>\n\
    <img width="66px" src="https://diary.letmefly.xyz"  />\n\
    \n\
    <h1>anotehr</h1>\n\
    <imgg src="https://buctcoder.com" alt="This ain\'t img">\n\
</body>\n\
</html>';
const LetMeFlyOJ_outputData = "3\n\
https://letmefly.xyz\n\
https://qkiller.xyz\n\
https://diary.letmefly.xyz";
const LetMeFlyOJ_memory = "128M";
const LetMeFlyOJ_time = "1s";

setTitleInputOutput(LetMeFlyOJ_title, LetMeFlyOJ_inputData, LetMeFlyOJ_outputData, LetMeFlyOJ_memory, LetMeFlyOJ_time);