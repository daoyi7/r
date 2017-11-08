## 第二十三课

``componentWillUnmount``组件的卸载

[例子](https://github.com/daoyi7/r/blob/master/src/study/study-23/study-23.js)中的代码如果运行起来会 Warning ：
```
Warning: unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. Instead, have the parent component update its state and rerender in order to remove this component.
```

> 我们要移除的组件不是一个最高级别的组件。
**卸载组件的时候，只能在通过组件拥有者进行替换或者卸载**

用另一种方法试一下：
```javascript

  if(this.props.num === 3) {
    // ReactDOM.unmountComponentAtNode(this.refs.myDiv)
    this.refs.myDiv.remove()
  }
```
这个时候不会引发 Warning ，但是这并不是我们想要的结果，因为我们在``componentWillUnmount``组件移除前要做的事情都还没做，这并不是一个react的写法。

```javascript

  <div onClick = {this.clickFn}>
    {
      this.state.count === 3 ?
      '' :
      <Child num = {this.state.count}/>
    }
  </div>
```

在父组件``<App />``中对``count``的值进行判断，如果大于 3 就不渲染子组件。这样运行就完全ok了，这就是react的写法。
