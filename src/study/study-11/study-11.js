import React, {Component} from 'react'

class Message extends Component {
  style = {
    color: 'yellow'
  }

  render() {
    return (
      <p>My owner component is <span style={{color: this.style.color}}>{this.props.master}</span>, Now time is {this.props.time}, I like <span style={{color: this.props.color}}>{this.props.color}</span> color</p>
    )
  }
}

export default class Parent extends Component {
  state = {
    color: 'pink',
    time: new Date().toDateString()
  }

  changeColor = this.changeColor.bind(this)

  changeColor() {
    this.setState({
      color: 'red'
    })
  }

  render() {
    return (
      <div>
        <p onClick={this.changeColor}>这是一个owner组件，组件名字是{this.props.name}</p>
        <Message
          master={this.props.name}
          time={this.state.time}
          color={this.state.color}
        />
      </div>
    )
  }
}
