import React from 'react'
import SongIndexItemContainer from './song_index_item_container'

class DeleteSong extends React.Component {
  constructor(props){
    super(props)

  }


  render(){
    return (
      <div className='delete-track-container'>
        {/* <SongIndexItemContainer/> */}
        <div className='bottom-delete-track'>
          <h1>Permanently delete this track?</h1>
          <div className='delete-bottom-mc'>
            <p>
              Removing this track is irreversible. You will lose all the plays, likes and comments for this track with no way to get them back.
            </p>
            <div className="delete-song-continue-btn">

                  <p className="edit-song-cancel-btn"
                    onClick={() => this.props.closeModal()}>  
                    Cancel
                  </p>
                  <button className="edit-song-submit-btn"
                  type="submit" 
                  onClick={this.handleSubmit}>  
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