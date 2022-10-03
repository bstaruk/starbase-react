import React from 'react';
import { Helmet } from 'react-helmet-async';

import Counter from 'components/Counter';
import Link from 'components/Link';
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
          starbase-react
        </Text>

        <Text as="p">
          <>
            <Link href="https://github.com/bstaruk/starbase-react" target="_blank">
              starbase-react
            </Link>{' '}
            is a production-ready TypeScript / React boilerplate, bootstrapped with CRA and
            sweetened with Redux Toolkit, Redux-Saga, Emotion and more.
          </>
        </Text>
      </HeaderWrapper>

      <Counter />
    </Wrapper>
  </>
);

export default HomePage;
