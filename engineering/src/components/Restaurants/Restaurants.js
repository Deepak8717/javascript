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
      <div>
        <h1>Restaurants Store using React+Redux</h1>
        <p>
          This application is built using custom Webpack Boilerplate, React,
          Redux, Selectors, Redux Thunk with sample Test cases.
        </p>
      </div>
      <Form startLoadingRestaurants={startLoadingRestaurants} />
      {restaurants.length !== 0 ? (
        restaurants.restaurants.length === 0 ? (
          <div>No restaurant found with the matching keyword.</div>
        ) : (
          <div className='cards'>
            {restaurants.restaurants.map((i) => (
              <Restaurant key={i.id} restaurant={i} />
            ))}
          </div>
        )
      ) : (
        <div>Enter a city to get restaurants.</div>
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
