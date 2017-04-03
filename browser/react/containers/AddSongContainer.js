import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import {connect} from 'react-redux';

// const mapStateToProps = function (storeState, ownProps) {
//   return {
//     songs: storeState.songs,
//     songId: storeState.songId,
//     error:false
//   };
// };

// const mapDispatchToProps = function(dispatch, ownProps){
  
//   return {
//     handleChange: function(){
//       dispatch()
//     },
//     handleSubmit: this.handleSubmit
//   }
// }

const mapStateToProps = function(storeState ){
  console.log("storeState is......", storeState);
  return {
   songs: storeState.songs,
   playlistId: storeState.playlists.selected.id
  };
};

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    addSongToPlaylist: function(playlistId, songId){
      dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));
    }
  }
};


class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {

  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });

  //   store.dispatch(loadAllSongs());

  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    // const playlistId = this.state.playlists.selected.id;
    // const songId = this.state.songId;

    // store.dispatch(addSongToPlaylist(playlistId, songId))
    //   .catch(() => this.setState({ error: true }));
  }

  render() {

    // const songs = this.state.songs;
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        songs={this.props.songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);
// export default AddSongContainer;
