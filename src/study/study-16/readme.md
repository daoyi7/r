## 第十六课

组件的双向绑定

[study-16](https://github.com/daoyi7/r/blob/master/src/study/study-16/study-16.js)

组件``<App />``把数据``name``单向传递给组件``<Parent />``,``<Parent />``在单向把数据``count``传递给``<Child />``,同时把方法``addCount()``也传给了子组件。

在子组件``<Child />``里，在自定义一个回调函数``clickChange()``绑定父组件传来的``addCount()``同时绑定在组件的``onClick``事件上，这样一来，子组件点击以后先触发``clickChange()``，再触发``addCount()``实现数据的双向绑定。



总结一下``props``
1. ``props``是只读（read only）的,不能更改。例如
```javascript

  this.props.name = 'kawhi....'     // error

```
2. 多层数据传递的时候，即使没有当前没有需要传递的话也最好显式传递，以备后面开发会用到。
3. 如果属性名有更改的话，为区分最好一个属性名。例如
```javascript

  <Child firstName = {this.addFirstName(this.props.name)} />
  // 用自定义属性名 firstName 向下传递

```
4. ``state``和``props``的区别。``state``用于内部数据流动，``props``用于数据的传递。
5. ``propTypes`` 有多种属性，也可以自定函数指定检验规则。react v15.5版本以后需要引入新的库，
6. ``this.props.children``和``React.Children``。前者会存在空集合报错``undefined``的情况，后者在用``map``方法的时候要多接收一个参数。
7. ``map``方法中``key``值的重要性。
8. es6的扩展运算符
9. 组件的双向绑定
