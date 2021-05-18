import React from 'react'
import SongIndexItemContainer from './song_index_item_container'
class SongShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      play: false,
      pause: true,
      song: props.song,
      // songUrl: props.songUrl,
      // audioPlayer: new Audio(this.state.songUrl)
    }
    // debugger
    // this.url = props.song.audioUrl;
    // this.audio = new Audio(this.state.songUrl);
    this.play = this.play.bind(this)
  }
  
  play = () => {
  // this.setState({ play: true, pause: false })
  //   this.state.audioPlayer.play();
    // debugger
    this.props.setCurrentSong(this.props.song)
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.state.audioPlayer.pause();
  }

  componentDidMount(){
    this.props.fetchSong(this.props.songId)
  }
  

 render() {
    const { song } = this.props
    // debugger
    if (song === undefined){
      return (<></>)
    } 
    else {
      // debugger
      return (
        <>
          <SongIndexItemContainer songId={this.props.song.id}/>
        </>
      );
   }
  }
}
export default SongShow