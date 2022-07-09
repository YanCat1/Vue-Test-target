当我们想获取页面元素时 需要设置id、class或者通过标签名去获取

现在 我们可以使用ref属性进行完成

1. 给我们需要获取的元素设置ref的值

```
<h1 ref='show'></h1>
<button @click='show'>点我获取h1元素</button>
```

2. 设置show函数 通过refs获取

```
methods:{
	show(){
		log(this.$refs.title)
	}
}
输出即可
```



**但是 如果我们给组件标签添加呢？它会得到一个什么样的值？**

```vue
<div>
	<myInfo ref='info' />
</div>

methods:{
	show(){
		log(this.$refs.info)
	}
}
```

![image-20220709102834267](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220709102834267.png)

我们得到的是组件的实例对象，之后有用

