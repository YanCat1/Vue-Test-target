**v-cloak 一个属性 没有值**

如果我们的网络不好 引入Vue时 需要等一段时间，

vue没有接管我们body中的元素，那么界面上就会将我们书写的内容

不进行渲染就进行显示，体验不好

我们可以给元素添加  v-cloak 属性，配合css将其进行隐藏

```
<h2>{{name}}</h2>			{{name}}


<style>
	[v-cloak]{
		display:none;
	}
</style>
<h2 v-cloak>{{name}}</h2>			页面显示为空；
```

当加载完毕后v-cloak会自己进行删除；