**元素绑定事件，绑定函数**

```
<div id='box'>
	<input @click='showInfo1' type="button" value="点我提示信息1">
	<input @click='showInfo2($event,66)' type="button" value="点我提示信息2">
</div>
<script>
	const vm = new Vue({
		el:'#box';
		data:{},
		methods:{
			showInfo1(){
				log('同学你好！！！')
			},
			showInfo2(event,n){
				log(event,n)
			}
		}
	})
</script>
当点击第一个按钮时，显示同学你好！！！
点击第二个按钮时 会显示第一个参数，也就是当前元素的event值，第二个为66
主要是我们可以使用传参的方式，进行点击事件的定义。
而且我们也可以使用$event,进行元素的事件内容获取。
```

v-on:click		==	@click

