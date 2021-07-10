from selenium import webdriver
import time

js = """
// An highlighted block
var fa = $("body");
var btn = $("<li></li>");
var json = {
    "background": "#31e16d",
    "height": "16px",
    "padding": "5px",
    "z-index": 999999,
    "cursor": "pointer",
    "top": "300px",
    "right": "120px",
    "position": "fixed"
};
btn.css(json);
btn.html("<span id='lfsenior'>开启自动播放模式</span>");
fa.append(btn);

btn.click(function () {

    setInterval(function () {
        //获取iframe
        var video = $("iframe").contents().find("iframe").contents();
        //播放函数
        var play = function () {
            video.find("#video > button").click();
            var jy = video.find("#video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-vertical > button");
            if (jy.attr("title") != "取消静音") {
                jy.click()
            }
        }
        //如果正在加载
        var load = video.find("#loading");
        if (load.css("visibility") != "hidden") {
            return;
        }
        //获取当前进度
        var spans = video.find("#video > div.vjs-control-bar > div.vjs-progress-control.vjs-control > div").attr("aria-valuenow");
        // 如果还没播放完
        if (spans != 100) {
            play();
        }
        //如果播放结束
        if (spans == 100) {
            var bs = false;
            $(".onetoone").find(".flush").each(function () {
                if (bs) {
                    $(this).prev("a").on('click', "#coursetree>ncells", function () {
                        console.log("已结束章节：" + $(this).prev("a").attr("title"))
                    })
                    var str = $(this).prev("a").attr("href");
                    str = str.match(/'(\S*)'/)[1];
                    var reg = new RegExp("'", "g");
                    str = str.replace(reg, "");
                    var href = str.split(",");
                    getTeacherAjax(href[0], href[1], href[2])
                    bs = false;
                }
                if ($(this).css("display") == "block") {
                    bs = true;
                }
            })
        }
        $("#lfsenior").html("自动模式已开启,本章进度:" + spans + "%");
    }, 100);

});
"""


def video(browser, urls):
    for url in urls:
        browser.get(url)
        browser.execute_script(js)
        browser.find_element_by_id("lfsenior").click()
        while True:
            rate = browser.execute_script(
                """var video = $("iframe").contents().find("iframe").contents();return video.find("#video > div.vjs-control-bar > div.vjs-progress-control.vjs-control > div").attr("aria-valuenow");""")
            if "100.00" == str(rate):
                break
            else:
                time.sleep(2)  # FIXME:两个之间的休眠时间


def course(browser):
    urls = []
    browser.get(
        "http://mooc1.chaoxing.com/mycourse/studentcourse?courseId=213794309&clazzid=40556660&enc=3c2b6590a301c179ee2198e98d813935")  # 课程链接
    h3 = browser.find_elements_by_class_name("clearfix")
    for i in h3:
        try:
            if i.find_element_by_class_name("orange"):
                if "1" == i.find_element_by_class_name("orange").text:
                    urls.append(i.find_element_by_tag_name("a").get_attribute('href'))
        except Exception as e:
            pass
    for url in urls:
        print(url)
    return urls


def login(browser):
    browser.get("http://ecjtucj.jxjy.chaoxing.com/login")
    # time.sleep(5)
    # browser.find_element_by_class_name("ipt-tel").send_keys('20214711110101')  # 要登录的用户名
    # browser.find_element_by_class_name("ipt-pwd").send_keys('Hdjd102058')  # 要登录的密码
    # time.sleep(5)
    # browser.find_element_by_id("loginBtn").click()
    input("登录好后回车")


def main():
    browser = webdriver.Chrome()  # 驱动
    login(browser)
    # time.sleep(5)
    urls = course(browser)
    video(browser, urls)


if __name__ == '__main__':
    main()
