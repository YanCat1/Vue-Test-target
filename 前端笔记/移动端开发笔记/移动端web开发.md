![image-20220606053328905](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220606053328905.png)

web移动端 学习内容大纲

字体图标的下载使用：

1. 打开阿里巴巴矢量图网站。
2. 选中需要使用的图片加入购物车。
3. 选择下载代码 下载的是一个download压缩文件。
4. 解压进行使用 ，可以将名字改为 iconfont。



**字体图标的使用**

1. 我们进行下载完成之后 使用link标记进行引入 引入文件名为 iconfont.css

2. 使用 i或者span标签进行图标的承载 添加必要的class = ‘iconfont’

3. 我们可以打开 demo_index.html 文件 查看每个图标的class名

   <img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220606075031366.png" alt="image-20220606075031366" style="zoom:50%;" />

4. 在我们使用的标签上 添加对应class即可 注意不要复制 .

   ```html
   <i class='iconfont icon-a-Materialdemandplan'></i>
   <span class='iconfont icon-a-Materialdemandplan'></span>
   ```

   给一个标签添加多个class值

当然 我们为什么能够称它为字体图标呢？就是因为我们可以将它当做文字进行修改。

比如颜色 大小等

只需要添加样式即可(以内部样式进行举例)

```html
<style>
    .icon-a-Completionrecord{
        color:red;
        font-size:100px;
    }
</style>
<i class="iconfont icon-a-Completionrecord"></i>
```

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220606075526374.png" alt="image-20220606075526374" style="zoom: 25%;" />

