export const getRestaurants = (state) => {
  const { data, searchParam } = state.restaurants;
  if (searchParam !== '' && searchParam !== undefined) {
    const filteredItems = data.restaurants.filter((i) => {
      return (
        i.name.toLowerCase().includes(searchParam) ||
        i.address.toLowerCase().includes(searchParam) ||
        i.area.toLowerCase().includes(searchParam)
      );
    });
    const newRestaurantsState = {
      ...state.data,
      restaurants: filteredItems,
    };
    return newRestaurantsState;
  }
  return state.restaurants.data;
};
export const getRestaurantsLoading = (state) => state.restaurants.isLoading;
export const getCity = (state) => state.restaurants.selectedCity;
