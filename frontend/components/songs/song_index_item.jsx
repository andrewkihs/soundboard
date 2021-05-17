import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { setCurrentSong } from '../../actions/playhead_actions'
import SongShow from './song_show'


class SongIndexItem extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    const { song } = this.props
    debugger
      return (
        <div>
          <img className="song-container-photo" src={song.imageUrl}/>
          <div className="title">{song.title}</div>
          <div className="genre">{song.genre}</div>
          <button onClick={this.props.setCurrentSong(song)}>Set Current song</button>
          
        </div>
      );
   
  }
}
export default SongIndexItem