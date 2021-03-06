import React, { useState, useRef, useEffect } from "react";
import { playSong, setCurrentSong, pauseSong } from '../../actions/playhead_actions'
function useAudio(url) {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackStatus, setPlaybackStatus] = useState("pause");
  const [isLoading, setLoading] = useState(true);
  const [isSeeking, setSeeking] = useState(false);
  const [volume, setVolume] = useState(0.1);
  React.useEffect(() => {

    setLoading(true);
  }, [url]);

  return [
    <audio
      onLoadedData={() => {
        setPlaybackStatus("play");
        setLoading(false);
        setDuration(audioRef.current.duration);
      }}
      volume='.1'
      onSeeking={() => setSeeking(true)}
      onSeeked={() => setSeeking(false)}
      // volume={() => setVolume('0.5')}
      src={url}
      ref={audioRef}
      onTimeUpdate={() => {
        setCurrentTime(audioRef.current.currentTime);
      }}
      autoPlay={true}
      hidden
    />,
    {
      currentTime,
      duration,
      playbackStatus,
      isSeeking,
      volume,
      isLoading,
      progress: (currentTime / duration) * 100,
      setTime: seconds => {
        audioRef.current.currentTime = seconds;
      },
      togglePlaybackStatus: () => {

        if (playbackStatus === "play") {
          // dispatch(pauseSong());
          audioRef.current.pause();
          setPlaybackStatus("pause");
        }
        if (playbackStatus === "pause") {
          // dispatch(playSong());
          audioRef.current.play();
          setPlaybackStatus("play");
        }
      }
    }
  ];
}

export default useAudio;
