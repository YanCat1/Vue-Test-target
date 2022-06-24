结构伪类选择器可以根据元素在HTML中的结构关系直接查找元素

优势 减少对于HTML类的依赖，保持代码整洁

场景： 经常用于查找父级选择器中的子元素

ele:first-child{}					匹配父元素中的第一个子元素

ele:last-child{}					 匹配父元素中的最后一个子元素

ele:nth-child(n){}				 匹配父元素中第n个子元素

ele:nth-last-child(n){}		 匹配父元素中倒数第n个子元素

```html
<style> 
    li:first-child{					//找到li中第一个
        color:red;						
    }
    li:last-child{					//找到li中最后一个
        color:red;
    }
    li:nth-child(3){				//找到li中第三个
        color:red;
    }
    li:nth-last-child(2){			//找到li中倒数第二个
        color:red;
    }
</style>
<div id="box">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
</div>
```

![image-20220526222041152](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220526222041152.png)

在括号中 我们的n也可以为公式

ele:nth-child(n){}

ele:nth-last-child(n){}



n的值为2n/even时						找到所有的偶数

n的值为2n+1/2n-1/odd时			找到所有的奇数

n的值为 -n+5 时							 找到前五个，不包含第五(任意)

n的值为 n+5 时							  找到五个之后的，不包含第五(任意)



但是 我们想要查找这样的结构

![image-20220526223144752](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220526223144752.png)

我们如果找li:first-child{ }	只能找到前面的实心小圆点

那么我们就需要使用

```css
li:first-child a{

}
或者
li:first-child>a{

}
```

扩展：

ele:nth-of-type(){ css }

可以根据元素的类型去查找，也就是标签的名字

```html
li:nth-child(3){				//我们li中第三个位置是div，所以找不到
  color:red;					//小括号写6才行
}
li:nth-of-type(3){
  color:red;					//根据类型，只找第三个li 没问题
}
<div id="box">
    <li>11</li>
    <li>22</li>
    <div>aaa</div>
    <div>aaa</div>
    <div>aaa</div>
    <li>33</li>
    <li>44</li>
    <li>55</li>
</div>
```

