import React, {Component} from 'react'

export default class Hello extends Component {
  state
  constructor(props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state= {
      value: 'World'
    }
  }

  // state = {
  //   value: 'World'
  // }
  // changeValue = this.changeValue.bind(this)

  changeValue(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div className="hello">
        <input onChange={this.changeValue} defaultValue={this.state.value}/>
        <h2 style={{
          color: 'red',
          fontSize: '20px'
        }}>Hello {this.state.value}!</h2>
      </div>
    )
  }
}
