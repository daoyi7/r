import React, {Component} from 'react'

let countTime = 3

class Child extends Component {

  state = {
    time: new Date().toTimeString()
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    this.setState({
      time: new Date().toTimeString()
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
    countTime --
    console.log(countTime)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log(countTime)
    if(countTime > 0) {
      setTimeout(() => {
        this.forceUpdate()
      }, 1000)
    }
  }

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

  clickFn = this.clickFn.bind(this)

  clickFn() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div onClick = {this.clickFn}>
        <Child num = {this.state.count}/>
      </div>
    )
  }
}
