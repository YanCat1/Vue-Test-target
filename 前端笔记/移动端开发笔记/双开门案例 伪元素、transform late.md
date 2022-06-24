**在双开门案例中我们可以使用伪元素来代替两个元素**

需要注意的是 伪元素是行内元素 不能设置宽高，并且需要content属性(必要)

1. 我们需要设置一个父元素，设置元素整体大小，背景图片

   ```html
   .box{
       width:600px;
       height:388px;
       background:url(./image/haha.jpg);
       margin:20px auto;
       position: relative;
       display: flex;
       overflow: hidden;
       background-position: -52px 0px;
   }
   <div class="box">
   </div>
   ```

   2.我们可以给元素添加子元素的div，也可以设置前后伪元素

   ```css
   .box::before,
   .box::after{
       content: '';
       width:50%;
       height:388px;
       display: inline-block;
       background:url(./image/haha.jpg);
       transition: 1s;
   }
   .box::after{
       background-position: right 0px;
   }
   ```

   纯样式编写，界面相对而言比较整洁，两个都是行内块可能排列会有问题

   我们给父元素添加了flex，进行左右布局，因为一个显示为左 一个显示为右

   所以我们在右边的元素就要显示图片的**右半部分**，可以用图片定位right解决。

3. 接下来就是浮动 因为是给.box添加的伪元素，所以我们可以直接给.box加hover

   然后让它的 ::after和::before进行translate位移

   ```css
   .box:hover::before{
       transform: translate(-100%,0%);
   }
   .box:hover::after{
       transform: translate(100%,0%);
   }
   ```

4. 由于图片左右移动会出去 很难看 直接给父元素添加overflow:hidden; 进行隐藏

```css
overflow: hidden;
```

<video src="C:\Users\Administrator\Desktop\yzd\双开门.mp4"></video>

