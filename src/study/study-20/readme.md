## 第二十课

``shouldComponentUpdate``

这个[例子](https://github.com/daoyi7/r/blob/master/src/study/study-20/study-20.js)跟例子19可以说非常类似了，只是在子组件里多加了一个``shouldComponentUpdate``方法。

可以看到``shouldComponentUpdate``非常的简单，接受两个参数``nextProps``和``nextState``,分别表示接收到更新后的传递过来的数据和引起自身更新的新数据。然后``return true``

``shouldComponentUpdate``返回的是一个布尔值，很显然这表示的是一个状态：

> 当子组件检测到父组件``owner``有数据更新的时候，子组件自身是否也要随之更新，``true``代表要更新，``false``代表卜要更新。
