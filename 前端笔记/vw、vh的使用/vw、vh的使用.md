移动适配:

​	vw、vh

​	是 viewport width  \  viewport height ;

​	1 vw = 1/100 视窗宽度

​	1 vh = 1/100 视窗高度

如何计算元素的vh 、 vw

比如 我们一个屏幕宽度是 375，那么我们的百分之一就是3.75

375 的百分之1 		3.75

1263 的百分之1  	12.63

直接计算器算就完事了  1263 / 100 = 12.63

那么 我们确定了 屏幕的宽度为 1263

页面的一个元素是 68px 那么它转换为vw值应该是多少呢？

68 / 12.63 = 5.3vw	所以它的vw是 6.8



再比如 屏幕宽度是 375

1vw = 3.75	

68px转为vw是 68 / 3.75 = 18.1 vw;



**将css文件生成到同级目录 第一行写  //out ./ 即可**

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220617165423745.png" alt="image-20220617165423745" style="zoom:50%;" />



建议宽高都以 vw \ vh 一个值进行计算设置，否则全面屏适配会有问题

```less
vw的1% = 3.75
元素的宽度为 86 高为 29
width:(86 / 3.75vw);
height:(29 / 3.75vw);
以一个方向的百分比值 进行计算会好一点
```

