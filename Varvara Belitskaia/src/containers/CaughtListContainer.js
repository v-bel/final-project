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
    const { setInitialState, fetchCaught } = this.props;
    setInitialState();
    fetchCaught();
  }

  loadMore() {
    const { incrementCaughtPageNumber, fetchCaught } = this.props;
    incrementCaughtPageNumber();
    fetchCaught();
  }

  render() {
    const { isFetching, isCaughtLastPage, caughtPokemonList } = this.props;
    if (isFetching) {
      return <Spinner />;
    }

    return (
      <div className="d-flex flex-column">
        <CaughtList caughtPokemonList={caughtPokemonList} />
        {!isCaughtLastPage ? (
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
