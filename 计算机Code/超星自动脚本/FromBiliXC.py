from selenium import webdriver
from time import sleep, time, strftime, localtime
from threading import Thread
from selenium.common.exceptions import NoAlertPresentException, NoSuchElementException
from random import randint
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class ChaoXing:
    def __init__(self, userName, password, classRoon):
        self.userName = userName
        self.password = password
        self.classRoon = classRoon
        self.currentLesson = ""
        self.currentState = ""
        self.courseLink = []
        self.main()

    def main(self):
        option = webdriver.ChromeOptions()
        option.add_argument('headless')
        self.driver = webdriver.Chrome()  # chrome_options=option 隐藏浏览器
        self.wait = WebDriverWait(self.driver, 10)
        self.log_in()
        self.clickFirstCourse()
        self.courseLink = self.getCoursesAtMyCourse()
        for i in self.courseLink:
            if i["title"] == "章节测验": continue
            if (not i["complete"]):
                self.driver.get(i["link"])
                self.currentLesson = i["title"]
                break
        self.getCoursesAtPlayerPage()
        self.t = Thread(target=self.monitor)
        self.t.start()

    def log_in(self):
        self.driver.get("http://i.chaoxing.com")
        phone = self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#phone')))
        phone.send_keys(self.userName)
        pwd = self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#pwd')))
        pwd.send_keys(self.password)
        submit = self.wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#loginBtn')))
        submit.click()

    def clickFirstCourse(self):
        # print(driver.current_window_handle) #当前句柄
        # print(driver.window_handles) #所有句柄
        iframe = self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#frame_content')))
        self.driver.switch_to.frame(iframe)
        # self.classRoon 为课程名字
        course = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, '.clearfix .courseName[title="{}"]'.format(self.classRoon))))
        course.click()
        self.switchContent()
        self.driver.close()
        self.driver.switch_to.window(self.driver.window_handles[-1])  # 切换句柄

    def getCoursesAtMyCourse(self):
        courseLink = []
        self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.timeline')))
        items = self.driver.find_elements_by_css_selector(".timeline .leveltwo a")
        for item in items:
            title, link = item.find_element_by_css_selector(".articlename").get_attribute("title"), item.get_attribute(
                "href")
            complete = False if item.find_element_by_css_selector("a em").get_attribute("class") == "orange" else True
            courseLink.append({"title": title, "complete": complete, "link": link})
        # print(courseLink)
        return courseLink

    def getCoursesAtPlayerPage(self):
        # self.driver.switch_to.window(self.driver.window_handles[-1]) #切换句柄
        self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.onetoone')))
        items = self.driver.find_elements_by_css_selector(".thiscontent.chapter .onetoone .cells .ncells")
        for i, j in zip(items, self.courseLink):
            title = i.find_element_by_css_selector("a").get_attribute("title")
            complete = False if "orange" in i.find_element_by_css_selector("span.roundpointStudent").get_attribute(
                "class") else True
            j["complete"] = complete

    def clickShiPin(self):
        try:
            if "currents" not in self.driver.find_element_by_css_selector(".tabtags span[title=\"视频\"]").get_attribute(
                    "class"):
                self.driver.find_element_by_css_selector(".tabtags span[title=\"视频\"]").click()
        except Exception:
            pass

    def clickBigPlayButton(self):
        self.switchFrame()
        try:
            self.switchContent()
            f = self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "iframe#iframe")))
            self.driver.switch_to.frame(f)
            # self.driver.switch_to.frame(self.driver.find_element_by_css_selector("iframe#iframe"))
            self.driver.switch_to_frame(
                self.driver.find_element_by_css_selector(".ans-attach-online.ans-insertvideo-online"))
            play = self.driver.find_element_by_css_selector(".vjs-big-play-button")
            play.click()
        except Exception:
            pass
        self.switchContent()

    def switchFrame(self):
        try:
            self.driver.switch_to.default_content()
            self.driver.switch_to.frame(self.driver.find_element_by_css_selector("iframe#iframe"))
            self.driver.switch_to_frame(
                self.driver.find_element_by_css_selector(".ans-attach-online.ans-insertvideo-online"))
        except Exception:
            pass

    def switchContent(self):
        try:
            self.driver.switch_to.default_content()
        except Exception:
            pass

    def answerQuestion(self):
        self.switchFrame()
        try:
            choice = self.driver.find_elements_by_css_selector('.ans-videoquiz-opt input[name="ans-videoquiz-opt"]')
            if choice:
                indexLen = len(choice) - 1
                choice[randint(0, indexLen)].click()
                confirm = self.driver.find_element_by_css_selector('.ans-videoquiz-submit')
                if confirm: confirm.click()
                try:
                    alert = self.driver.switch_to.alert
                    alert.accept()
                except Exception:
                    pass
        except Exception:
            pass
        self.switchContent()

    def playNextLesson(self):
        self.switchFrame()
        try:
            self.currentState = self.driver.find_element_by_css_selector(
                ".vjs-play-control.vjs-control.vjs-button").get_attribute("title")
            if self.currentState == "重播":
                self.switchContent()
                self.getCoursesAtPlayerPage()
                for i in self.courseLink:
                    if i["title"] == "章节测验": continue
                    if (not i["complete"]):
                        self.driver.get(i["link"])
                        self.currentLesson = i["title"]
                        break
        except Exception:
            pass
        self.switchContent()

    def inCaseOfStop(self):
        self.switchFrame()
        try:
            self.currentState = self.driver.find_element_by_css_selector(
                ".vjs-play-control.vjs-control.vjs-button").get_attribute("title")
            print("当前状态:{}，当前课程:{}，当前时间:{}".format("播放" if self.currentState == "暂停" else "暂停", self.currentLesson,
                                                   strftime("%Y-%m-%d %X", localtime())))
            if self.currentState == "播放":
                self.driver.find_element_by_css_selector(".vjs-play-control.vjs-control.vjs-button").click()
        except Exception:
            pass
        self.switchContent()

    def monitor(self):
        self.switchContent()
        while True:
            sleep(0.5)
            self.clickShiPin()  # 切换至视频播放页面
            self.answerQuestion()  # 自动回答问题
            self.playNextLesson()  # 播放下一节课
            self.inCaseOfStop()  # 防止暂停
            self.clickBigPlayButton()  # 点击播放


if __name__ == "__main__":
    ChaoXing("账号", "密码", "课程名")