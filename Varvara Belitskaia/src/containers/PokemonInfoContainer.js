import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonInfo } from '../actions/actions';
import { PokemonInfo } from '../components/PokemonInfo';
import { Spinner } from '../components/Spinner';

class PokemonInfoContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPokemonInfo(id);
  }

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return <PokemonInfo poke={this.props.pokemon} />;
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
