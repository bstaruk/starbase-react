import React from 'react';
import Counter from '../Counter';
import logo from './logo.svg';
import { Wrapper, HeaderWrapper, LogoWrapper, LinkWrapper } from './wrappers';

function App() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoWrapper src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LinkWrapper href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </LinkWrapper>
      </HeaderWrapper>

      <Counter />
    </Wrapper>
  );
}

export default App;
