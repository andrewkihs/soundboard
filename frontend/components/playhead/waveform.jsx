import React, { useEffect, useRef, useState } from "react";
import TimeBar from './timebar'
import useAudio from "./use_audio";

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

    console.log(audioProps.playbackStatus)
    audioProps.togglePlaybackStatus()
    console.log(audioProps.playbackStatus)
    // if (props.paused){
    //   audioProps.playbackStatus === "play" ? "Pause" : "Play"
    // }
    // console.log(props.paused)


  }, [props.paused])

  const handlePlayPause = () => {
    !playing ? props.playSong() : props.pauseSong()
    setPlay(!playing);
    // wavesurfer.current.playPause();
  };

  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };


  return (
    <div>

    {audioElement}

    {audioProps.isLoading ? (
      null
      ): (
        
        <div>
      {/* <div id="waveform" ref={audioRef} /> */}
      
      
      <div className="controls">
        {/* <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button> */}
        <button onClick={audioProps.togglePlaybackStatus} className="playback-button">
          {audioProps.playbackStatus === "play" ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          id="volume"
          name="volume"
          // waveSurfer recognize value of `0` same as `1`
          //  so we need to set some zero-ish value for silence
          min="0.01"
          max="1"
          step=".025"
          // onChange={onVolumeChange}
          defaultValue={volume}
          />
        <TimeBar
         currentTime={audioProps.currentTime}
            isSeeking={audioProps.isSeeking}
            duration={audioProps.duration}
            progress={audioProps.progress}
            setTime={audioProps.setTime}// function to set time location within audio
          />
        <label htmlFor="volume">Volume</label>
        <span>{duration}</span>
      </div>
    </div>
    )
  }
  </div>
  )
}
