'''
Author: LetMeFly
Date: 2021-08-25 12:29:20
LastEditors: LetMeFly
LastEditTime: 2021-08-25 12:33:49
'''
import smtplib
from email.mime.text import MIMEText
from email.utils import formataddr
import os


def send_email(to_who="xxx@qq.com", title="问卷杀手", text="欢迎加入问卷杀手"):
    my_sender = 'letmefly666@qq.com'  # 发件人邮箱账号
    my_pass = os.environ['EMAIL_PASS']  # 发件人邮箱密码
    my_user = to_who  # 收件人邮箱账号，我这边发送给自己

    def mail():
        ret = True
        try:
            msg = MIMEText(text, 'plain', 'utf-8')
            msg['From'] = formataddr(["LetMeFly", my_sender])  # 括号里的对应发件人邮箱昵称、发件人邮箱账号
            msg['To'] = formataddr(["Hello", my_user])  # 括号里的对应收件人邮箱昵称、收件人邮箱账号
            msg['Subject'] = title  # 邮件的主题，也可以说是标题

            server = smtplib.SMTP_SSL("smtp.qq.com", 465)  # 发件人邮箱中的SMTP服务器，端口是25
            server.login(my_sender, my_pass)  # 括号中对应的是发件人邮箱账号、邮箱密码
            server.sendmail(my_sender, [my_user, ], msg.as_string())  # 括号中对应的是发件人邮箱账号、收件人邮箱账号、发送邮件
            server.quit()  # 关闭连接
        except smtplib.SMTPRecipientsRefused:
            print("地址错误")
        except Exception:  # 如果 try 中的语句没有执行，则会执行下面的 ret=False
            ret = False
        '''
         raise SMTPRecipientsRefused(senderrs)
smtplib.SMTPRecipientsRefused: {'': (501, b'Bad address syntax. http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=20022&&no=1000730')}
        '''
        return ret

    ret = mail()
    if ret:
        print("邮件发送成功")
    else:
        print("邮件发送失败")
    return ret