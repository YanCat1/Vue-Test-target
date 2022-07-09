首先 我们先熟悉下结构 

**main.js 入口文件 在里面导入Vue、App.vue**

​		在这个文件中 我们需要创建vue实例 进行根标签的绑定 #app



**App.js 所有组件的父组件，我们将所有组件在该文件注册，它有模板等属性**

​		首先 在script标签中 有自己的name属性，也有components属性，用于注册其他子组件；

​		注册前需要先引入 再注册



**components 文件夹**

​		在该文件夹中 我们需要书写子组件 使用模板等方法

​		有自己的名字 data(){ return { } }

**我们先来看子组件中的内容;**

```
//文件名为 myInfo.vue
<template>
	<div id='box'>
		<h2>我的名字是：{{name}}</h2>
		<h2>我的年龄是：{{age}}</h2>
	</div>
</template>

<script>
	export default{
		name:'myInfo',
		data(){
			return {
				name:'yzd',
				age:13
			}
		}
	}
</script>
<style><style>
```

子组件创建完毕 去到所有组件的父亲 App.vue 中

```vue
<template>
	<div>
		<myInfo></myInfo>
	</div>
</template>
<script>
	import myInfo from './myInfo.vue'

	export default{
		name:'App',
		components:{
			myInfo
		}
	}
</script>
<style></style>
```

父组件 App.vue 已经构建完成 去到 mian.js 中生成实例对象去

```vue
import Vue from 'vue'
import App from './App.vue'

new Vue({
	el:'#app',
	render:h=>h(App)
})
```









