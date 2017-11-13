## 第三十四课

`dangerouslySetInnerHTML`

为了避免收到XSS攻击这类的安全问题，react会把所有表达式的内容进行转义，就像[例子](https://github.com/daoyi7/r/blob/master/src/study/study-34/study-34.js)中的`
{this.state.content}`

那么我想写一个Markdown编辑器咋办呢。`dangerouslySetInnerHTML`就用上了。
