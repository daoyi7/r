import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

class Child extends Component {
  render() {
    return (
      <h2>{this.props.match}</h2>
    )
  }
}

export default class App extends Component {

  state = {
    count: 12,
    count1: 13
  }

  render() {
    return (
      <div className="all">
        <BrowserRouter basename='/'>
          <div>
            <Link to={`/child/${this.state.count}`}>go Child {this.state.count}</Link>
            <Link style={{marginLeft:5}} to={`/child/${this.state.count1}`}>go Child {this.state.count1}</Link>
            <Switch>
              <Route
                exact
                path="/child/:id"
                render={(rr) => {
                  return (
                    <div>
                      {
                        console.log(rr)
                      }
                      <Child match = {rr.match.params.id}/>
                    </div>
                  )
                }}
              >
              </Route>
              <Route
                exact
                path="/child/:id"
                render={(rr) => {
                  return (
                    <div>
                      {
                        console.log(rr)
                      }
                      <Child match = {rr.match.params.id}/>
                    </div>
                  )
                }}
              >
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
