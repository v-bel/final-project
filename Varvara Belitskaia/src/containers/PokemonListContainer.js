import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPokemons,
  incrementPageNumber,
  setInitialState,
  catchPokemon
} from '../actions/actions';
import { PokemonList } from '../components/PokemonList';
import { LoadMoreButton } from '../components/LoadMoreButton';
import { Spinner } from '../components/Spinner';

class PokemonListContainer extends Component {
  componentDidMount() {
    const { setInitialState, fetchPokemons } = this.props;
    setInitialState();
    fetchPokemons();
  }

  catchPoke(poke, e) {
    const { catchPokemon } = this.props;
    e.preventDefault();
    catchPokemon(poke);
    e.target.setAttribute('disabled', true);
    e.target.textContent = 'You caught me ;)';
  }

  loadMore() {
    const { incrementPageNumber, fetchPokemons } = this.props;
    incrementPageNumber();
    fetchPokemons();
  }

  render() {
    const { isFetching, pokemonList, isLastPage } = this.props;
    if (isFetching) {
      return <Spinner />;
    }

    return (
      <div className="d-flex flex-column">
        <PokemonList
          pokemonList={pokemonList}
          onClick={this.catchPoke.bind(this)}
        />
        {!isLastPage ? (
          <LoadMoreButton onClick={this.loadMore.bind(this)} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  isFetching: state.isFetching,
  page: state.page,
  isLastPage: state.isLastPage
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
  incrementPageNumber: () => dispatch(incrementPageNumber()),
  setInitialState: () => dispatch(setInitialState()),
  catchPokemon: poke => dispatch(catchPokemon(poke))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListContainer);
