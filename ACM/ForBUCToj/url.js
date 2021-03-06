/*
 * @Author: LetMeFly
 * @Date: 2021-03-16 10:51:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-03-16 17:46:46
 */

//#region function
dbg = toDebug => console.log((typeof toDebug) + "\n" + toDebug)
ifCouldSee = problemId => new Date().getTime() > couldSeeList[problemId]["time"].getTime()
couldPicUrl = () => `url('./Could/${Math.floor(Math.random() * 1000000) % couldPic + 1}.jpg')`
couldnotPicUrl = () => `url('./Couldnot/${Math.floor(Math.random() * 1000000) % couldnotPic + 1}.jpg')`
function jump() {
    outTime -= 1
    if (outTime == 0) {
        if (could) { location.href = couldSeeList[problemId]["explanationHref"] }
        //else { console.log("close."); window.open("", "_self").close() }
    }
    setTimeout("jump()", 1000);
}
//#endregion

//#region data
const couldPic = 3
const couldnotPic = 6
const couldSeeList = {
    5173: { "time": new Date("2021-03-25 16:25:0"), "explanationHref": "https://blog.csdn.net/Tisfy/article/details/114788865", "problemHref": "http://39.106.31.26/problem.php?id=5173" },
}
//#endregion

//#region main
const problemId = location.href.split('?')[1].split('=')[1]
const could = ifCouldSee(problemId)
var outTime = could ? 7 : 3
document.body.style.background = could ? couldPicUrl() : couldnotPicUrl()
document.body.style.backgroundPosition = "center"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundAttachment = "fixed";
jump()
//#endregion