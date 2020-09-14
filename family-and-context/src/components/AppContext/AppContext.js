import { createContext } from 'react';

const AppContext = createContext({
  message: '',
  push: false,
  handleClick: () => {},
});

export default AppContext;
