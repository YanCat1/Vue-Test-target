**数据代理，通过一个对象代理对另一个对象中属性的操作(读/写)**

```js
let obj={x:3}
let obj2={}
Object.defineProperty(obj2,'x',{
    get(){
        return obj.x
    },
    set(value){
        obj.x = value
    }
})
console.log(obj2.x,obj.x);
```

1. 首先我们想要obj2也添加x属性，值为 obj的x值，我们就得去获取obj.x

2. 使用 Object.definproperty() 给obj2添加x属性，值使用get()进行获取，

   直接将obj.x当做返回值给到 obj2.x

3. 我们在改变obj2.x 的过程中还想改变 obj.x

   1. 但是我们知道，改变obj2.x的数据 对obj.x没有任何影响，所以我们使用set

   2. 当我们修改时，obj2.x的值会当做value，进行传入，我们只需要将

      value赋值给obj.x就好了。



那在Vue中也是这样的；

```vue
<div id="box">
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>
</div>

<script>
    const vm = new Vue({
        el:'#box',
        data:{
            name:'尚硅谷',
            address:'苏州'
        }
    })
</script>
```

以上的数据代理过程是一样的，我们的数据就是data中的数据

1. 将data中的数据渲染到页面，通过get()
2. 修改vm.name / vm.address 就会找到data中的指定属性进行修改使用set()

我们可以这样去验证，

1. 输出 vm.name				'尚硅谷'

2. 将其进行重新赋值 vm.name = 'yzd'

3. 输出 vm找到data属性，打开看到name = 'yzd'

   ![image-20220518110414274](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220518110414274.png)



**数据代理在什么时候进行代理的？**

我们data中的数据会给到_data，然后_ _data又赋值给了name、address，使用的就是Object.definproperty() 

这样我们可以直接从vm中获取name和address，进行界面内容显示

并且还可以使用其 set()方法进行数据修改，改的是name，name又返回给_data

_data 又返回给data{}中的数据。

![image-20220518111949903](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220518111949903.png)