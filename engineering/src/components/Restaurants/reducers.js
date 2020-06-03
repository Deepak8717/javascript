import {
  LOAD_RESTAURANTS_IN_PROGRESS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_FAIL,
  FILTER_RESTAURANTS,
} from './actions';

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_RESTAURANTS_IN_PROGRESS:
      return true;
    case LOAD_RESTAURANTS_SUCCESS:
    case LOAD_RESTAURANTS_FAIL:
      return false;
    default:
      return state;
  }
};

export const restaurants = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_RESTAURANTS: {
      const { filter } = payload;
      const filteredItems = state.restaurants.filter(
        (i) =>
          i.name.toLowerCase().includes(filter) ||
          i.address.toLowerCase().includes(filter) ||
          i.area.toLowerCase().includes(filter)
      );
      const newState = {
        ...state,
        restaurants: filteredItems,
      };
      return newState;
    }
    case LOAD_RESTAURANTS_SUCCESS: {
      const { restaurants } = payload;
      return restaurants;
    }
    case LOAD_RESTAURANTS_IN_PROGRESS:
    case LOAD_RESTAURANTS_FAIL: {
    }
    default:
      return state;
  }
};
