import React from 'react'
import SongEditForm from './song_edit_form'

class SongEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    this.props.fetchSong(this.props.songId)
  }
  

 render() {
    const { song, updateSong } = this.props
    // 
    if (song === undefined) return null
    else {

      return (
        <>
          <SongEditForm song={song} updateSong={updateSong}/>
        </>
      );
   }
  }
}
export default SongEdit