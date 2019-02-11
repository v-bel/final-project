import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonInfo } from '../actions/actions';
import { PokemonInfo } from '../components/PokemonInfo';
import { Spinner } from '../components/Spinner';

class PokemonInfoContainer extends Component {
  componentDidMount() {
    const { match, fetchPokemonInfo } = this.props;
    const id = match.params.id;
    fetchPokemonInfo(id);
  }

  render() {
    const { isFetching, pokemon } = this.props;
    if (isFetching) {
      return <Spinner />;
    }

    return <PokemonInfo poke={pokemon} />;
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonInfo: id => dispatch(fetchPokemonInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonInfoContainer);
