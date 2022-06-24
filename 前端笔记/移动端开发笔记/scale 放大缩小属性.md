transform：sacle(1)

如果大于1 那么我们元素会进行放大，如果小于1 那么就是缩小

当然 在放大缩小的过程中 我们可以使用 

transform-orgin:center;		进行元素基点的重新设置

<video src="C:\Users\Administrator\scale放大隐藏，缩小显示.mp4"></video>

以上效果 首先

1. 我们的大图片进行宽高 居中设置

   ```
   div{
       width:400px;
       height:380px;
       background: url(./image/haha.jpg);
       margin:0px auto;
       background-position: center;
       transition:0.5s;
   }
   ```

   

2. 然后我们设置第二个图片 当做播放按键

   ```
   div img{
       width:100px;
       height:100px;
       transform-origin: center center;
       transform:translate(150%,150%) scale(3);
       transition:0.5s;
       opacity: 0;
   }
   ```

   使用transform进行居中效果，设置图片基点为中心放大缩小

   因为scale 和 translate 都是transform开头 我们需要将其写成一个复合属性，否则会相互进行覆盖。

​	 加一个透明度为0，我们看不到它 本来设置display:none 的 那个不行

3. 我们的hover

   ```
   div:hover img{
       opacity: 1;
       transform:translate(150%,150%) scale(1);
   }
   ```

   当我们的鼠标悬停在div上时 修改其img的样式，调整位置为中心，缩小

   透明度为不透明 就成了。