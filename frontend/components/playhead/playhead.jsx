import React from 'react'
import AudioPlayer from '../playhead/audio_player'

class Playhead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // play: true,
      // pause: false,
    }
  }
  render(){
    // debugger
    const { currentSong } = this.props
    if (!currentSong) {
      return (
        <>
          {/* No current song */}
        </>
      )
    }
    else{
      // audioPlayer = new Audio(currentSong.songUrl)
      // audioPlayer.play();
      debugger
      return (
        <>
        <div className="playhead-container">
          <div className="playhead-outer">

            <AudioPlayer currentSong={currentSong} ownProps={this.props}/>
            <br/>

            <br/>
            <div className="playhead-song-info">
              <img className="playhead-photo" src={currentSong.imageUrl}/>
              <div className="playhead-title">{currentSong.title}</div>
            </div>
          </div>
        </div>
        </>
      )
    }
  }
}
export default Playhead