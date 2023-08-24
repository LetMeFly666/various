###
 # @Author: LetMeFly
 # @Date: 2023-08-24 23:01:18
 # @LastEditors: LetMeFly
 # @LastEditTime: 2023-08-24 23:13:26
### 
#!/bin/bash

for (( i=1; i<=3; i++ ))
do
    echo $i
    curl -X POST -d "$QQMUSICONEDAYTIME_DATA" "https://stat.y.qq.com/pc/fcgi-bin/reportmus.fcg?pcachetime=1692368054"
done