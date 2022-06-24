BootStrap 框架：

​	能够快速的搭建 响应式的网站页面

​	那么我们使用它 原理是什么 ，它靠什么来完成网页的响应式？

​	**依靠的是 栅格系统；**

​		它将我们的网页进行 12 等份

​	<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220622144726217.png" alt="image-20220622144726217" style="zoom:50%;" />

1. 想要使用 bootstrap 框架进行页面响应式布局 需要进行文件引入

   引入css 中的 bootstrap.min.css 样式 随后进行样式的添加

2. 根据屏幕宽度 查看元素应该占的份数 比如 当屏幕大于1200时 一行显示4个div

   ```
   <div class='container'>
   	<div class='col-lg-3'></div>
   	<div class='col-lg-3'></div>
   	<div class='col-lg-3'></div>
   	<div class='col-lg-3'></div>
   </div>
   为什么写 col-lg-3 呢？
   因为 col-lg为大屏适配 当屏幕>=1200px时显示的效果
   因为有4个div 占据一行 一共有12个栅格 那一个div就是 3 个,将其平分
   ```

3. 如果在中屏中想要一行排列两个元素

```
<div class='container'>
	<div class='col-md-6'></div>
	<div class='col-md-6'></div>
	<div class='col-md-6'></div>
	<div class='col-md-6'></div>
</div>
因为是中屏 需要大于 992px时才会有效果 我们需要写 col-md 
因为是一行两个元素 所以我们需要写 6	将12个栅格进行平分  6*2 = 12
```

在bootstrap中 有特定的类

​		.container	所有适用于该类的盒子 都会被设置版心的效果 进行宽度设置和居中显示效果

​		.container-fluid	所有添加该类的盒子宽度都是100% 

​		分别使用.row类名和.col类名来定义行与列

**注意**

​		.container	自带间距 15px

​		row类自带间距 -15px

所以 如果之后写项目 不想要.container自带padding-left

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220622215736194.png" alt="image-20220622215736194" style="zoom:50%;" />

1. 可以直接设置为0px

2. 可以使用 .row 进行抵消

   ```html
   <div class='.container'>
   	<div class='row'></div>
   </div>
   ```

   <img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220622215633372.png" alt="image-20220622215633372" style="zoom:50%;" />

当我们使用 .container 时 会出现版心的效果

那么想要让元素占满整个width空间 该怎么去做呢？

可以使用 .container-fluid 

![image-20220622220141307](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220622220141307.png)

```html
.container-fluid{
		background:pink;
}
<div class='container-fluid'></div>
```



在全局css样式中有一些实例我们拿过来是可以直接进行使用的 所以，可以直接复制粘贴

而且 想要使用多个 只需要在class后面添加它的值就好了；

**bs中的字体图标**	

​		它使用的是伪元素方法，我们需要复制其类名 声明一个元素 赋值为该类名

```html
.glyphicon-qrcode:before {
            content: "\e039";
            font-size: 110px;
            color:red;
        }
<i class="glyphicon glyphicon-qrcode"></i>
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220622222203834.png" alt="image-20220622222203834" style="zoom:50%;" />
