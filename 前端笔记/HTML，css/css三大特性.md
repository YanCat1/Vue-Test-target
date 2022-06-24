**css的三大特性**

继承性

​	子元素有默认继承父元素的特点

​	比如color font-size...

​	可以通过调试工具判断样式是否可以进行继承

```html
<div style="color:red;">
    dadadasds
    <h2>dwdadsad</h2>
</div>
```

![image-20220526173050362](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220526173050362.png)

![image-20220526173255916](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220526173255916.png)

继承的应用：

​	在一定程度下，能够进行代码的减少



层叠性

​	给一个元素添加样式，这些样式都会作用于该元素上

​	如果有相同样式被设置，但是值不同，会根据优先级进行设置



优先级

