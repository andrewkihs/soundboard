import React from 'react'
import WaveSurfer from 'wavesurfer.js';
import { PauseIndexButton, PlayIndexButton, LikeButton, AfterLikeButton, PlayButton} from '../icons/index'
import  CommentShowContainer from '../comment_show/comment_show_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



class GridIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comment: '',
      userLikesSong: this.props.userLikesSong,
      hover: false
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)    
  }

  handleHoverEnter(e){
    this.setState({hover: true})
  }
  
  handleHoverExit(e){
    this.setState({hover: false})
  }

  play() {
    this.props.playSong()
    this.props.setCurrentSong(this.props.song)
    this.setState({currentlyPlaying: true})
  }
  pause() {
    this.props.pauseSong()
    this.setState({currentlyPlaying: false})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  componentDidMount(){
    const { song, fetchUser } = this.props
    if (!song.imageUrl){
      fetchUser(song.artistId)
    }
    return this.setState({loaded: true})
  }

  handleComment(e){

  }

  createLike(e){

  }

  deleteLike(e){
  }

  toggleLikeButtons(){
    if (this.state.userLikesSong) {
      return(
        <button onClick={this.deleteLike}><AfterLikeButton/></button>
      )
    }
    else {
      return (
        <button onClick={this.createLike}><LikeButton/></button>
      )
    }
  }


  render() {
    
    const { song, userLikesSong, uploader } = this.props
    const { loaded } = this.state
    if (!loaded) return null
    else {
      return (
        <div className='grid-index-item'>

          <div className="grid-image-overlay">
            <img className="grid-song-item-image"
            src={song.imageUrl === '' ?  uploader.avatarUrl : song.imageUrl}
            />
            <div className="after">
              <div className="grid-play-pause">
                {this.props.currentlyPlaying ? 
                  <button 
                  className="song-li-play-button" 
                  onClick={this.pause}>
                      <PauseIndexButton/>
                  </button> :
                  <button 
                  className="song-li-play-button" 
                  onClick={this.play}>
                      <PlayIndexButton/>
                </button>}
              </div>
            </div>
          </div>
         
        
          <div className="grid-artist">
            <Link 
            id="grid-artist-text"
            to={`/users/${song.artistId}`}>
              {song.uploader}
            </Link>
          </div>
          <div className="grid-song-title">
            <Link 
            id="grid-song-title-text"
            to={`/songs/${song.id}`}>
              {song.title}
            </Link>
          </div>
        </div>
      );
      
    }
  }
  }
  export default GridIndexItem