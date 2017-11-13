import React, {Component} from 'react'
import propTypes from 'prop-types'

class Child extends Component {
  
  static propTypes = {
    list: propTypes.array.isRequired
  }

  render() {
    const childList = this.props.list

    return (
      <div>
        {childList[0].name}
      </div>
    )
  }
}

export default class App extends Component {

  state = {
    content: [
      {name: 'kawhi', team: 'spurs', champion: 1},
    ]
  }

  render() {
    return (
      <Child list = {this.state.content} />
    )
  }
}
