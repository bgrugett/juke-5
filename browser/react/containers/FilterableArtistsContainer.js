 import React from 'react';
// import store from '../store';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import { connect } from 'react-redux';

const mapStateToProps = function(storeState ){
  console.log("storeState is......", storeState);
  return {
   artistList: storeState.artists.list
  };
};

class FilterableArtistsContainer extends React.Component {

  constructor() {

    super();

    this.state = Object.assign({
      inputValue: ''
    });
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState().artists);
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artistList.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

// export default FilterableArtistsContainer;

export default connect( mapStateToProps)(FilterableArtistsContainer);
