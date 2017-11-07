import React, {
  Component
} from 'react'

export default class Input extends Component {
  state = {
    text : '',
    upperText: ''
  }

  handleChange = this.handleChange.bind(this)

  handleChange(e) {
    this.setState({
      text: e.target.value,
      upperText: e.target.value.toUpperCase()
    })
  }

  render() {
    // let upper = this.state.text.toUpperCase()

    return (
      <div>
        <input onChange={this.handleChange} value={this.state.text} />
        <h2>{this.state.upperText}</h2>
      </div>
    )
  }
}
