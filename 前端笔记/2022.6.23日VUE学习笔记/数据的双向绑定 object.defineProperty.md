ES6中的一个函数 可以对元素进行多种操作，高级函数

Object.defineProperty('对象名','添加的属性名','配置项')

```
person = {
	name:'yzd',
	gender:'男'
}
使用 Object.defineProperty() 函数添加age:18;
Object.defineProperty(Person,'age',{
	value:18,
	enumerable:true,		// 控制元素是否可以被遍历
	writable:true,			// 控制元素是否可以被修改		
	configurable:true		// 控制元素是否可以被删除
})
我们可以单独针对其内容进行操作，之后还有get、set
```

当然我们也可以这样去做：

```js
1. 声明一个变量，在对象中进行使用
let age = 13
Object.defineProperty(person,'age',{
	get(){
		return age
		console.log('有人读取age属性了')
	},
	set(value){
		age = value
		console.log('有人修改age属性了')
	}
})
```

这个目的就是 使用该方法绑定age这个变量

我们使用get时 会去读取age的值 ，获取进行显示

如果我们修改时 会调用set 获取修改后的值，然后将age的值赋值给value

 