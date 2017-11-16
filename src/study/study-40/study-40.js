import React, {Component} from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'

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
      <div className="all">
        <BrowserRouter basename='/'>
          <div>
            <Link to="/child/12">go Child</Link>
            <Route
              path="/child/:id"
              render={(history) => {
                return (
                  <div>
                    {
                      console.log(history)
                    }
                    <Child />
                  </div>
                )
              }}
            >
            </Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
