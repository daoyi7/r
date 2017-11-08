import React, {Component} from 'react'

export default class App extends Component {

  state = {
    count: 0
  }

  clickFn = this.clickFn.bind(this)

  clickFn() {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('点击事件发生时2：' + this.state.count)
    })
    console.log('点击事件发生时：' + this.state.count)
  }

  componentWillMount() {
    this.setState({
      count: 5
    })
    console.log('挂载前：' + this.state.count)
  }

  componentWillReceiveProps(nextPros) {
    console.log('接受父组件数据改变前：' + this.state.count)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('决定组件自身是否更新时：' + this.state.count)

    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('更新前：' + this.state.count)
  }

  render() {
    console.log('挂载中：' + this.state.count)
    return (
      <button onClick = {this.clickFn}>
        {this.state.count}
      </button>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('更新完：' + this.state.count)
  }

  componentDidMount() {
    console.log('挂载完成：' + this.state.count)
  }
}
