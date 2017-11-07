## 第十二课

验证props的数据类型：propTypes

react v15.5以后就已经把``React.PropTypes``方法弃用了，所以这里我使用的是``prop-types``库，这个库是react包本身就有的。

这个[例子](https://github.com/daoyi7/r/blob/master/src/study/study-12/study-12.js)里面，父组件是``<Parent />``.子组件是``<Child />``。

子组件从父组件那接收到数据``name``,在一直数据属性的情况下来进行验证，为以后用API的时候未知情况下验证做基础。

```javascript
  Child.propTypes = {

    name: PropTypes.string

  }
```

因为我我们是检验子组件里面的``name``，**所以一定要注意``.propTypes``前面一定要是被检验的组件名，里面一定要是被检验的组件里面接受的数据的名称**

检验的方法有很多种，官网例子：[https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

```javascript

  // 检验是否满足这个自定义函数，如果不满足就new 一个报错信息，报错信息可以自定义
  // /^C/ 正则含义：首字母是否是大写的 C

  if (!/^C/.test(props[propName])) {
  return new Error(
   'Invalid prop `' + propName + '` supplied to' +
   ' `' + componentName + '`. Validation failed.'
  );
  }

```
