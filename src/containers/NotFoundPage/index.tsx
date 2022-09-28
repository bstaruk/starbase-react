import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Wrapper, HeadingWrapper } from './wrappers';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Oops!</title>
    </Helmet>

    <Wrapper>
      <HeadingWrapper>404</HeadingWrapper>
    </Wrapper>
  </>
);

export default NotFoundPage;
