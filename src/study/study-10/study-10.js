import React, {Component} from 'react'

export default class Parent extends Component {

  addFamilyName = this.addFamilyName.bind(this)

  addFamilyName(name) {
    return name + 'eonard'
  }

  render() {
    return (
      <div>
        <Child fullName={this.addFamilyName(this.props.name)} name={this.props.name}/>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <span>kawhi · {this.props.fullName}</span>
    )
  }
}
