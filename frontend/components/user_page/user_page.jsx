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
  
  postedSongs(){
    const { postedSongs } = this.props

      return postedSongs.map(song => {
        // 
        return (
        <SongIndexItemContainer
        songId={song.id}
        key={song.id}
        />)
      }
    )
  }

  likedSongs(){
    const { likedSongs } = this.props
    
    // const numLikes = likedSongs.length()
    return (
      <ul>
        {likedSongs.map(song => {
          // 
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
        
      <div className="user-show-page">
        <div className="user-show-top">
          <div className="header-photo-container">
            <img className='user-page-header'src={pageOwner.headerUrl}/>
          </div>
          <div className="us-header-left">

            <div className="profile-pic-container">
              <img className='user-page-avatar'src={pageOwner.avatarUrl}/>
            </div>
            <div className="user-show-info-container">

              <div className="user-show-info">
                <h1 className="disp-name">{pageOwner.displayName}</h1>
                <h2 className="other-info">{pageOwner.city},{pageOwner.country}</h2>
                <h1 className="other-info">{pageOwner.firstName} {pageOwner.lastName}</h1>
                {/* <h1>Username: {pageOwner.username}</h1> */}
                {/* <h2 className="other-info">{pageOwner.bio}</h2> */}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-header">
            <h1>All the songs you posted</h1>
          </div>
        <div className="user-show-mc">

        <div className="song-container-user-show">
          {this.postedSongs()}
        </div>
        <div className="right-hand-bar">
          <h1 className="user-show-bio">Bio</h1>
          <br/>
          <p>{pageOwner.bio}</p>
        </div>

        </div>
        
        <div>
          {this.props.likedSongs ? this.likedSongs(): <p>hello</p>}
        </div>
      </div>
    )
    }
  }
}

export default UserPage