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


CheckNetwork.main(__exeName__, __exeVersion__)


def create_a_window(title_and_th):
    window = tk.Tk()
    window.title(title_and_th[0])
    window_width_this, window_height_this = 900, 675
    window_width_computer = window.winfo_screenwidth()
    window_height_computer = window.winfo_screenheight()
    align = int((window_height_computer - window_height_this) / 2)
    window.geometry(
        f"{window_width_this}x{window_height_this}+"
        f"{align if title_and_th[1] == 1 else window_width_computer - align - window_width_this}+{align}")
    window.iconbitmap('Img/icon.ico' if title_and_th[1] == 1 else 'Img/icon2.ico')
    window.resizable(0, 0)

    # img, img_label = '', ''
    #
    # def pack_img(img_name, tx, ty):
    #     # global img, img_label
    #     img = tk.PhotoImage(file=img_name)
    #     img_label = tk.Label(window, image=img)
    #     img_label.place(x=tx, y=ty)

    def calculate():
        # global frame_operate_head_input, frame_operate_tail_input, frame_operate_input_input
        # global frame_dic
        head_data = frame_operate_head_input.get()
        tail_data = frame_operate_tail_input.get()
        input_data = int(frame_operate_input_input.get())
        for ny in map(lambda char: int(char), head_data):
            for nx in map(lambda char: int(char), tail_data):
                frame_dic[(nx, ny)][3] += input_data
                val = frame_dic[(nx, ny)][3]
                frame_dic[(nx, ny)][2].config(text=f"{val}")

    # 左数字框架
    frame_nums_height, frame_nums_width = 575, 600
    frame_nums_x, frame_nums_y = 50, 50
    frame_nums = tk.Frame(window, height=f"{frame_nums_height}", width=f"{frame_nums_width}")
    frame_nums.place(x=frame_nums_x, y=frame_nums_y)
    frame_dic = {}
    for x in range(10):  # 10行
        for y in range(10):  # 10列
            this_frame = tk.Frame(frame_nums, bg="blue" if (x + y) % 2 else "yellow",
                                  width=f"{int(frame_nums_width / 10)}",
                                  height=f"{int(frame_nums_height / 10)}")
            this_frame.place(x=frame_nums_width / 10 * x, y=frame_nums_height / 10 * y)
            label_text_up = tk.Label(this_frame, text=f"{y}{x}", font=('Arial', 14), fg="black", width=5, height=1)
            label_text_up.pack()
            this_value = 0
            label_text_down = tk.Label(this_frame, text=f"{this_value}", font=('Arial', 14), fg="red", width=5,
                                       height=1)
            label_text_down.pack(side=tk.BOTTOM)
            frame_dic[(x, y)] = [this_frame, label_text_up, label_text_down, this_value]

    # 右操作框架
    frame_operate_height, frame_operate_width = 300, 175
    frame_operate_x, frame_operate_y = 685, 200
    frame_operate = tk.Frame(window, height=frame_operate_height, width=frame_operate_width)
    frame_operate.place(x=frame_operate_x, y=frame_operate_y)
    # 头
    frame_operate_head = tk.Frame(frame_operate, height=frame_operate_height / 4, width=frame_operate_width)
    frame_operate_head.place(x=0, y=0)
    frame_operate_head_text = tk.Label(frame_operate_head, text="头：", font=('Arial', 18), fg="black", width=7, height=3)
    frame_operate_head_text.place(x=0, y=0)
    frame_operate_head_input = tk.Entry(frame_operate_head, font=('Arial', 14), width=9, textvariable=tk.IntVar)
    frame_operate_head_input.place(x=62, y=29)
    # 尾
    frame_operate_tail = tk.Frame(frame_operate, height=frame_operate_height / 4, width=frame_operate_width)
    frame_operate_tail.place(x=0, y=frame_operate_height / 4)
    frame_operate_tail_text = tk.Label(frame_operate_tail, text="尾：", font=('Arial', 18), fg="black", width=7, height=3)
    frame_operate_tail_text.place(x=0, y=0)
    frame_operate_tail_input = tk.Entry(frame_operate_tail, font=('Arial', 14), width=9, textvariable=tk.IntVar)
    frame_operate_tail_input.place(x=62, y=29)
    # 值输入框
    frame_operate_input = tk.Frame(frame_operate, height=frame_operate_height / 4, width=frame_operate_width)
    frame_operate_input.place(x=0, y=frame_operate_height / 4 * 2)
    frame_operate_input_text = tk.Label(frame_operate_input, text="值：", font=('Arial', 18), fg="black", width=7,
                                        height=3)
    frame_operate_input_text.place(x=0, y=0)
    frame_operate_input_input = tk.Entry(frame_operate_input, font=('Arial', 14), width=9, textvariable=tk.IntVar)
    frame_operate_input_input.place(x=62, y=29)
    # 确定按钮
    frame_operate_button = tk.Frame(frame_operate, height=frame_operate_height / 4, width=frame_operate_width)
    frame_operate_button.place(x=0, y=frame_operate_height / 4 * 3)
    frame_operate_button_button = tk.Button(frame_operate_button, text="添加", font=('Arial', 18), command=calculate)
    frame_operate_button_button.place(x=52, y=17)

    # 事件绑定
    quit = lambda event: window.quit() if event.keysym == "Escape" else ""
    window.bind("<Key>", quit)
    window.mainloop()


mission_list = []
names = ["排五计数器", "七星计数器"]
for name in names:
    mission = CheckNetwork.Thread(target=create_a_window, args=((name, 1 if name == names[0] else 2),))
    mission.start()
for mission in mission_list:
    mission.join()
