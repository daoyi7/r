import React, {Component} from 'react'

export default class App extends Component {

  componentWillMount() {
    console.log('挂载前')
  }

  render() {
    console.log('挂载')
    return(
      <div>1123</div>
    )
  }

  componentDidMount() {
    console.log('挂载完成')
  }
}
