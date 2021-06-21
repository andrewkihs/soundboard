import React, { useEffect, useRef, useState } from "react";
import TimeBar from './timebar'
import useAudio from "./use_audio";
import { playSong, setCurrentSong, pauseSong} from '../../actions/playhead_actions'
import { fetchSong } from "../../actions/song_actions"
import {fetchUser} from '../../actions/user_actions';
import { createLike, deleteLike } from "../../actions/like_actions";
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
  const {currentSong, currentUser} = props
  const audioRef = useRef(useAudio(url));
  const wavesurfer = useRef(null);
  const [audioElement, audioProps] = useAudio(url);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState("0:00")
  const [isSeeking, setSeeking] = useState(false);
  const [userLikesSong, setUserLikesSong] = useState(props.currentUserLikes);
  debugger
  
  

  useEffect(()=> {
    audioProps.togglePlaybackStatus()

  }, [props.paused])

 
  const showDiv = () => {
    document.getElementById('volume-slider-div').style.display = 'block';
  }


  const addLike = (e) => {
    e.preventDefault()
    const songId = currentSong.id
    const currentUserId = currentUser.id
    dispatch(createLike({liker_id: currentUserId, song_id: songId})).then(()=> {
      // update appropriate tables
      dispatch(fetchUser(currentUserId))
      dispatch(fetchSong(songId))
    })
    setUserLikesSong(true);
    debugger
  }

  const removeLike = (e)=> {
    e.preventDefault()
    const song = props.currentSong
    const currentLikeId =  currentUser.likes[song.id].id
    dispatch(deleteLike(currentLikeId, song)).then(()=> {
      // update appropriate tables
      dispatch(fetchUser(currentUser.id))
      dispatch(fetchSong(song.id))
    })
    setUserLikesSong(false);
  }


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
          <button onClick={audioProps.playbackStatus === "pause" ? ()=> dispatch(playSong()): ()=> dispatch(pauseSong())} className="playhead-button">
            {audioProps.playbackStatus === "pause" ?<PlayButton/>: <PauseButton/>}
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
          <div className='volume-container'>
              <div id='volume-slider-div'>
                <div className='vslider-background'>
                  <input id='volume-range' 
                  value={audioElement.ref.current.volume}
                  onChange={(e) => audioElement.ref.current.volume = e.currentTarget.value}
                  max="1"
                  step="0.00001"
                  min="0"
                  type="range" orient="vertical" />
                </div>
              </div>
            <button 
              // onFocus= {() => document.getElementById('volume-slider-div').style.display = 'inline-block'}
              // onBlur= {() => document.getElementById('volume-slider-div').style.display = 'none'}
              className='playhead-volume-button'>
              <VolumeButton/>

            </button>
          </div>
          <img width="100px" height="100px" 
          className="playhead-photo" 
          src={currentSong.imageUrl}/>
          {/* <div className="playhead-artist-info">
            <h1 className="playhead-uploader">{currentSong.uploader}</h1>
            <h1 className="playhead-title">{currentSong.title}</h1>
          </div> */}
          <div className="playhead-like-follow">
              {props.currentUserLikes ? <button className='playhead-button' onClick={removeLike}><AfterLikeButton/></button> : <button className='playhead-button' onClick={addLike}><LikeButton/></button>}
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
