1. 先引入 vue.js 文件

2. 新建vue实例对象

   ```vue
   const app = new Vue({
   	el:'#app',
   	data:{
   		
   	}
   })
   ```

   data 暂时我们先写成一个对象 等到组件时  我们去改成对象形式；

   注意 当我们新建两个相同的vue实例时 会解析第一个 但是第二个不会进行解析

   ```vue
   <div class='app'>
   	<h1>{{name}}</h1>
   </div>
   
   <div class='app'>
   	<h1>{{name}}</h1>
   </div>
   
   const app = new Vue({
   	el:'.app',
   	data:{
   		name:'yzd'
   	}
   })
   ```

   <img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220623075611878.png" alt="image-20220623075611878" style="zoom:50%;" />

我们就会发现 第一个被解析了 但是第二个并没有被解析

所以 vue实例只会找到第一个被绑定的元素 而不会找到下一个



我们的容器 与vue实例 是一对一的状态

不能多个容器对应一个实例

也不能多个实例对应一个容器



我们在模板中 也可以去写表达式

```
<div class='app'>
	<h1>{{name.toUpperCase()}}</h1>	将name的内容大写
</div>

<div class='app'>
	<h1>{{name}}</h1>
</div>
```

