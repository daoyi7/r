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

  render() {
    return (
      <div>
        <Header themeColor = {this.state.color}/>
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
