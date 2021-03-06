// import React, {Component} from 'react';
// import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

const mapStateToProps = function(storeState, ownProps){
  return {
    albums: storeState.albums.list
  }
}
// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

// export default AlbumsContainer;

export default connect(mapStateToProps)(Albums);


