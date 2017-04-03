import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  console.log("state on stationContainer", state);
  console.log("ownProps on station containter...", ownProps);
  const songsInGenre = state.songs.filter(function (obj) {
    return obj.genre == ownProps.params.genreName
  }).map(convertSong);
  return {
    genreName: ownProps.params.genreName,
    songs: songsInGenre,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
   return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
