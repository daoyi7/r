import React, {Component} from "react"
import axios from 'axios'

export default class App extends Component {
  state = {
    isLoading: null,
    error: null,
    data: null
  }

  componentDidMount() {
    this.server = axios({
      method: 'get',
      url:'https://api.github.com/users/daoyi7/repos',
      timeout: 0
    }).then((res) => {
      let data = res.data
      if(res.status !== 200) {
        this.setState({
          isLoading: true
        })
      } else {
        this.setState({
          name: data[0].name
        })
      }
    }).catch((err) => {
      this.setState({
        error: true
      })
    })
  }

  componentWillUnmount() {
    this.server.abort()
  }

  render() {
    if(this.state.isLoading) {
      return (
         <span>Loading...</span>
      )
    } else if(this.state.error) {
      return (
        <span>Error</span>
      )
    } else {
      return (
        <div>
          My first repo is <span style={{color: this.state.color}}>{this.state.name}</span>
        </div>
      )
    }
  }
}
