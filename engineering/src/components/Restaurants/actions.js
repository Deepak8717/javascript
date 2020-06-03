export const LOAD_RESTAURANTS_IN_PROGRESS = 'LOAD_RESTAURANTS_IN_PROGRESS';
export const LOAD_RESTAURANTS_SUCCESS = 'LOAD_RESTAURANTS_SUCCESS';
export const LOAD_RESTAURANTS_FAIL = 'LOAD_RESTAURANTS_FAIL';
export const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

export const loadRestaurantsInProgress = (restaurants) => ({
  type: LOAD_RESTAURANTS_IN_PROGRESS,
  payload: { restaurants },
});

export const loadRestaurantsSuccess = (selectedCity, restaurants) => ({
  type: LOAD_RESTAURANTS_SUCCESS,
  payload: { selectedCity, restaurants },
});

export const loadRestaurantsFail = (restaurants) => ({
  type: LOAD_RESTAURANTS_FAIL,
  payload: { restaurants },
});

export const filterRestaurants = (filter) => ({
  type: FILTER_RESTAURANTS,
  payload: { filter },
});
