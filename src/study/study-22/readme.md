## 第二十二课

``forceUpdate``

``forceUpdate``也是更新阶段的一个方法，但它并不像前面四个那样必须。

[例子](https://github.com/daoyi7/r/blob/master/src/study/study-22/study-22.js)中，我在一开始定义了一个变量``countTime``,其他的基本没怎么变化。

子组件更新之前，``countTime``自减，更新完毕以后，增加一个``setTimeout``定时器，在定时器里终于出现了我们的主角``forceUpdate``：

> ``forceUpdate``顾名思义，强制更新。

组件更新完以后，定时器会让组件再强制更新一次，知道``countTime``小于 0 的时候不再强制更新。从控制台打印的结果可以看到，虽然强制更新了，但是都只运行``componentWillUpdate``和``componentDidUpdate``这两个步骤。

这就又回到之前的知识点了，``componentWillReceiveProps``是子组件接收到数据或者``owner``更新以后执行，即这个方法是听从数据或者``owner``的，例子里虽然``countTime``变化了，但它并不是父组件也不是子组件自身的状态值。所以``componentWillReceiveProps``并不会执行，同理``shouldComponentUpdate``.
