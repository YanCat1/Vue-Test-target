**使用vue进行样式的绑定 通过class值 **(添加单个样式)

字符串写法，适用于样式的类名不确定，需要进行动态指定时

```vue
模板
<div id="root">
    <div class="basic" :class="mood"  @click="changeMood">	{{name}}</div>
</div>

data:{
   name:'yzd',
   mood:'normal'
},
methods:{
    changeMood(){
        this.mood = 'happy'
    }
}

//首先在模板中 我们定义一个动态变换的class mood，它的值是data中的mood
我们点击之后将data中的值进行改变，那么它的class值就改变为'happy'
我们就将.class 值为happy的样式添加给它。
```

**当我们需要同时添加多个样式时 **

我们可以将其样式 使用数组进行存储，然后通过点击操作，将其数组内容进行删除

数组形式适用于需要绑定的样式个数不确定，名字也不确定。

```vue
<div class="basic" :class="classArr" @click="remover">
	{{name}}
</div>

data:{
	classArr:['atguigu1','atguigu2','atguigu3']
},
methods:{
	remover(){
        this.classArr.shift()
    }
}
当我们点击时，调用remover方法，将classArr数组中的第一个元素进行删除
其样式也就取消了，点击第二个第三个，进行样式删除效果，也可以做三个按钮，分别代表取消对应样式，不难。
```



**绑定样式的对象写法：**

适用于要绑定的个数确定，名字确定，但是要动态确定用不用的时候

```
<div class="basic" :class='classObj'>{{name}}</div>

data:{
	classObj:{
		atguigu1:false,
		atguigu2:false
	}
}
那么现在两个样式都不会进行使用，因为值为false，只有在切换为true时才适用
```

js操作数组的方法：

push()				在数组末尾处压入数据

unshift()			在数组开头压入数据

shift()				 删除数组中第一个数据

pop()				  删除数组中最后一个数据

sort()				  将数组内容进行降序排序



**进行行内样式的改变**

```vue
<div :style='styleObj'>
	{{name}}
</div>

data:{
	styleObj:{
       fontSize:'40px',
       color:'red',
       backgroundColor:'orange'
   }
}
当我们的行内样式需要进行改变时，我们可以使用对象的方式进行值的更改
而且 如果样式是两个单词的话，那么我们需要进行小驼峰的方式更改。
将值写为一个字符串内容。将data中的数据放到 :style='styleObj' 中
一定要记得加 v-bind 否则值不会被vue解析。
```

