import React from 'react'
import WaveSurfer from 'wavesurfer.js';
import { PauseIndexButton, PlayIndexButton} from '../icons/index'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
class SongIndexItem extends React.Component {
  constructor(props){
    super(props)

    this.play = this.play.bind(this)
  }

  play() {
    this.props.setCurrentSong(this.props.song)
  }


  componentDidMount(){
    let ctx = document.createElement('canvas').getContext('2d');
    let linGrad = ctx.createLinearGradient(0, 64, 0, 200);
    linGrad.addColorStop(0.5, 'rgba(100, 100, 100, 1.000)');
    linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

    let wavesurfer = WaveSurfer.create({
      container: `#waveform_${this.props.song.id}`,
      progressColor: '#f50',
      backend: 'WebAudio',
      // waveStyle: 'soundWave',
      barHeight: 4,
      // barGap: .5,
      barWidth: 1.5,
      barMinHeight: 40,
      cursorWidth: 0,
      normalize: true,
      // fillParent: true,
      waveColor: linGrad,
      forceDecode: true,
      // responsive: true, 
      // normalize: true,
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
  render() {
    const { song } = this.props
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


                    <button 
                    className="song-li-play-button" 
                    onClick={this.play}>
                      <PlayIndexButton/>
                    </button>
                  </div>
                  <div>
                    <Link to={`users/${song.artistId}`} className="profile-link">{song.uploader}</Link>
                    <div className="title">{song.title}</div>

                  </div>
                </div>
            <div className="genre">{song.genre}</div>
              </div>
              <div className="waveform" id={`waveform_${song.id}`}></div>
              <br></br>
              <div className="comment-input">
                <input
                className="comment-input"
                type="text"
                placeholder="Write a comment">
                </input>
              </div>
               <div className="song-interact-buttons">
                 
               </div>
            </div>
            
          </div>
        </li>
      );
   
  }
}
export default SongIndexItem