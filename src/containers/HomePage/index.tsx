import React from 'react';
import { Helmet } from 'react-helmet-async';

import Counter from 'components/Counter';
import { Wrapper, HeadingWrapper } from './wrappers';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Wrapper>
      <HeadingWrapper>Hello World</HeadingWrapper>
      <Counter />
    </Wrapper>
  </>
);

export default HomePage;
