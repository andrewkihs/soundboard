import React from 'react'
import WaveSurfer from 'wavesurfer.js';
import { PauseIndexButton, PlayIndexButton, LikeButton, AfterLikeButton} from '../icons/index'
import  CommentShowContainer from '../comment_show/comment_show_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const formWaveSurferOptions = ref => ({
  container: `#waveform_${this.props.song.id}`,
    progressColor: '#f50',
    backend: 'WebAudio',
    height: 100,
    barHeight: 100,
    barWidth: 1.5,
    barMinHeight: 40,
    cursorWidth: 0,
    normalize: true,
    waveColor: linGrad,
    forceDecode: true,
    normalize: true,
    cursorColor: '#fff',
    barWidth: 2,
    backend: 'MediaElement',
});

class SongIndexItem extends React.Component {
  constructor(props){

    super(props)
    this.state = {
      currentlyPlaying: this.props.currentlyPlaying,
      comment: '',
      userLikesSong: this.props.userLikesSong
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.createLike = this.createLike.bind(this)
    this.deleteLike = this.deleteLike.bind(this)


    
  }

  play() {
    this.wavesurfer.playPause();
    this.props.playSong()
    this.props.setCurrentSong(this.props.song)
  }
  pause() {
    this.wavesurfer.playPause();
    this.props.pauseSong()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  componentDidMount(){
    let ctx = document.createElement('canvas').getContext('2d');
    let linGrad = ctx.createLinearGradient(0, 40, 0, 200);
    linGrad.addColorStop(0.5, 'rgba(100, 100, 100, 1.000)');
    linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

    this.wavesurfer = WaveSurfer.create({
      container: `#waveform_${this.props.song.id}`,
      progressColor: '#f50',
      backend: 'WebAudio',
      height: 100,
      barHeight: 100,
      barWidth: 1.5,
      barMinHeight: 40,
      cursorWidth: 0,
      normalize: true,
      waveColor: linGrad,
      forceDecode: true,
      normalize: true,
       cursorColor: '#fff',
      barWidth: 2,
      backend: 'MediaElement',
  
  

    });
    this.wavesurfer.load(this.props.song.songUrl)
    this.wavesurfer.setMute(true)
  }

  handleComment(e){
    e.preventDefault()
    const comment = this.state.comment
    const songId = this.props.songId
    const currentUserId = this.props.currentUser.id
    this.props.createComment({body: comment, song_id: songId, user_id: currentUserId }, songId)
  }

  createLike(e){
    e.preventDefault()
    const songId = this.props.songId
    const currentUserId = this.props.currentUser.id
    this.props.createLike({liker_id: currentUserId, song_id: songId})
    this.setState({userLikesSong: true})
    this.props.fetchSong(songId)
    this.props.fetchUser(userId)
  }

  deleteLike(e){
    e.preventDefault()
    const song = this.props.song
    const currentLikeId=  this.props.currentLikeId
    this.props.deleteLike(currentLikeId, song)
    this.setState({userLikesSong: false})
    this.props.fetchSong(song.id)
    this.props.fetchUser(userId)
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
    const { song, userLikesSong } = this.props
    // debugger
    // 
      return (
        <li className="song-list-item">
          <div className="song-list-item-container">
            <div>
              <img className="song-container-photo" src={song.imageUrl}/>
            </div>
            <div className="song-list-righthand">
              <div className="song-list-header">
                <div className="song-list-header-left">
                  <div className="song-li-button-container">


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
                  <div className="left-song-info">
                    <Link to={`users/${song.artistId}`} className="profile-link">{song.uploader}</Link>
                    <br/>
                    <Link to={`songs/${song.id}`} className="song-page-link">{song.title}</Link>
                    {/* <div className="title">{song.title}</div> */}

                  </div>
                </div>
            <div className="genre">{song.genre}</div>
              </div>
              <div className="waveform" id={`waveform_${song.id}`}></div>
              <div><CommentShowContainer song={song}/></div>
              <br></br>
              <div className="comment-input">
                <div className="comment-input-padding">

                  <input
                  className="comment-input-inner"
                  type="text"
                  placeholder="Write a comment"
                  onChange={this.update('comment')}
                  value={this.state.comment}>
                  
                  </input>
                  <button onClick={this.handleComment}>Submit</button>
                </div>
              </div>
               <div className="song-interact-buttons">
                  {this.toggleLikeButtons()}
               </div>
            </div>
            
          </div>
        </li>
      );
   
  }
}
export default SongIndexItem