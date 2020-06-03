import {
  LOAD_RESTAURANTS_IN_PROGRESS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_FAIL,
  FILTER_RESTAURANTS,
} from './actions';

const initialState = {
  isLoading: false,
  data: [],
  searchParam: '',
  selectedCity: '',
};

export const restaurants = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_RESTAURANTS: {
      const { filter } = payload;
      const newState = {
        ...state,
        isLoading: false,
        searchParam: filter,
      };
      return newState;
    }
    case LOAD_RESTAURANTS_SUCCESS: {
      const { restaurants, selectedCity } = payload;
      return { ...state, isLoading: false, data: restaurants, selectedCity };
    }
    case LOAD_RESTAURANTS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_RESTAURANTS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
