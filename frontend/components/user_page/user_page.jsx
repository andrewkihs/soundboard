import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'
class UserPage extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchUser(this.props.userId)
    this.props.fetchSongs()
  }
  // handlePageLoad(){
  // }

  postedSongs(){
    const { postedSongs } = this.props

      return postedSongs.map(song => {
        // debugger
        return (
        <SongIndexItemContainer
        songId={song.id}
        key={song}
        />)
      }
    )
  }

  likedSongs(){
    const { likedSongs } = this.props
    debugger
    const numLikes = likedSongs.length()
    return (
      <ul>
        {likedSongs.map(song => {
          // debugger
          return (
            <li>
              {song.title}
            </li>
        
          )})
        }
      </ul>
    )
  }
     
    
  
  render(){
    const { pageOwner } = this.props
    if (pageOwner === undefined){
      return (<></>)
    }else {
      return (
        
        <>
         <h1>Display Name: {pageOwner.displayName}</h1>
         <h1>{pageOwner.firstName} {pageOwner.lastName}</h1>
         <h1>Username: {pageOwner.username}</h1>
         {/* <h2>Age: {pageOwner.age}</h2> */}
         <h2>{pageOwner.city},{pageOwner.country}</h2>
         <h2>{pageOwner.bio}</h2>
        
        <div>
          {this.postedSongs()}
        </div>


        <div>
          {this.props.likedSongs ? this.likedSongs(): <p>hello</p>}
        </div>
      </>
    )
    }
  }
}

export default UserPage