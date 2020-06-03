import { expect } from 'chai';
import { restaurants } from '../reducers';

describe('The restaurants reducer', () => {
  it('Filter Restaurants when FILTER_RESTAURANTS action is received', () => {
    const fakeFilter = 'Toronto';
    const fakeAction = {
      type: 'FILTER_RESTAURANTS',
      payload: {
        filter: fakeFilter,
      },
    };
    const originalState = {
      isLoading: false,
      data: [],
      searchParam: '',
      selectedCity: '',
    };
    const expected = {
      isLoading: false,
      data: [],
      searchParam: fakeFilter,
      selectedCity: '',
    };
    const actual = restaurants(originalState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
