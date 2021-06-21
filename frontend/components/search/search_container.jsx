import { connect } from "react-redux";
import Search from "./search";
import { fetchSongs } from "../../actions/song_actions";

const mSTP = (state, ownProps) => {
  debugger
  return {
    songs: Object.values(state.entities.songs)
  }
}

const mDTP = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mSTP, mDTP)(Search);