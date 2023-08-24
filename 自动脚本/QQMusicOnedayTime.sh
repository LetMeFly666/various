###
 # @Author: LetMeFly
 # @Date: 2023-08-24 23:01:18
 # @LastEditors: LetMeFly
 # @LastEditTime: 2023-08-24 23:20:02
### 
#!/bin/bash

for (( i=1; i<=90; i++ ))
do
    echo $i
    curl -X POST -d "$QQMUSICONEDAYTIME_DATA" "https://stat.y.qq.com/pc/fcgi-bin/reportmus.fcg?pcachetime=1692368054" > nul
done