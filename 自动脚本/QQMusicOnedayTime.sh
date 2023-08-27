###
 # @Author: LetMeFly
 # @Date: 2023-08-24 23:01:18
 # @LastEditors: LetMeFly
 # @LastEditTime: 2023-08-27 09:10:12
### 
#!/bin/bash

for (( i=1; i<=90; i++ ))
do
    echo $i
    curl -X POST -d "$QQMUSICONEDAYTIME_DATA" "https://stat.y.qq.com/pc/fcgi-bin/reportmus.fcg?pcachetime=1692368054" > nul
    # curl -X POST -d "$QQMUSICONEDAYTIME_DATA" "https://stat.y.qq.com/pc/fcgi-bin/reportmus.fcg?pcachetime=$(date -d "3 minutes 33 seconds ago" +%s)" > nul  # 也不行诶
    # curl -X POST -d "$QQMUSICONEDAYTIME_DATA" "https://stat.y.qq.com/pc/fcgi-bin/reportmus.fcg?pcachetime=$(date +%s)" > nul  # 这个也不行
done