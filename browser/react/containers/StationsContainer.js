import {connect} from 'react-redux';
import Stations from '../components/stations'


const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapStateToProps = function (state) {
  return {
    stations: convertSongsToStations(state.songs)
  };
};

const mapDispatch = (storeState) => {
  return {};
}

export default connect(mapStateToProps, mapDispatch)(Stations);
