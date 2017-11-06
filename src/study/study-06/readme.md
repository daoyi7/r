## 第六课

复用组件

- 复用组件
  - 可以和其他组件混合使用的组件被称作复用组件


``componentWillMount`` react内部定义函数，在组件将要被渲染到页面的时候执行
``componentWillUnmount`` react内部定义函数，在组件将要被卸载的时候执行
``componentDidMount`` react内部定义函数，在组件被渲染到页面上的时候执行

在本例子([study-06](https://github.com/daoyi7/r/blob/master/src/study/study-06/study-06.js))当中：

  1. 方法``tick()``我们并没有绑定，因为这里面我们的执行环境就是在``Interval``类里面。
  2. 当组件被渲染到页面上以后（componentDidMount），启动一个计时器，这个时候的``this.interval``是类``Interval``的一个动态属性
  3. 当组件将要被卸载时（componentDidMount），关闭刚刚启动的定时器。
  4. ``Interval``就可以被看作是一个复用组件，每个一秒钟就要被``Mixin``对象调用一次。
