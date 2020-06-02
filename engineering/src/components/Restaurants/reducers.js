import { FILTER_RESTAURANTS } from './actions';

export const restaurants = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_RESTAURANTS: {
      const { filter } = payload;
      const newList = state.filter(
        (i) =>
          i.name.includes(filter) ||
          i.address.includes(filter) ||
          i.street.includes(filter)
      );
      // console.log(filter, newList);
      return newList;
    }
    default:
      return state;
  }
};
