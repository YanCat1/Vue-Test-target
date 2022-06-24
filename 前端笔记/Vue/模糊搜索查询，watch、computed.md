**完成输入内容，模糊查询的效果**

![image-20220520150417826](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220520150417826.png)

1. 使用监视属性watch进行完成

   我们这次不能使用简写形式，因为在监视之前需要将内容先进行绘制

   ```
   <ul>
       <li v-for="(item,index) in newNames" :key="item.id">
           {{item.name}} - {{item.age}} - {{item.sex}}
       </li>
   </ul>
   
   data:{
   	names:[
          {id:'001',name:'马冬梅',age:19,sex:'女'},
          {id:'002',name:'周冬雨',age:20,sex:'女'},
          {id:'003',name:'周杰伦',age:21,sex:'男'},
          {id:'004',name:'温兆伦',age:22,sex:'男'}],
       newNames:[],
       keyWord:''
   },
   
   watch:{
   	keyWord:{
           immediate:true,
           handler(newValue){
               this.newNames = this.names.filter((p)=>{
                       return p.name.indexOf(newValue) != -1
               })
           }
   	}
   }
   ```

   1. 使用v-model:value 进行输入值的获取，与data中的值进行绑定

      当我们修改文本框中的值 data中的 keyWord也会进行改变。

      

   2. 当keyWord值发生变化，我们在watch中就可以监听到，

      我们会对其进行一个筛查，在names数组中找每一个元素的name键的下标

      是否有我们传入的新值，如果不等于-1证明找到该元素的下标了，如果为-1

      就是没有找到。

   	   3. 我们会将找到的内容，赋值给 this.newNames 这个变量去，我们上面遍历		   这个数组，进行显示。

   4. 我们可能会这样想，我们这列表一开始不是空的吗？那什么东西都没有啊

      绘制什么东西？这就是我们定义 immediate:true, 这个配置的目的

      一开始会先进行监视一遍，但是我们的keyWord是空的，所以我们能找到所有的东西，将其进行绘制。

      随后再进行模糊查询即可。