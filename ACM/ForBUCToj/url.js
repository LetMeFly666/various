/*
 * @Author: LetMeFly
 * @Date: 2021-03-16 10:51:51
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-02-22 21:46:35
 */

//#region function
dbg = toDebug => console.log((typeof toDebug) + "\n" + toDebug)
ifCouldSee = problemId => new Date().getTime() > couldSeeList[problemId]["time"].getTime()
couldPicUrl = () => `url('./Could/${Math.floor(Math.random() * 1000000) % couldPic + 1}.jpg')`
couldnotPicUrl = () => `url('./Couldnot/${Math.floor(Math.random() * 1000000) % couldnotPic + 1}.jpg')`

function jump() {
    outTime -= 1
    if (outTime <= 0) {
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
        5173: { "time": new Date("2021-03-25 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/114788865", "problemHref": "http://39.106.31.26/problem.php?id=5173" },
        5189: { "time": new Date("2021-04-29 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/116211565", "problemHref": "http://39.106.31.26/problem.php?id=5189" },
        5192: { "time": new Date("2021-04-29 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/116224285", "problemHref": "http://39.106.31.26/problem.php?id=5192" },
        5205: { "time": new Date("2021-05-13 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/116712749", "problemHref": "http://39.106.31.26/problem.php?id=5205" },
        5206: { "time": new Date("2021-05-13 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/116723710", "problemHref": "http://39.106.31.26/problem.php?id=5206" },
        5207: { "time": new Date("2021-05-20 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/116806646", "problemHref": "http://39.106.31.26/problem.php?id=5207" },
        5209: { "time": new Date("2021-05-20 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/117063879", "problemHref": "http://39.106.31.26/problem.php?id=5209" },
        5217: { "time": new Date("2021-05-30 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/117339731", "problemHref": "http://39.106.31.26/problem.php?id=5217" },
        5219: { "time": new Date("2021-05-30 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/117353291", "problemHref": "http://39.106.31.26/problem.php?id=5219" },
        5220: { "time": new Date("2021-06-03 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/117509460", "problemHref": "http://39.106.31.26/problem.php?id=5220" },
        5251: { "time": new Date("2021-06-03 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/118766861", "problemHref": "http://39.106.31.26/problem.php?id=5251" },
        5383: { "time": new Date("2021-06-03 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/119295810", "problemHref": "http://39.106.31.26/problem.php?id=5383" },
        5567: { "time": new Date("2021-06-03 16:25:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/119854214", "problemHref": "http://39.106.31.26/problem.php?id=5567" },
        5617: { "time": new Date("2021-09-24 18:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120424809", "problemHref": "http://39.106.31.26/problem.php?id=5617" },
        5618: { "time": new Date("2021-09-24 18:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120442324", "problemHref": "http://39.106.31.26/problem.php?id=5618" },
        5700: { "time": new Date("2021-10-22 17:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120896612", "problemHref": "http://182.92.175.181/problem.php?id=5700" },
        5701: { "time": new Date("2021-10-22 17:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120896948", "problemHref": "http://182.92.175.181/problem.php?id=5701" },
        5702: { "time": new Date("2021-10-22 17:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120897332", "problemHref": "http://182.92.175.181/problem.php?id=5702" },
        5703: { "time": new Date("2021-10-22 17:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120897708", "problemHref": "http://182.92.175.181/problem.php?id=5703" },
        5704: { "time": new Date("2021-10-22 17:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120898079", "problemHref": "http://182.92.175.181/problem.php?id=5704" },
        5705: { "time": new Date("2021-10-22 17:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/120898249", "problemHref": "http://182.92.175.181/problem.php?id=5705" },
        5714: { "time": new Date("2021-10-30 13:30:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121028633", "problemHref": "http://182.92.175.181/problem.php?id=5714" },
        5769: { "time": new Date("2021-11-27 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121525963", "problemHref": "http://182.92.175.181/problem.php?id=5769" },
        5771: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121547479", "problemHref": "http://182.92.175.181/problem.php?id=5771" },
        5772: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121551145", "problemHref": "http://182.92.175.181/problem.php?id=5772" },
        5773: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121551291", "problemHref": "http://182.92.175.181/problem.php?id=5773" },
        5774: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121551485", "problemHref": "http://182.92.175.181/problem.php?id=5774" },
        5775: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121551511", "problemHref": "http://182.92.175.181/problem.php?id=5775" },
        5776: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/121551528", "problemHref": "http://182.92.175.181/problem.php?id=5776" },
        5892: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122498795", "problemHref": "http://182.92.175.181/problem.php?id=5892" },
        5945: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122611633", "problemHref": "http://182.92.175.181/problem.php?id=5945" },
        5968: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122618928", "problemHref": "http://182.92.175.181/problem.php?id=5968" },
        5969: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122630076", "problemHref": "http://182.92.175.181/problem.php?id=5969" },
        5971: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122630623", "problemHref": "http://182.92.175.181/problem.php?id=5971" },
        5973: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122631253", "problemHref": "http://182.92.175.181/problem.php?id=5973" },
        5974: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122634759", "problemHref": "http://182.92.175.181/problem.php?id=5974" },
        5975: { "time": new Date("2021-12-04 12:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/122635904", "problemHref": "http://182.92.175.181/problem.php?id=5975" },
        6065: { "time": new Date("2022-02-23 14:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/123068245", "problemHref": "https://buctcoder.com/problem.php?id=6065" },
        6069: { "time": new Date("2022-02-23 14:00:0"), "explanationHref": "https://letmefly.blog.csdn.net/article/details/123077124", "problemHref": "https://buctcoder.com/problem.php?id=6069" },
    }
    //#endregion

//#region main
try {
    const problemId = location.href.split('?')[1].split('=')[1]
    const could = ifCouldSee(problemId)
    var outTime = could ? 1 : 3
    document.body.style.background = could ? couldPicUrl() : couldnotPicUrl()
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundAttachment = "fixed";
    jump()
}
catch (Error) {
    console.log(Error);
    document.querySelector("#h1Title").innerHTML = "诶呦呦，暂无此题~_~";
}
//#endregion main