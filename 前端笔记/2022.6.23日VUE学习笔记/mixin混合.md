**当我们一个数据 多个组件进行使用时，我们可以使用mixin 混合方式**

1. 我们需要先生命一个文件 将重复性的内容放入其中

   声明 mixin.js 文件

   ```
   mixin.js
   export const mixin={
   	data(){
   		return {
   			x:100,
   			y:100
   		}
   	}
   }
   我们不仅可以定义data数据 也可以定义函数或者生命周期钩子
   当它们重复了 也就是说 mixin中有 组件中也有 
   数据的话会使用组件中的数据 不使用mixin的
   生命周期钩子则会都进行使用
   
   ```

   **去到组件中使用 mixin.js**

   ```
   组件名为 myInfo.vue
   import {mixin,多个混合文件导出名,...,...} from '../mixin.js'
   在组件之下 再写一个配置
   mixins:[mixin,多个混合文件导出名,...,...]
   我们就可以使用了
   ```

   创建

   ![image-20220709152254214](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220709152254214.png)

​	使用

​	![image-20220709152342851](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220709152342851.png)

结果如下

![image-20220709152414433](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220709152414433.png)



我们除了可以进行局部混合外 还可以使用全局混合 但是我觉得那个不太方便

太混乱了