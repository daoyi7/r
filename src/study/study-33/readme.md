## 第三十三课

一个简易评论功能

这次的[例子](https://github.com/daoyi7/r/blob/master/src/study/study-33/study-33.js)代码比较长，分析一下一起分为四个组件。
1. 父组件（用来存放整个项目的所有组件）
2. 表单组件（提交信息的表单）
3. 列表父组件（渲染列表）
4. 列表子组件（显示提交后的信息）


这里需要着重注意的几个地方：
1. 父组件通过自定义属性`onSubmit`把`submitClickAppFn`方法传递给子组件（"表单组件"），然后在子组件看来，它就可以用`this.props.onSubmit`来调用父组件的方法了。通过接收参数的方式把表单里的内容放进组件中。

2. 也正是因为可以接收参数，跟"表单组件"同级的"列表父组件"就也可以通过在提前在父组件操作参数来接收操作改变后的参数。这就是react的**状态提升**

3. "列表父组件"和"列表子组件"其实可以合并到一起，但是为了组件的复用性。

4. 一定要在"列表父组件"前面设定一个默认`props`
```javascript
  static defaultProps = {
    comments: []
  }
```
有了默认组件，即使父组件那边没有传值过来，列表也可以以一个空值的状态来渲染。

5. 要尽量少写`state`,都写`props`。因为每一有一个`state`就代表要多维护一个组件状态，这样对于以后维护起来就很麻烦。

6. 前面也提到过了`JSX`是`javascript`的一个对象的存在，它里面既可以写方法（包括带参数的方法），也可以写`HTML`标签。



为表单添加更好的用户体验
1. 页面一打开自动聚焦到评论框
```javascript

  componentDidMount() {
    this.refs.content.focus()
  }
```

2. 当用户输入完用户名以后，把输入的内容存到浏览器缓存中，并在重新打开页面的时候自动填写用户名
```javascript

  _saveUsernameToLocalStorage(username) {
    localStorage.setItem('username', username)              // 自定义函数把数据存到浏览器缓存中
  }

  usernameBlur = this.usernameBlur.bind(this)

  usernameBlur(e) {
    this._saveUsernameToLocalStorage(e.target.value)      // 失去焦点后执行自定义函数
  }

  _loadUsername() {
    const username = localStorage.getItem('username')

    if(username) {
      this.setState({
        username: username                                // 从缓存中获取数据并自动填写到`input` 框中
      })
    }
  }

  componentWillMount() {
    this._loadUsername()                                  // 组件挂在前调用自定义函数
  }
```
3. 评论内容的时间
4. 点击删除按钮即删除当前评论
react中父组件传递时间到子组件必须要接收参数案例在[study-36](https://github.com/daoyi7/r/blob/master/src/study/study-36/study-36.js).**这里需要注意，如果我在父组件的`clickDeleteChild`方法里只对`comments`做处理的话，子组件并不会发生变化。这是因为组件中的**状态值**并没有发生变化，没有发生变化的情况下组件就不会发生重新渲染的，那么子组件也就不会变化。**
