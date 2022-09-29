import React from 'react';
import { Helmet } from 'react-helmet-async';

import Counter from 'components/Counter';
import Text from 'components/Text';
import { Wrapper, HeaderWrapper } from './wrappers';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Wrapper>
      <HeaderWrapper>
        <Text as="h1" variant="h1">
          Hello World
        </Text>

        <Text as="p">Hello World</Text>
      </HeaderWrapper>

      <Counter />
    </Wrapper>
  </>
);

export default HomePage;
