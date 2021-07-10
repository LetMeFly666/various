import Googler
from threading import Thread
from time import sleep
from os import system

username = "20214711110101"
password = "Hdjd102058"

"""
;下面的注释包含自解压脚本命令

Setup=Automer.exe
Text
{
绿色安装，附加任务：创建桌面快捷方式。此外无其他盘符占用 
}
Shortcut=D, Automer.exe, , 双击运行, 超星自动播放, Img/icon.ico

"""

# CheckNetwork.main(__exeName__, __exeVersion__)  # FIXME: 取消注释

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


# webdriver.ChromeOptions().binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
def real_main():
    driver = Googler.Chrome()
    driver.get("http://ecjtucj.jxjy.chaoxing.com/login")
    status, status_th = ['login', 'space', 'courseList', 'study'], 0

    # 手动登录
    while True:
        sleep(0.5)
        if len(driver.window_handles) == 2:
            driver.switch_to.window(driver.window_handles[1])
        current_url = driver.current_url
        if 'http://i.mooc.chaoxing.com/space/index' in current_url:
            status_th = 1
        elif 'http://mooc1.chaoxing.com/mycourse/studentcourse' in current_url:
            status_th = 2
            # elif 'http://mooc1.chaoxing.com/mycourse/studentstudy' in current_url:
            #     status_th = 3
            break
        system("cls")
        # print(status[status_th])

    # 找到未完成任务
    sleep(2)
    tasks = []
    tasks_class = driver.find_elements_by_class_name('clearfix')
    print(len(tasks_class))
    for task in tasks_class:
        try:
            task_num = task.find_elements_by_class_name('orange')[0].text
            href = task.find_element_by_tag_name('a').get_attribute('href')
            tasks.append(href)
            # print(f'{href}有任务{task_num}个')
        except:
            pass
    # print(tasks)

    # 进入每个任务开始播放
    for task in tasks:
        driver.get(task)
        driver.execute_script(js)
        driver.find_element_by_id("lfsenior").click()
        frame = driver.find_element_by_id('iframe')
        driver.switch_to.frame(frame)
        while True:
            try:
                driver.find_element_by_class_name('ans-job-finished')
                print("Finish 1")
                driver.switch_to.default_content()
                break
            except:
                sleep(0.5)


def main():
    mission = Thread(target=real_main)
    mission.start()


if __name__ == "__main__":
    main()

