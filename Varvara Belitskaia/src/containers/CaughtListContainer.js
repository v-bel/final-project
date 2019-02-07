import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCaught,
  incrementCaughtPageNumber,
  setInitialState
} from '../actions/actions';
import { CaughtList } from '../components/CaughtList';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { Spinner } from '../components/Spinner';

class CaughtListContainer extends Component {
  componentDidMount() {
    this.props.setInitialState();
    this.props.fetchCaught();
  }

  loadMore() {
    this.props.incrementCaughtPageNumber();
    this.props.fetchCaught();
  }

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <div className="d-flex flex-column">
        <CaughtList caughtPokemonList={this.props.caughtPokemonList} />
        {!this.props.isCaughtLastPage ? (
          <LoadMoreButton onClick={this.loadMore.bind(this)} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  caughtPokemonList: state.caughtPokemonList,
  isFetching: state.isFetching,
  caughtPage: state.caughtPage,
  isCaughtLastPage: state.isCaughtLastPage
});

const mapDispatchToProps = dispatch => ({
  fetchCaught: () => dispatch(fetchCaught()),
  incrementCaughtPageNumber: () => dispatch(incrementCaughtPageNumber()),
  setInitialState: () => dispatch(setInitialState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaughtListContainer);
