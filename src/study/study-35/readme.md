## 第三十五课

`propTypes`和`.isRequired`

前面提到过，'prop-types'库是react中用来检验数据类型的，终于我在实际开发中遇到了问题。


当一个项目变得庞大，多人开发过程中肯定会出现不同的人写各自的组件，这样在`props`的时候就会出现未知类型的情况被定义了其他的类型，导致报错。


为了避免以后出现这种错误，我们在组件中获取数据的时候提前定义好它的类型。例如[本例](https://github.com/daoyi7/r/blob/master/src/study/study-35/study-35.js)中`Child`组件，我在一开始的地方先定义好后面可能会用到的数据`list`。这个`list`是从父组件传过来的数据集合。

我提前定义好`list`是一个数组类型，那么当我在后面以其他类型来操作这个数据的时候，react会报错。
```javascript

  Warning: Failed prop type: Invalid prop `list` of type `array` supplied to `Child`, expected `number`.
```

报这样的错就一目了然很好debug啦。



再来说`.isRequired`

还是上面提到的开发情况，当某一个父组件并没有往子组件传递数据，但是我们在开发的时候犯错习惯性的用`props`去接收状态，这个时候控制台会报一对错误，非常红！人就很慌。

用`.isRequired`就解决了找错误的麻烦，它会很明了的告诉你到底错在哪
```javascript

  Warning: Failed prop type: The prop `list` is marked as required in `Child`, but its value is `undefined`.
```


`propTypes`和`.isRequired`可以说是`defaultProps`的一种变形，都是在组件的一开始给从组件接收到的状态值定下一个规则，但是`propTypes`和`.isRequired`主要是在debug的时候给我们提供帮助。
