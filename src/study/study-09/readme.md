## 第九课

父组件与子组件的数据传递

在这个例子([study-09](https://github.com/daoyi7/r/blob/master/src/study/study-09/study-09.js))里面，很直观的看到一起有三个组件``<Input />``、``<Show />``和``<All />``。组件``<All />``是其他两个组件的``owner``，也就是它们的父组件。我尝试在父组件定义一些变量和方法，然后在子组件中调用。

这里面需要注意到的是，在子组件里取状态值不在是``{this.state.value}``了，因为这个例子中，子组件``<Show />``是需要从父组件``<All />``中拿值过来显示。于是用上了``{this.props.value}``,react通过``props``来从父组件往子组件传递。同样的，也要用子组件调用父组件的方法的时候也需要用到``props``.

例子中的``<All />``组件，有一个自定义方法``change``
```javascript
  // ...

  changeValue = this.changeValue.bind(this)

  changeValue(val) {
    this.setState({
      value: val
    })
  }

  render() {
    return (
      // ...

      <Input change={this.changeValue} value={this.state.value} />

      // ...
    )
  }
```

父组件用自定义方法``change``存储一个事件在事件中心，子组件通过``this.props.change``来调用存储中的事件。


``state``与``props``的区别


``state`` 可以被看作是一个数据的集散中心
而``props`` 是数据的传递工具
