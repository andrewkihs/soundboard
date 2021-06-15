import React from 'react'
import { Redirect } from 'react-router-dom'
import SongEditForm from './song_edit_form'

class SongEdit extends React.Component{
  constructor(props){
    debugger
    super(props)
    this.state = {
      
    }
  }

  componentDidMount(){
    this.props.fetchSong(this.props.songId)
  }
  componentDidUpdate(prevProps){
    if (this.props.song!==prevProps.song){
      this.setState({
        userOwnsSong: this.props.song.artistId === this.props.currentUser.id})
    }
  }
  

 render() {
    const { song, updateSong } = this.props
    const { userOwnsSong } = this.state
    if (song === undefined) return null
    if (userOwnsSong){
       return (
        <>
          <SongEditForm song={song} updateSong={updateSong}/>
        </>
      );
    } 
    else {
      return <Redirect to={`/songs/${song.id}/`}/>
   }
  }
}
export default SongEdit