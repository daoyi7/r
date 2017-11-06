import React, {
  Component
} from 'react'

export default class Name extends Component {
  state = {
    value: 'kawhi'
  }

  render() {
    return (
      <p>
        Hello {this.state.value},
        <Time />
      </p>
    )
  }
}

class Time extends Component {
  state = {
    value: new Date().toDateString()
  }

  render() {
    return (
      <span>today is {this.state.value}</span>
    )
  }
}
