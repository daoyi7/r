import React, {Component} from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        <p>This is <span style={{color: this.props.color}}>{this.props.name}</span>! Today is <span style={{color: this.props.color}}>{this.props.time}</span>, I like <span style={{color: this.props.color}}>{this.props.food}</span></p>
      </div>
    )
  }
}

class Item extends Component {
  state = {
    time: new Date().toDateString(),
  }

  render() {
    var {name, ...others} = this.props      //　从所有属性中排除name

    return (
      <Child {...others} time = {this.state.time}/>
    )
  }
}

export default class App extends Component {
  state = {
    name: 'kawhi',
    food: 'apple',
    color: 'red'
  }

  render() {

    return (
      <Item name = {this.state.name} food = {this.state.food} color = {this.state.color}/>
    )
  }
}
