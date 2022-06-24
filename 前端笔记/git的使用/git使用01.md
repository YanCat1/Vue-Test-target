我们可以新建终端 在终端中输入pwd 得到当前的路径地址；

ls	     	 list file 显示该目录下所有的文件

cd	   	  切换目录 

cd..		   上一级

cd	D:/	后面跟文件名是进入该文件

git version		查看当前git版本

git log				查看提交日志

安装git版本之后我们需要设置自己的name和email

git config --global user.name 'yanCat'

git config --global user.email '2223126487@qq.com'



以上 进行初始的设置和操作

接下来 进行git init 将该文件夹中git内容初始化 会新建一个git的隐藏文件夹

里面存放着多个上传版本，我们写好内容之后 进行上传 方式有两种

1. git add 文件名  (git add test.txt 用于上传单个文件)
2. git add .      (用于上传多个文件，注意 . 前面有个空格)

**以上只是进行保存 但是我们还没有进行提交，需要添加**

git commit 

提交后 会显示一个vim的终端编辑器 进行提交说明的书写

1. 按下 a \ i 进入编辑模式 进行书写 

2. 写完说明后 按下 esc退出编辑模式

3. 点击：输入 ：wq     回车  （writh quit）

4. 使用 git log查看提交的信息

   <img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220616091408805.png" alt="image-20220616091408805" style="zoom: 67%;" />

5. 简化：

   如果按照以上情况去书写提交说明 太麻烦了 我们可以进行简化

   git commit -m '提交说明'

   这样 大大减少了所需时间

vscode 也可以进行git的提交操作 当我们修改之后 点击左侧的分支图标<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220616094021186.png" alt="image-20220616094021186" style="zoom:50%;" />

再点击该文档

![image-20220616094104308](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220616094104308.png)

左侧是上一次内容 右侧是现在的内容，可以看到区别

点击上方对钩、点击是

![image-20220616094211483](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220616094211483.png)

它就自动帮我们完成了 git add . 和 git commit 

![image-20220616094245650](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220616094245650.png)

只需要书写说明就好了 

之后可以git log查看下日志



vscode只是进行了基础的操作 高级操作可以安装下

Git History Diff 插件