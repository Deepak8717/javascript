import React, { useState } from 'react';
import moment from 'moment';
import './App.css';

const App = () => {
  const [data, setData] = useState({
    error: null,
    jobs: null,
    page: 1,
    keyword: ``,
    isSearched: false,
  });
  const getJobs = async () => {
    try {
      setData({ ...data, isSearched: true });
      const URL = `https://cors-unlimited.herokuapp.com/https://jobs.github.com/positions.json?description=${data.keyword}&page=${data.page}`;
      // const URL = `https://jobs.github.com/positions.json?description=${data.keyword}&page=${data.page}`;
      const res = await fetch(URL);
      const json = await res.json();
      return json;
    } catch (err) {
      setData({ ...data, error: err.message });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, isSearched: false, jobs: null, page: 1 });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.children.keyword.value.trim() === '') {
      setData({ ...data, keyword: `` });
      alert('Please search for a job title!');
      return;
    }
    getJobs()
      .then((res) => {
        setData({
          ...data,
          jobs: res,
          page: data.page + 1,
          isSearched: false,
        });
      })
      .catch((err) => setData({ ...data, error: err }));
  };
  const handleNextPage = (e) => {
    if (data.keyword && data.page >= 1) {
      e.preventDefault();
      getJobs()
        .then((res) => {
          setData({
            ...data,
            jobs: res,
            page: data.page + 1,
            isSearched: false,
          });
        })
        .catch((err) => setData({ ...data, error: err }));
    }
  };
  if (data.isSearched)
    return (
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  if (data.error || data.jobs === undefined)
    return (
      <div className='d-flex align-items-center justify-content-center vh-100'>
        <div className='container'>
          <div className='row'>
            <div className='col col-12'>
              <p>There is an error, please try again later.</p>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/' rel='noopener noreferrer'>
          <img
            src='https://www.flaticon.com/premium-icon/icons/svg/2731/2731830.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='Logo'
          />
          <span className='ml-2'>Gindeed</span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='form-inline my-2 my-lg-0 ml-auto'
          >
            <input
              className='form-control mr-sm-2'
              type='text'
              onChange={(e) => handleChange(e)}
              name='keyword'
              value={data.keyword}
              placeholder='Search a Job...'
              aria-label='Search a Job'
              required
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className='container my-3'>
        <div className='row'>
          <div className='col col-12'>
            <div className='card-columns'>
              {data.jobs &&
                data.jobs.map((job) => (
                  <div className='card mb-3' key={job.id}>
                    <div className='card-body border-bottom'>
                      <h5 className='card-title mb-1 text-capitalize'>
                        {job.title}
                      </h5>
                      <p className='card-text mb-0'>{job.location}</p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          {moment(job.created_at).format('LLLL')}
                        </small>
                      </p>
                    </div>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: job.description,
                          }}
                        />
                      </li>
                      <li className='list-group-item'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: job.how_to_apply,
                          }}
                        />
                      </li>
                      <li className='list-group-item'>
                        <a
                          href={job.company_url}
                          className='card-link'
                          rel='noopener noreferrer'
                        >
                          {job.company}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              {data.keyword && data.page >= 1 && data.jobs && (
                <button
                  className='btn btn-primary btn-sm'
                  onClick={(e) => handleNextPage(e)}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
