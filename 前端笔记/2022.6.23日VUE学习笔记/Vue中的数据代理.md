Vue中的数据代理：

​	我们会将内容存入_data中，在vue的实例对象身上我们也会放一份，方便后期访问和使用。

​	如果vm.name = 'yzd' 将值进行修改的话，我们就会触发set()

​	如果我们直接访问 vm.name 会触发get ， 获取_data的 name 值

​	其实我们 vm 身上是没有这些数据的 数据都在_data中 

​	我们只是通过数据代理 也就是 Object.definProperty()去访问到了而已