<!--
 * @Author: LetMeFly
 * @Date: 2021-12-29 11:10:49
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-12-31 20:03:16
-->
#### 内部样式表

```html
<html>
<head>
<style type="text/css">
h1 {color:red}
p {font-size:30px}
let {color:pink;font-size:50px}
</style>
</head>
<body>
<h1>标题</h1>
<p>CSS段落</p>
<p style="font-size:40px">新定义段落</p>
<let>自定义标签</let>
</body>
</html>
```
#### 外部样式表

```html
<head>
<link rel="stylesheet" type="text/css" href="https://w3school.com.cn/mystyle.css">
</head>
```
#### 内联样式
```html
<p style="color: red; margin-left: 20px">
This is a paragraph
</p>
```
### 选择器

#### 通用选择器

```html
* {}
可以选择所有的东西
```

#### 元素选择器

```html
p {}
可以选择所有的p元素
```

#### 类选择器
```html
.blue {}
可以选择所有的class为blue的元素
```

#### id选择器
```html
#onlyId {}
可以选择id为onlyId的元素（id必须独一无二）
```

#### 伪类选择器
```:```
```css
a:link { /* 没点过的链接是红色 */
    color: red;
}
a:visited { /* 点过的链接是橙色 */
    color: orange;
}
a:hover { /* 鼠标悬停是天蓝色 */
    color: skyblue;
}
a:active { /* 鼠标按下是宝石蓝色 */
    color: aquamarine;
}
a { /* 取消链接下划线 */
    text-decoration: none;
}
```
**记得按顺序写！**
**L**<font color = "gray">ink</font>**V**<font color = "gray">isited</font>**H**<font color = "gray">over</font>**A**<font color = "gray">ctive</font>
不然可能会显示不出来

## 具体属性

### 字体

#### font
复合属性，可将几个属性写到一块儿，节约代码
```css
font: font-style font-weight font-size/line-height font-family;
```
必须严格按照上述顺序

#### text-decoration
|属性值|描述|
|--|--|
|none|默认，没有装饰线|
|underline|下划线，链接a自带下划线|
| overline|上划线|
|line-through|删除线|
```css
text-decoration: underline;
```

#### text-indent
文本缩进
```css
text-indent: 20px; /* 20像素 */
text-indent: 2em; /* 2个文字的大小 */
```
<font color="red">em</font> 是一个相对单位，就是当前元素(font-size)1个文字的大小。
如果当前元素没有设置大小，就会按照父元素的1个文字大小。

#### line-height
行高
```css
line-height: 25px;
```

### 背景
+ 背景颜色： 
  > ```background-color: 颜色值```
  > 颜色值默认为transparent(透明)
+ 背景平铺：
  > ```background-repeat: repeat | no-repeat | repeat-x | repeat-y```
  > 分别代表 背景图片在纵向和横向上平铺(默认)、不平铺、横向平铺、纵向平铺
+ 背景图像固定：
  > ```background-attachment: scroll | fixed```
  > scroll：背景图像随对象内容滚动
  > fixed：背景图像固定

**合并写法**：
background: 背景颜色 背景图片地址 背景平铺 背景图片滚动 背景图片位置;
例如：```background: black url(Img/a.jpg) no-repeat fixed center top```

### CSS三大特性
+ **层叠性**
  
  > 相同的选择器设置不同的样式，一个样式就会覆盖(层叠)另一个冲突的样式。（此时遵循就近原则）
+ **继承性**
  
  > 子类标签会继承父类标签的某些样式(text-，font-，line-开头的属性、color属性)
+ **优先级**：
  > 选择器权重如下表所示：
  >
  > | 选择器            | 选择器权重 |
  > | ----------------- | ---------- |
  > | 继承 或 *         | 0, 0, 0, 0 |
  > | 元素选择器        | 0, 0, 0, 1 |
  > | （伪）类选择器    | 0, 0, 1, 0 |
  > | ID选择器          | 0, 1, 0, 0 |
  > | 行内样式 style="" | 1, 0, 0, 0 |
  > | !important 重要的 | ∞ 无穷大   |
  >
  > 其中!important例如：```div {color: blue!important}```，之后后面即使有```#thisDiv {color: pink}```也会显示蓝色
  >
  > 但继承来的权值为0，```div {color: blue!important} #thisP {color: pink}```，```<div><p?>sfs</p></div>```会显示粉色。

### CSS盒子

margin外边距、border边框、padding内边距、content内容

#### 边框
```border: border-width | border-style | border-color```

```border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset```
其中最常用的是```solid(实线)、dashed(虚线)、dotted(点线)```

合并边框：```border-collapse: collapse```否则两个相邻的边框挨在一起会变成2倍粗细

#### 内边距
|padding|含义|
|--|--|
|padding: 5px|上下左右都是5像素的内边距|
|padding: 5px 10px|上下内边距5像素，左右内边距10像素|
|padding: 5px 10px 20px|上内边距5像素，左右内边距10像素，下内边距20像素|
|padding: 5px 10px 20px 30px|上5px，右10px，下20px，左30px（顺时针）|

内外边距会影响盒子大小

#### 外边距
和内边距写法相同
**居中方法**：左右外边距都设置为auto。
```margin: 0 auto;```

#### 嵌套块元素垂直外边距的塌陷

对于两个嵌套关系的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素回塌陷较大的外边距值。

**解决方案**：
1. 为父元素定义上边框
2. 为父元素定义内边框
3. 为父元素添加overflow: hidden

#### 盒子阴影
box-shadow
|值|描述|
|--|--|
|h-shadow|必需，水平阴影的位置，允许负值|
|v-shadow|必需，竖直阴影的位置，允许负值|
|blur|可选，模糊距离|
|spread|可选，阴影尺寸|
|color|可选，阴影颜色|
|inset|可选，讲外阴影改为内阴影|

经常使用：
```box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, .3)```

### 实际书写顺序
实际书写尽量按下面顺序：
1. 布局定位属性，display / position / float / clear / visibility/ overflow(display建议第一个写，毕竟关系到模式)
2. 自身属性，width / height / margin  padding / border / background
3. 文本属性，color / font / text-decoration / text-align / vertical-align / white-space / break-word
4. 其他属性(CSS3)，content / cursor / border-radius / box-shadow / text-shadow / background: linear-gradient...