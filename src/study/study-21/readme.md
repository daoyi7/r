## 第二十一课

``componentWillUpdate``和``componentDidUpdate``

捋一捋更新的四个API的先后顺序
1. ``componentWillReceiveProps``  子组件收到``owner``的数据更新后执行
2. ``shouldComponentUpdate``      子组件收到数据更新后（并不是非得是``owner``传过来的，也可以是自己的）决定自身要不要随之更新
3. ``componentWillUpdate``        子组件更新之前
4. ``componentDidUpdate``         子组件更新之后

### **注意**
更新阶段中的后三个状态里都不能再对数据进行操作了，否则会陷入一个死循环，最后程序崩溃。

逻辑是这样的，子组件收到数据更新以后：
- 当在``shouldComponentUpdate``（决定要不要执行）阶段重新对数据进行操作，那么组件就又发现数据变化了，即再次``componentWillReceiveProps``，于是会在第一步和第二部开始不停地循环

- 当在``componentWillUpdate``（子组件准备更新）阶段重新对数据进行操作，那么组件就又发现数据变化了，即再次``componentWillReceiveProps``，于是会在第一步到第三部开始不停地循环

- 当在``componentDidUpdate``（子组件更新之后）阶段重新对数据进行操作，那么组件就又发现数据变化了，即再次``componentWillReceiveProps``，于是会在第一步到第四部开始不停地循环
