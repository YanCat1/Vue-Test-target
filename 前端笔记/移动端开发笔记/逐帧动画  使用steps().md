首先 秒针时间为60s，所以动画持续时间就是60s，steps(60)

这样指针就会一秒移动1，直到60s结束 这是逐帧动画

```css
@keyframes change{
	from{
		transfrom:rotate(0deg);
	}
	to{
		transfrom:rotate(360deg);
	}
}
设置了 从0deg到360deg 一圈。之后在元素中调用

img{
	transform-orgin:bottom;
	animation:change 60s steps(60).
}
注意需要重新设置下基点位置，否则是以元素中心进行移动的
```

逐帧动画一般是配合精灵图进行使用的，而补间动画是比较常用的效果

也就是不加 steps() 这个属性