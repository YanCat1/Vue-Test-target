v-pre

**能使模板直接跳过解析、编译、直接显示在界面中**



适用于一些静态的数据，不会占用系统资源；

![image-20220701074024035](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220701074024035.png)

```
<div id="app">
    <h2 v-pre>vue其实很简单的</h2>
    <h2 v-pre>当前n值为{{n}}</h2>
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
```

如果给需要解析的内容添加，那么它也不会进行解析了，将内容直接进行显示了；