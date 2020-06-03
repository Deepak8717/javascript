import {
  ADD_RESTAURANT,
  REMOVE_RESTAURANT,
  MARK_RESTAURANT_AS_CLOSED,
  // GET_RESTAURANTS,
  // FILTER_RESTAURANTS,
} from './actions';

export const restaurants = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_RESTAURANT: {
      const { text } = payload;
      const newRestaurant = {
        text,
        id: state.length + 1,
        isClosed: false,
      };
      return state.concat(newRestaurant);
    }
    case REMOVE_RESTAURANT: {
      const { text } = payload;
      return state.filter((restaurant) => restaurant.text !== text);
    }
    case MARK_RESTAURANT_AS_CLOSED: {
      const { text } = payload;
      return state.map((restaurant) => {
        if (restaurant.text === text) {
          return {
            ...restaurant,
            isClosed: true,
          };
        }
        return restaurant;
      });
    }
    // case GET_RESTAURANTS: {
    //   const { city } = payload;
    //   console.log(city, state);
    //   return state;
    // }
    // case FILTER_RESTAURANTS: {
    //   const { filter } = payload;
    //   console.log(filter, state);
    //   const newList = state.filter(
    //     (i) =>
    //       i.name.includes(filter) ||
    //       i.address.includes(filter) ||
    //       i.street.includes(filter)
    //   );
    //   return newList;
    //   return state;
    // }
    default:
      return state;
  }
};
