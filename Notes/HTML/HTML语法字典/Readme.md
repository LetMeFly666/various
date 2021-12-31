

##### 基础语法

<textarea rows="4" cols="47"><html> 与 </html> 之间的文本描述网页
<body> 与 </body> 之间的文本是可见的页面内容
<h1> 与 </h1> 之间的文本被显示为标题
<p> 与 </p> 之间的文本被显示为段落</textarea>

##### 链接

```html
<a href="http://www.w3school.com.cn">This is a link</a>
<a href="mailto:814114971@qq.com?subject=这是主题，%20是空格&cc=抄送者@qq.com&bcc=密件抄送者@qq.com&body=这是邮件的内容！">点击发送邮件</a>
<a href="https://www.w3school.com.cn/example/html/lastpage.html" style="text-decoration:none">这是一个<b>没有下划线</b>的链接</a>
<a href="http://www/w3school.com.cn/" target="_blank">在新窗口打开链接</a>
<a href="#label">点击跳转到本页的label标签处</a>
<a href="http://have.not.set/index.html#label">点击跳转到另一个页面的label标签处</a>
<a href="http://tiao.chu.kuang.jia" target="_top">点击这里跳出被锁定的框架</a>
```

##### 自动跳转
```html
<head><meta http-equiv="refresh" content="1.5;url=训练时间安排.html"></head>
```

##### 图片

```html
<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"  width="500" height="150" alt="图片无法加载时将显示此句" />
<body background="https://www.w3school.com.cn/i/ct_netscape.jpg">...</body>背景图像，图像过小时将平铺
<p>图片在文本中的位置<img src="http://tu.pian.wei/zhi.jpg" align="bottom"  />默认为bottom-图片文字底部对齐;若align="middle"-居中对齐;align="top"-顶端对齐</p>
<p>请点击图像上的星球，把它们放大。</p><img src="/i/eg_planets.jpg" border="0" usemap="#planetmap"alt="Planets" /><map name="planetmap" id="planetmap"><area shape="circle" coords="180,139,14" href ="https://www.w3school.com.cn/example/html/venus.html" target ="_blank" alt="Venus" /> <area shape="circle" coords="129,161,10" href ="https://www.w3school.com.cn/example/html/mercur.html" target ="_blank" alt="Mercury" /> <area shape="rect" coords="0,0,110,260" href ="https://www.w3school.com.cn/example/html/sun.html" target ="_blank" alt="Sun" /> </map> <p><b>注释：</b>img 元素中的 "usemap" 属性引用 map 元素中的 "id" 或 "name" 属性（根据浏览器），所以我们同时向 map 元素添加了 "id" 和 "name" 属性。</p>
<a href="https://www.w3school.com.cn/example/html/html_ismap.html" target="_blank"><img src="https://www.w3school.com.cn/i/eg_planets.jpg" ismap /></a>鼠标点击图片不同位置，地址栏发生变化
```
##### 居中

```html
align="center"  如： <h1 align="center">This is heading 1</h1>
```

##### 背景颜色

```html
<body bgcolco="yellow"></body>
```

##### 水平线

```html
<hr />
```

##### 不分段换行

```html
<br />
```

##### 不转义

```html
<textarea>  这里写什么就是什么，不转义（后面被Typora自动滤去了一个<textarea>）</textarea>
```

##### 其他一些基础效果

###### 加粗

```html
<b>加粗</b>
```

###### 和加粗差不多

```html
<strong>和加粗差不多</strong>
```

###### 小字

```html
<small>小字</small>
```

###### 大字

```html
<big>大字</big>
```

###### 斜体

```html
<i>斜体italic</i>
```

###### 强调

```html
<em>强调emphasized，和倾斜差不多</em>
```

###### 下标

```html
<sub>下标subscript</sub>
```

###### 上标

```html
<sup>上标superscript</sup>
```

###### 删除线

```html
<del>删除线</del>
<s>删除线</s>
```

###### 下划线

```html
<ins>下划线</ins>
<u>下划线</u>
```

##### 属性

###### 主题背景颜色

```html
<body style="background-color:PowderBlue;">主题背景颜色</body>
```

###### 字体属性及字体颜色及字体像素大小

```html
<p style="font-family:verdana;color:red;font-size:30px">字体属性及字体颜色及字体像素大小</p>
```

###### 居中

```html
<h1 style="text-align:center">居中</h1>
```

##### 保留文本格式

```html
<pre>这里不过滤换行和空格，比较适合显示计算机代码</pre>
```

##### 略缩词

```html
<abbr title="显示完整内容了">鼠标放上就</abbr>
<acrony title="和abbr似乎一样">再试试这个</acrony>
<p><dfn title="World Health Organization">WHO</dfn>成立于1984年；对缩写进行标记能够为浏览器、翻译系统以及搜索引擎提供有用的信息。
```

