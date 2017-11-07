import React, {Component} from 'react'

class Child extends Component {

  clickChange = this.clickChange.bind(this)

  clickChange() {
    this.props.add()
  }

  render() {
    return (
      <button onClick={this.clickChange}>
        <span>{this.props.firstName}</span>
      </button>
    )
  }
}


class Parent extends Component {
  state = {
    count: 0
  }

  addCount = this.addCount.bind(this)

  addCount() {
    this.setState({
      count: ++this.state.count
    })
  }

  addFirstName = this.addFirstName.bind(this)

  addFirstName(name) {
    return name + 'Leonard'
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <Child firstName = {this.addFirstName(this.props.name)} add = {this.addCount} />
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    name : 'kawhi · '
  }

  render() {
    return (
      <Parent name = {this.state.name} />
    )
  }
}
