const mSTP = (state, ownProps) => {

  const songLoaded = () => {
    if (state.entities.songs[ownProps.match.params.songId]){
      return true;
    } else {
      return false
    }
  }

  return {
    currentUser: state.entities.users[state.session.id],
    songId: ownProps.match.params.songId,
    song: state.entities.songs[ownProps.match.params.songId],
    songUrl: (songLoaded() ? state.entities.songs[ownProps.match.params.songId].songUrl : '')
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId))
  }
}

export default connect(mSTP, mDTP)(SongShow)