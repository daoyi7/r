import React, {Component} from 'react'
import ReactDOM from 'react-dom';

export default class App extends Component {
  state = {
    inputText: ''
  }

  changeFn = this.changeFn.bind(this)

  changeFn(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  changeClickFn = this.changeClickFn.bind(this)

  changeClickFn() {
    this.setState({
      inputText: ''
    }, () => {
      // ReactDOM.findDOMNode(this.refs.input).focus()
      this.refs.input.focus()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeClickFn}>按钮</button>
        <input
          type="text"
          ref="input"
          onChange={this.changeFn}
          value={this.state.inputText}
          />
      </div>
    )
  }
}
