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
import { openModal } from '../../actions/modal_actions';

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
    let onStreamPage = window.location.hash.includes('stream')
    // debugger
    this.state = {
      song: this.props.song,
      currentlyPlaying: this.props.currentlyPlaying,
      comment: '',
      userLikesSong: this.props.userLikesSong,
      loggedIn: !!props.currentUser,
      userOwnsSong: owner,
      onStreamPage: onStreamPage,
    }

    // debugger


    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.createLike = this.createLike.bind(this)
    this.deleteLike = this.deleteLike.bind(this)
  }

  play() {

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
    debugger
    this.props.fetchUser(this.state.song.artistId)
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

  timeSince(time) {
    //via https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, 'seconds', 1], // 60
      [120, '1 minute ago', '1 minute from now'], // 60*2
      [3600, 'minutes', 60], // 60*60, 60
      [7200, '1 hour ago', '1 hour from now'], // 60*60*2
      [86400, 'hours', 3600], // 60*60*24, 60*60
      [172800, '1 day ago', 'Tomorrow'], // 60*60*24*2
      [604800, 'days', 86400], // 60*60*24*7, 60*60*24
      [1209600, '1 week ago', 'Next week'], // 60*60*24*7*4*2
      [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, '1 month ago', 'Next month'], // 60*60*24*7*4*2
      [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, '1 year ago', 'Next year'], // 60*60*24*7*4*12*2
      [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, '1 century ago', 'Next century'], // 60*60*24*7*4*12*100*2
      [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = 'ago',
      list_choice = 1;

    if (seconds == 0) {
      return 'Just now'
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'from now';
      list_choice = 2;
    }
    var i = 0,
      format;
    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
  }



  render() {
    const { song, userLikesSong, currentPlayhead, openModal, uploader } = this.props
    const { userOwnsSong, onStreamPage } = this.state
    
      debugger

      return (
        <li className="song-list-item">
        {onStreamPage ? (
          <div className='stream-ts-container'>
            {!!uploader ? <img className='stream-uploader-pfp' src={uploader.avatarUrl}/> : null }
            <div className='stream-ts-uploader'>
              <Link to={`/users/${song.artistId}`}>
                {song.uploader }
              </Link>
            </div>
            <div className='stream-ts-stamp'>
               {` posted a track `}{this.timeSince(song.timePosted)}
            </div>
          </div>
        ) : null}
        <div className="song-list-item-container">
          <div>
            <img className="song-container-photo" src={song.imageUrl ? song.imageUrl : uploader.avatarUrl} />
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
              <div className="genre"># {song.genre}</div>
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
              {userOwnsSong ? <button onClick={() => openModal('edit-song', song)}><EditButton /></button> : null}
            </div>
          </div>

        </div>
      </li>
    );
    

  }
}
export default SongIndexItem