import React from 'react'
import WaveSurfer from 'wavesurfer.js';
import { PauseIndexButton, PlayIndexButton, LikeButton, AfterLikeButton, EditButton } from '../icons/index'
import CommentShowContainer from '../comment_show/comment_show_container'
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
  constructor(props) {

    super(props)
    let owner = false;
    if (props.currentUser) {
      owner = props.song.artistId === props.currentUser.id
    }
    this.state = {
      song: this.props.song,
      currentlyPlaying: this.props.currentlyPlaying,
      comment: '',
      userLikesSong: this.props.userLikesSong,
      loggedIn: !!props.currentUser,
      userOwnsSong: owner,
    }

    debugger


    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.createLike = this.createLike.bind(this)
    this.deleteLike = this.deleteLike.bind(this)
  }

  owner
  play() {
    // debugger
    const { currentPlayhead, song } = this.props
    if (currentPlayhead.currentSong) { // if there is a song on playhead
      if (currentPlayhead.currentSong.id === song.id) { // if resuming play for currently paused song
        this.wavesurfer.playPause();
        this.props.playSong()
        return
      }
    }
    this.wavesurfer.playPause();
    this.wavesurfer.seekTo(0); // restart the song
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


  componentDidMount() {
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

    this.wavesurfer.load(this.state.song.songUrl)

    this.wavesurfer.on('ready', () => {
      this.wavesurfer.on('seek', position => {
        if (!this.props.currentPlayhead.currentSong) {
          return
        }
        if (this.state.song.id === this.props.currentPlayhead.currentSong.id) {
          const songDuration = this.wavesurfer.getDuration()
          let newTime = position * songDuration
          this.props.setCurrentProgress(newTime)
        }
      })

    })
    this.wavesurfer.setMute(true)
  }

  componentDidUpdate(prevProps) {
    const { currentPlayhead, song } = this.props
    if (currentPlayhead.currentSong) { // if there is a song on playhead
      if (currentPlayhead.currentSong.id === song.id) { // if playhead matches selected song
        if (prevProps.currentTime !== this.props.currentTime) {
          console.log(currentPlayhead.currentSong)
          const progress = this.props.currentTime / this.wavesurfer.getDuration()
          console.log(progress)
          if (progress !== 0) {
            this.wavesurfer.seekTo(progress)

          }
        }
      }
    }
    if (!this.props.song.songUrl) {
      this.setState({ song: prevProps.song })
    }
  }

  handleComment(e) {
    e.preventDefault()
    const comment = this.state.comment
    const songId = this.props.songId
    const currentUserId = this.props.currentUser.id
    this.props.createComment({ body: comment, song_id: songId, user_id: currentUserId }, songId)
    this.setState({ comment: '' });
  }

  createLike(e) {
    e.preventDefault()
    const songId = this.props.songId
    const currentUserId = this.props.currentUser.id
    this.props.createLike({ liker_id: currentUserId, song_id: songId }).then(() => {
      // update appropriate tables
      this.props.fetchUser(currentUserId)
      this.props.fetchSong(songId)
    })
    this.setState({ userLikesSong: true })
  }

  deleteLike(e) {
    e.preventDefault()
    const song = this.state.song
    const currentLikeId = this.props.currentUser.likes[song.id].id
    this.props.deleteLike(currentLikeId, song).then(() => {
      // update appropriate tables
      this.props.fetchUser(this.props.currentUser.id)
      this.props.fetchSong(song.id)
    })
    this.setState({ userLikesSong: false })
  }


  toggleLikeButtons() {
    if (!this.state.loggedIn) {
      return (
        <button onClick={() => this.props.openModal('login')}><LikeButton /></button>
      )
    }
    else {

      if (this.props.userLikesSong) {
        return (
          <button onClick={this.deleteLike}><AfterLikeButton /></button>
        )
      }
      else {
        return (
          <button onClick={this.createLike}><LikeButton /></button>
        )
      }
    }
  }

  handlePlayhead() {
    const { song, currentPlayhead } = this.props
    if (currentPlayhead.currentSong) { // if there is a song on playhead
      if (currentPlayhead.currentSong.id === song.id) { // if playhead matches selected song
        return this.setState({ currentlyPlaying: true })
      }
      else {
        return this.setState({ currentlyPlaying: false })
      }
    }
    debugger
  }


  render() {
    const { song, userLikesSong, currentPlayhead } = this.props
    const { userOwnsSong } = this.state
    // this.handlePlayhead()
    debugger

    return (
      <li className="song-list-item">
        <div className="song-list-item-container">
          <div>
            <img className="song-container-photo" src={song.imageUrl} />
          </div>
          <div className="song-list-righthand">
            <div className="song-list-header">
              <div className="song-list-header-left">
                <div className="song-li-button-container">


                  {this.props.currentlyPlaying ?
                    <button
                      className="song-li-play-button"
                      onClick={this.pause}>
                      <PauseIndexButton />
                    </button> :
                    <button
                      className="song-li-play-button"
                      onClick={this.play}>
                      <PlayIndexButton />
                    </button>}
                </div>
                <div className="left-song-info">
                  <Link to={`/users/${song.artistId}`} className="profile-link">{song.uploader}</Link>
                  <br />
                  <Link to={`/songs/${song.id}`} className="song-page-link">{song.title}</Link>
                  {/* <div className="title">{song.title}</div> */}

                </div>
              </div>
              <div className="genre">{song.genre}</div>
            </div>
            <div className="waveform" id={`waveform_${song.id}`}></div>
            <div className="comments-container"><CommentShowContainer song={song} /></div>
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
                {this.state.loggedIn ? <button onClick={() => this.handleComment}>Submit</button> : <button onClick={() => this.props.openModal('login')}>Submit</button>}

              </div>
            </div>
            <div className="song-interact-buttons">
              {this.toggleLikeButtons()}
              {userOwnsSong ? <button><Link to={`/songs/${song.id}/edit`}><EditButton /></Link></button> : null}
            </div>
          </div>

        </div>
      </li>
    );

  }
}
export default SongIndexItem