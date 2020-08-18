import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { H1 } from 'components/Heading';
import { A } from 'components/Link';

import HeaderLink from './HeaderLink';
import logo from './assets/starbase.png';

const BrandWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BrandImg = styled.img`
  height: 3rem;
  margin-right: 1rem;
`;

const PageHeader = ({ title }) => (
  <header role="banner">
    <BrandWrapper>
      <BrandImg src={logo} alt="starbase logo" />
      <H1>{title}</H1>
    </BrandWrapper>

    <p>
      starbase-react is an open source{' '}
      <A color="red" href="https://github.com/facebook/react">
        React 16
      </A>
      ,{' '}
      <A color="orange" href="https://github.com/reduxjs/react-redux">
        redux
      </A>
      ,{' '}
      <A color="green" href="https://github.com/redux-saga/redux-saga/">
        redux-saga
      </A>
      ,{' '}
      <A
        color="blue"
        href="https://github.com/styled-components/styled-components"
      >
        styled-components
      </A>{' '}
      &amp;{' '}
      <A color="purple" href="https://github.com/webpack/webpack">
        webpack 4
      </A>{' '}
      boilerplate for front-end web developers, with a small footprint and
      plenty of room for cream and sugar-- stir it up and make it just how you
      like it!
    </p>

    <nav>
      <ul role="tablist">
        <li>
          <HeaderLink
            linkTo="/"
            title="a brief history of starbase-react-- it's got electrolytes!"
            label="Home"
          />
        </li>

        <li>
          <HeaderLink
            linkTo="/stats"
            title="an overview of starbase-react"
            label="Stats"
          />
        </li>
      </ul>
    </nav>
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
