import random
import os

randNum=random.Random()
with open("TFpacket\Old\Random.txt","w")as f:
    f.write(str(randNum))
print(randNum)
os.system("git add .")
os.system('git commit -m "Random to'+str(randNum)+'"')
os.system("git push -u original master")
print('\a')
system("pause")
