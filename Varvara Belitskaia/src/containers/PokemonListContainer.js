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
    this.props.setInitialState();
    this.props.fetchPokemons();
  }

  catchPoke(poke, e) {
    e.preventDefault();
    this.props.catchPokemon(poke);
    e.target.setAttribute('disabled', true);
    e.target.textContent = 'You caught me ;)';
  }

  loadMore() {
    this.props.incrementPageNumber();
    this.props.fetchPokemons();
  }

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <div className="d-flex flex-column">
        <PokemonList
          pokemonList={this.props.pokemonList}
          onClick={this.catchPoke.bind(this)}
        />
        {!this.props.isLastPage ? (
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
