我们的模板内容只能看到Vue实例中的内容，比如数据或者函数；

定义在Vue实例意外的内容是找不到的；



v-on

​		点击时触发 我们可以缩写为 @ ，比如点击时触发某个函数 showInfo

```
<h1 @click='showInfo'>点我 你点啊</h1>
```



事件会得到event事件对象 我们可以操作它获取当前点击元素或者是元素文字

```vue
//获取元素
showInfo(event){
    log(event.target)
}

//获取元素文字
showInfo(event){
    log(event.target.innerText)
}
```

当然我们函数也是可以接收参数的

```
<h2 @click="showInfo('你也好','哈哈')">点我提示信息</h2>
methods: {
    showInfo(a,b){
        alert('同学你好'+a+b)
    }
}
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220623161210909.png" alt="image-20220623161210909" style="zoom:50%;" />

那我们methods中的this指的是谁呢？

当然是我们的Vue实例啦 我一般赋值为 vm



我们点击调用函数时 什么时候加小括号，什么时候不加小括号呢？

你传参就加、不传参就不加

但是我们传参了就会把event给搞丢了，如果我们还想拿到event怎么办？

可以写一个形参占位

```
<h2 @click="showInfo($event,66)">点我提示信息2</h2>
methods: {
    showInfo(event,num){
        console.log(event,num)
        console.log(event.target,num)
    }
}
```

methods中的showInfo（event）代表的就是我们的当前元素，

在调用时我们传入的 $event 就是 Vue中预留的event对象