import React, {Component} from 'react'

class Child extends Component {

  state = {
    time: new Date().toTimeString()
  }


  componentWillReceiveProps(nextProps) {

    console.log(nextProps)

    this.setState({
      time: new Date().toTimeString()
    })
  }

  render() {
    return (
      <div>Time is <span style={{color:this.props.color}}>{this.props.number}</span> @ <span style={{color:this.props.color}}>{this.state.time}</span></div>
    )
  }
}

export default class App extends Component {
  state = {
    count: 0
  }

  componentWillMount() {
    this.setState({
      count: 1,
      parentColor: 'red'
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
      <div onClick = {this.clickFn}>
        <Child number = {this.state.count} color = {this.state.parentColor} />
      </div>
    )
  }
}
