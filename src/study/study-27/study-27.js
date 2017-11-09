import React, {Component} from 'react'

export default class App extends Component {

  state = {
    text: 'Hello'
  }

  changeText = this.changeText.bind(this)

  changeText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      // <textarea defaultValue={this.state.text}></textarea>
      <textarea onChange={this.changeText} value={this.state.text} />
    )
  }
}
