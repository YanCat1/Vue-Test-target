**键盘事件不能使用 @click了 需要使用 @keydown / @keyup**



按键的别名：

.enter					回车按键

.delete				  删除

.esc					   退出

.space				  空格

.tab					  换行(会改变焦点 特殊 必须配合keydow使用)

.up					   上

.right				   右

.down				 下

.left					 左



特殊修饰键位：

ctrl、shift、alt、meta(win键)

配合keydown进行使用比较好。



```html
<div id='root'>
	<h2>{{name}}</h2>
	<input type='text' @keyup='showInfo' />
</div>

methods:{
	showInfo(e){
		e.keyCode == 13?log(e.target.value):''
	}
}
以上是普通的判断按键 输出的方式，当当前案件的键值为13时 输出input中的内容
我们可以使用修饰符进行简写
<div id='root'>
	<h2>{{name}}</h2>
	<input type='text' @keyup.enter='showInfo' />
</div>

methods:{
	showInfo(e){
		log(e.target.value)
	}
}
@keyup.enter			当按下回车键时...
```

我们也可以自己给某个按键进行别名的设置

Vue.config.keyCode.huiche = 13

之后使用 huiche 也就是找到了enter