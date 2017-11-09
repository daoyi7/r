import React, {Component} from 'react'

const styles = {
  inputStyle: {
    width: 100,
    height: 35,
    display: 'block'
  }
}

export default class App extends Component {
  state = {
    input: 'default'
  }

  textFn = this.textFn.bind(this)

  textFn(e) {
    this.setState({
      'input': e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" style={styles.inputStyle} onChange={this.textFn} value={this.state.input}/>
      </div>
    )
  }
}
