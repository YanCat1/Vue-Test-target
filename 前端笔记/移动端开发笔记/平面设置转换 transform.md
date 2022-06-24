**使用transform能够实现元素的位移、旋转、缩放等效果**

平面转换：

 1. 改变盒子在平面的形态(位移，旋转，缩放)

 2. 进行2d转换

    使用transform 进行元素的位移：

    ​	transform：translate(100px,100px);

    ​	该样式使元素进行右下的移动

    ```css
    img:hover{
       transform: translate(500px,100px);
    }
    ```

​	我们单独设置一个方向进行移动的话，可以写 (0px,100px)

​	也可以设置 transform：translateX(100px) \ transform：translateY(100px)

​	