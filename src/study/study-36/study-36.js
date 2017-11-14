import React, {Component} from 'react'

class Child extends Component {

  clickFn = this.clickFn.bind(this)

  clickFn() {
    if(this.props.activeChild) {
      this.props.clickChild
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickFn}>按钮</button>
      </div>
    )
  }
}

export default class App extends Component {

  state = {
    active: true
  }

  clickChild = this.clickChild.bind(this)

  clickChild() {
    console.log(1)
  }

  render() {
    return (
      <div>
        <Child activeChild={this.state.active} onclickChild={this.clickChild} />
      </div>
    )
  }

}
