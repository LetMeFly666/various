# import re
import 修改index代码
import shutil
import os


def dbg(debug):
    print(debug)
    print(type(debug))


# 这个可以说是第二天做的方法二
# 把original_str中move_left与move_right之间的内容修改为move_to
# 注意move_left与move_right需要精确，防止有多个符合条件的move_(left/right)
def change_move(original_str, move_left, move_to, move_right):
    changed_str = ""
    a = original_str.split(move_left)
    changed_str += a[0]+move_left+move_to
    b = a[1].split(move_right)
    changed_str += move_right+b[1]
    return changed_str


def change_move_add_src(original, add_front, move_right):
    changed_str = ""
    a = original.split(move_right)
    src = a[0].split('/')
    changed_str = add_front+src[-1]+move_right+a[1]
    # print(changed_str)
    return changed_str


def change_move_add(original_str, move_left, add_front, move_right):
    changed_str = ""
    a = original_str.split(move_left)
    changed_str = a[0]
    for i in range(1, len(a)):
        changed_str += move_left+change_move_add_src(a[i], add_front, move_right)
    return changed_str


def change_t2(tt2):
    t1 = 'Java"><script src="'
    tt = tt2.split(t1)
    t0 = tt[0]
    t4 = '"></script><script'
    tt2 = tt[1].split(t4)
    t3 = '" type="text/javascript'
    t2 = 'HTML-Files/'+tt2[0].split(t3)[0].split('.下载')[0].split('_files/')[1]
    # dbg(tt2[1])
    t4 = ' src=".'
    tt4 = tt2[1].split(t4)[1].split("_files/")
    ttt4, s = "", 0
    for i in tt4:
        if s != 0:
            ttt4 += i
        s += 1
    tt4 = ttt4
    t6 = '.下载" type="text/javascript">'
    tt5 = tt4.split(t6)
    tt6 = t6.split(".下载")
    t6 = tt6[1]
    t5 = '"></script><script src="'+'HTML-Files/'+tt5[0]  # "></script><script src="HTML-Files/MathJax.js
    t7 = tt5[1]
    tt7 = t7.split('href="')
    # t9 = tt7[0]
    t8 = tt7[1].split('global.css')[1]
    t7 = '</script><link rel="stylesheet" href="HTML-Files/global.css'
    # print(t9, '\n', len(t9))
    t = t0 + t1 + t2 + t3 + t5 + t6 + t7 + t8
    # dbg(t)
    return t


def change_file(scene_name, file_name):
    name_html = "HTMLs/"
    with open(name_html+file_name, 'r')as f:
        a = f.read()
        f.close()
        # dbg(a)
        # head = re.findall("<head>(\n{0,100}.*?)</head>", a)
        # dbg(head)
    b = a.split('<head>')
    t0 = b[0]
    tt0 = b[1].split("</head>")
    tt2 = tt0[0]
    t2 = change_t2(tt2)
    t4 = tt0[1]
    t = t0 + "<head>" + t2 + "</head>" + t4
    t = change_move(t, '"margin:0"><img src="', 'http://acm.hdu.edu.cn/images/banner.jpg', '" width="980" height')
    # dbg(t)
    t = change_move_add(t, '<img style="max-width:100%;" src="', 'http://acm.hdu.edu.cn/data/images/', '"></center>')
    file_name_2 = name_html+scene_name+'-'+file_name
    with open(file_name_2, 'w')as ff:
        ff.write(t)
        ff.close()
    # cmd0 = "del "+name_html+file_name
    # # dbg(cmd0)
    # os.system(cmd0)
    os.remove(name_html+file_name)
    name_dir = name_html+file_name
    name_dir = name_dir.split(".html")[0]+"_files"
    shutil.rmtree(name_dir)


def amazing_str(n):
    if n < 10:
        return '0'+str(n)
    else:
        return str(n)


if __name__ == "__main__":
    num_contest = input("输入此次比赛场次：")
    num_problem = input("输入此次比赛题数：")
    for i in range(int(num_problem)):
        name_scene = "2020 Multi-University Training Contest "+num_contest
        name_0 = "Problem - 10"+amazing_str(i+1)+".html"
        change_file(name_scene, name_0)
    修改index代码.write(num_contest, num_problem)
    # with open("HTMLs/Problem - 1001.html", 'r')as f:
    #     a = f.read()
    # b = change_move_add(a, '<img style="max-width:100%;" src="', 'http://acm.hdu.edu.cn/data/images/', '"></center>')
    # print(b)

