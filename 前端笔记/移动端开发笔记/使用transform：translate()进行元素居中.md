当我们想要被定为的盒子进行居中时：

 1. 如果只是单一的设置top为50%，left为50%	那么元素会稍微靠右

 2. 我们需要自己进行手动尺寸减少，每次父元素改变宽高我们都得改

 3. 可以使用transform中的translate()方法，进行宽高百分比设置

    ```html
    <div class="father">
        <p class="son"></p>
    </div>
    
    <style>
        .father{
            width:800px;
            height:400px;
            background:pink;
            position: relative;
    
        }
        .son{
            position: absolute;
            width:200px;
            height:200px;
            background:red;
            transform:translate(-50%,-50%);
            left:50%;
            top:50%;
        }
    </style>
    ```

    