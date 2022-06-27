动态绑定class样式值，我们可以使用 v-bind 进行class值的绑定

将值设置为一个data数据，点击后调用函数 将该数据改变；

```
<div id="app">
        <div class="base" :class='mood' @click="changeMood">{{name}}</div>
</div>
//使用:进行v-bind的缩写形式，点击div后调用 changeMood函数

const vm = new Vue({
    el:'#app',
    data:{
       name:'yzd',
       mood:'normal',
    },
    methods:{
        changeMood(){
            this.mood = 'happy'
        }
    }
})
新建一个vm对象，绑定app，data数据中我们设置mood，
点击后 将mood的值 变为happy，适用于happy的class值
```

