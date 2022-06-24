less 是css的预处理器，能够以简便写法生成css文件 后缀为 .less

作用 扩充了css语言，使css具备了一定的逻辑性，计算能力

浏览器是不识别less代码的，网页需要引入对应的Css文件；

我们使用less语法进行+ - * /的操作时，需要注意 除法

需要添加小括号或者在除号前加 .

```less
width:(100/2px);
width:100 ./ 2px;
```

我们生成的less文件 如果安装了vscode Easy - Less插件；

那么我们保存less文件就会自动生成相同名称的css文件 很方便； 



less的嵌套写法 快速生成后代选择器

```less
.father{
    width:100rem;
    height:100rem;
    .son{
        width:100 - 50rem;
        height:100 - 50rem;
    }
}
```

生成的样式为这样

```less
.father {
  width: 100rem;
  height: 100rem;
}
.father .son {
  width: 50rem;
  height: 50rem;
}
```

less中的&符号 是找到当前元素 并不会生成子集，比如

```less
.father{
    width:100rem;
    height:100rem;
    .son{
        width:100 - 50rem;
        height:100 - 50rem;
        &:hover{
        	color:red;
        }
    }
}
```

生成的内容是这样的

```less
.father .son:hover {
  color: red;
}
```

如果我们这样添加呢？

```less
.father{
    width:100rem;
    height:100rem;
    .son{
        width:100 - 50rem;
        height:100 - 50rem;
        &:hover{
        	color:red;
        }
    }
    &:hover{
    	color:green;
    }
}
```

这是给谁添加呢？我们可以看到 这个&：hover添加在.father中 所以是给它加的

```less
.father:hover {
  color: green;
}
```

& 能够方便代码迁移



属性变量写法;

定义：

​		 @变量名：值；

使用：

​		color:@变量名；

```less
定义
@color:pink;
.box{
    width:100+100px;
    height:(100/3.3px); 
使用
    color:@color; 
}
```

在less文件导入其他的less文件，比如在index.less 导入base.less、common.less

使用@import '文件路径'； 即可

一般都加在less文件的顶部

当我们这样引入之后 会将引入文件的样式直接导入到index.css 十分方便

```less
@import './less使用01.less';
```

![image-20220617081145912](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220617081145912.png)

在保存之后 生成的index.css 就会将引入文件的样式拿过来

![image-20220617081228706](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220617081228706.png)



当然 如果我们引入的是less后缀的文件 其实可以不用写后缀

```less
@import './less的使用01';
```

现在less的文件生成是我们保存时 生成一个css文件 与less文件同级

我们之后整理比较麻烦，需要进行剪切，如何保存后直接将css文件存放到某文件夹中呢？

1. 可以配置EasyLess 插件进行完成

   设置	-	搜索EasyLess  - 在setting.json中编辑 - 添加代码(必须双引号)

   填写内容为

   ```less
   "out":"../css/"
   ```

   <img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220617162240885.png" alt="image-20220617162240885" style="zoom:50%;" />

因为是json文件 所以引号都需要添加 双引号；









