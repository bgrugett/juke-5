// import React, {Component} from 'react';
// import store from '../store';
import { connect } from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function(storeState, ownProps){
  console.log("storeState is......", storeState);
  return {
    selectedAlbum: storeState.albums.selected,
    currentSong: storeState.player.currentSong,
    isPlaying: storeState.player.isPlaying
  };
};

const mapDispatchToProps = function(dispatch, ownProps){
  return {
     toggleOne: function (song, list) {
        dispatch(toggleSong(song, list));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

// class AlbumContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }

// export default AlbumContainer;
