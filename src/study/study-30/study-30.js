import React, {Component} from 'react'

class Child extends Component {
  render() {
    return (
      <span>！！</span>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      React.createElement(
        'div',                                          // tags
        {className:'app'},                              // attrs
        '用createElement创建一个react组件',              // children
        <Child />
      )
    )
  }
}
