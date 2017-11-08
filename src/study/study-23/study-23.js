import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Child extends Component {

  state= {
    time: new Date().toTimeString()
  }

  componentWillReceiveProps(nextPros) {
    console.log(nextPros)
    this.setState({
      time: new Date().toTimeString()
    },() => {
      if(this.props.num === 3) {
        ReactDOM.unmountComponentAtNode(this.refs.myDiv)
        // this.refs.myDiv.remove()
      }
    })
  }

  componentWillUnmount() {
    console.log('Child will be unmounted')
    debugger
  }

  render() {
    return (
      <div ref='myDiv'>
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
      count: 1
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
        <Child num = {this.state.count}/>
      </div>
    )
  }
}
