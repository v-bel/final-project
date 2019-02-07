import {
  FETCH_POKEMONS_BEGIN,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  FETCH_CAUGHT_BEGIN,
  FETCH_CAUGHT_SUCCESS,
  FETCH_CAUGHT_FAILURE,
  FETCH_POKEMON_INFO_BEGIN,
  FETCH_POKEMON_INFO_SUCCESS,
  FETCH_POKEMON_INFO_FAILURE,
  CATCH_POKEMON_BEGIN,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  INCREMENT_PAGE_NUMBER,
  INCREMENT_CAUGHT_PAGE_NUMBER,
  SET_INITIAL_STATE,
  SET_LAST_PAGE,
  SET_CAUGHT_LAST_PAGE
} from '../actions/actions';

// Crete initial state for reducer
const initState = {
  pokemonList: [],
  caughtPokemonList: [],
  pokemon: {},
  isFetching: false,
  page: 1,
  caughtPage: 1,
  // I use isLastPage and isCaughtLastPage flags to hide 'Load more' button when all data is loaded
  isLastPage: false,
  isCaughtLastPage: false
};

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonList: state.pokemonList.concat(action.payload),
        isFetching: false
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        pokemonList: ['error'],
        isFetching: false
      };

    case FETCH_CAUGHT_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CAUGHT_SUCCESS:
      return {
        ...state,
        caughtPokemonList: state.caughtPokemonList.concat(action.payload),
        isFetching: false
      };
    case FETCH_CAUGHT_FAILURE:
      return {
        ...state,
        caughtPokemonList: ['error'],
        isFetching: false
      };

    case FETCH_POKEMON_INFO_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_POKEMON_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemon: action.payload
      };
    case FETCH_POKEMON_INFO_FAILURE:
      return {
        ...state,
        isFetching: false
      };

    case CATCH_POKEMON_BEGIN:
      return {
        ...state
      };
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonList: state.pokemonList.map(poke =>
          poke.id === action.payload.id ? { ...poke, isCaught: true } : poke
        ),
        caughtPokemonList: [...state.caughtPokemonList, action.payload]
      };
    case CATCH_POKEMON_FAILURE:
      return {
        ...state
      };

    case INCREMENT_PAGE_NUMBER:
      return {
        ...state,
        page: state.page + 1
      };
    case INCREMENT_CAUGHT_PAGE_NUMBER:
      return {
        ...state,
        caughtPage: state.caughtPage + 1
      };

    case SET_INITIAL_STATE:
      return initState;

    case SET_LAST_PAGE:
      return {
        ...state,
        isLastPage: true
      };
    case SET_CAUGHT_LAST_PAGE:
      return {
        ...state,
        isCaughtLastPage: true
      };

    default:
      return state;
  }
};
