import React, {
  Component
} from 'react'

export default class ListWrap extends Component {
  render() {
    return (
      <ul>
        {
          this.props.children.map((child, index) => {
          console.log(child)
          return <ListItem key = {index} text = {child} />
          })
        }
      </ul>
    )
  }
}

class ListItem extends Component {
  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}
