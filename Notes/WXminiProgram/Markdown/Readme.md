[TOC]



# 微信小程序笔记

微信小程序的一些笔记，很多在官方文档中都可找到

本笔记在线版本：[https://letmefly.xyz/Notes/WXminiProgram/](https://letmefly.xyz/Notes/WXminiProgram/)


## 安装

[下载页面](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)


## 项目目录<a id="项目目录"></a>

```
.
│  app.js                  ------------------------ 项目的全局文件
│  app.json                ------------------------ 项目的全局文件
│  app.wxss                ------------------------ 项目的全局文件
│  project.config.json     ------------------------ 项目的配置信息
│  sitemap.json            ------------------------ 哪些页面可以被索引
│
├─pages                    ------------------------ 存放页面的文件夹
│  ├─index                 ------------------------ 页面index(下面有4个文件)
│  │      index.js         ------------------------ index页面的函数脚本
│  │      index.json       ------------------------ index页面的配置信息
│  │      index.wxml       ------------------------ index页面的页面代码
│  │      index.wxss       ------------------------ index页面的样式
│  │
│  └─logs                  ------------------------ logs页面
│          logs.js         ------------------------ (同index页面下的4个文件)
│          logs.json
│          logs.wxml
│          logs.wxss
│
└─utils                    ------------------------ 其他的包
        util.js
```

### app.json

<table>
<thead><tr><th>属性</th> <th>类型</th> <th>必填</th> <th>描述</th> <th>最低版本</th></tr></thead> 
<tbody><tr><td><a href="#entryPagePath">entryPagePath</a></td> <td>string</td> <td>否</td> <td>小程序默认启动首页</td> <td></td></tr> 
<tr><td><a href="#pages">pages</a></td> <td>string[]</td> <td>是</td> <td>页面路径列表</td> <td></td></tr> 
<tr><td><a href="#window">window</a></td> <td>Object</td> <td>否</td> <td>全局的默认窗口表现</td> <td></td></tr> 
<tr><td><a href="#tabBar">tabBar</a></td> <td>Object</td> <td>否</td> <td>底部 <code>tab</code> 栏的表现</td> <td></td></tr> 
<tr><td><a href="#networkTimeout">networkTimeout</a></td> <td>Object</td> <td>否</td> <td>网络超时时间</td> <td></td></tr> 
<tr><td><a href="#debug">debug</a></td> <td>boolean</td> <td>否</td> <td>是否开启 debug 模式，默认关闭</td> <td></td></tr> 
<tr><td><a href="#functionalPages">functionalPages</a></td> <td>boolean</td> <td>否</td> <td>是否启用插件功能页，默认关闭</td> <td><a href="../../framework/compatibility.html">2.1.0</a></td></tr> 
<tr><td><a href="#subpackages">subpackages</a></td> <td>Object[]</td> <td>否</td> <td>分包结构配置</td> <td><a href="../../framework/compatibility.html">1.7.3</a></td></tr> 
<tr><td><a href="#workers">workers</a></td> <td>string</td> <td>否</td> <td><code>Worker</code> 代码放置的目录</td> <td><a href="../../framework/compatibility.html">1.9.90</a></td></tr> 
<tr><td><a href="#requiredBackgroundModes">requiredBackgroundModes</a></td> <td>string[]</td> <td>否</td> <td>需要在后台使用的能力，如「音乐播放」</td> <td></td></tr> 
<tr><td><a href="#plugins">plugins</a></td> <td>Object</td> <td>否</td> <td>使用到的插件</td> <td><a href="../../framework/compatibility.html">1.9.6</a></td></tr> 
<tr><td><a href="#preloadRule">preloadRule</a></td> <td>Object</td> <td>否</td> <td>分包预下载规则</td> <td><a href="../../framework/compatibility.html">2.3.0</a></td></tr> 
<tr><td><a href="#resizable">resizable</a></td> <td>boolean</td> <td>否</td> <td>PC 小程序是否支持用户任意改变窗口大小（包括最大化窗口）；iPad 小程序是否支持屏幕旋转。默认关闭</td> <td><a href="../../framework/compatibility.html">2.3.0</a></td></tr> 
<tr><td><a href="#usingComponents">usingComponents</a></td> <td>Object</td> <td>否</td> <td>全局<a href="/miniprogram/dev/framework/custom-component/">自定义组件</a>配置</td> <td>开发者工具 1.02.1810190</td></tr> 
<tr><td><a href="#permission">permission</a></td> <td>Object</td> <td>否</td> <td>小程序接口权限相关设置</td> <td>微信客户端 7.0.0</td></tr> 
<tr><td><a href="#sitemapLocation">sitemapLocation</a></td> <td>string</td> <td>是</td> <td>指明 sitemap.json 的位置</td> <td></td></tr> 
<tr><td><a href="#style">style</a></td> <td>string</td> <td>否</td> <td>指定使用升级后的weui样式</td> <td><a href="../../framework/compatibility.html">2.8.0</a></td></tr> 
<tr><td><a href="#useextendedlib">useExtendedLib</a></td> <td>Object</td> <td>否</td> <td>指定需要引用的扩展库</td> <td><a href="../../framework/compatibility.html">2.2.1</a></td></tr> 
<tr><td><a href="#entranceDeclare">entranceDeclare</a></td> <td>Object</td> <td>否</td> <td>微信消息用小程序打开</td> <td>微信客户端 7.0.9</td></tr> 
<tr><td><a href="#darkmode">darkmode</a></td> <td>boolean</td> <td>否</td> <td>小程序支持 DarkMode</td> <td><a href="../../framework/compatibility.html">2.11.0</a></td></tr> 
<tr><td><a href="#themeLocation">themeLocation</a></td> <td>string</td> <td>否</td> <td>指明 theme.json 的位置，darkmode为true为必填</td> <td>开发者工具 1.03.2004271</td></tr> 
<tr><td><a href="#lazyCodeLoading">lazyCodeLoading</a></td> <td>string</td> <td>否</td> <td>配置自定义组件代码按需注入</td> <td><a href="../../framework/compatibility.html">2.11.1</a></td></tr> 
<tr><td><a href="#singlePage">singlePage</a></td> <td>Object</td> <td>否</td> <td>单页模式相关配置</td> <td><a href="../../framework/compatibility.html">2.12.0</a></td></tr> 
<tr><td>supportedMaterials</td> <td>Object</td> <td>否</td> <td><a href="../../framework/material/support_material.html">聊天素材小程序打开</a>相关配置</td> <td><a href="../../framework/compatibility.html">2.14.3</a></td></tr> 
<tr><td>serviceProviderTicket</td> <td>string</td> <td>否</td> <td><a href="https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/operation/thirdparty/customized_service_platform_guidelines.html" target="_blank" rel="noopener noreferrer">定制化型服务商<span></span></a>票据</td> <td></td></tr> 
<tr><td><a href="#embeddedAppIdList">embeddedAppIdList</a></td> <td>string[]</td> <td>否</td> <td>半屏小程序 appId</td> <td><a href="../../framework/compatibility.html">2.20.1</a></td></tr> 
<tr><td><a href="#halfPage">halfPage</a></td> <td>Object</td> <td>否</td> <td>视频号直播半屏场景设置</td> <td><a href="../../framework/compatibility.html">2.18.0</a></td></tr></tbody>
</table>


#### <a id="entryPagePath">entryPagePath</a>

微信小程序的主页(启动的页面)。

若无此项，则会以```"pages"```中的第一个为准。

#### <a id="pages">pages</a>

如<a href="#项目目录">项目目录</a>中共有两个页面，则pages应写为：

```json
"pages": [
    "pages/index/index", 
    "pages/logs/logs"
]
```


#### <a id="window">window</a>

用于设置小程序的状态栏、导航条、标题、窗口背景色


