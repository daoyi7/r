## 第十九课

``componentWillMount``的作用和``componentWillReceiveProps``是什么？

[例子](https://github.com/daoyi7/r/blob/master/src/study/study-19/study-19.js)

跟前面的例子类似，父组件有一个状态值``count``，虽然这个状态值一开始是 0 ，但是在父组件被挂载到页面上之前，``componentWillMount``方法已经把``count``的值做了改变，所以在页面上看到的结果并不是 0.由此可以看出来，当有``componentWillMount``的时候，在``state``里``count``的值并不重要，但是并不提倡。

``componentWillReceiveProps``从字面意思上理解就是``组件将要接收到props之前``，所以可以理解为，当组件的状态发生变化的时候。

例子里面，我们用父组件的点击事件改变往子组件传递的值``count``来让子组件自己的值``time``发生改变。
