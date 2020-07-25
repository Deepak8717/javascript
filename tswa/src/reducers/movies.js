import { types } from '../store/actions'

const defaultState = {
  loading: false,
  movies: [],
  filter: {
    query: '',
    genre: ''
  }
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.START_FETCH_MOVIES:
      return {
        ...state,
        movies: [],
        loading: true,
        error: false
      };
    case types.END_FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: false
      };
    case types.ERROR_FETCH_MOVIES:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;