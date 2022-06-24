**用于观察监视其属性的变化**

如何进行使用？

1. 在vm实例中进行使用

   ```vue
   <div id="root">
       <h2>今天的天气很{{info}}</h2>
       <input type="button" value="点击切换天气" @click="changeW">
   </div>
   
   data:{
      name:'yzd',
      isHot:true
   },
   
   methods:{
       changeW(){
           this.isHot = !this.isHot 
       }
   },
   
   computed:{
       info(){
           return this.isHot?'凉爽':'炎热'
       }
   }
   
   watch:{
   	info:{
   		immediate:true,
   		handler(newValue,oldValue){
   			log('之前的天气很'+oldValue,'现在的天气很'+newValue)
   		}
   	}
   }
   ```

   watch是用于监视属性变化的，能够拿到该属性的当前值和之前的值

   有一个配置immediate,用于在info变化之前就输出handler中的值

   但是只会拿到现在的值，因为它没有改变 没有之前的值。

   

2. **直接在vm对象上调用$watch进行属性监视。**

   vm.$watch('info',{

   ​		handler(newValue,oldValue){

   ​				log('之前的天气很'+oldValue,'现在的天气很'+newValue)

   ​		}

   })

   一种用于在定义属性的时候就知道该监视什么属性。

   另外一种用于后期追加去进行属性监听的。