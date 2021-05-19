import React, { useEffect, useState } from "react";
import AudioPlayer from '../playhead/audio_player'
import Waveform from "./waveform";
import PlayList from "./playList";
// import {playSong, pauseSong} from '../../actions/playhead_actions'
export const Playhead = props => {

  let tracks;
  if (props.currentSong){
    tracks = [
      {
      id: 0,
      title: props.currentSong.title,
      songUrl: props.currentSong.songUrl,
      imageUrl: props.currentSong.imageUrl
      }
    ]
  } else {
    tracks = [
      {
        id: 0,
        title: "",
        url: "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
      }
    ];

  }
  const tracksString = JSON.stringify(tracks)

  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  useEffect(()=>{
    let tracksParsed = JSON.parse(tracksString)
    setSelectedTrack(tracksParsed[0])
  },[tracksString])
  // debugger
  return (
    <div className="playhead">
      {selectedTrack?.songUrl && <Waveform 
      url={selectedTrack.songUrl}
      paused={props.paused} 
      pauseSong={props.pauseSong}
      playSong={props.playSong}
      />}
  

      {selectedTrack.title}
      <img className="playhead-photo" src={selectedTrack.imageUrl}/>
      <br />
    </div>
  );
}
export default Playhead
