import React, { useState, useEffect } from "react";
import { uniqBy } from "lodash";
import "./App.scss";

const URL = `http://universities.hipolabs.com/search`;

const ErrorMessage = ({ error }) => (
  <p>
    {error.message} <span className="error">${error.content}</span>
  </p>
);

const Loading = () => <p>Loading</p>;

const Listing = ({ listing, data }) => {
  if (!listing) return;
  let filteredList = data
    .filter((i) => i.country === listing)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(filteredList);
  return (
    <>
      {filteredList.map((i, index) => (
        <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div key={index} className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="mb-3">
                <h5 className="card-title">{i.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {i["state-province"] && (
                    <div className="university__name">
                      {i["state-province"]}
                    </div>
                  )}
                </h6>
              </div>
              <ul className="list-group">
                {i.domains &&
                  i.domains.map((i, index) => (
                    <a
                      className="list-group-item list-group-item-action"
                      key={index}
                      href={`https://${i}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Link {index+1}
                    </a>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Select = ({ data, handleChange }) => {
  let allCountryObjectList = uniqBy(data, "country");
  let allCountryList = allCountryObjectList
    .map((i, index) => ({
      id: index,
      country: i.country,
    }))
    .sort((a, b) => (a.country > b.country ? 1 : -1));
  return (
    <div className="form-group">
      <select
        className="form-control"
        onChange={(e) => handleChange(e)}
        defaultValue=""
      >
        <option disabled value="">
          Select a University
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
  const [data, setData] = useState([]);
  const [listing, setListing] = useState([]);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setListing(e.target.value);
  };
  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(URL);
        const response = await request.json();
        setData(response);
      } catch (error) {
        setError({ content: error.message, message: "There was an error." });
      }
    })();
  }, []);
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <Loading />;
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <h1 className="my-3">University List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <Select data={data} handleChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <Listing listing={listing} data={data} />
      </div>
    </div>
  );
};

export default App;
