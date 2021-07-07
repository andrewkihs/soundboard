import React from 'react'
import { Redirect } from 'react-router-dom'
import SongEditForm from './song_edit_form'

class SongEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userOwnsSong: props.userOwnsSong
    }
  }

  componentDidMount(){
    // this.props.fetchSong(this.props.songId)
  }
  componentDidUpdate(prevProps){
    if (this.props.song!==prevProps.song){
      if (!!this.props.song){

        this.setState({
          userOwnsSong: this.props.song.artistId === this.props.currentUser.id})
      ß}
    }
  }
  

 render() {
    const { song, updateSong, closeModal } = this.props
    const { userOwnsSong } = this.state
    if (song === undefined) return null
      return (
      <>
        <SongEditForm song={song} updateSong={updateSong} closeModal={closeModal} />
      </>
    );
    } 

  
}
export default SongEdit