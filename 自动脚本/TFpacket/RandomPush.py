import random
import time
import os

randNum=random.randint(-123456789,123456789)
with open("Old\Random.txt","w")as f:
    f.write(str(randNum))
print(randNum)
os.system("git add .")
os.system('git commit -m "Random to'+str(randNum)+'"')
os.system("git push -u original master")
print('\a')
time.sleep(4)

