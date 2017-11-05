/**
* 第一课
* 替换react开始页，写一个自己的Hello World页面
* 需要注意的地方：
*   1.import 后面引入的 React 的 R 一定要大写，并且要把 Component 也用大括号的方式引入进来
*   2.render 后面的 return 是括号不是花括号
*   3. render 完以后，一定要用 export default 把组件暴露出来，这样才能在其他文件中引入组件
*   4. class 类后面跟的自定义名称就是你的自定义组件的名称，暴露出去的名称也一定要保持一致，同时这一个名称也是你在其它组件里面用它的时候的标签名
*   5. 在 JSX 语法中要用 HTML 的 class 属性的时候应该写作 className,用以区分 class 类
**/

import React, {Component} from 'react'

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <h2>Hello World!</h2>
      </div>
    )
  }
}

export default Hello
