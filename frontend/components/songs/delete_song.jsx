import React from 'react'
import SongIndexItemContainer from './song_index_item_container'
import { closeModal } from '../../actions/modal_actions'
import { deleteSong } from '../../actions/song_actions'
class DeleteSong extends React.Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleDelete(){
    const { song } = this.props
    dispatch(deleteSong(song.id))
    dispatch(closeModal())
  }
  render(){
    return (
      <div className='delete-track-container'>
        <div className='bottom-delete-track'>
          <h1>Permanently delete this track?</h1>
          <div className='delete-bottom-mc'>
            <p>
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
        </div>
    )
  }
}

export default DeleteSong