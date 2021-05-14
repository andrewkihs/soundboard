import React from 'react'
import AudioPlayer from '../playhead/audio_player'

class Playhead extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      play: true,
      pause: false,
    }
  }
  debugger
  render(){
    const { currentSong } = this.props
    if (!currentSong) {
      return (
        <>
          No current song
        </>
      )
    }
    else{
      // audioPlayer = new Audio(currentSong.songUrl)
      // audioPlayer.play();
      return (
        <>
        <div className="playhead-container">
          <AudioPlayer currentSong={currentSong}/>
          <img className="playhead-photo" src={currentSong.imageUrl}/>

          
                        
          <div className="playhead-title">{currentSong.title}</div>
        </div>
        </>
      )
    }
  }
}
export default Playhead