import {
  LOAD_RESTAURANTS_IN_PROGRESS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_FAIL,
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
