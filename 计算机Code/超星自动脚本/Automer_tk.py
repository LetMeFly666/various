import Automer_WebDriver
import tkinter as tk


def main():
    window = tk.Tk()
    window.title("超星播放器")
    window.geometry("230x80")
    window.resizable(0, 0)
    try:
        window.iconbitmap('Img/icon.ico')
    except:
        pass
    button = tk.Button(window, text="启动", font=('楷体', 30), fg="#%02x%02x%02x" % (0, 255, 225),
                       bg="#%02x%02x%02x" % (240, 255, 225), command=Automer_WebDriver.main)
    button.place(x=55, y=5)
    window.mainloop()


if __name__ == '__main__':
    main()
