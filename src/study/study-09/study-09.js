import React, {Component} from 'react'

class Input extends Component {

  changeInputValue = this.changeInputValue.bind(this)

  changeInputValue(e) {
    this.props.change(e.target.value)
  }

  render() {
    return (
      <div>
        <span>Name:</span>
        <input onChange={this.changeInputValue} value={this.props.value} />
      </div>
    )
  }
}

class Show extends Component {
  render() {
    return (
      <div>
        <span style={{color: 'red'}}>{this.props.value}</span>
      </div>
    )
  }
}

export default class All extends Component {
  state = {
    value : ''
  }

  changeValue = this.changeValue.bind(this)

  changeValue(val) {
    this.setState({
      value: val
    },() => {
      console.log(this.state.value)
    })
  }

  render() {
    return (
      <div>
        <Input change={this.changeValue} value={this.state.value} />
        <Show  value={this.state.value} />
      </div>
    )
  }
}
