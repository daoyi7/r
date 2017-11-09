import React, {Component} from 'react'

export default class App extends Component {

  state = {
    s: ['k', 'd']
  }

  changeFn = this.changeFn.bind(this)

  changeFn(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <select value={this.state.s} onChange={this.changeFn} ref="myS" multiple={true}>
          <option value='k'>kawhi</option>
          <option value='d'>duncan</option>
          <option value='m'>manu</option>
        </select>
      </div>
    )
  }
}
