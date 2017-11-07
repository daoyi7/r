## 第十一课

分清组件和对象（es6类）的区别

在这个[例子](https://github.com/daoyi7/r/blob/master/src/study/study-10/study-10.js)里，有两个es6的类。在第三课讲到了，其实es6的类其实质上也是一个``function``,即它本质上还是一个对象。


第一个类是``Message``，第二个类是``Parent``。

当``Message``类还没在``Parent``以``<Message />``之前，它对于react来说还只是一个es6语法中的类而存在着。同理``Parent``在写到入口文件之前，它也只是一个类。

从入口文件[index.js](https://github.com/daoyi7/r/blob/master/src/index.js)中可以看到，组件``<Parent />``携带了一个属性。那么当子组件``<Message />``需要用到这个组件的时候，就要用``props``方法了。但是``<Message />``对于``Parent``这个类（对象）来说的时候，它还并不是``Parent``的子组件，即``Parent``还不是它的``owner``，那么当``<Message />``要用到属性``time``,``color``的时候只需要用``this.state.time``这样就好了。

同样的道理，``Message``类要用组件``<Message />``里面的属性的时候，就需要用``this.props.time``这样的方法来调用。

> 总结一下

**state**
1. 在当前组件内获取数据的时候
2. 在相对封闭的函数单元内

**props**
1. 组件之前数据传递的时候（这个传递是单项的，从``owner``向子组件）
