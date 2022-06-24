数据的双向绑定效果

```
<div id="app">
    <div>
        <h1>数据的双向绑定</h1>
        <input type="text" v-model:value="name"/>
        <h1>{{name}}</h1>
    </div>
</div>

<script>
    const app = new Vue({
        el:'#app',
        data:{
            name:''
        }
    })
</script>
```

1. 我们先把基础的模板完成，通过在文本框中进行内容的输入 将name的值进行动态的更改
2. 生成一个Vue实例 绑定 模板app，进行配置
3. 在input标签上进行 : (v-bind) 与数据value的绑定，这样我们可以将实例中的name解析出来 得到它的值，双向绑定需要在前面添加 v-model ,将其数据与显示内容绑定在一起，得到双向绑定效果；