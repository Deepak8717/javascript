import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadRestaurants } from '../thunks';

describe('The load restaurants thunk', () => {
  it('Dispatches correct actions in success scenario', async () => {
    const fakeDispatch = sinon.spy();
    const fakeRestaurants = {
      total_entries: 2,
      per_page: 2,
      current_page: 1,
      restaurants: [
        {
          id: 21307,
          name: 'Scaramouche Restaurant',
          address: '1 Benvenuto Place',
          city: 'Toronto',
          state: 'ON',
          area: 'Toronto / SW Ontario',
          postal_code: 'M4V 2L1',
          country: 'CA',
          phone: '4169618011',
          lat: 43.68207,
          lng: -79.40041,
          price: 4,
          reserve_url: 'http://www.opentable.com/single.aspx?rid=21307',
          mobile_reserve_url:
            'http://mobile.opentable.com/opentable/?restId=21307',
          image_url: 'https://www.opentable.com/img/restimages/21307.jpg',
        },
        {
          id: 82957,
          name: "The Sultan's Tent",
          address: '49 Front St E',
          city: 'Toronto',
          state: 'ON',
          area: 'Toronto / SW Ontario',
          postal_code: 'M5E 1B3',
          country: 'CA',
          phone: '4169610601x',
          lat: 43.648033,
          lng: -79.374377,
          price: 4,
          reserve_url: 'http://www.opentable.com/single.aspx?rid=82957',
          mobile_reserve_url:
            'http://mobile.opentable.com/opentable/?restId=82957',
          image_url: 'https://www.opentable.com/img/restimages/82957.jpg',
        },
      ],
    };
    fetchMock.get(
      `https://cors-unlimited.herokuapp.com/http://opentable.herokuapp.com/api/restaurants?city=toronto`,
      fakeRestaurants
    );
    const expectedFirstAction = {
      type: 'LOAD_RESTAURANTS_IN_PROGRESS',
      payload: {
        restaurants: undefined,
      },
    };
    const expectedSecondAction = {
      type: 'LOAD_RESTAURANTS_SUCCESS',
      payload: {
        selectedCity: 'toronto',
        restaurants: fakeRestaurants,
      },
    };
    await loadRestaurants('toronto')(fakeDispatch);
    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
    fetchMock.reset();
  });
});
