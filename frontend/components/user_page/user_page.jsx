import React from 'react'

class UserPage extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchUser(this.props.userId)
  }
  handlePageLoad(){
  }

  render(){
    const { pageOwner } = this.props
    if (pageOwner === undefined){
      // still loading user info
      return (<></>)
    }else {

      return (
        
        <>
         {pageOwner.display_name}
      </>
    )
    }
  }
}

export default UserPage