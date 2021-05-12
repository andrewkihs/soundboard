import React from 'react'

class UserPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { user } = this.props
    debugger
    return (

      <>
        Hello, {user.display_name}
      </>
    )
  }
}

export default UserPage