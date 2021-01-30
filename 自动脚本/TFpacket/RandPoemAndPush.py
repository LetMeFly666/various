import RandPoem
import time
import os

def main(need = 1, maxTried = 50):
    get = RandPoem.main(need,maxTried)
    global toCommit
    toCommit = 'Add the poem'
    toCommit += ':' if len(get)==1 else 's:'
    for i in range(len(get)):
        if i != 0:
            toCommit += '、'
        toCommit += ' ' + get[i]
    os.system("git add .")
    realCommit = f'git commit -m "{toCommit}"'
    print(realCommit)
    os.system(realCommit)    
    os.system("git push -u original master")

if __name__ == "__main__":
    main()
