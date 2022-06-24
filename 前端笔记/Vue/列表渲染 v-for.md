我们需要批量将数据显示在页面中，遍历是最方便的方式

我们使用v-for就可以办到

```vue
绘制在页面中
<div id='root'>
	<ul>
        <li v-for='(item,index) in person' :key='index'>
            {{item.name}}-{{item.age}}
        </li>
	</ul>
</div>
你要有数据
data:{
	person:[
		{id:'001',name:'张三',age:18},
        {id:'002',name:'李四',age:19},
        {id:'003',name:'王五',age:20}
	]
}
首先 v-for加在什么元素上，就会在哪个元素中进行遍历 我加在<li>中
就会将数据绘制在<li>标签上
然后 我们v-for的参数可以拿两个 一个item代表值，index代表我们的下标位置
而key就是它们的标识 不可重复，暂时先拿下标进行赋值
```

![image-20220519215132066](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220519215132066.png)

除了遍历数组，我们也可以遍历对象

```vue
模板
<h2>汽车列表</h2>
        <ul >
            <li v-for='(item,key) in car' :key="key">
                {{item}}-{{key}}
            </li>
        </ul>
数据如下
data:{
	car:{
		name:'yzd',
		age:13,
		gender:'男'
	}
}
在遍历对象时，item代表值，而key则代表对象的键
```



**KEY的原理**：

key是当做数据的唯一标识进行使用的，我们进行增 删 改 查，都需要用到

而在Vue中key主要是进行diff对比算法

其实我们使用index用作key也是可以的，但是当破坏元素顺序时，我们的下标会变化，那么久会造成虚拟Dom比对失败，界面重绘，效率变低，数据混乱

而我们使用id唯一标识作为key，可以正常进行比对，新添加的元素也不会影响diff比对，不会造成重绘，比较方便。



开发中如何选用key？

可以使用id值，手机号，身份证号，学号等唯一值。

如果不存在数据的逆序增加，逆序删除等破坏顺序的操作，那么使用index为key是没有问题的

![image-20220519223231263](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220519223231263.png)

虚拟DOM比对，如key相同，文字节点相同，元素节点相同，直接绘制

如不同 会重绘，相同直接拿来用

如没有 直接进行重绘