Vue是基于MVVM模型进行开发的框架（model-View-View Model）



M		  model		 （数据）

V			View			（视图）

VM		视图模型		链接数据与视图的桥梁

vue实例可以访问到vue上的所有属性以及方法。



**数据代理**

Object.defineproperty : 该方法用于给对象添加属性。

```js
let person = {
	name:'yzd',
	sex:'男'
}
想要给person添加age属性为18。
Object.defineproperty(person,'age',{
	value:18
})
log(person.name)				//yzd
log(person.age)					//18
```



使用 Object.defineproperty() 添加的属性 不可被枚举(遍历)

for...in...遍历，在js中可以这样写

```js
let person = {
	name:'yzd',
	sex:'男'
}
for(let key in person){
	log('@'+person[key])
}
Object.defineproperty(person,'age',{
	value:18
})
//	@yzd
//	@男
我们会发现，后期加的 age，没有被遍历出来，这就是不可被遍历。

```

Object.defineproperty（）有很多配置项。

能否被遍历也是一个开关。

能否被修改也是一个开关。

控制属性能否被删除也是一个开关。

```js
Object.defineproperty(person,'age',{
	value:18,
	enumerable:true,		//设置为true,那么就可被遍历,默认值为false
    writable:true			//控制属性是否能被修改，默认false
    configurable:true		//控制属性能否被删除，默认false。
})
```



数据绑定的原理(大概)：

```js
let number = 18
let person = {
	name:'yzd',
	gender:'男'
}
//在向 person对象中添加age属性，值为number变量
Object.defineproperty(person,'age',{
	get(){
		log('有人读取age的值了')
		return number
		// 这时 我们修改number的值 person.age的值也会进行修改 绑定
	},
	set(value){
		log('有人修改number的值了')
		//这个时候 我们如果person.age 去修改number的值 不会进行改变
		number = value
	}
})
```

```js
 <script>
        let number = 18
        let person = {
            name:'yzd',
            gender:'男'
        }
        Object.defineProperty(person,'age',{
            get(){
                return number
            }
        })
        console.log(person);
    </script>  
```

![image-20220513231854258](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220513231854258.png)

![image-20220513231907645](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220513231907645.png)

值为动态获取的18



值的修改

![image-20220513232151819](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220513232151819.png)

那我们怎么去改 age的值呢？

只能用另外一个函数set

```js
<script>
        let number = 18
        let person = {
            name:'yzd',
            gender:'男'
        }
        Object.defineProperty(person,'age',{
            get(){
                return number
            },
            set(value){
                number = value
            }
        })
        console.log(person);
    </script>  
value就是age的值，我们让number赋值为value，number的值也就会改变
```

![image-20220513232526281](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220513232526281.png)

为什么age的值被获取和修改会调用get()和set呢？

因为这个Object.defineProperty()就是在添加age这个属性，所以我们获取修改都与age属性有关系。