##### 从右向左输出

```html
<bdo dir="rtl">这里将会从右向左输出</bdo>
```

##### 引用

```html
<blockquote>这是长的引用</blockquote>
<q>这是短的引用</q>
```
##### 文本格式化标签


<table class="dataintable">
<tr>
<th style="width:30%">标签</th>
<th style="width:70%">描述</th>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_font_style.asp">&lt;b&gt;</a></td>
<td>定义粗体文本。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_font_style.asp">&lt;big&gt;</a></td>
<td>定义大号字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;em&gt;</a></td>
<td>定义着重文字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_font_style.asp">&lt;i&gt;</a></td>
<td>定义斜体字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_font_style.asp">&lt;small&gt;</a></td>
<td>定义小号字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;strong&gt;</a></td>
<td>定义加重语气。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_sup.asp">&lt;sub&gt;</a></td>
<td>定义下标字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_sup.asp">&lt;sup&gt;</a></td>
<td>定义上标字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_ins.asp">&lt;ins&gt;</a></td>
<td>定义插入字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_del.asp">&lt;del&gt;</a></td>
<td>定义删除字。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_strike.asp">&lt;s&gt;</a></td>
<td class="deprecated"><em>不赞成使用。</em>使用 &lt;del&gt; 代替。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_strike.asp">&lt;strike&gt;</a></td>
<td class="deprecated"><em>不赞成使用。</em>使用 &lt;del&gt; 代替。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_u.asp">&lt;u&gt;</a></td>
<td class="deprecated"><em>不赞成使用。</em>使用样式（style）代替。</td>
</tr>
</table>
##### “计算机输出”标签


<table class="dataintable">
<tr>
<th style="width:30%">标签</th>
<th style="width:70%">描述</th>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;code&gt;</a></td>
<td>定义计算机代码。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;kbd&gt;</a></td>
<td>定义键盘码。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;samp&gt;</a></td>
<td>定义计算机代码样本。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_font_style.asp">&lt;tt&gt;</a></td>
<td>定义打字机代码。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;var&gt;</a></td>
<td>定义变量。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_pre.asp">&lt;pre&gt;</a></td>
<td>定义预格式文本。</td>
</tr>
<tr>
<td>&lt;listing&gt;</td>
<td class="deprecated"><em>不赞成使用。</em>使用 &lt;pre&gt; 代替。</td>
</tr>
<tr>
<td>&lt;plaintext&gt;</td>
<td class="deprecated"><em>不赞成使用。</em>使用 &lt;pre&gt; 代替。</td>
</tr>
<tr>
<td>&lt;xmp&gt;</td>
<td class="deprecated"><em>不赞成使用。</em>使用 &lt;pre&gt; 代替。</td>
</tr>
</table>
##### 引用、引用和术语定义

<table class="dataintable">
<tr>
<th style="width:30%">标签</th>
<th style="width:70%">描述</th>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_abbr.asp">&lt;abbr&gt;</a></td>
<td>定义缩写。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_acronym.asp">&lt;acronym&gt;</a></td>
<td>定义首字母缩写。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_address.asp">&lt;address&gt;</a></td>
<td>定义地址。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_bdo.asp">&lt;bdo&gt;</a></td>
<td>定义文字方向。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_blockquote.asp">&lt;blockquote&gt;</a></td>
<td>定义长的引用。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_q.asp">&lt;q&gt;</a></td>
<td>定义短的引用语。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;cite&gt;</a></td>
<td>定义引用、引证。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_phrase_elements.asp">&lt;dfn&gt;</a></td>
<td>定义一个定义项目。</td>
</tr>
<tr>
<td><a>&lt;cite&gt;</a></td>
<td>定义著作的标题。</td>
</tr>
</table>

##### 联系信息
```html
<address>address元素定义文档或文章的联系信息（作者/拥有者）。此元素通常以斜体显示。大多数浏览器会在此元素前后添加折行。</address>
```
##### 著作标题
```html
<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.<br/>cite元素定义<b>著作的标题</b>，浏览器通常会以斜体方式显示&lt;cite&gt;元素</p>
```
##### 注释
```html
<!--这里是注释，在浏览器中不显示-->
```
###### meta

> + **viewport**
>
>   ```<meta name="viewport" content="width=device-width, initial-scale=1.0"> ```网页自适应浏览器大小。
>   
> + **keywords**
>
>   ```<meta name="keywords" content="这是关键字">```
>
> + **description**
>
>   ```<meta name="descripthin" content="这是描述">```
>
>   有了这个description，在被百度搜索引擎收录的时候，浏览器上显示的简介就是这个啦
>
> + **author**
>
>   ```<meta name="author" content="LetMeFly">```
>
> + ***charset***
>
>   ```<meta charset="utf-8">```
>
>   这是编码
>
> + **http-equiv**
>
>   ```<meta http-equiv="refresh" content="5; https://www.5s后**自动跳转**.com"```

