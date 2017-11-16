import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class Child extends Component {
  render() {
    return (
      <h2>Child Component</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter
        basename = "/"
        forceRefresh = { true }
      >
        <div>
          <Link to="/child">Child</Link>
          <Route path="/child" component = {Child}></Route>
        </div>
      </BrowserRouter>
    )
  }
}
