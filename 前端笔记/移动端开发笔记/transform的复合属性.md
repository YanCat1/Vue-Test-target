当我们想要元素进行late位移并且旋转时rotate

我们可以使用复合属性

```css
transform:translate(100%,0px) rotate(360deg);
```

transform : 位移 旋转；

跟背景图片的复合属性一样以空格进行链接

可以去尝试多用伪元素哦；



如果我们先进行旋转 再进行位移，像这样

```css
transform:translate(200%,0px) rotate(360deg);
```

那么元素会边转 边位移，跟我们想实现的效果不一样了



如果把两个属性分开写，下方内容就会将上方内容覆盖，因为属性名是相同的

```
transform:translate(200%,0px);
transform:rotate(360deg);
```

