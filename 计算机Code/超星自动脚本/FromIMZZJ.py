from selenium import webdriver
import time


def video(browser, urls):
    with open("1.js", "r", encoding="utf-8") as f:
        js = f.read()
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
                time.sleep(120)


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
    return urls


def login(browser):
    browser.get("http://ecjtucj.jxjy.chaoxing.com/login")
    time.sleep(5)
    browser.find_element_by_class_name("ipt-tel").send_keys('20214711110101')  # 要登录的用户名
    browser.find_element_by_class_name("ipt-pwd").send_keys('Hdjd102058')  # 要登录的密码
    time.sleep(5)
    browser.find_element_by_id("loginBtn").click()


def main():
    browser = webdriver.Chrome()  # 驱动
    login(browser)
    time.sleep(5)
    urls = course(browser)
    video(browser, urls)


if __name__ == '__main__':
    main()
