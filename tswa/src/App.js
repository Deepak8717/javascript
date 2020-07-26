import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppWrapper from './containers/AppWrapper';
import { startFetchCharacters } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchCharacters());
    // eslint-disable-next-line
  }, []);
  return <AppWrapper />;
};

export default App;
