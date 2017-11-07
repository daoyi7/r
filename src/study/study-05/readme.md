## 第五课

复合组件

- 复合组件
  组件的组合形式有两种，一种是继承，一种是组合
  - 继承是什么
    例如 B 继承了 A, 那么可以说 B 是一个 A ,B拥有 A 的所有属性。
  - 组合是什么
    例如 A,B,C,D四个组件一起组合形成了E，那么E也是一个组件。

例如本节课例子例子([study-05](https://github.com/daoyi7/r/blob/master/src/study/study-05/study-05.js))中的Name组件就是一个复合组件，它里面包含了组件``<Time />``。这个时候我们可以说组件``Name``是``<Time />``的``owner``,但是不能说是它的``parent``。在这个例子中，``<Time />``组件的``parent``**暂时**是``div``


> ``props``只能由``owner``传递，不能由``parent``传递

举个例子：
```javascript

  class Msg extends Component {
    render() {
      return (
        <div className="msg">
          <span>123</san>
        </div>
      )
    }
  }

  class Hello extends Component {
    render() {
      return (
        <div className="hello">
          <Msg />
        </div>
      )
    }
  }
```
这个例子里面，``<Msg />``和``<Hello />``都是react组件，其中``<Hello />``组件是``<Msg />``组件的``owner``。``<div className="hello">``是``<Msg />``组件的``parent``
