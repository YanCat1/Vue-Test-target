**v-if 控制元素是否显示 可以写data数据值，也可以写表达式**

```
<div v-if='true' class="pink"></div>
<div v-if='n>=3' class="black"></div>
```

当条件不成立时 div就不显示，该div节点在页面中也会进行隐藏



**v-show控制元素是否显示 可以写data数据值，也可以写表达式**

```
<div v-show='true' class="pink"></div>
<div v-show='n>=3' class="black"></div>
```

它与v-if的区别是，虽然元素是隐藏的，但是系欸但还在，而v-if直接节点不在了



那么之后我们需要频繁进行切换的时候，我们可以使用v-show

如果不是很频繁的话 v-if也还行



**当然我们也有 v-else-if 这么一组判断**

**v-if**									当该条件成立时 下方的else-if就不再看了

**v-else-if**

**v-else-if**



但是 如果我么都写为v-if的话 当条件成立 都会显示，而v-else-if就只会显示一个

```
<div id="app">
    <h2>当前n的值为:{{n}}</h2>
    <button @click="n++">点击n+1</button>
    <div v-if='n==1' class="red"></div>
    <div v-else-if='n==1' class="black"></div>
    <div v-else-if='n==1' class="pink"></div>
</div>
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220627215933360.png" alt="image-20220627215933360" style="zoom:50%;" />

我们只会显示第一个红色的div，但是我们条件都是 n==1啊

这样 我们就是只判断第一个，成立的话 其他的都不看了；



**但是**如果我们使用v-if去写 他们都会进行显示

```
<div id="app">
    <h2>当前n的值为:{{n}}</h2>
    <button @click="n++">点击n+1</button>
    <div v-if='n==1' class="red"></div>
    <div v-if='n==1' class="black"></div>
    <div v-if='n==1' class="pink"></div>
</div>
```

![image-20220627220112082](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220627220112082.png)

**v-else**

当以上的判断都不成立时 我们执行 v-else 语句内容

```html
<div id="app">
    <h2>当前n的值为:{{n}}</h2>
    <button @click="n++">点击n+1</button>
    <div v-if='n==1' class="red"></div>
    <div v-else-if='n==1' class="black"></div>
    <div v-else-if='n==1' class="pink"></div>
    <div v-else>yzd</div>
</div>
```



当我们想要一组数据进行隐藏显示时 我们可以使用大容器去包裹住它

```
<div v-if="n==1">
    <div class="red"></div>
    <div class="black"></div>
    <div class="pink"></div>
    <div v-else>yzd</div>
</div>
给大容器进行判断，满足显示，不满足隐藏
但是这样会破坏结构，本来样式中直接找到几个div子元素就行了
但是现在需要增加一个div
```

我们可以使用 <template></template>标签进行完善

```
<template v-if="n==1">
    <div class="red"></div>
    <div class="black"></div>
    <div class="pink"></div>
    <div v-else>yzd</div>
</template>
```

![image-20220627221149041](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220627221149041.png)

<template>标签是不会显示在页面中的，这样就ok了

但是 该标签只能与 v-if 进行配合 不能配合 v-show