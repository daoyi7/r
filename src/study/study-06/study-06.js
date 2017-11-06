import React, {Component} from 'react'

class Interval extends Component {
  state = {
    second: 0
  }

  tick() {
    this.setState({
      second: this.state.second + 1
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <span>{this.state.second}</span>
    )
  }
}

export default class Mixin extends Component {
  render() {
    return (
      <h2>Second: <Interval /></h2>
    )
  }
}
