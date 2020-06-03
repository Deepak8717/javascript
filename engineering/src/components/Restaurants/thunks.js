import {
  loadRestaurantsFail,
  loadRestaurantsInProgress,
  loadRestaurantsSuccess,
} from './actions';

export const loadRestaurants = (city) => async (dispatch, getState) => {
  try {
    dispatch(loadRestaurantsInProgress());
    const request = await fetch(
      `https://cors-anywhere.herokuapp.com/http://opentable.herokuapp.com/api/restaurants?city=${city}`
    );
    const response = await request.json();
    dispatch(loadRestaurantsSuccess(city, response));
  } catch (e) {
    dispatch(loadRestaurantsFail());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => alert(text);
