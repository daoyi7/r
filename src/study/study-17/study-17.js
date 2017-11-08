import React, {Component} from 'react'

export default class App extends Component {

  state = {
    count: 0
  }

  componentWillMount = this.componentWillMount.bind(this)

  componentWillMount() {
    this.setState({
      count: 1
    },() => {
      console.log('组件挂载前')
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count : this.state.count + 1
      },() =>{
        console.log('挂载到页面上')
      })
    }, 2000)
  }

  render() {
    return (
      <div>Look this state {this.state.count} !</div>
    )
  }
}
