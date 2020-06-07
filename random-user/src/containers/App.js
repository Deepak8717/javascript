import React from 'react';
import Profile from './Profile';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const App = () => {
  const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
      box-sizing: border-box;
    }
  `;
  const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ddd;
    background: #444;
  `;
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Profile />
      </AppWrapper>
    </>
  );
};

export default App;
