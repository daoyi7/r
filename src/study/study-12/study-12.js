import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Parent extends Component {

  state = {
    name: 'child'
  }

  render() {
    return (
      <div>
        <Child name={this.state.name} />
      </div>
    )
  }
}

class Child extends Component {

  render() {
    return (
      <span name={this.props.name}>test</span>
    )
  }
}

Child.propTypes = {
  // name: PropTypes.string                             // 检验是否为字符串属性 =》无报错
  // name: PropTypes.array                              // 检验是否为是数组属性 =》报错
  // name: PropTypes.oneOf(['News', 'Child'])           // 检验是否为后面两个的其中一个 =》报错，区分大小写
  name: function(props, propName, componentName) {      // 检验是否满足这个自定义函数，如果不满足就new 一个报错信息，报错信息可以自定义
    if (!/^C/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
}
