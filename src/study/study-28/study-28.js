import React, {Component} from 'react'

export default class App extends Component {
  state = {
    name: 'kawhi'
  }

  checkChange = this.checkChange.bind(this)

  checkChange(e) {
    debugger
    if(e.target.checked) {
      this.setState({
        name: e.target.value
      })
    }
    console.log(this.state.name)
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange = {this.checkChange} value='kobe' /><span>科比</span><br />
        <input type="checkbox" onChange = {this.checkChange} value='gay' checked={this.state.name === 'kobe'} /><span>盖伊</span>
      </div>
    )
  }
}
