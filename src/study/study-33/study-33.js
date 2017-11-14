import React, {Component} from 'react'

class ComponentInput extends Component {

  state = {
    username: '',
    content: '',
    updateTime: new Date().toLocaleTimeString()
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
      const { username, content, updateTime } = this.state
      this.props.onSubmit({
        username,
        content,
        updateTime
       })
    }

    this.setState({
      content: '',
      username: '',
      updateTime: new Date().toLocaleTimeString()
    })
  }

  _saveUsernameToLocalStorage(username) {
    localStorage.setItem('username', username)              // 自定义函数把数据存到浏览器缓存中
  }

  usernameBlur = this.usernameBlur.bind(this)

  usernameBlur(e) {
    this._saveUsernameToLocalStorage(e.target.value)      // 失去焦点后执行自定义函数
  }

  _loadUsername() {
    const username = localStorage.getItem('username')

    if(username) {
      this.setState({
        username: username                                // 从缓存中获取数据并自动填写到`input` 框中
      })
    }
  }

  componentWillMount() {
    this._loadUsername()                                  // 组件挂在前调用自定义函数
  }

  componentDidMount() {
    this.refs.content.focus()
  }

  render() {
    return (
      <div>
        <div>
          <span>用户名：</span>
          <div>
            <input
              ref="username"
              value={this.state.username}
              onChange={this.changeUsernameFn}
              onBlur={this.usernameBlur}                // 失去焦点
              />
          </div>
        </div>
        <div>
          <span>发表评论：</span>
          <div>
            <textarea
              ref="content"
              value={this.state.content}
              onChange={this.changeContenFn}
              />
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

  clickDeleteFn = this.clickDeleteFn.bind(this)

  clickDeleteFn(e) {
    console.log(this.props.activeChild)
    this.props.onClickDeleteChild(this.props.index)
  }

  render() {
    return (
      <div>
        <div>
          <p><span>用户名：</span>{this.props.comment.username}</p>
        </div>
        <p><span>正文：</span>{this.props.comment.content}</p>
        <p>{this.props.comment.updateTime}</p>
        <button onClick = {this.clickDeleteFn}>删除</button>
      </div>
    )
  }
}

class ComponentList extends Component {

  static defaultProps = {
    comments: []
  }                               // class 类的静态属性

  state = {
    active: true
  }

  clickDeleteChild = this.clickDeleteChild.bind(this)

  clickDeleteChild(index) {
    this.setState({
      active: this.state.active
    })
    if(this.state.active) {
      this.props.comments.splice(index, 1)
    }
    console.log(this.props.comments)
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map(
            (comment, i) =>
            <Comment
              activeChild={this.state.active}
              onClickDeleteChild={this.clickDeleteChild}
              index={i}
              key={i}
              comment={comment}
            />
          )
        }
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
    this.state.comments.push(comment)
    this._saveCommentsToLocalStorage(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  _saveCommentsToLocalStorage(comment) {
    localStorage.setItem('comments', JSON.stringify(comment))
  }

  componentWillMount() {
    const commentLS = JSON.parse(localStorage.getItem('comments'))
    this.state.comments.push(commentLS)
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
