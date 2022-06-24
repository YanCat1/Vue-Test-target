position：定位属性 

值：

​	     relative						    相对定位

​		 fixed								固定定位

​		 absolute						 绝对定位

相对定位是相对于之前的位置进行移动

固定定位是相对于浏览器进行定位

绝对定位是根据设置了relative的父元素进行定位

如果没有父元素设置relative就相对于窗口进行定位

**子绝父相**

这个代表的是子元素根据父元素进行移动，子元素添加绝对定位、父元素添加相对定位。





元素的层级关系调整

文档流 < 浮动元素 < 定位元素

但是这些层级关系我们是可以使用z-index去调整的。

需要注意：

 	1. 只能改变浮动或者定位元素
 	2. 注意元素的嵌套关系，是同级 而不是嵌套的父子关系。

```html
<style>
    #box{
        width:200px;
        height:200px;
        background:red;
        position: relative;
        z-index: 1;
    }
    .box{
        width:200px;
        height:200px;
        background:green;
        position: absolute;
        top:20px;
        left:20px;
        z-index: 0;

    }
</style>
<div id="box"></div>
<div class="box"></div>
    
```

