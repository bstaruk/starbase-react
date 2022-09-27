import React from 'react';

import Counter from 'components/Counter';
import { Wrapper, HeadingWrapper } from './wrappers';

function App() {
  return (
    <Wrapper>
      <HeadingWrapper>Hello World</HeadingWrapper>

      <Counter />
    </Wrapper>
  );
}

export default App;
