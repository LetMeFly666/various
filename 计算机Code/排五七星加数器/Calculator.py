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


# CheckNetwork.main(__exeName__, __exeVersion__)  # FIXME:取消注释


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
    try:
        window.iconbitmap('Img/icon.ico')
    except:
        pass
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
        for ny in set(map(lambda char: int(char), head_data)):
            for nx in set(map(lambda char: int(char), tail_data)):
                frame_dic[(nx, ny)][3] += input_data*add_or_dec
                total_num[0] += input_data*add_or_dec
                val = frame_dic[(nx, ny)][3]
                frame_dic[(nx, ny)][2].config(text=f"{val}")
                label_sum.config(text=f"合计：{total_num[0]}")

    def clear():
        total_num[0] = 0
        label_sum.config(text=f"合计：{total_num[0]}")
        for nx in range(10):
            for ny in range(10):
                frame_dic[(nx, ny)][3] = 0
                frame_dic[(nx, ny)][2].config(text=f"{0}")

    def draw_left():
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

    def change_to_add():
        if add_or_dec[0] == 1:  # 本来就是增加
            return
        button_add.config(fg="black")
        button_dec.config(fg="red")
        add_or_dec[0] *= -1
        # draw_left()

    def change_to_dec():
        if add_or_dec[0] == -1:  # 本来就是减少
            return
        button_add.config(fg="red")
        button_dec.config(fg="black")
        add_or_dec[0] *= -1
        # draw_left()


    # 左数字框架
    frame_nums_height, frame_nums_width = 575, 600
    frame_nums_x, frame_nums_y = 50, 50
    frame_nums = tk.Frame(window, height=f"{frame_nums_height}", width=f"{frame_nums_width}")
    frame_nums.place(x=frame_nums_x, y=frame_nums_y)
    frame_dic, total_num = {}, [0]
    draw_left()
    # 总和
    label_sum = tk.Label(window, text=f"合计：{total_num[0]}", font=('Arial', 14))
    label_sum.place(x=frame_nums_x+20, y=frame_nums_y+frame_nums_height)
    # 头尾飞码(加减)
    add_or_dec = [1]  # 1是加，-1是减，直接乘以add_or_dec就好
    button_add = tk.Button(window, text="头尾", fg="red", font=('Arial', 16), command=change_to_add)
    button_add.place(x=frame_nums_x+20, y=frame_nums_y-40)
    button_dec = tk.Button(window, text="飞码", fg="black", font=('Arial', 16))
    button_dec.place(x=frame_nums_x+80, y=frame_nums_y-40)

    # 右操作框架
    frame_operate_height, frame_operate_width = 375, 175
    frame_operate_x, frame_operate_y = 685, 150
    frame_operate = tk.Frame(window, height=frame_operate_height, width=frame_operate_width)
    frame_operate.place(x=frame_operate_x, y=frame_operate_y)
    # 头
    frame_operate_head = tk.Frame(frame_operate, height=frame_operate_height / 5, width=frame_operate_width)
    frame_operate_head.place(x=0, y=0)
    frame_operate_head_text = tk.Label(frame_operate_head, text="头：", font=('Arial', 18), fg="black", width=7, height=3)
    frame_operate_head_text.place(x=0, y=0)
    frame_operate_head_input = tk.Entry(frame_operate_head, font=('Arial', 14), width=9, textvariable=tk.IntVar)
    frame_operate_head_input.place(x=62, y=29)
    # 尾
    frame_operate_tail = tk.Frame(frame_operate, height=frame_operate_height / 5, width=frame_operate_width)
    frame_operate_tail.place(x=0, y=frame_operate_height / 5)
    frame_operate_tail_text = tk.Label(frame_operate_tail, text="尾：", font=('Arial', 18), fg="black", width=7, height=3)
    frame_operate_tail_text.place(x=0, y=0)
    frame_operate_tail_input = tk.Entry(frame_operate_tail, font=('Arial', 14), width=9, textvariable=tk.IntVar)
    frame_operate_tail_input.place(x=62, y=29)
    # 值输入框
    frame_operate_input = tk.Frame(frame_operate, height=frame_operate_height / 5, width=frame_operate_width)
    frame_operate_input.place(x=0, y=frame_operate_height / 5 * 2)
    frame_operate_input_text = tk.Label(frame_operate_input, text="值：", font=('Arial', 18), fg="black", width=7,
                                        height=3)
    frame_operate_input_text.place(x=0, y=0)
    frame_operate_input_input = tk.Entry(frame_operate_input, font=('Arial', 14), width=9, textvariable=tk.IntVar)
    frame_operate_input_input.place(x=62, y=29)
    # 确定按钮
    frame_operate_button_ok = tk.Frame(frame_operate, height=frame_operate_height / 4, width=frame_operate_width)
    frame_operate_button_ok.place(x=0, y=frame_operate_height / 5 * 3)
    frame_operate_button_ok_button = tk.Button(frame_operate_button_ok, text="添加", font=('Arial', 18), command=calculate)
    frame_operate_button_ok_button.place(x=52, y=17)
    # 清除数据
    frame_operate_button_clear = tk.Frame(frame_operate, height=frame_operate_height / 4, width=frame_operate_width)
    frame_operate_button_clear.place(x=0, y=frame_operate_height / 5 * 4)
    frame_operate_button_clear_button = tk.Button(frame_operate_button_clear, text="清空", font=('Arial', 18), command=clear)
    frame_operate_button_clear_button.place(x=52, y=17)

    # 事件绑定
    quit = lambda event: window.quit() if event.keysym == "Escape" else ""
    window.bind("<Key>", quit)
    window.mainloop()


mission_list = []
names = ["排五计数器", "七星计数器"]
for name in names:
    mission = CheckNetwork.Thread(target=create_a_window, args=((name, 1 if name == names[0] else 2),))
    mission.start()
    CheckNetwork.sleep(0.25)
# for mission in mission_list:  # 原来是join的锅，不能加join，才能多线程
#     mission.join()
