import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    name: '',
    color: 'red'
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/daoyi7/repos')
      .then((res) => {
        let data = res.data
        this.setState({
          name: data[0].name
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="ajax">
        My first repo is <span style={{color: this.state.color}}>{this.state.name}</span>
      </div>
    )
  }
}
