import React, { useEffect } from 'react';
import AppWrapper from './containers/AppWrapper';
import { useDispatch } from 'react-redux';
import { startFetchCharacters } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchCharacters());
  }, []);
  return <AppWrapper />;
}

export default App;
