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
         <h1>Display Name: {pageOwner.display_name}</h1>
         <h1>{pageOwner.first_name} {pageOwner.last_name}</h1>
         <h1>Username: {pageOwner.username}</h1>
         {/* <h2>Age: {pageOwner.age}</h2> */}
         <h2>{pageOwner.city},{pageOwner.country}</h2>
         <h2>{pageOwner.bio}</h2>

      </>
    )
    }
  }
}

export default UserPage