**var 我们一般定义为全局变量，可以很方便的进行变量值的替换和使用**

但是 当代码量大时，可能会变量名相互覆盖，致使其部分功能不能使用



**let 我们一般定义为局部变量，只能在某一区域中使用，以此来解决我们变量名相同，值相互覆盖的问题。**

而且 我们的let关键字 当变量名重复时，会报错

```js
let name = 'yzd'
let name = 'aaa'
alert(name)
Uncaught SyntaxError: Identifier 'name' has already been declared
未捕获的语法错误：标识符“name”已被声明
```

**当我们定义一个常量的时候，可以使用 const关键字，而它的值是不允许被覆盖的**

**一旦覆盖就报错**

```js
const name = 'yzd'
name = 'aaa'
alert(name)
未捕获类型错误：赋值到常量变量。
```

**使用变量时用let**		

**常量用const**

i++		自增



**取余 %：**

​	获取被除数的余数，并以其记性判断，余数一般为，1,0，1,0,1,0

+= 	-= 	*= 	 /=

计算完之后直接进行赋值。



**转义字符**

我们的 ‘ “ 一般为字符串类型的符号，那么当我们需要去添加’ ” 符号怎么办？

可以使用我们的转义字符   \ 反斜杠

```js
let name  = ' \'yzd\' '
alert(name)
```

![image-20220511152632221](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220511152632221.png)

这样我们输出时显示的内容就会添加上 '引号' 了.



**在JS中 单引号与双引号的功能是相同的**，我们用哪个都行

**转义字符并不仅仅只有 ‘ 一个**

```js
\'			单引
\"			双引
\\			反斜杠
\n			换行
\r			回车符
\t			制表符(tab)
\b			退格
\f			换页符
```



**拼接符+**

当数据	一个为字符串 一个为数字时

```
str+number		会进行计算

str+str		    会进行拼接
```



