
import React from 'react'
import {PlayButton, PauseButton } from '../icons/'
class AudioPlayer extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      play: false,
      pause: true,
      songDuration: 0,
      dummyTime: 0,
    }
    this.audio = new Audio(props.currentSong.songUrl)

    this.audio.onloadedmetadata = () => {
      console.log(this.audio.duration)
      this.setState({
        songDuration: this.audio.duration,
        // currentTime: this.audio.currentTime
      })
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.setTime = this.setTime.bind(this)
  }


  componentDidMount(){
    // debugger
    this.state.dummyTime = this.audio.currentTime
  }

  play(){
    this.setState({
      play: true,
      pause: false
    });
    this.countTime();
    this.audio.play();
  }
  
  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  currentTime(){
    // currentTime+=1
  }

  countTime() {
    const incrementTime = () => {
      let currTime = this.state.dummyTime
      this.setState({dummyTime: currTime + 1})
    }
    setInterval(incrementTime, 1000)
  }

  setTime(value){
    // e.preventDefault();
    // debugger
    // console.log('seek time')
    // this.setState({dummyTime: sliderVal})
    // console.log(e.currentTarget)
    console.log(value)
  }

  playheadSlider() {
    return (
      <>
      <div className="playhead-slider">
        <input type="range" 
        min="0"
        max={this.state.songDuration}
        step="0.001"
        value={this.audio.currentTime}
        onChange={this.setTime(this.value)}

        // value={20}
        />
      </div>
      </>
    )
  }
  
  render() {
    console.log(this.audio.currentTime);
    console.log(this.state.dummyTime)
    console.log(this.state.songDuration)
    // debugger
    return (
      <>
        {/* {this.state.play ? <button 
        onClick={audioProps.togglePlaybackStatus}>
          <PauseButton/></button> : 
        <button onClick={audioProps.togglePlaybackStatus}><PlayButton/></button>} */}
        <div onClick={onClick} className="playback-button">
        {playbackStatus === "play" ? <PauseButton/> : <PlayButton />}
        </div>
        {/* <button onClick={this.play}><PlayButton/></button>
        <button onClick={this.pause}><PauseButton/></button> */}
        {this.playheadSlider()}
      </>
      );
  }

}
export default AudioPlayer