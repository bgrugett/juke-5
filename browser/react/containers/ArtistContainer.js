// import React, {Component} from 'react';
// import store from '../store';
import Artist from '../components/Artist';
import { connect } from 'react-redux';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function(storeState, ownProps){
  console.log("ownProps in ArtistContainer is......", ownProps);
  return {
    selectedArtist: storeState.artists.selected,
    children: ownProps.children
  };
};
const mapDispatchToProps = function(dispatch, ownProps){
  return {
     toggleOne: function (song, list) {
        dispatch(toggleSong(song, list));
    }
  }
}

// class ArtistContainer extends Component {

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
//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }

// export default ArtistContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
