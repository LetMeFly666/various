import tkinter as tk
import CheckNetwork

__exeName__ = "006_57LotteryCounter"
__exeVersion__ = 1

"""
;下面的注释包含自解压脚本命令

Setup=Calculator.exe
Text
{
绿色安装，附加任务：创建桌面快捷方式。此外无其他盘符占用 
}
Shortcut=D, Calculator.exe, , 双击运行, 排列五七星计数器, Img/icon.ico

"""

# CheckNetwork.main(__exeName__, __exeVersion__)  # FIXME: 取消注释

window = tk.Tk()
window.title("排五计数器")
window.geometry("900x675")
window.iconbitmap('Img/icon.ico')
window.resizable(0, 0)

img, img_label = '', ''


def pack_img(img_name, tx, ty):
    global img, img_label
    img = tk.PhotoImage(file=img_name)
    img_label = tk.Label(window, image=img)
    img_label.place(x=tx, y=ty)


frame_nums_height, frame_nums_width = 575, 600
frame_nums_x, frame_nums_y = 50, 50
frame_nums = tk.Frame(window, bg="pink", height=f"{frame_nums_height}", width=f"{frame_nums_width}")
frame_nums.place(x=frame_nums_x, y=frame_nums_y)
frame_dic = {}
for x in range(10):  # 10行
    for y in range(10):  # 10列
        this_frame = tk.Frame(frame_nums, bg="blue" if (x + y) % 2 else "yellow", width=f"{int(frame_nums_width / 10)}",
                              height=f"{int(frame_nums_height / 10)}")
        this_frame.place(x=frame_nums_width / 10 * x, y=frame_nums_height / 10 * y)
        frame_text_up = tk.Label(this_frame, text=f"{x}{y}", width=f"{int(frame_nums_width / 10)}",
                                 height=f"{int(frame_nums_height / 10 / 2)}", bg="red")
        if not x+y:
            frame_text_up.pack()
        frame_dic[(x, y)] = (this_frame, frame_text_up)

quit = lambda event: window.quit() if event.keysym == "Escape" else ""
window.bind("<Key>", quit)
window.mainloop()
