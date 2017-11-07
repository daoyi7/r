## 第十课

数据的单向传递,从父组件携带属性开始

在入口文件[index.js](https://github.com/daoyi7/r/blob/master/src/index.js)中，组件``Parent``携带了属性``name``，那么当子组件``Child``需要用这个属性的时候，肯定是必须要用到前面所说的方法``props``啦。

为了良好的代码习惯，也为了其他人阅读代码的时候不那么吃力，在子组件上也最好要显式的把``name={this.props.name}``加上，可能组件``<Child />``之后还有它自己的子组件呢。尽管当前[例子](https://github.com/daoyi7/r/blob/master/src/study/study-10/study-10.js)下不写出来并没有什么关系。
