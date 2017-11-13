import React, {Component} from 'react'

class ComponentInput extends Component {

  state = {
    username: '',
    content: '',
  }

  changeUsernameFn = this.changeUsernameFn.bind(this)

  changeUsernameFn(e) {
    this.setState({
      username: e.target.value
    })
  }

  changeContenFn = this.changeContenFn.bind(this)

  changeContenFn(e) {
    this.setState({
      content: e.target.value
    })
  }

  submitClickFn = this.submitClickFn.bind(this)

  submitClickFn() {
    if(this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content })
    }

    this.setState({
      content: '',
      username: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <span>用户名：</span>
          <div>
            <input value={this.state.username} onChange={this.changeUsernameFn} />
          </div>
        </div>
        <div>
          <span>发表评论：</span>
          <div>
            <textarea value={this.state.content} onChange={this.changeContenFn} />
          </div>
        </div>
        <div>
          <button onClick={this.submitClickFn}>提交</button>
        </div>
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        <div>
          <span>{this.props.comment.username}</span>
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

class ComponentList extends Component {

  static defaultProps = {
    comments: []
  }

  render() {
    return (
      <div>
        {this.props.comments.map(
          (comment, i) =>
          <Comment key={i} comment= {comment}/>
        )}
      </div>
    )
  }
}

export default class CommentApp extends Component {

  state = {
    comments: []
  }

  submitClickAppFn = this.submitClickAppFn.bind(this)

  submitClickAppFn(comment) {
    console.log(comment)
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div>
        <ComponentInput onSubmit = {this.submitClickAppFn}/>
        <ComponentList comments = {this.state.comments}/>
      </div>
    )
  }
}
