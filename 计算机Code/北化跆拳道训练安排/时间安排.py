import plotly as py
import plotly.figure_factory as ff

df = [dict(Task="跑步5分钟", Start='2020-10-15 6:00:00', Finish='2020-10-15 6:05:00', Complete=100),
      dict(Task="准备活动5~10分钟", Start='2020-10-15 6:05:00', Finish='2020-10-15 6:15:00', Complete=100),
      dict(Task="行进间动作", Start='2020-10-15 6:15:00', Finish='2020-10-15 6:45:00', Complete=100),
      dict(Task="休息10分钟", Start='2020-10-15 6:45:00', Finish='2020-10-15 6:50:00', Complete=100),
      dict(Task="腿法练习", Start='2020-10-15 6:50:00', Finish='2020-10-15 7:20:00', Complete=100),
      dict(Task="自由踢靶5分钟", Start='2020-10-15 7:20:00', Finish='2020-10-15 7:25:00', Complete=100),
      dict(Task="品势教学", Start='2020-10-15 7:25:00', Finish='2020-10-15 7:50:00', Complete=50),
      dict(Task="高级腿法拓展", Start='2020-10-15 7:25:00', Finish='2020-10-15 7:50:00', Complete=50),
      dict(Task="练后拉伸，收拾道具", Start='2020-10-15 7:50:00', Finish='2020-10-15 8:00:00', Complete=100),
      ]

fig = ff.create_gantt(df)
py.offline.plot(fig, filename='gantt-numeric-variable.html')
