import React, {
  Component
} from 'react'

export default class Like extends Component {

  state = {
    likeCount: 0
  }

  incrementLike = this.incrementLike.bind(this)
  reducetLike = this.reducetLike.bind(this)

  incrementLike() {
    this.setState({
      likeCount: this.state.likeCount + 1
    })
  }

  reducetLike() {
    this.setState({
      likeCount: this.state.likeCount - 1
    })
  }

  render() {
    return (
      <div className = "likeCount" >
        <button onClick = {this.incrementLike}> 点亮 </button>
        <span style = {{marginLeft: '15px',marginRight: '15px',color: 'pink'}}>
          {this.state.likeCount}
        </span>
        <button onClick = {this.reducetLike}> 点灭 < /button>
      </div>
    )
  }
}
