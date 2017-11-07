## 第十四课

``map``方法里的``key``到底有什么用

在[例子](https://github.com/daoyi7/r/blob/master/src/study/study-14/study-14.js)中``User``组件状态值里包含一个集合``users``，因为在当前组件内，于是我用``this.state.users``去循环。

当我用``key={user.id}``的时候浏览器会报错
```
Warning: Encountered two children with the same key, `2`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    in div (at study-14.js:24)
    in User (at index.js:35)
```
说明``key``必须唯一的。
我用``key={idx}``,报错就消失了。

>这样，有了key属性后，就可以与组件建立了一种对应关系，react根据key来决定是销毁重新创建组件还是更新组件。可以看出，数组创建子组件的位置并不固定，动态改变的；这样有了key属性后，react就可以根据key值来判断是否为同一组件。

需要强调的是，``key``是react用来区分组件的一个值，在react看来如果``key``值相同那么这相同的两个组件就会被认为是同一个组件，这样的话后面一个组件就会被销毁，所以``key``是一个**永久并且永久唯一**的值。


[https://segmentfault.com/a/1190000009149186](https://segmentfault.com/a/1190000009149186)
