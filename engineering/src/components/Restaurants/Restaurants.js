import React from 'react';
import { connect } from 'react-redux';
import {
  removeRestaurant,
  markRestaurantAsClosed,
  // getRestaurants,
  // filterRestaurants,
} from '../Restaurants/actions';
import Form from '../Form/Form';
import Restaurant from './Restaurant';

const Restaurants = ({
  restaurants = [],
  onRemovePressed,
  onClosedPressed,
}) => {
  return (
    <>
      <Form />
      {restaurants.map((i, index) => (
        <Restaurant
          key={index}
          restaurant={i}
          onRemovePressed={onRemovePressed}
          onClosedPressed={onClosedPressed}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeRestaurant(text)),
  onClosedPressed: (text) => dispatch(markRestaurantAsClosed(text)),
  // onFormSubmit: (text) => dispatch(getRestaurants(text)),
  // onFilterChanged: (text) => dispatch(filterRestaurants(text)),
  //onDisplayAlert: () => dispatch(hello()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
