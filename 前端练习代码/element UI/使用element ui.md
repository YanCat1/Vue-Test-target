1. 首先 登录官网 进行element 所需文件引入

   ```html
   <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
   ```

   ```html
   <script src="https://unpkg.com/element-ui/lib/index.js"></script>
   ```

   因为是基于Vue的 所以我们也需要引入vue

   ```js
   <script src="./vue/vue.js"></script> 这个我下载vue文件了
   ```

2. 接下来在 script中新建vue实例

   ```js
   <script>
       new Vue({
       el: '#app',
           data: function() {
               return { visible: false }
           }
       })
   </script>
   将最大的元素 设置id为app 进行绑定
   之后 使用即可
   ```

   ```html
   <div id='app'>
       <el-row>
           <el-button disabled>默认按钮</el-button>
           <el-button type="primary" disabled>主要按钮</el-button>
           <el-button type="success" disabled>成功按钮</el-button>
           <el-button type="info" disabled>信息按钮</el-button>
           <el-button type="warning" disabled>警告按钮</el-button>
           <el-button type="danger" disabled>危险按钮</el-button>
       </el-row>
   </div>
   ```

   