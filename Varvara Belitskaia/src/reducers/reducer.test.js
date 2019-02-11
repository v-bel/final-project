import { reducer } from './reducer';
import { FETCH_CAUGHT_SUCCESS } from '../actions/actions';

describe('pokedex reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      pokemonList: [],
      caughtPokemonList: [],
      pokemon: {},
      isFetching: false,
      page: 1,
      caughtPage: 1,
      isLastPage: false,
      isCaughtLastPage: false
    });
  });

  it('should handle FETCH_CAUGHT_SUCCESS', () => {
    expect(
      reducer(
        {
          caughtPokemonList: [
            {
              name: 'bulbasaur',
              id: 1
            }
          ]
        },
        {
          type: FETCH_CAUGHT_SUCCESS,
          payload: {
            name: 'beedrill',
            id: 15
          }
        }
      )
    ).toEqual({
      caughtPokemonList: [
        {
          name: 'bulbasaur',
          id: 1
        },
        {
          name: 'beedrill',
          id: 15
        }
      ],
      isFetching: false
    });
  });
});
