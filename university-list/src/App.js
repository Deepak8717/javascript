import React, { useState, useEffect } from 'react';
import { uniqBy } from 'lodash';
import './App.css';

const URL = `https://cors-unlimited.herokuapp.com/http://universities.hipolabs.com/search`;

const ErrorMessage = ({ meta }) => (
  <div className='container'>
    <div className='row'>
      <div className='col col-12 my-3'>
        <p>
          {meta.error.message}&nbsp;
          <span className='error'>{meta.error.content}.</span>
        </p>
      </div>
    </div>
  </div>
);

const Loading = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-12 my-3'>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
};

const Listing = ({ meta }) => {
  if (!meta.listing) return;
  let filteredList = meta.data
    .filter((i) => i.country === meta.listing)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  if (filteredList.length === 0)
    return (
      <div className='row'>
        <div className='col col-12'>
          <p className='text-muted'>
            Please select a country to view available institutes.
          </p>
        </div>
      </div>
    );
  return (
    <>
      {filteredList.length !== 0 && (
        <div className='row'>
          <div className='col col-12'>
            <p className='text-muted'>
              Total institutes available in API for selected country:{' '}
              <strong>{filteredList.length}</strong>
            </p>
          </div>
        </div>
      )}
      <div className='row'>
        {filteredList.map((i, index) => (
          <div
            key={index}
            className='col col-12 col-sm-6 col-md-4 col-lg-3 mb-3'
          >
            <div key={index} className='card h-100'>
              <div className='card-body d-flex flex-column justify-content-between'>
                <div className='mb-3'>
                  <h5 className='card-title'>{i.name}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {i['state-province'] && (
                      <div className='university__name'>
                        {i['state-province']}
                      </div>
                    )}
                  </h6>
                </div>
                <ul className='list-group'>
                  {i.domains &&
                    i.domains.map((i, index) => (
                      <a
                        className='list-group-item list-group-item-action shadow'
                        key={index}
                        href={`https://${i}`}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        Check Site {index + 1}
                      </a>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Select = ({ meta, handleChange }) => {
  let allCountryObjectList = uniqBy(meta.data, 'country');
  let allCountryList = allCountryObjectList
    .map((i, index) => ({
      id: index,
      country: i.country,
    }))
    .sort((a, b) => (a.country > b.country ? 1 : -1));
  return (
    <div className='form-group'>
      <select
        className='form-control'
        onChange={(e) => handleChange(e)}
        defaultValue=''
      >
        <option disabled value=''>
          Select a Country
        </option>
        {allCountryList.map((i) => (
          <option key={i.id} value={i.country}>
            {i.country}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  const [meta, setMeta] = useState({ data: [], listing: [], error: null });
  const handleChange = (e) => {
    setMeta({ ...meta, listing: e.target.value });
  };
  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(URL);
        const response = await request.json();
        setMeta({ ...meta, data: response });
      } catch (error) {
        setMeta({
          ...meta,
          error: { content: error.message, message: 'There was an error.' },
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!meta.data) return <Loading />;
  if (meta.error) return <ErrorMessage meta={meta} />;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-12'>
          <h1 className='my-3'>University List</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col col-12'>
          <Select meta={meta} handleChange={handleChange} />
        </div>
      </div>
      <Listing meta={meta} />
    </div>
  );
};

export default App;
