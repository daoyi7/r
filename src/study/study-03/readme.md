## 第二课

数据绑定

第三节课就已经涉及到大量的ES6知识和语法了😂

1. es6中的``class``(类，区别于css中的类)其实等同于es5的``prototype``,是一个构造函数的方法。
2. ``constructor``就是``class``的**构造方法**。
3. 如果只写了类``class``，但是没有写``constuctor``,通过``new``命令实例一个对象的时候会自动调用。
```javascript
  class fn_a {

  }

  // 等同于
  class fn_a {
    constuctor() {

    }
  }
```
即``constuctor``是类的默认方法，如果认为写进去的话就是它的**显示定义**。
4. 类有自己的属性和方法，上面提到的``constuctor``就是一个默认方法，属性分为静态属性和示例属性：例子([study-03](https://github.com/daoyi7/r/blob/master/src/study/study-03/study-03.js))中的``state``是一个动态属性动态属性只能写在``constuctor``方法内，静态属性写在``class``的大括号外。目前有一个关于属性的**提案**可以让动态属性不用必须写在``constuctor``里了。
所以例子里还有另一种写法。
```javascript
  //state
  // constructor(props) {
  //   super(props)
  //   this.changeValue = this.changeValue.bind(this)
  //   this.state= {
  //     value: 'World'
  //   }
  // }

  state = {
    value: 'World'
  }
  changeValue = this.changeValue.bind(this)
```
5. 类的方法内部中会有很多``this``，这些``this``默认是指向类的实例。但是当方法单独拿出来使用的时候，``this``的指向就变成了这个方法运行时所在的环境（就是跟之前一个普通的function方法的this指向一样），例如本例子（[study-03](https://github.com/daoyi7/r/blob/master/src/study/study-03/study-03.js)）中的``changeValue``方法，如果把它单独拿出来用的话，那么它指向的会是``input``，很显然对于我们这个例子是不对的。所以我们需要在构造方法中绑定这个``this``改变它的指向，这是一个最简单的方法了。
