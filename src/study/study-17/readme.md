## 第十七课

组件的生命周期

组件的声明周期宏观上分为三个阶段：
**组件的挂载**、**组件的更新**、**组件的卸载**


大致步骤：
1. 实例化一个组件
2. 准备挂载  ``componentWillMount``
3. 挂载到页面上  ``componentDidMount``
4. 用户操作会影响组件，导致组件更新
5. 操作导致数据更新
6. 数据更新驱使DOM更新
7. 卸载前
8. 卸载后

组件的声明周期要分好几个例子，先看挂载阶段的[例子](https://github.com/daoyi7/r/blob/master/src/study/study-17/study-17.js)

组件``<App />``在实例化的时候（即当它还只是一个``class``类的时候）,定一个了一个``state``,``state``里面有一个值``count = 0``.

在``componentWillMount``组件挂载之前，用``this.setState``方法把``count``值从 0 改成了 1.

> 从这里理解，组件准备挂载（或者叫组件挂载之前）这个时刻。
组件准备挂载，就是在组件被挂载到页面上的最后一刻，就好比考试交答卷前盖上笔盖的最后一秒钟。

在``componentDidMount``组件挂载已经挂载到页面上以后，用定时器写了一个方法，每两秒钟改变``count``。

>这里又需要注意``this``的问题，在``componentWillMount``的时候，``this``的运行环境是类``class``，要在``div``中用到它，所以要像之前说到的那样，提前做一个绑定。但是``componentDidMount``的时候，``this``的运行环境不是类了，而是定时器里的``function``。
