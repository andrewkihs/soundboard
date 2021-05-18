import React from 'react'
import WaveSurfer from 'wavesurfer.js';
import { PauseIndexButton, PlayIndexButton} from '../icons/index'
import  CommentShowContainer from '../comment_show/comment_show_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props){
    // debugger
    super(props)
    this.state = {
      currentlyPlaying: this.props.currentlyPlaying,
      comment: '',
      userLikesSong: this.props.userLikesSong
    }
    this.play = this.play.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.createLike = this.createLike.bind(this)
    this.deleteLike = this.deleteLike.bind(this)
  }

  play() {
    this.props.setCurrentSong(this.props.song)
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

    let wavesurfer = WaveSurfer.create({
      container: `#waveform_${this.props.song.id}`,
      progressColor: '#f50',
      backend: 'WebAudio',
      // waveStyle: 'soundWave',
      height: 120,
      barHeight: 120,
      // barGap: .5,
      // height: 120,
      barWidth: 1.5,
      barMinHeight: 40,
      cursorWidth: 0,
      normalize: true,
      // fillParent: true,
      waveColor: linGrad,
      forceDecode: true,
      // responsive: true, 
      normalize: true,
       cursorColor: '#fff',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 2,
      backend: 'MediaElement',
      // preload: true,
      // height: 128,
      // width: 1000,
      // credentials: true,
  

    });
    // debugger
    // wavesurfer.load(this.props.song.songUrl)
    wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3')
  }

  handleComment(e){
    // debugger
    e.preventDefault()
    const comment = this.state.comment
    const songId = this.props.songId
    // debugger
    const currentUserId = this.props.currentUser.id
    this.props.createComment({body: comment, song_id: songId, user_id: currentUserId }, songId)
  }

  createLike(e){
    e.preventDefault()
    const songId = this.props.songId
    const currentUserId = this.props.currentUser.id
    this.props.createLike({liker_id: currentUserId, song_id: songId})
    this.setState({userLikesSong: true})
  }


  deleteLike(e){
    // debugger
    e.preventDefault()
    const song = this.props.song
    const currentLikeId=  this.props.currentLikeId
    debugger
    this.props.deleteLike(currentLikeId, song)
    this.setState({userLikesSong: false})
  }

  toggleLikeButtons(){
    if (this.state.userLikesSong) {
      return(
        <button onClick={this.deleteLike}>Destroy like test</button>
      )
    }
    else {
      return (
        <button onClick={this.createLike}>Like button</button>
      )
    }
  }


  render() {
    const { song, userLikesSong } = this.props

    // debugger
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


                    {this.state.currentlyPlaying ? 
                      <button 
                        className="song-li-play-button" 
                        onClick={this.play}>
                          <PlayIndexButton/>
                      </button> :
                      <button 
                        className="song-li-play-button" 
                        onClick={this.play}>
                          <PauseIndexButton/>
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
                  {/* <button onClick={this.handleComment}>Submit</button> */}
                </div>
              </div>
               <div className="song-interact-buttons">
                 {/* <button onClick={this.createLike}>{userLikesSong? 'Unlike button' : 'Like button'}</button> */}
                 {/* <button onClick={this.deleteLike}>Destroy like test</button>
                  */}
                  {this.toggleLikeButtons()}
               </div>
            </div>
            
          </div>
        </li>
      );
   
  }
}
export default SongIndexItem