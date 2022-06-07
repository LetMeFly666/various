<!--
 * @Author: LetMeFly
 * @Date: 2022-06-07 09:19:32
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-06-07 10:42:04
-->
# 计算机网络

## 概述

**ISP(Internet Service Provider)**：因特网服务提供商

**三种报文交换方式**：

+ 电路交换(Circuit Switching)：先建立连接
+ 分组交换(Packet Switching)：分组
+ 报文交换(Message Switching)：整个

**计算机网络的定义**：

一些**互连**、**自治**的计算机网络**集合**

**按覆盖范围分**：

+ 广域网WAN(Wide Area Network)
+ 城域网MAN(Metropolitan Area Network)
+ 局域网LAN(Local Area Network)
+ 个域网PAN(Personal Area Network)

**按拓扑结构分**：

<li>总线型：<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAUBAMAAAAjLUMaAAAALVBMVEUAAABHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMHXDdAAAADnRSTlOAACtV1UCRFcCOHCqV2Eyi0MYAAABQSURBVCjPYxCEAvFCGEtQGs4SZIAxBBjhYsLDR1qUgYGjgQEGeEAEK5K0wDsM8ABVNxRcg1BsCayodkOBE4QSUhQcrNIYoQYFs/BLC5IkDQCibDmYTEssPgAAAABJRU5ErkJggg=="></li>
<li>星型： <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAA2UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8vLwAAAI190osAAAARdFJOUwBvH4xT3Mh+Pb0DMkmt717zccG5SwAAAKJJREFUKM/Fk9kWwyAIROMKmK3z/z/bGE+aEpe3nvKmdxgEdZr+GcsIRj+AFPosWag1k1ri21eEFVxvLcM8i16+HB9pR1iULYfWuYM/HcPcbGbN3iotGfspSpCkO8gRaDGLA1xlNxPRemrQH+ELkC48kMQOM7B5bG24URlqizFKF1vLOeyXqMpN910zqDKlqUslKKWelCjxjNFrY/CA+h/+kDe8vAUUVw/0gAAAAABJRU5ErkJggg=="></li>
<li>环形： <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAmCAMAAAB9PwLlAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAA/UExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlZWf///wAAAAAAAKABjH4AAAAUdFJOUwDyt8hCW+GM+wmtwXwddCejXinQ4zkk9AAAAKBJREFUOMvtU8EWgyAMA6lQZKhz+f9vne6wlRZ32Y7m1r7QJnnFuQt/AetG9gB/sFeDZkSkBgF6yOOmGshqBkbF8LGtVzOUsMiyYtKMBdQ+IOu32Rt9NowqI9mMzpcbYS91GUVo23xHhyvSX76jaMLMbfAjoqrt5iCUUbQBHQEgvcncv4ldzBHLGpnyydkQMOdkTqPBAIT6/fomvn7gz3gC4sQFs4fc9QQAAAAASUVORK5CYII="></li>
<li>网状形： <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAmCAMAAAB9PwLlAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABIUExURQAAAAAAAAEBAQAAAAAAAAAAAAAAAEdwTAAAAAAAAAAAAAAAAAAAAAAAAAYGBgAAAAAAAAAAAAAAAAAAAOjo6HNzc0FBQVVVVX3HLA4AAAAYdFJOU/7Z5gN68QcAC3IiNYidREy5xmGuh7bMhx3zkXAAAADzSURBVDjL7ZPJjsMgEEQLcLODwZ7l//90msWREycazWFuKVkGxKOr3BYwvwlv4t+I7K5a7wgAQkiQ7CKittAPRDaWpXV7rFUfgD0RHglYz/aK+NCJqNWYSHKzc39N2H3oZyaxL+0tgdArEkobKd4IOxy057zeCzbsIQk3IuIo/83u+Jwry+knAXEEjODPTAdf0iT0sDcqA2wdCMtgEiaxwrfBCZQ+UQJUVZ9MIpEyOgpOeZhlbk/kOq740ZTCLUPNdx0roGx0zYOAgFSXv+qAXXYiouFPFHinERt34MttbrnIuUEIvBRBBCZssq+l3nfuz8QPI20hCNtAbXMAAAAASUVORK5CYII="></li>

**带宽**：

+ 在模拟信号中：所包含的各种不同频率成分所占据的频率范围(例如：300Hz~3.4kHz，带宽为3.1kHz)
+ 在计算机网络中：单位时间内从网络中某点到零一点所能通过的“最高数据率”

**吞吐量**：

单位时间内通过某个网络（信道接口）的数据量

**时延**：

+ 发送时延：分组长度(b) / 发送速率(b/s)
+ 传播时延：信道长度(m) / 电磁波传播速率(m/s)
+ 处理时延：不固定，不方便计算

**时延带宽积**：

传播时延 × 带宽ㅤ--------------------↘
第1个bit到达终点时，发送端已发送 (↘)个bit
又称为“以比特为单位的链路长度”

**往返时间**：RTT

**利用率**:

+ 信道利用率：百分之几的时间被利用
+ 网络利用率：全网信道利用率的加权平均

```
           ↗ 网络空闲时的时延      D↑
         D0                        |          | |   增长越来越快
D = --------------                 |         -  |
|       1 - U                      |      _-`   |
↓            ↘                  D0|___--`      |
当前网络时延    利用率              0+------------+----> U
```


