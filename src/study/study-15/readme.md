## 第十五课

解构赋值

在[例子](https://github.com/daoyi7/r/blob/master/src/study/study-15/study-15.js)中有三个组件，``<App />``组件中有多个属性，子组件``<Item />``通过``props``接收，在这里知识点来了：

``...``这个三个点的是es6写法中的扩展运算符，把一个数组变为了一个参数序列。``{name, ...others}``这种写法就是把``name``这个参数从序列中排除。
