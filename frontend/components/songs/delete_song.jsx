import React from 'react'
import SongIndexItemContainer from './song_index_item_container'
import { Redirect } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions'
import { deleteSong } from '../../actions/song_actions'
class DeleteSong extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      deleteRedirect: null,
    }
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleDelete(){
    const { song } = this.props
    dispatch(deleteSong(song.id))
    this.setState({deleteRedirect: true})
  }

  render(){
    const { song } = this.props
    return (
      <div className='delete-track-container'>
        <div className='bottom-delete-track'>
          <h1 className='delete-h1'>Permanently delete this track?</h1>
          <div className='delete-bottom-mc'>
            <p className='delete-track-p'>
              Removing this track is irreversible. You will lose all the plays, likes and comments for this track with no way to get them back.
            </p>
            <div className="delete-song-continue-btn">

                  <p className="edit-song-cancel-btn"
                    onClick={() => dispatch(closeModal())}>  
                    Cancel
                  </p>
                  <button className="edit-song-submit-btn"
                  type="submit" 
                  onClick={this.handleDelete}>  
                  Delete Forever
                  </button>
                </div>
                </div>
          </div>
          {this.state.deleteRedirect ? <Redirect to={`/users/${song.artistId}`}/> : null}
        </div>
    )
  }
}

export default DeleteSong