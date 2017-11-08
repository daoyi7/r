import React, {Component} from 'react'

class Child extends Component {
  state = {
    time: new Date().toTimeString()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: new Date().toTimeString()
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)

    return false
  }

  // shouldComponentUpdate = (nextProps, nextState) => false


  render() {
    return (
      <div>
        {this.props.num} at {this.state.time}
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    count: 0
  }

  componentWillMount() {
    this.setState({
      count: 2
    })
  }

  clickFn = this.clickFn.bind(this)

  clickFn() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div onClick={this.clickFn}>
        <Child num = {this.state.count} />
      </div>
    )
  }
}
