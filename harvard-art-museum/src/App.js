import React, { useState, useEffect } from 'react';
import FormBox from './components/FormBox';
import Resource from './components/Resource';
import Message from './components/Message';
import Header from './components/Header';
import Loading from './components/Loading';

const App = () => {
  const [actions, setActions] = useState({
    error: false,
    loading: false,
    content: null,
    page: 1,
    resource: 'object',
  });
  const { error, loading, resource, content, page } = actions;
  const url = `https://api.harvardartmuseums.org/${resource}?apikey=${process.env.REACT_APP_KEY}&page=${page}`;
  const getDATA = () => {
    setActions({ ...actions, loading: true });
    (async () => {
      const r = await fetch(url);
      const j = await r.json();
      return j;
    })()
      .then((d) => setActions({ ...actions, content: d, loading: false }))
      .catch(() => setActions({ ...actions, error: true }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setActions({ ...actions, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (e.target.elements['resource'].value === 'Select a Resource') {
    //   alert('Please select a Resource.');
    //   return;
    // }
    getDATA();
  };
  const handleNext = () => {
    setActions({ ...actions, page: page + 1 });
  };
  const handlePrevious = () => {
    setActions({ ...actions, page: page - 1 });
  };
  useEffect(() => {
    getDATA();
    // eslint-disable-next-line
  }, [page, resource]);
  if (error) return <p>Something went wrong, please try again.</p>;
  if (loading) return <Loading />;
  return (
    <div className='my-3'>
      <Header />
      <FormBox
        actions={actions}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      {content ? (
        resource === 'object' || resource === 'person' ? (
          <Resource actions={actions} />
        ) : (
          <Message message='Please select a resource and get some information.' />
        )
      ) : (
        <Message message='Please select a resource and get some information.' />
      )}
    </div>
  );
};

export default App;
