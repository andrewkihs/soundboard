import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import TimeBar from './timebar'
import useAudio from "./use_audio";
import { playSong, setCurrentSong, pauseSong } from '../../actions/playhead_actions'
import { fetchSong } from "../../actions/song_actions"
import { fetchUser } from '../../actions/user_actions';
import { createLike, deleteLike } from "../../actions/like_actions";
import { openModal } from '../../actions/modal_actions'
import {
  VolumeButton, PlayButton,
  BackButton,
  NextButton,
  LikeButton,
  FollowButton,
  AfterLikeButton,
  PauseButton,
  LoopSelected,
  LoopUnselected
} from '../icons'
// adapted from
// https://www.erikverweij.dev/blog/building-a-minimal-audioplayer/

const refContainer = ref => ({
  container: ref,
});

export default function Waveform({ url, ...props }) {
  const { currentSong, currentUser } = props
  const audioRef = useRef(useAudio(url));
  const wavesurfer = useRef(null);
  const [audioElement, audioProps] = useAudio(url);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState("0:00")
  const [isSeeking, setSeeking] = useState(false);
  const [isLooping, setLooping] = useState(false)
  const [userLikesSong, setUserLikesSong] = useState(props.currentUserLikes);



  useEffect(() => {
    audioProps.togglePlaybackStatus()

  }, [props.paused])


  useEffect(() => {
    let newSeek = 0
    if (props.currentTime) {
      newSeek = props.currentTime;
    }
    audioElement.ref.current.currentTime = newSeek
  }, [props.currentTime])

  useEffect(() => {
    audioElement.ref.current.loop = isLooping;
  }, [isLooping])

  const showDiv = () => {
    document.getElementById('volume-slider-div').style.display = 'block';
  }

  const handleBack = () => {
    audioElement.ref.current.currentTime = 0;
  }
  const addLike = (e) => {
    e.preventDefault()
    const songId = currentSong.id
    const currentUserId = currentUser.id
    dispatch(createLike({ liker_id: currentUserId, song_id: songId })).then(() => {
      // update appropriate tables
      dispatch(fetchUser(currentUserId))
      dispatch(fetchSong(songId))
    })
    setUserLikesSong(true);

  }

  const removeLike = (e) => {
    e.preventDefault()
    const song = props.currentSong
    const currentLikeId = currentUser.likes[song.id].id
    dispatch(deleteLike(currentLikeId, song)).then(() => {
      // update appropriate tables
      dispatch(fetchUser(currentUser.id))
      dispatch(fetchSong(song.id))
    })
    setUserLikesSong(false);
  }


  const toggleLikeButtons = () => {
    if (!!!currentUser) {
      return (
        <button
          className='playhead-button'
          onClick={() => dispatch(openModal('login'))}>
          <LikeButton />
        </button>
      )
    }
    else {

      if (props.currentUserLikes) {
        return (
          <button
            onClick={removeLike}>
            <AfterLikeButton />
          </button>
        )
      }
      else {
        return (
          <button
            className='playhead-button'
            onClick={addLike}>
            <LikeButton />
          </button>
        )
      }
    }
  }
  return (
    <div>

      {audioElement}

      {audioProps.isLoading ? (
        null
      ) : (

        <div className='outer-playhead'>
          {/* <div id="waveform" ref={audioRef} /> */}


          <div className="controls">
            <div className="playhead-controls">
              <button onClick={handleBack} className="playhead-button"><BackButton /></button>
              {/* <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button> */}
              <button onClick={audioProps.playbackStatus === "pause" ? () => dispatch(playSong()) : () => dispatch(pauseSong())} className="playhead-button">
                {audioProps.playbackStatus === "pause" ? <PlayButton /> : <PauseButton />}
              </button>
              {/* <button className="playhead-button"><NextButton /></button> */}
              <button onClick={() => setLooping(!isLooping)} className="playhead-button">{isLooping ? <LoopSelected/> : <LoopUnselected/>}</button>
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
                  <VolumeButton />

                </button>
              </div>
              <img width="100px" height="100px"
                className="playhead-photo"
                // src={currrentSong.imageUrl ? currentSong.imageUrl : }
                src={currentSong.imageUrl} />
              <div className="playhead-artist-info">
                <h1 className="playhead-uploader"><Link to={`/users/${currentSong.artistId}`}>{currentSong.uploader}</Link></h1>
                <h1 className="playhead-title"><Link to={`/songs/${currentSong.id}`}>{currentSong.title}</Link></h1>
              </div>
              <div className="playhead-like-follow">
                {toggleLikeButtons()}
                {/* {props.currentUserLikes ? (
                  <button
                    className='playhead-button'
                    onClick={removeLike}>
                    <AfterLikeButton />
                  </button>
                ) : (

                  <button
                    className='playhead-button'
                    onClick={addLike}>
                    <LikeButton />
                  </button>
                )}
                <button className="playhead-button">
                  <FollowButton />
                </button> */}
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
