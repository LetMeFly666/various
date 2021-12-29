<!--
 * @Author: LetMeFly
 * @Date: 2021-12-29 11:11:28
 * @LastEditors: LetMeFly
 * @LastEditTime: 2021-12-29 11:22:33
-->
## JavaScript


### 引用：
```html
<script>***</script>
调用外部javascript: <script src="***"></script>
```


### console：

<code>clear()</code>清空console

<code>console.log("Hello World")</code>在控制台输出Hello World

### 定义数据 <sub>(var: variables)</sub>

<code>var: 全局；
let: 可重新赋值；
const: 不可重新赋值</code>

推荐使用const > let > var

**用var重新声明变量，变量的值不会丢失**

<textarea cols="19" rows="4">var text = "hah";
var text;
document.write(text);
//hah</textarea>
### 运算

支持```+```、```-```、```*```、```/```、```%```、```**```、```++```、```--```等。

<table><tbody><tr><th>值</th><th style="width:20%;">运算符</th><th style="width:30%;">描述</th><th style="width:30%;">实例</th></tr><tr><td>20</td><td>( )</td><td>表达式分组</td><td>(3 + 4)</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr>   <td>19</td><td>.</td><td>成员</td><td>person.name</td></tr><tr><td>19</td><td>[]</td><td>成员</td><td>person["name"]</td></tr><tr><td>19</td><td>()</td><td>函数调用</td><td>myFunction()</td></tr><tr><td>19</td><td>new</td><td>创建</td><td>new Date()</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>17</td><td>++</td><td>后缀递增</td><td>i++</td></tr><tr><td>17</td><td>--</td><td>后缀递减</td><td>i--</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>16</td><td>++</td><td>前缀递增</td><td>++i</td></tr><tr><td>16</td><td>--</td><td>前缀递减</td><td>--i</td></tr><tr><td>16</td><td>!</td><td>逻辑否</td><td>!(x==y)</td></tr><tr><td>16</td><td>typeof</td><td>类型</td><td>typeof x</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr style="background-color:#ffdddd;"><td>15</td><td>**</td><td>求幂 (ES7)</td><td>10 ** 2</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr>   <td>14</td><td>*</td><td>乘</td><td>10 * 5</td></tr><tr><td>14</td><td>/</td><td>除</td><td>10 / 5</td></tr><tr><td>14</td><td>%</td><td>模数除法</td><td>10 % 5</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr> <td>13</td><td>+</td><td>加</td><td>10 + 5</td></tr><tr><td>13</td><td>-</td><td>减</td><td>10 - 5</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>12</td><td>&lt;&lt;</td><td>左位移</td><td>x &lt;&lt; 2</td></tr><tr><td>12</td><td>&gt;&gt;</td><td>右位移</td><td>x &gt;&gt; 2</td></tr><tr><td>12</td><td>&gt;&gt;&gt;</td><td>右位移（无符号）</td><td>x &gt;&gt;&gt; 2</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>11</td><td>&lt;</td><td>小于</td><td>x &lt; y</td></tr><tr><td>11</td><td>&lt;=</td><td>小于或等于</td><td>x &lt;= y</td></tr><tr><td>11</td><td>&gt;</td><td>大于</td><td>x &gt; y</td></tr><tr><td>11</td><td>&gt;=</td><td>大于或等于</td><td>x &gt;= y</td></tr><tr style="background-color:#ffdddd;"><td>11</td><td>in</td><td>对象中的属性</td><td>"PI" in Math</td></tr><tr style="background-color:#ffdddd;"><td>11</td><td>instanceof</td><td>对象的实例</td><td>instanceof Array</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>10</td><td>==</td><td>相等</td><td>x == y</td></tr><tr><td>10</td><td>===</td><td>严格相等</td><td>x === y</td></tr><tr><td>10</td><td>!=</td><td>不相等</td><td>x != y</td></tr><tr><td>10</td><td>!==</td><td>严格不相等</td><td>x !== y</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>9</td><td>&amp;</td><td>按位与</td><td>x &amp; y</td></tr><tr><td>8</td><td>^</td><td>按位 XOR</td><td>x ^ y</td></tr><tr><td>7</td><td>|</td><td>按位或</td><td>x | y</td></tr><tr><td>6</td><td>&amp;&amp;</td><td>逻辑与</td><td>x &amp;&amp; y</td></tr><tr><td>5</td><td>||</td><td>逻辑否</td><td>x || y</td></tr><tr><td>4</td><td>? :</td><td>条件</td><td>? "Yes" : "No"</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>3</td><td>=</td><td>赋值</td><td>x = y</td></tr><tr><td>3</td><td>+=</td><td>赋值</td><td>x += y</td></tr><tr><td>3</td><td>-=</td><td>赋值</td><td>x -= y</td></tr><tr><td>3</td><td>*=</td><td>赋值</td><td>x *= y</td></tr><tr><td>3</td><td>%=</td><td>赋值</td><td>x %= y</td></tr><tr><td>3</td><td>&lt;&lt;=</td><td>赋值</td><td>x &lt;&lt;= y</td></tr><tr><td>3</td><td>&gt;&gt;=</td><td>赋值</td><td>x &gt;&gt;= y</td></tr><tr><td>3</td><td>&gt;&gt;&gt;=</td><td>赋值</td><td>x &gt;&gt;&gt;= y</td></tr><tr><td>3</td><td>&amp;=</td><td>赋值</td><td>x &amp;= y</td></tr><tr><td>3</td><td>^=</td><td>赋值</td><td>x ^= y</td></tr><tr><td>3</td><td>|=</td><td>赋值</td><td>x |= y</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr style="background-color:#ffdddd;"><td>2</td><td>yield</td><td>暂停函数</td><td>yield x</td></tr><tr><td>1</td><td>,</td><td>逗号</td><td>7 , 8</td></tr></tbody></table>


