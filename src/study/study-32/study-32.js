import React, {Component} from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  clickFn = this.clickFn.bind(this)

  // clickFn() {
  //   this.setState({
  //     count: 1
  //   })
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   this.setState({
  //     count: this.state.count + 2
  //   })
  // }

  clickFn() {
    this.setState((prevState) => {
      return {count: 1}
    })
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
    this.setState((prevState) => {
      return {count: prevState.count + 2}
    })
  }

  render() {
    return (
      <div>
          <button onClick={this.clickFn}>{this.state.count}</button>
      </div>
    )
  }
}
