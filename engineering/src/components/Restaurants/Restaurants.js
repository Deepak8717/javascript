import React from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import Restaurant from './Restaurant';
import { getRestaurants, getRestaurantsLoading } from './selectors';
import { loadRestaurants } from './thunks';

const Restaurants = ({
  isLoading,
  restaurants = [],
  startLoadingRestaurants,
}) => {
  const loadingMessage = <div>Loading Restaurants...</div>;
  const content = (
    <>
      <Form startLoadingRestaurants={startLoadingRestaurants} />
      {restaurants.length !== 0 ? (
        restaurants.restaurants.length === 0 ? (
          'No restaurant found with the matching keyword.'
        ) : (
          restaurants.restaurants.map((i) => (
            <Restaurant key={i.id} restaurant={i} />
          ))
        )
      ) : (
        <p>Enter a city to get restaurants.</p>
      )}
    </>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getRestaurantsLoading(state),
  restaurants: getRestaurants(state),
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingRestaurants: (text) => dispatch(loadRestaurants(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
