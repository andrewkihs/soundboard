import React from 'react'
import {PlayButton, PauseButton } from '../icons/'
class AudioPlayer extends React.Component{
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      paused: props.ownProps.paused,
      songDuration: 0,
      dummyTime: 0,
    }
    
  
  this.play = this.play.bind(this)
  this.pause = this.pause.bind(this)
  this.setTime = this.setTime.bind(this)
}


  componentDidMount(){
    this.audio = new Audio(props.currentSong.songUrl)
    this.audio.onloadedmetadata = () => {
      console.log(this.audio.duration)
      this.setState({
        songDuration: this.audio.duration,
        // currentTime: this.audio.currentTime
      })
    this.play()
  }
}
  play(){
    this.props.ownProps.playSong()
    this.setState({paused: false})
    //   pause: false
    // });
    // this.countTime();
    
    this.audio.play();
  }
  
  pause(){
  // this.setState({ play: false, pause: true })
    // this.props.ownProps.pauseSong();
    this.setState({paused: true})
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
          />
        </div>
      </>
    )
  }
  
  render() {

    debugger
    return (
      <>
        {this.state.paused ? <button onClick={this.play}><PlayButton/></button> : <button onClick={this.pause}><PauseButton/></button> }
        {/* <button onClick={this.play}><PlayButton/></button>
        <button onClick={this.pause}><PauseButton/></button> */}
        {this.playheadSlider()}
      </>
      );
  }

}
export default AudioPlayer