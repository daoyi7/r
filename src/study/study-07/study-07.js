import React, {Component} from 'react'

export default class Clock extends Component {
  state = {
    clock: new Date().toDateString()
  }

  render() {
    return (
      <div className="clock">
        <h2>
          Today is
          <span style={{
            color: '#21cbe8'
          }}>{this.state.clock}</span>
        </h2>
        <Time/>
      </div>
    )
  }
}

class Time extends Component {
  state = {
    time: new Date().toTimeString()
  }

  tick() {
    this.setState({
      time: new Date().toTimeString()
    })
  }

  componentDidMount() {
    this.intervalSeconds = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalSeconds)
  }

  render() {
    return (
      <p>Now time is {this.state.time}</p>
    )
  }
}
