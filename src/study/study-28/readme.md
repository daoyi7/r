## 第二十八课

``checkbox``

这次的[例子](https://github.com/daoyi7/r/blob/master/src/study/study-28/study-28.js)里，有一个函数同时控制两个``checkbox``。

分析一下这个函数：
1. 当``checkbox``这个``input``DOM节点的``check``状态发生改变，那么就设置组件状态为当前改变时刻的DOM的``value``值。于是，当我点``科比``的时候，``this.state.name``变成了``kobe``。
2. ``this.state.name``变成``kobe``后，``盖伊``心里一惊，WTF，这不是刚好满足了``this.state.name === 'kobe'``这个条件吗，于是``盖伊``变成``checked``,他被选中了，变成小勾勾。
3. 当点击``盖伊``的时候，触发事件``checkChange``，但是当你点击了``盖伊``以后，他已经不再满足``e.target.checked``这个条件了，于是他不能执行``if``这个判断，也就是说他的组件状态值改不了，改不了的话那他就继续``this.state.name === 'kobe'``，既然``this.state.name``继续等于``'kobe'``,那他就继续``checked``，于是陷入一种循环。

详情可以``debugger``看看。