### 数据类型

<code>String, Numbers, Boolean, null, undefined, Symbol</code>

<code>可以用typeof来查看数据是什么类型，如：“typeof a”</code>

### 拼接<sub>concatenation</sub>

<code>"My name is " + name + " and I am " + age</code>

<code>`My name is ${name} and I am ${age}`</code>

推荐使用第二种

### array

<code>const fruits = ['apples', 'oranges', 'pears']</code>

可以直接<code>fruits[3] = xxx</code>进行赋值或添项，也可以直接<code>fruits[10] = xxx</code>，这样中间会有很多<code>undefined</code>，但长度会是<code>11</code>

注意，const定义数组的话不能直接<code>fruits = [xxx]</code>进行赋值

### 添加元素

+ fruits[x] = xxx
+ fruits.push(xxx)  //向尾添加
+ fruits.unshitf(xxx)  //向首添加

### 字典

+ 定义

  <textarea cols="27" rows="10">const person = {
  	firstName: "John",
  	lastName: "Doe",
  	hobbies: ['music', 'movies'], 
  	address: {
  		street: "50 main st",
  		city: 'Boston',
  		'state:  'MA',
  	},
 }</textarea>
+ 解构<sub>destructuring</sub>
  
  <textarea cols="41" rows="3" >const {firstName, address:{street}} = person
debug.log(firstName)
debug.log(street)</textarea>

+ 添加

  直接xx.x=xxx就行。例如<code>person.email='john@gmail.com'</code>

### 函数

+ 正常方法：

  <textarea rows="3" cols="37">function addTwoNums(num1, num2 = 5){
      return num1 + num2;
  }</textarea>

+ 箭头函数：

  <textarea rows="3" cols="40">const addTwoNums = (num1, num2 = 5) => {
      return num1 + num2
  }</textarea>

+ 箭头函数去掉大括号：

  <textarea rows="1" cols="52">const addTwoNums = (num1, num2 = 5) => num1 + num2</textarea>

+ 箭头函数去掉小括号：

  <textarea rows="1" cols="48">const addOneNumWithFive = num => return num + 5</textarea>

+ 构造函数：

  <textarea rows="12" cols="49">function Person(firstName, secondName, dob) {
      this.firstName = firstName
      this.secondName = secondName
      this.dob = new Date(dob)
      this.getBirthYear = function () {
          return this.dob.getFullYear()
      }
  }
  const person1 = new Person('John', 'Doe', '4-3-1980')
  const person2 = new Person('Mary', 'Smith', '3-6-1970')
  console.log(person1.dob)
  console.log(person2.getBirthYear())</textarea>

+ 使用原型

  <textarea rows="16" cols="49">function Person(firstName, secondName, dob) {
    this.firstName = firstName
    this.secondName = secondName
    this.dob = new Date(dob)
}
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear()
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.secondName}`
}
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1970')
console.log(person1.dob)
console.log(person2.getBirthYear())
console.log(person1.getFullName())</textarea>

+ 通过类实现

  <textarea rows="18" cols="49">class Person {
    constructor(firstName, secondName, dob) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.secondName}`;
    }
}
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1970')
console.log(person1.dob)
console.log(person2.getBirthYear())
console.log(person1.getFullName())</textarea>

+ map

  <textarea cols="72" rows="7">var nums1 = [45, 8, 9];
  var nums2 = nums1.map(myFunction);
  function myFunction(value, index, array) {
    document.write("value:" + value + "index:" + index + "array:" + array + '<br />');
    return value * 2;
  }
  document.write(nums2);</textarea>

  运行结果：

  <textarea cols="24" rows="4">value:45index:0array:45,8,9
  value:8index:1array:45,8,9
  value:9index:2array:45,8,9
  90,16,18</textarea>

