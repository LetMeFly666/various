# import csv
# name_csv = "理想的csv.csv"
# # name_csv = "names.csv"
#
#
# def read(contest_num):
#     with open(name_csv, newline='') as csv_file:
#         reader = csv.DictReader(csv_file)
#         # i = 1
#         # for row in reader:
#         #     for i in range(10):
#         #         print(row[str(i+1)])
#         # print(reader)
#         # for i in range(10):  # 一共10场比赛
#         #     for row in reader:
#         #         print(row[1])
#
#         for row in reader:
#             print("contest_num:", contest_num, ",return:", row[contest_num])
#             # return row[contest_num]
#
#
# def write(num_contest, num_problem):
#     # data = {'id': '123', 'name': {'test': '哈哈'}, 'age': ' 26'}
#     # with open('已有html.csv', 'w', newline='')as f:
#     #     fieldnames = {'id', 'name', 'age'}    # 表头
#     #     writer = csv.DictWriter(f, fieldnames=fieldnames)
#     #     writer.writeheader()
#     #     writer.writerow(data)
#     with open(name_csv, 'w', newline='') as csv_file:
#         fieldnames, write_dict = [], {}
#         for i in range(num_contest):
#             which = str(i+1)
#             fieldnames.append(which)
#             write_dict[which] = read(which)
#         # fieldnames = ['1', '2', '3']
#         print(fieldnames)
#         print(write_dict)
#         writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
#
#         writer.writeheader()
#         writer.writerow({'1': '12', '2': '12', '3': '11'})
#         # writer.writerow({'first_name': 'Lovely', 'last_name': 'Spam'})
#         # writer.writerow({'first_name': 'Wonderful', 'last_name': 'Spam'})
#
#
# if __name__ == "__main__":
#     num_contest = 3
#     num_problem = 2
#     write(num_contest, num_problem)
#     # read()
#
#


file_name = "已有html.txt"


def read():
    dicts = {}
    with open(file_name, 'r')as f:
        for line in f:
            line_data = line.split('--')
            contest_num = line_data[0]
            problem_num = line_data[1]
            dicts[contest_num] = problem_num
    return dicts


def html_add():
    dicts = read()
    html_front = '''
<html>
<body>
<h1 style="text-align:center">此网站不用做商业用途</h1>
<h2 style="text-align:center">仅为同校友好ACM队员看题使用</h2>
<br /><hr />

'''
    for i in dicts:
        # print(i, dicts[i])
        temp = '<h3>2020 Multi-University Training Contest '+i+'</h3>\n'
        # html_front += temp
        for j in range(int(dicts[i])):
            t = '<p><a href="2020 Multi-University Training Contest '+i+'-Problem - 10'
            if j < 9:
                t += '0'+str(j+1)
            else:
                t += str(j+1)
            t += '.html">Problem-10'
            if j < 9:
                t += '0' + str(j+1)
            else:
                t += str(j+1)
            t += '</a></p>\n'
            temp += t
        temp += '<hr />\n'
        html_front += temp
    # print(html_front)
    html_back = '''
<h2 style="text-align:center">欢迎子涵的回来，以后要共同努力，共同加油哦！</h2>
</body>
</html>
'''

    html = html_front+html_back
    with open("HTMLs/index.html", 'w')as f:
        f.write(html)
        # print("已修改index.html")
        f.close()


def write(num_contest, num_problem):
    with open(file_name, 'a+')as f:
        f.write("{}--{}--\n".format(num_contest, num_problem))
        f.close()
    html_add()


if __name__ == "__main__":
    write(3, 2)


