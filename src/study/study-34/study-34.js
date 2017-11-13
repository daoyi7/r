import React, {Component} from 'react'

export default class App extends Component {

  state = {
    content: '<h1>kawhi leonard</h1>'
  }

  render() {
    return (
      <div>
        {this.state.content}
        <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
      </div>
    )
  }
}
