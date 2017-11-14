import React, {Component} from 'react'

const ParentComponent = (InnerComponent) => {
  class NewComponent extends Component {

    state = {
      data: ''
    }

    componentDidMount () {
      let text = 'Higher-Order Components'
      this.setState({
        data: text
      })
    }

    render () {
      return <InnerComponent data={this.state.data} />
    }
  }
  return NewComponent
}

class ChildComponent extends Component {
  render () {
    return <input value={this.props.data} />
  }
}

const ChildComponentReturn = ParentComponent(ChildComponent)
export default ChildComponentReturn
