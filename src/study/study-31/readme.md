## 第三十一课

用现有知识先一个简单列表页面

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
