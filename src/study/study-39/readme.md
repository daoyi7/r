## 第三十九课

**React-Router** 初级入门

当我 install 到4.X而在网上看到的全部都是2.X教程的，我知道，我有必要自己一点点摸索着写了。（就连(react-router-tutorial)[https://github.com/reactjs/react-router-tutorial]都只是2.0.0版本的！！我也很无奈啊！！）

废话不说，先看例子：
```javascript
  import React, {Component} from 'react'
  import {HashRouter, Route, Link} from 'react-router-dom'

  class Child extends Component {
    render() {
      return (
        <h2>Child Component</h2>
      )
    }
  }

  export default class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <Link to="/child">Child</Link>
            <Route path="/child" component = {Child}></Route>
          </div>
        </HashRouter>
      )
    }
  }

```

为啥跟其他教程里面不一样呢？？对！因为`react-router 4.X`之后已经把`hashHistory`换掉了，或者说从原来的`react-router`库换到`react-router-dom`库里面去，并且还换了个名字叫做`HashRouter`!

`react-router-dom`库里有两个这节课一定要说到的关键词 `BrowserRouter` 和 `HashRouter`。其实很简单一个是路由里带`#`(`HashRouter`)一个不带`#`(`BrowserRouter`).

不过 `HashRouter` 不支持 `location.key` 和 `location.state`这些方法，因此官方更推荐使用 `BrowserRouter`。

**这里需要注意一点，就是 `BrowserRouter` 、 `HashRouter` 里面可以写 `DIV` 但是每个 `Router` 只能有一级DOM**

`BrowserRouter` 或者 `HashRouter` 有两个比较重要的属性 `basename`、 `forceRefresh`。其中 `basename` 表示当前组件的路由.
例如 `<HashRouter basename="/aa"></HashRouter>` ,那么这个路由组件（其他很多教程里都提到过了，路由本身也是一个组件( **At its heart, React Router is a component.** )，自身的路由地址呢就是 `/aa` 。

`forceRefresh` 接收一个布尔值，是这样写的
`<HashRouter basename="/aa" forceRefresh = {true}></HashRouter>` , 如果结果是 `{true}` 呢，那么当点击链接进入到子组件的路由时，页面会重新刷新。当然了，如果是 `{false}` 就不用刷新了。

另外再来看一下例子中的另外两个关键字 `Link` 和 `Route`
从运行结果来看 `Link` 其实是一个 `a 标签`, 而 `Route` 可以说是这个 `a 标签` 的跳转目的地。
