## 第三十二课

``setState``方法传递参数实现数学计算

> 首先这样的方法在实际开发中应该很少会遇到，因为有``count: this.count+3``这样的直接写法，但是这里是为了搞懂``setState``。

先看第一种写法：
```javascript

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  clickFn() {
   this.setState({
     count: 1
   })
   this.setState({
     count: this.state.count + 1
   })
   this.setState({
     count: this.state.count + 2
   })
  }
```

第一种写法中可以看到``count``的初始值是 0,当点击事件发生时，首先``setState``让它变成 1,然后再加 1，再加 2....

no，那你就错了。[前面提到过](https://github.com/daoyi7/r/blob/master/src/study/study-24/)，``setState``会先把所以的状态更新**合并排进一个队列里**，等到``render``时刻一起释放，所以这个时候，可以把这三个``setState``看作是这样的：
```javascript

  this.setState({
    count: 1
    count: this.state.count + 1
    count: this.state.count + 2
  })
```

那看到这个样子就应该很快想到了，第三个很显然会把前面两个都覆盖掉。

捋一下思路：
1. 首先``count``最开始是 0
2. 然后进到``setState``以后就是变成 1
3. 但是还没到``render``，所以``count = 1``这个事情先放到队列里等着
4. 然后又发现``count``要 + 1，一样的道理先等着
5. 又要 + 2，这个时候不用等了

等待队列里的三个互相观察，发现都是对``count``的改变，这就好比``css``里后面的样式灰覆盖掉前面的样式一样， 这里的第三次对``count``的改变已经把前面的都覆盖了。所以当点击事件发生后到``render``时刻其实只有``count + 2``.

但是我们想要的是'0 => 1 > 1 + 1 > 1 + 1 + 2 = 4'这样的过程啊，看第二种写法：
```javascript

  clickFn() {
    this.setState((prevState) => {
      return {count: 1}
    })
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
    this.setState((prevState) => {
      return {count: prevState.count + 2}
    })
  }
```

很明显的区别就是这里面的``setState``接收了一个参数``prevState``,对``count``的处理在后头的回调函数里。

先说运行结果：**对！是我们想要的4**

那么为什么呢？

当``setState``接收一个参数``prevState``的时候，首先它不会再是放进队列了，顾名思义``prevState``是上一个状态值，即这些``setState``要接收上一个状态值才会开始走它们后面的回调函数。第一个``setState``的上一个状态值是``state``里面的``count``,第二个是第一个处理完之后返回的``count``。所以第一个``setState``必须为了给第二个``setState``生产参数必须不能等待立即执行。

所以这里的运行过程是：
1. ``this.setState``
2. ``render``
3. ``this.setState``
4. ``render``
5. ``this.setState``
6. ``render``

ok,终于解决了...
