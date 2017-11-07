## 第八课

对组件内部值的转换

对组件内值的转换有两种方法：
1. 在``reder``内部
```javascript
  let upper = this.state.text.toUpperCase()
```

2. 在方法内部编写，例如本例子中的``handleChange()``
