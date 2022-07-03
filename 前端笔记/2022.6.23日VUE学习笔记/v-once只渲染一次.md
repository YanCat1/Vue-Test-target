如果我们想要这种效果

![image-20220701073426339](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220701073426339.png)

n的初始值 和 n增加之后的值 相当于进行对比

那么我们需要做什么呢？

需要一个指令 v-once

```
<body>
    <div id="app">
        <h2 v-once>初始化n值为{{n}}</h2>
        <h2>当前n值为{{n}}</h2>
        <input type="button" @click='n++' value="点我n+1" />
    </div>

    <script>
        const vm = new Vue({
            el:'#app',
            data:{
               n:1
            }
        })
    </script>
</body>
```

意思也就是说，让我们的n值在第一次渲染时显示，然后就不渲染了，就开始执行一次而已；