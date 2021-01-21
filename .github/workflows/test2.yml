# name属性用来指定这个工作流的名字
name: HELLO GITHUB ACITON

# 这个部分用来指定能够触发工作流执行的事件
on:
  # 当对分支main进行push操作的时候，这个工作流就被触发了
  push:
    branches: [ main ]



# 工作流是由一个或多个的jobs构成的，在jobs里来说明要交给GitHub aciton执行的任务
jobs:
  # 这个jobs中的一个任务，名字叫build(随便怎么取)
  build:
    # 用来指定这个任务在什么操作系统上跑(服务器是GitHub免费提供的)
    runs-on: ubuntu-latest

    # 指出这个build任务的步骤
    steps:

      # 步骤，这里只写了一个步骤，目的是输出hello github acition
      - name: Run a one-line script
        run: echo Hello, github action!

