import React, { useEffect } from 'react';
import AppWrapper from './containers/AppWrapper';
import { useDispatch } from 'react-redux';
import { startFetchCharacters } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AppWrapper />;
}

export default App;
