import React, {
  Component
} from 'react'

export default class User extends Component {
  state = {
    users: [{
        id: 1,
        name: 'kobe'
      },
      {
        id: 2,
        name: 'lebron'
      },
      {
        id: 2,
        name: 'durant'
      }
    ]
  }

  render() {
    return (
      <div>
        <h2>用户列表</h2>
        {
          // this.state.users.map((user, idx) => {
          //   console.log(user)
          //   return <p>{user.id} : {user.name}</p>
          // })
          this.state.users.map((user,idx) => <p key={idx}>{user.id} : {user.name}</p>)
        }
      </div>
    )
  }
}
