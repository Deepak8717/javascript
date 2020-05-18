import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import FormBox from './FormBox';
import ResourceMeta from './ResourceMeta';
import Message from './Message';

const App = () => {
  const [actions, setActions] = useState({
    error: false,
    loading: false,
    content: null,
    page: 1,
    resource: '',
  });
  const { error, loading, resource, content } = actions;
  const url = `https://api.harvardartmuseums.org/${resource}?apikey=${process.env.REACT_APP_KEY}`;
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
    if (e.target.elements['resource'].value === 'Select a Resource') {
      alert('Please select a Resource.');
      return;
    }
    getDATA();
  };
  if (error) return <p>Something went wrong, please try again.</p>;
  if (loading)
    return (
      <ReactLoading type='balls' color='#000' height='3rem' width='3rem' />
    );
  return (
    <div className='my-3'>
      <FormBox
        actions={actions}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {content ? (
        <ResourceMeta actions={actions} />
      ) : (
        <Message message='Please select a resource and get some information.' />
      )}
    </div>
  );
};

export default App;
