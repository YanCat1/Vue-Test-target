我们的元素 可以使用 el:'#app' 进行绑定

也可以使用第二种方式：

```
<div id='app'></div>
const app = new Vue({
	第一种方式 直接进行元素的绑定；
	el:'#app',
})
app.$mount('#app')
第二种方式 挂载的方式，可以更加动态的去操作元素
```

data的两种书写方式

1. 使用对象的方式去书写

   ```
   const app = new Vue({
   	el:'#app',
   	data:{
   		
   	}
   })
   ```

2. 将data定义为一个函数进行书写

   ```vue
   const app = new Vue({
   	el:'#app',
   	data(){
   		return {
   			name:'yzd',
   			age:13
   		}
   	}
   })
   ```

   在之后我们进行组件化开发的时候 都需要将data写为一个函数；

   使用函数式的this指向 指向的是Vue本身

   如果我们将其写为箭头函数的形式，那么this指向就为window

   因为箭头函数没有自己的this就会向外进行寻找；

   ```
   data:()=>{
   	
   }
   ```

   