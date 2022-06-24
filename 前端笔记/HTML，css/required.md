### required

给表单元素添加必选的一个属性

```js
<form>
	<input type = 'text' required>					//该内容为必填字段
</form>
```



### 某一个表单控件都需要添加label组件以此扩大可点击范围

```js
<label>
	<input type='radio' required value='单选' />
</label>
```

如果我们是添加radio需要注意，设置name属性 两个radio的name属性相同，那么才能进行单选

否则都是多选

```js
<label for='the_radio'>
	<input id='the_radio' type='radio' required name='aaa' />单选
</label>

<label for='out_radio'>
	<input id='out_radio' type='radio' required name='aaa'/>单选
</label>
```

以上 label的绑定id为各自的input的id，name相同那么我们就只能选择其中一个



### 表单控件的Value属性

当type == text、password等文本输入框类型时，我们提交的name值后面跟着输入框中的内容

```js
<form action='http://www.baidu.com'>
	<label for='user_name'>
		<input id='user_name' type = 'text' name='user_name' placeholder='输入你的用户名'>
	</label>
</form>
//我们输入yzd
地址栏内容 ：https://www.baidu.com/?user_name=yzd
```



但是type为radio和chekbox时呢？

```js
<form action='http://www.baidu.com'>
     <label for='user_name'>
         <input type="radio" name="std" id="user_name" value="aaa">
         <input type="submit" value="提交">
      </label>
</form>                                                                                   当我们选中该按钮时，我们提交 地址栏会出现
https://www.baidu.com/?std=aaa        
// 如果没有选中 我们的name=value 值的内容就不会出现
https://www.baidu.com/?
```

### 如果想要某个表单控件被默认选中，我们可以使用checked属性

```js
<form action="">
        <label for="">
            <input type="radio" name="" id="" checked> 单选默认
        </label>
</form>
```







