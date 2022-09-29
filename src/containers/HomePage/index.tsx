import React from 'react';
import { Helmet } from 'react-helmet-async';

import Counter from 'components/Counter';
import Text from 'components/Text';
import { Wrapper } from './wrappers';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Wrapper>
      <Text variant="h1">Hello World</Text>
      <Text>Hello World</Text>
      <Counter />
    </Wrapper>
  </>
);

export default HomePage;
