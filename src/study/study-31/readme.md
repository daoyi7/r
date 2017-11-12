## 第三十一课

用现有知识写一个简单列表页面

看[例子](https://github.com/daoyi7/r/blob/master/src/study/study-31/study-31.js)里对于点击事件传参的写法

```javascript

...

handleClick(a) {
  console.log(a)
}

...

<li key={index} onClick = {this.handleClick.bind(this, child.title)}>

...

```


>为什么要``bind(this)``?

说到这个，可以先把``handleClick``事件修改一下，看看这个函数的``this``打印出来是什么

```javascript

handleClick() {
  console.log(this)       // null or undefined
}
```
打印出``null``或者``undefined``是因为react调用方法的时候并不是通过对象的方式调用的（即并不是``this.handleClick``）,而是直接通过函数的方式调用``handleClick``，这个时候``handleClick``并没有使用者。因此组件内DOM调用函数的传参的时候需要手动把方法绑定到组件实例上去（``bind(this)``），在通过组件传入给react。这个时候再打印``this``就会看到打印出来的是组件本身了，也说明方法的确是绑定到我们要用的组件上去了。
