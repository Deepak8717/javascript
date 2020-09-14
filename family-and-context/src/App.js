import React, { useState } from 'react';
import AppContext from './components/AppContext/AppContext';
import GrandFather from './components/GrandFather/GrandFather';
import Father from './components/Father/Father';
import Son from './components/Son/Son';
import GrandSon from './components/GrandSon/GrandSon';
import { app } from './App.module.css';

const App = () => {
  const [data, setData] = useState({
    message: 'Do not hurt or bother my family again...',
    push: false,
  });
  const handleClick = () => {
    setData((prevState) => {
      return { ...data, push: !prevState.push };
    });
  };
  const { message, push } = data;
  return (
    <AppContext.Provider
      value={{
        message,
        push,
        handleClick,
      }}
    >
      <div className={app}>
        <GrandFather />
        <Father />
        <Son />
        <GrandSon />
      </div>
    </AppContext.Provider>
  );
};

export default App;
