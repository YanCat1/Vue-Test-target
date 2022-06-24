我们想让几个元素进行横向排列 

1. float	横向排列
2. margin 外边距

那么float带来的影响是 

元素脱标 脱离标准流

下面的元素需要清除浮动

**Flex布局(弹性布局)**

​		是浏览器提倡的布局模型(渲染快、性能高)

​		布局网页更加简单 方便

​		避免浮动脱标问题

​		但是对于低版本的浏览器是不支持的 （IE6、IE8）

**如果我们想要使用 flex布局 需要给父元素添加display:flex; 属性**

那么这个父元素成为弹性容器

而父元素中的子元素称为弹性盒子

**Flex包含两个轴 默认横向的为主轴、纵向的称为交叉轴**

当然这是默认情况，我们可以将其进行修改

弹性盒子元素默认沿着主轴进行排列的

![image-20220611090110286](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220611090110286.png)

首先 justify-content : flex-start;

​		这个是元素的排列方向 默认是从左向右

而 justify-content : flex-end;

​		修改元素的排列方向 从右向左

**justify-content：center；**

元素沿主轴进行居中。

**justify-content：space-around;**

每一个弹性盒子都有间距 视觉效果 盒子与盒子之间的间距大，两侧间距小；



**justify-content ：space-between；**

盒子分布在弹性容器两侧



**justify-content：space-evenly；**

盒子的间距相等



**align-items 交叉轴上的排列方式(上下排列)**

![image-20220611100634612](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220611100634612.png)

其实感觉最多使用的是居中效果；



**align-items:stretch;	**

如果弹性盒子没有自己的高度，那么我们给弹性容器添加该属性的话

弹性盒子会将整个弹性容器占满；



但是如果我们不想所有的元素都添加 align-items 属性

只想让其中一个元素进行居中效果；那么可以使用 **align-self** 属性

![image-20220611101304499](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220611101304499.png)

注意 需要给单独的弹性盒子进行效果添加； 

如果我们弹性布局中的弹性盒子没有自己的高度，那么我们的弹性盒子会占满整个弹性容器，因为默认值是 align-items：stretch；



如果弹性盒子没有宽度呢？

不会占满整个弹性容器，会变为内容的大小，内容大多 宽度就多

内容少 宽度就小；



**占据弹性容器的剩余宽度  flex 属性**

我们可以设置flex的取值，如果都是1 那么宽高是相同的 4/1

如果其中一个元素设置flex：2那么它的宽高要占据4/2 其他元素等比例缩小

