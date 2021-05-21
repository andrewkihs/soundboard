import React, { useEffect, useRef, useState } from "react";
import TimeBar from './timebar'
import useAudio from "./use_audio";
import {VolumeButton, PlayButton, 
  BackButton,
   NextButton, 
   LikeButton, 
   FollowButton, 
   AfterLikeButton, 
   PauseButton} from '../icons'
// adapted from
// https://www.erikverweij.dev/blog/building-a-minimal-audioplayer/

const refContainer = ref => ({
  container: ref,
});

export default function Waveform({ url, ...props }) {
  const audioRef = useRef(useAudio(url));
  const wavesurfer = useRef(null);
  const [audioElement, audioProps] = useAudio(url);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState("0:00")
  const [isSeeking, setSeeking] = useState(false);
  
  

  useEffect(()=> {

    audioProps.togglePlaybackStatus()
    // console.log(audioProps.playbackStatus)
    // if (props.paused){
    //   audioProps.playbackStatus === "play" ? "Pause" : "Play"
    // }
    // console.log(props.paused)


  }, [props.paused])

  // const handlePlayPause = () => {
  //   !playing ? props.playSong() : props.pauseSong()
  //   setPlay(!playing);
  //   // wavesurfer.current.playPause();
  // };

  // const onVolumeChange = e => {
  //   const { target } = e;
  //   const newVolume = +target.value;

  //   if (newVolume) {
  //     setVolume(newVolume);
  //     wavesurfer.current.setVolume(newVolume || 1);
  //   }
  // };

  const {currentSong} = props

  return (
    <div>

    {audioElement}

    {audioProps.isLoading ? (
      null
      ): (
        
        <div>
      {/* <div id="waveform" ref={audioRef} /> */}
      
      
      <div className="controls">
        <div className="playhead-controls">
          <button className="playhead-button"><BackButton/></button>
          {/* <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button> */}
          <button onClick={audioProps.togglePlaybackStatus} className="playhead-button">
            {audioProps.playbackStatus === "play" ? <PauseButton/> : <PlayButton/>}
          </button>
          <button className="playhead-button"><NextButton/></button>
        </div>
        <TimeBar
         currentTime={audioProps.currentTime}
            isSeeking={audioProps.isSeeking}
            duration={audioProps.duration}
            progress={audioProps.progress}
            setTime={audioProps.setTime}// function to set time location within audio
          />
        {/* <label htmlFor="volume">Volume</label> */}
        {/* <span>{duration}</span> */}
        <div className="playhead-artist-container">
        <VolumeButton/>
          <img width="100px" height="100px" 
          className="playhead-photo" 
          src={currentSong.imageUrl}/>
          <div className="playhead-artist-info">
            <h1 className="playhead-uploader">{currentSong.uploader}</h1>
            <h1 className="playhead-title">{currentSong.title}</h1>
          </div>
          <div className="playhead-like-follow">
            <button className="playhead-button">
              <LikeButton/>
            </button>
            <button className="playhead-button">
              <FollowButton/>
            </button>
          </div>
        </div>
        {/* <input
          type="range"
          id="volume"
          name="volume"
    
          min="0.01"
          max="1"
          step=".025"
          // onChange={onVolumeChange}
          // defaultValue={audioProps}
          /> */}
      </div>
    </div>
    )
  }
  </div>
  )
}
