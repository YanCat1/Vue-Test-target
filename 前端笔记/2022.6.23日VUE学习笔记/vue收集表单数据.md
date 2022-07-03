收集表单的数据 需要使用v-model进行，因为它是双向绑定，你输入的信息 它都能拿到。

```
<input type='text' value='account' />

data(){
	return {
		account:''
	}
}
我们输入值为多少，那么vue实例中data的account值就会是多少。
```

单选的需要改变下

```
女<input type='radio' value='female' v-modele='sex' />

data(){
	return {
		account:'',
		sex:'female'
	}
}

我们的vue会获取表单元素的value值，就会拿到这个female，
我们如果在sex写上 female 就会默认选中女

```

![image-20220630070556263](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220630070556263.png)

如果我们想要获取的是多个值 比如多选框，只写一个data数据是不行的，

它会将所有内容都勾选，我们需要将其变为数组形式；

```
<input type='checkbox' value='study' v-model='hobby'/>学习
<input type='checkbox' value='eat' v-model='hobby'/>吃饭
<input type='checkbox' value='study' v-model='game'/>打游戏

data(){
	return {
		hobby:[],
	}
}
```

当我们勾选时，hobby数组中就会有数据

![image-20220630071510329](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220630071510329.png)

是根据我们勾选的顺序进行数据的存储；

我们的下拉列表就跟正常的数据绑定一样了，如果想显示默认值

可以直接给数据绑定value值；

```
<select name="" id="" v-model="city">
    <option value="jinshuiwanda">金水万达</option>
    <option value="daxuelu">大学路</option>
    <option value="jianye">建业</option>
</select>
data(){
	return {
		city:'jinshuiwanda'
	}
}
```

![image-20220630071856058](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220630071856058.png)

而<textarea>标签，我们直接进行绑定即可

```
<textarea value='' v-model='other'></textarea>
data(){
	return {
		other:''
	}
}
```

我们在文本框中输入的内容，会放入value中，而v-model绑定的就是value

所以 other的值也会进行改变。

![image-20220630072517722](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220630072517722.png)



![image-20220630072523657](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220630072523657.png)

如果我们的多选框 checkbox只有一个值时，我们不用写成数组形式

直接让他用true/false即可

```
<input type='checkbox' value='' v-model='agree' />
data(){
	return {
		agree:false
	}
}
```

当我们勾选时 agree就会变为true，如果一开始就想是true，那么我们可以直接将data中 agree的值变为true。



当我们点击submit提交时，界面会默认刷新，数据全部消失，我们可以给其添加一个方法，将其默认行为进行阻止；

```
<form @submit.prevent='demo'></form>

点击提交时 阻止默认的页面刷新 .prevent
那么我们的demo方法 设计的是 获取页面所有想要提交的数据
```

那么我们在设计时 将用户的信息 都存储到一个对象中

userInfo 然后页面v-model绑定的都是userInfo中的数据

```
<script>
const vm = new Vue({
    el:'#app',
    data:{
        userInfo:{
            account:'',
            password:'',
            sex:'female',
            hobby:[], 
            city:'jinshuiwanda',
            other:'',
            agree:false
        }
    },
    methods:{
        demo(){
            console.log(this.userInfo);
        }
    }
})
数据层
```

视图层;

```
<form @submit.prevent="demo">
    账号: <input type="text" v-model = "userInfo.account" autocomplete>
    <br><br>
    密码: <input type="password" v-model = 'userInfo.password' autocomplete>
    <br><br>

            男<input type="radio" name='gender'v-model='userInfo.sex' value="male">
            女<input type="radio" name='gender' v-model='userInfo.sex' value="female">
    </label>
    <br>
    爱好<input type="checkbox" value="eat" v-model="userInfo.hobby">吃饭
        <input type="checkbox" value="study" v-model="userInfo.hobby">学习
        <input type="checkbox" value="game" v-model="userInfo.hobby">打游戏
    <br>
    所属校区
    <select v-model="userInfo.city">
        <option value="jinshuiwanda">金水万达</option>
        <option value="daxuelu">大学路</option>
        <option value="jianye">建业</option>
    </select>
    <br>
    其他信息:<textarea cols="30" rows="10" v-model="userInfo.other" value=""></textarea>
    <br>
    <label for="Itrue">
        <input id='Itrue' type="checkbox" v-model="userInfo.agree" value="">阅读并接受<a href="">《用户协议》</a>
    </label>
    <br>
    <input type="submit">
</form>
```

```
<input type='number' />	设置内容只能输入数字
```

v-model 的修饰符注意 是 v-model的所以只能给v-model 加

```
输入内容转为数字
<input type='text' v-model.number='value' />	

将输入内容的首位空格去掉
<input type='text' v-model.trim='value' />

内容懒加载，当添加 lazy的元素 失去焦点时，才添加内容 否则不添加
<input type='text' v-model.lazy='value' />

```

```
<div>
    <br>
    只能输入数字
    <input type="number" v-model='number' value="">
    <br><br>
    去掉首位空格 但中间的空格无法去掉
    <input type="text" v-model.trim="space" value="">
    <br><br>
    失去焦点时 将数据提交，不用每次都看，懒加载
    <input type="text" v-model.lazy="out" value="">
</div>

const vm = new Vue({
    el:'#app',
    data(){
        return {
            number:'',
            space:'',
            out:''
        }
    }
})
```

