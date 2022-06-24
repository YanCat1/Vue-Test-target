transform其中属性 rotate：

​	单位一般为deg，角度

​	transform：rotate(360deg);				旋转一圈

```css
div:hover{
    transform: rotate(-360deg);
}
```

修改元素的基点，也就是说 该元素默认是以中心点进行旋转的，但是我们想要以左边为起点开始旋转

那么我们需要进行基点的重新设置。

transform-orgin：左右 上下；

取值为：

​	top、right、bottom、left、center。

```css
transform-origin:left bottom;
transform-origin:center bottom;
```

它是用来修改转换的中心点，也就是说 之后的放大缩小的中心点 它也能改。

并不局限于旋转这一个属性。

用来修改元素的中心位置 transform-orgin:左右 上线。