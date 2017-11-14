## 第三十七课

高阶组件(Higher-Order Components)

在react中存在一种高阶组件，即提前把这个组件写好，后面要用到的时候就引入这个高阶组件的文件。是不是很类似？对！其实就是一种封装函数的方式。恰如这次的[例子]((https://github.com/daoyi7/r/blob/master/src/study/study-37/study-37.js))里写的

首先用`const`指令声明一个变量`ParentComponent`，这个变量代表的是一个react组件（或者你也可以把它看成是一个`es6的class类`）。这个组件里的写法跟之前没什么区别，也有状态值声明周期挂载这些（当然了，因为它也是组件啊！）

然后往下看，又有一个新的组件叫做`ChildComponent`，它返回一个`input`元素，但是很神奇的事这个`input`的`value`竟然是用`this.props.data`来定义的。这个疑问先踹起来，接着看下面的代码：
```javascript
  ChildComponent = ParentComponent(ChildComponent)
```
或许这一句很不好理解，那换一种写法：
```javascript
  const ChildComponentReturn = ParentComponent(ChildComponent)
  export default ChildComponentReturn
```

再次指定一个变量`ChildComponentReturn`，代表函数`ParentComponent`返回出来的结果。

ok，代码终于捋顺了，来说一下这个逻辑。

*第一步* 声明一个变量`ParentComponent`，这个变量是一个函数类型，被赋值为一个组件`NewComponent`，`NewComponent`接收一个参数`InnerComponent`,顾名思义是这个声明组件里面的一个子组件。
如果抛开这个参数，单纯看`InnerComponent`的话，它就是组件`NewComponent`里面的一个子组件。

*第二步* 为了让`InnerComponent`看起来更直观让它在这个例子里是一个组件，我给它加了一个**挂载完时刻**

*第三步* 又有另一个组件`ChildComponent`，这个组件渲染了一个文字框

*第四步* 再次声明一个变量`ChildComponentReturn`,把前面`ParentComponent`运行后返回的结果赋给它。然后再用`export default`暴露出来给`index.js`使用。


一整套下来，就很好理解了！例子里的`NewComponent`是react中的一个常规组件，函数`ParentComponent`把组件进行了封装，可以接收参数，参数即是组件的子组件——这就是**高阶组件**

有了高阶组件这个东西，那么当实际开发中遇到许多类似组件的时候就非常需要它课。
例如现在有一个体育新闻的列表和一个财经新闻的列表，按之前的写法就要为这两个列表分别写组件，但是用高阶组件的写法就只需要`ParentComponent(ChildComponent, apiName)`就ok了。

~~其实跟函数的封装是一样的道理哈哈哈~~
