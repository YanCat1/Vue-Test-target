**v-for 进行内容的遍历，遍历列表、对象、字符串**

这个过程我们可以在ul>li中进行显示，

有几个被遍历的内容就会生成多少个元素

```vue
<ul>
	<li v-for='(i,index) in info' :key='i.id'>{{i.id}}-{{i.name}}-{{i.age}}</li>
</ul>

data(){
	return {
		info:[
            {'id':'001',name:'张三',age:14},
            {'id':'002',name:'李四',age:15},
            {'id':'003',name:'王五',age:18}],
	}
}
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220628072713648.png" alt="image-20220628072713648" style="zoom:50%;" />

显示效果如图

我们虽然只写了一个li但是 数据有多少，我们就可以生成多个li

并且在里面进行遍历  i 代表我们遍历的内容 index代表当前内容的下标

而key很重要，是元素的唯一标识，最好不要用index下标去绑定

因为如果我们在中间插入元素 下标是会变化的，最好就是书写一个id进行绑定；



当然 除了列表 对象也可以遍历

```vue
<ul>
	<li v-for='val,key' :key='key'>{{key}}--{{val}} </li>
</ul>

data(){
	return {
		car:{
                name:'玛莎拉蒂',
                price:'200w'
        }
	}
}
```





