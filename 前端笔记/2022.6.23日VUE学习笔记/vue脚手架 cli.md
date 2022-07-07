想要使用脚手架 cli工具 我们需要先安装node.js

接下来 进行镜像地址的修改

```
npm config set registry https://registry.npm.taobao.org
```

进行下载地址的更改后 引入脚手架 cli

```
npm install -g @vue/cli
```

引入后可以输入vue进行检查 看看有没有安装成功；

2. 切换到我们创建项目的目录，使用命令创建项目

   ```
   cd desktop								//去往桌面
   ```

   ```
   vue create xxxx（项目名称）
   ```

   输入之后 会显示使用vue的哪个版本

   ![image-20220707073233696](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220707073233696.png)

需要 vue2还是vue3的，又或者是自定义的

3. 启动项目

   进入项目的目录 

   ```
   cd xxx
   ```

   ```
   npm run serve
   ```

4. 出现运行地址 我们自己可以使用第一个 第二个给其他同事使用

   ![image-20220707073813120](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220707073813120.png)

5. 运行成功 hello word