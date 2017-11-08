## 第十九课

``componentWillMount``的作用和``componentWillReceiveProps``是什么？

[例子](https://github.com/daoyi7/r/blob/master/src/study/study-19/study-19.js)

跟前面的例子类似，父组件``owner``有一个状态值``count``，虽然这个状态值一开始是 0 ，但是在父组件``owner``被挂载到页面上之前，``componentWillMount``方法已经把``count``的值做了改变，所以在页面上看到的结果并不是 0.由此可以看出来，当有``componentWillMount``的时候，在``state``里``count``的值并不重要，但是并不提倡。

``componentWillReceiveProps``从字面意思上理解就是``组件将要接收到props之前``，所以可以理解为，当组件的状态发生变化的时候。

例子里面，我们用父组件``owner``的点击事件改变往子组件传递的值``count``来让子组件自己的值``time``发生改变。

这里跟[例子16](https://github.com/daoyi7/r/blob/master/src/study/study-16/study-16.js)区别在于：这里是父组件``owner``改变传递的值，子组件观察这个值的改变来驱动自身的改变，而例子16是子组件通过一个自定义事件与父组件``owner``的点击事件绑定。这两个例子从结果上来看可以说是一样的。

用``componentWillReceiveProps``的好处在于这个方法是观察状态发生变化的，相比创建一个自定义事件绑定方法来说代码量减少，而且逻辑上也相对更方便易懂一些，这在多层组件中显然是更方便的。
