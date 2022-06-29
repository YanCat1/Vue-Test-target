上回在使用 v-for 遍历的时候就说 我们的key，元素的唯一标识

如果使用index下标的话 会出现问题，我们来看下问题内容

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220628075305142.png" alt="image-20220628075305142" style="zoom:50%;" />

当我们添加人员的时候，新元素老刘 对应的是文本框复制的张三的信息，

因为当我们添加它了 那么它的下标就是0，自然对应着之前0的信息内容

数据内容错乱了

```
<div id="app">
	点击后调用add方法，.once 只能使用一次；
    <button @click.once="add">添加人员</button>
    <ul>
        <li v-for="(i,index) in info" :key="index">
            {{i.name}}-{{i.age}}-{{i.id}}-{{index}}
            <input type="text"> 
        </li>

    </ul>
</div>

methods:{
    add(){
    	添加老刘对象
        const liu = {'id':'004',name:'老刘',age:28}
        this.info.unshift(liu)
    }
}
```

但是如果我们拿数据中的id属性 当做元素的key值呢？

![image-20220628075559219](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220628075559219.png)

这样 它们的唯一标识就会变为id，老刘的id为004，后面是空的

相当于这个input框 绑定给key的元素

只要key不变，input中的内容也不会变，它们绑定在一起了

```
<div id="app">
    <button @click.once="add">添加人员</button>
    <ul>
        <li v-for="(i,index) in info" :key="i.id">
            {{i.name}}-{{i.age}}-{{i.id}}-{{index}}
            <input type="text"> 
        </li>

    </ul>
</div>
```

注意 ：:key = 'i.id'