import time
import requests
import json

path = "Poems.txt"

def getAlready():
    global already
    already = []
    with open(path,'r',encoding='utf-8')as f:
        temp = f.read()
    dic = temp.split('||')[1:]
    for i in dic:
        ID = i.split('--')[-1]
        already.append(ID)


def getNew(need = 1, maxTried = 50):
    url = 'https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335'
    success, tried = 0, 0
    allGet = []
    while True:
        tried += 1
        response = requests.get(url).text
        j = json.loads(response)
        ID = j['id']
        if ID in already:
            print("已经出现过{}".format(ID))
            if tried >= maxTried:
                break
        else:
            toWrite = '\n'
            for i in j:
                toWrite += (str(j[i]) if str(j[i])!= '' else "NULL")+ '--'
            toWrite = toWrite[:-2]
            toWrite += '||'
            with open(path,'a+',encoding='utf-8')as f:
                f.write(toWrite)
            print(toWrite)
            allGet.append(j['hitokoto'])
            already.append(ID)
            success += 1
            if success >= need:
                break
        
        time.sleep(3)
    return allGet


def main(need = 1, maxTried = 50):
    getAlready()
    return getNew(need, maxTried)
    

if __name__ == "__main__":
    main()
