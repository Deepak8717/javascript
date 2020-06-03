import {
  LOAD_RESTAURANTS_IN_PROGRESS,
  LOAD_RESTAURANTS_SUCCESS,
  LOAD_RESTAURANTS_FAIL,
  FILTER_RESTAURANTS,
} from './actions';

const initialState = {
  isLoading: false,
  data: [],
};

// export const isLoading = (state = false, action) => {
//   const { type } = action;
//   switch (type) {
//     case LOAD_RESTAURANTS_IN_PROGRESS:
//       return true;
//     case LOAD_RESTAURANTS_SUCCESS:
//     case LOAD_RESTAURANTS_FAIL:
//       return false;
//     default:
//       return state;
//   }
// };

export const restaurants = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_RESTAURANTS: {
      const { filter } = payload;
      const filteredItems = state.data.restaurants.filter(
        (i) =>
          i.name.toLowerCase().includes(filter) ||
          i.address.toLowerCase().includes(filter) ||
          i.area.toLowerCase().includes(filter)
      );
      const newRestaurantsState = {
        ...state.data,
        restaurants: filteredItems,
      };
      return { ...state, isLoading: false, data: newRestaurantsState };
    }
    case LOAD_RESTAURANTS_SUCCESS: {
      const { restaurants } = payload;
      return { ...state, isLoading: false, data: restaurants };
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
