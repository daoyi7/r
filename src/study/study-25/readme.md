## 第二十五课

react的ajax调用

两个例子，我引入了``axios``作为我请求ajax的工具。

> ``axios``的具体用法在这里[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

[例子1](https://github.com/daoyi7/r/blob/master/src/study/study-25/study-25.js)
[例子2](https://github.com/daoyi7/r/blob/master/src/study/study-25/study-25-1.js)里我根据请求数据的不同状态对组件的状态值进行改变，然后让组件在DOM上渲染产生区别。

这里比较需要注意的一点是，react的ajax请求一定要放在``componentDidMount``时刻里，如果放在``componentWillMount``中的话，组件还没开始渲染，但是ajax已经调用完成了，组件就很尴尬啊！
还有一个原因就是，在实际开发中，ajax请求最后都封装成一个函数，哪个时刻需要就在哪个时刻调用就好了，这也是节省代码量啊，例如组件更新的时候，需要重新请求数据。
