**首先 我们使用了一个mounted函数 该函数的作用是：**

当Vue完成了对模板的解析 并把初始的真实DOM元素放入界面后(挂载完毕后)

再调用mounted；

我们的颜色改变函数：

```
<div id='app'>
	<h2 :style='{opacity}'>我的名字是 yzd！！！</h2>
</div>

<script>
	const vm = new Vue({
		el:'#app',
		data(){
			return {
				opacity:1
			}
		}
	})
	setInterval(()=>{
        vm.opacity -= 0.01
        vm.opacity<=0?vm.opacity=1:''
    },16)
</script>
我们是这样写的 但是问题就是 定时器在vue实例管理之外，如果我们想让它们是一体的
怎么办？ 唯有写为函数 进行调用即可 但是点击调用？还是每次模板解析调用？
都不合适 我们需要使用 mounted 钩子函数；
```

**使用 mounted 进行重构**

```
<script>
    const vm = new Vue({
        el:'#app',
        data(){
            return {
                opacity:1
            }
        },
        mounted(){
            setInterval(()=>{
                vm.opacity -= 0.01
                vm.opacity<=0?vm.opacity=1:''
            },16)
        }
    })
</script>
```

这样即可；

那mounted会自己进行调用 它是什么时候进行调用呢？

**当 Vue完成模板额解析并把初始的真实DOM元素放入到页面后 (挂载)**

**执行 mounted函数；**