##### CSS


##### name属性-锚的语法

```html
<a name="label">锚（显示在页面上的文字）</a>
锚的名称可以是任何你喜欢的名字。可以使用 id 属性来替代 name 属性，命名锚同样有效。
命名锚经常用于在大型文档开始位置上创建目录。可以为每个章节赋予一个命名锚，然后把链接到这些锚的链接放到文档的上部。如果您经常访问百度百科，您会发现其中几乎每个词条都采用这样的导航方式。
假如浏览器找不到已定义的命名锚，那么就会定位到文档的顶端。不会有错误发生。
```


##### 表格
```html
<h4>两行三列：</h4><table border="1"><tr><td>100</td><td>200</td><td>300</td></tr><tr><td>400</td><td>500</td><td>600</td></tr></table>表格由table标签开始；每行由tr标签开始；每个数据由td标签开始；border是表格外围宽度；tr - table row；td - table data；th - table head（表头）
如果某格是空的，为防止浏览器不显示该格的边框，可以加上一个空格占位符&nbsp;（No Breaking SPace）<td>&nbsp;</td>
<caption>表格标题</caption>（caption - 说明）
表格分列<td colspan="2">11</td>表格分行<td rowspan="2">22</td>：<table border="1"><tr><td colspan="2"align="center">姓名</td><td align="center">电话</td></tr><tr><th colspan="2"style="color:red">表格分列</th><td rowspan="2" style="color:red">表格分行</td></tr><tr><th style="color:red">00</th><th style="color:red">11</th></tr></table>
单元格间距<table ... cellspace="10">...</table>；
单元格边距<table ... cellpadding="10">...</table>
表格背景图片<table background="https://www.w3school.com.cn/i/eg_bg_07.gif">...</table>；背景颜色 bgcolor="red"；
框架<table frame="*"></table>其中*：box:一周；above:上面；below:下面；hsides:上下；vsides:左右
```

###### 表格标签
<table class="dataintable">
<tr>
<th>表格</th>
<th>描述</th>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_table.asp">&lt;table&gt;</a></td>
<td>定义表格</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_caption.asp">&lt;caption&gt;</a></td>
<td>定义表格标题。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_th.asp">&lt;th&gt;</a></td>
<td>定义表格的表头。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_tr.asp">&lt;tr&gt;</a></td>
<td>定义表格的行。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_td.asp">&lt;td&gt;</a></td>
<td>定义表格单元。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_thead.asp">&lt;thead&gt;</a></td>
<td>定义表格的页眉。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_tbody.asp">&lt;tbody&gt;</a></td>
<td>定义表格的主体。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_tfoot.asp">&lt;tfoot&gt;</a></td>
<td>定义表格的页脚。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_col.asp">&lt;col&gt;</a></td>
<td>定义用于表格列的属性。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_colgroup.asp">&lt;colgroup&gt;</a></td>
<td>定义表格列的组。</td>
</tr>
</table>

##### 列表
```html
<ul type="*"><li>unordered list</li><li>无须列表</li></ul>*：disc - 实心圆点；circle - 空心圆点；square - 实心方块
<ol type="*"><li start="20">ordered list</li><li>从10开始的有序列表</li></ul>*：[无] - 数字；A - 大写字母；a - 小写字母；I - 大写罗马数字；i - 小写罗马数字
<dl><dt>自定义列表项</dt><dd>里面的</dd><dd>内容</dd><dt>111</dt><dd>2</dd><dd>3</dd></dl>
```

##### 列表标签
<table class="dataintable">
<tr>
<th width="30%">标签</th>
<th width="70%">描述</th>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_ol.asp">&lt;ol&gt;</a></td>
<td>定义有序列表。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_ul.asp">&lt;ul&gt;</a></td>
<td>定义无序列表。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_li.asp">&lt;li&gt;</a></td>
<td>定义列表项。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_dl.asp">&lt;dl&gt;</a></td>
<td>定义定义列表。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_dt.asp">&lt;dt&gt;</a></td>
<td>定义定义项目。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_dd.asp">&lt;dd&gt;</a></td>
<td>定义定义的描述。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_dir.asp">&lt;dir&gt;</a></td>
<td class="deprecated">已废弃。使用 &lt;ul&gt; 代替它。</td>
</tr>
<tr>
<td><a href="https://www.w3school.com.cn/tags/tag_menu.asp">&lt;menu&gt;</a></td>
<td class="deprecated">已废弃。使用 &lt;ul&gt; 代替它。</td>
</tr>
</table>

##### noscript

在浏览器不支持javascript的时候，会执行```<noscript></noscript>```中的内容

