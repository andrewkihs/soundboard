import React from 'react'
import { openModal } from '../../actions/modal_actions'
import { EditButton } from '../icons'
import SongIndexItemContainer from '../songs/song_index_item_container'


const _ = require('lodash'); 

class UserPage extends React.Component{
  constructor(props){
    super(props)

    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );
    this.state = {
      pageOwner: this.props.pageOwner,
    }
    //   pageOwner: Object.filter(props.pageOwner, value => value!='null' && value!='undefined')
    // }
  }
  componentDidMount(){
    this.props.fetchUser(this.props.userId)
    // this.props.fetchSongs()
  }
  componentDidUpdate(prevProps) {
    const tempObj = {...this.props.pageOwner}
    const tempObj2 = {...prevProps.pageOwner}
    if (!_.isEqual(tempObj, tempObj2)){
      this.setState({pageOwner: Object.filter(this.props.pageOwner, value => value!='null' && value!='undefined')})
    }
    // ...prevProps.pageOwner
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
    const { currentUser, openModal } = this.props
    const { pageOwner } = this.state
    if (!!!pageOwner){
      return (<></>)
    }else {
      let currentUserOwnsPage 
      if (currentUser) { currentUserOwnsPage = pageOwner.id === currentUser.id }
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
                {!!pageOwner.city & !!pageOwner.country ? (<h2 className="other-info">{!!pageOwner.city ? `${pageOwner.city}, ` : null} {!!pageOwner.country ? `${pageOwner.country}` : null}</h2>) : null }
                {!!pageOwner.firstName & !!pageOwner.lastName ? (<h1 className="other-info">{!!pageOwner.firstName ? `${pageOwner.firstName}` : null} {!!pageOwner.lastName ? ` ${pageOwner.lastName}` : null}</h1>) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-header-profile">
            <h1>Your tracks</h1>
            {currentUserOwnsPage ? <button  className='edit-profile-btn'onClick={()=>openModal('edit-profile', currentUser)}><EditButton /></button> : null}
          </div>
        <div className="user-show-mc">

        <div className="song-container-user-show">
          {this.postedSongs()}
        </div>
          
        <div className="right-hand-bar">
          {pageOwner.bio? (
            <h1 className="user-show-bio">Bio</h1>

          ): <h1 className="user-show-bio">Your profile is pretty bare. Start by adding a bio?</h1>}
          <br/>
          <p>{pageOwner.bio}</p>
        </div>

        </div>
        
      </div>
    )
    }
  }
}

export default UserPage