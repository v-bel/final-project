import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import {
  FETCH_POKEMON_INFO_BEGIN,
  FETCH_POKEMON_INFO_SUCCESS,
  fetchPokemonInfo
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_POKEMON_INFO_SUCCESS when fetching pokemon info with given id has been done', () => {
    fetchMock.getOnce('http://localhost:3000/pokemons/1', {
      name: 'bulbasaur',
      id: 1
    });

    const expectedActions = [
      { type: FETCH_POKEMON_INFO_BEGIN },
      {
        type: FETCH_POKEMON_INFO_SUCCESS,
        payload: {
          name: 'bulbasaur',
          id: 1
        }
      }
    ];

    const store = mockStore({ payload: {} });

    return store.dispatch(fetchPokemonInfo(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
