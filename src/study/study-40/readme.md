## 第四十课

动态路由组件

查看[本例子](https://github.com/daoyi7/r/blob/master/src/study/study-40/study-40.js)代码。

还是跟前面的一样，要用到 `BrowserRouter`, `Link`, `Route` ，但是这一课多了 `Switch` ，后头讲。

首先说动态路由。

实际开发中，路由后面肯定都会带参数的，例如 www.example.com/detail/01，这里面的 `/01` 就是路由 `/detail` 的参数啦，后面还会有 `02`, `03`...当然了，这肯定是 `.map()` 做的事情。

我们可能通过 api 拿到了路由的参数，例如在子组件里现有 api 中贴子的id是 `this.props.contentID` ,按照开发经验 `to="/detail/ + this.props.contentID"`。 但是这样在 react 中是不 ok 的。

react-router 提供了这样的写法 `to={`/child/${this.props.contentID}`}`。


这个时候又有一个问题了，当我有多个路由并且对应多个组件的时候，一个个的写 `<Route>` 的话，遇到不同的路由前缀还没有问题，可是一旦是相同的路由前缀，比如 `/detail/01` `/detail/02`。这样的情况，相同的前缀目标组件就会一起显现出来了。于是 `Switch` 就派上了它的用场。

`Switch` 是一个路由组件 `<Route>` 集合的标签，里面只能存放路由组件，它会帮我们选择对应路由的组件。
