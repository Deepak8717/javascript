import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import Restaurant from './Restaurant';
import { loadRestaurants } from './thunks';

const Restaurants = ({
  restaurants = [],
  isLoading,
  startLoadingRestaurants,
}) => {
  useEffect(() => {
    startLoadingRestaurants();
  }, []);
  const loadingMessage = <div>Loading Restaurants...</div>;
  const content = (
    <>
      <Form />
      {restaurants.restaurants.map((i) => (
        <Restaurant key={i.id} restaurant={i} />
      ))}
    </>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  restaurants: state.restaurants,
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingRestaurants: () => dispatch(loadRestaurants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
