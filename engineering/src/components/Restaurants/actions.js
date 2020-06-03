export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export const MARK_RESTAURANT_AS_CLOSED = 'MARK_RESTAURANT_AS_CLOSED';
// export const GET_RESTAURANTS = 'GET_RESTAURANTS';
// export const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

export const addRestaurant = (text) => ({
  type: ADD_RESTAURANT,
  payload: { text },
});

export const removeRestaurant = (text) => ({
  type: REMOVE_RESTAURANT,
  payload: { text },
});

export const markRestaurantAsClosed = (text) => ({
  type: MARK_RESTAURANT_AS_CLOSED,
  payload: { text },
});

// export const getRestaurants = (city) => ({
//   type: GET_RESTAURANTS,
//   payload: { city },
// });

// export const filterRestaurants = (filter) => ({
//   type: FILTER_RESTAURANTS,
//   payload: { filter },
// });
