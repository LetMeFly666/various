<!--
 * @Author: LetMeFly
 * @Date: 2021-12-29 11:10:49
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-12-29 11:15:20
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
