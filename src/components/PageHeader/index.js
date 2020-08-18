import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { H1 } from 'components/Heading';

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
      starbase-react is an open source React 16, styled-components &amp; webpack
      4 boilerplate for front-end web developers, with a small footprint and
      plenty of room for cream and sugar-- stir it up and make it just how you
      like it!
    </p>

    <nav>
      <ul role="tablist">
        <li>
          <HeaderLink
            linkTo="/"
            title="a brief history of starbase-react-- it's got electrolytes!"
            label="Why it's here"
          />
        </li>

        <li>
          <HeaderLink
            linkTo="/about"
            title="an overview of starbase-react"
            label="What it does"
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
