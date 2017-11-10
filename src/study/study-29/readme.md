## 第二十九课

这次没啥可说的，就是主要看看``ref``有两种写法

一个多此一举的写法是,引入``ReactDOM``并查找react节点
```javascript
import ReactDOM from 'react-dom';

ReactDOM.findDOMNode(this.refs.input).focus()

```

还有一个就是直接``this.refs.input``

这两个的效果是一样的
