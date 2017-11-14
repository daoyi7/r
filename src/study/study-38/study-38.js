import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Index extends Component {

  static childContextTypes = {
    color: PropTypes.string
  }

  state = {
    color: 'red'
  }

  getChildContext() {
    return {
      color: this.state.color
    }
  }

  changeGreen = this.changeGreen.bind(this)

  changeGreen() {
    this.setState({
      color: 'green'
    })
  }

  changePink = this.changePink.bind(this)

  changePink() {
    this.setState({
      color: 'pink'
    })
  }

  render() {
    return (
      <div>
        <Header themeColor = {this.state.color}/>
        <button onClick={this.changeGreen}>绿色</button>
        <button onClick={this.changePink}>粉色</button>
      </div>
    )
  }
}

class Header extends Component {

  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    return (
      <div>
        <h2 style={{color: this.context.color}}>这里是Header</h2>
        <Title />
      </div>
    )
  }
}

class Title extends Component {
  render() {
    return (
      <div>这里是Title</div>
    )
  }
}
