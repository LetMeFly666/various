###
 # @Author: LetMeFly
 # @Date: 2023-08-24 23:01:18
 # @LastEditors: LetMeFly
 # @LastEditTime: 2023-08-24 23:01:19
### 
#!/bin/bash

for (( i=1; i<=3; i++ ))
do
    curl "https://www.baidu.com"
done

for (( i=1; i<=3; i++ ))
do
    curl "https://www.baidu.com" > nul
done