import React, {Component} from 'react'

let props = {}
props.name = "kawhi"
props.age = "23"

class MyHello extends Component {
  render() {
    return (
      <div className="hello">
        <h2>Hello {this.props.name}!</h2>
      </div>
    )
  }
}

export default class Hello extends Component {
  render() {
    return (
      <MyHello {...props} />
    )
  }
}
