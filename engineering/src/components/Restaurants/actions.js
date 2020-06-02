export const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

export const filterRestaurants = (filter) => ({
  type: FILTER_RESTAURANTS,
  payload: { filter },
});
