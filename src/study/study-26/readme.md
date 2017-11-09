## 第二十六课

受控组件和非受控组件``controlled or uncontrolled``

受空组件就是表单组件中已经添加了``value``属性。

非受控就是没有``value``,没有``value``但它也并不孤单，因为它有``defaultValue``啊！

受控组件不会维护自己的状态，一旦``value``值被指定了，就一直都是这个值了，因此我们要改变``value``就需要通过函数改变组件的状态来实现这个功能了。例如本[例子](https://github.com/daoyi7/r/blob/master/src/study/study-26/study-26.js)中的``textFn``，这也是为什么``value``用状态值来显示而不是直接把它写死。

所以，如果你的需求是一个不确定的``placeholder``的话，用受空组件，即``value``搭配自定义``onChange``函数来实现

如果是一个确定的``placeholder``，例如``请输入密码``，这个时候直接用``defaultValue``就够了，这个时候表现出来的就跟正常``html``里的``input``是一样的。
