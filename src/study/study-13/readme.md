## 第十三课

用``.map``方法来循环数据

依然按照[例子](https://github.com/daoyi7/r/blob/master/src/study/study-13/study-13.js)来看，首先我在[入口文件](https://github.com/daoyi7/r/blob/master/src/index.js)中默认带了两个DOM子节点。

组件文件里有两个组件，一个是``<ListWrap />``作为父组件，另一个是子组件``<ListItem />``

父组件的类里用``.map``方法来循环组件中的子集，既然是循环那么``.map``前当然就是数组啦。

``this.props.children``是react中的一个已有API，代表组件中所有子节点的集合。可以看到``.map``里面有一个回调函数，这个函数带有两个参数，``child``是数组里的每一个子节点，``index``是他们的索引。回调函数最后返回的是子组件``<ListItem />``。

子组件自身从父组件``props``接收数据。


打印每个``child``可以看到其中``type:"name"``,但是``_owner``这一项是``null``。这还是回到之前``owner``和``parent``区别那个问题上：因为``<span>``本身是一个位于``<ListWrap>``组件下的DOM节点，``<ListWrap>``只是``<span>``的``parent``。


>**注意**
>
>``.map``方法的数组如果是一个空的集合，会报错。

于是在不知道被循环集合到底是不是空集合的情况下，我们用另一个新的方法``React.Children.map()``,但是用这个方法的时候还需要注意的一点是这个时候的``.map``方法接受三个参数``(this.props.children,(child, index))``。使用这个方法的时候，即使是一个空集合也不会出现报错的问题。
