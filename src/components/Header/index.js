import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { H1 } from '@components/Heading';

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

const Header = ({ title }) => (
  <header role="banner">
    <BrandWrapper>
      <BrandImg src={logo} alt="starbase logo" />
      <H1>{title}</H1>
    </BrandWrapper>

    <p>
      starbase-react is an open source webpack 4, React 16 &amp; PostCSS
      boilerplate for web developers, with a small footprint and plenty of room
      for cream and sugar-- make it your own!
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
            linkTo="/what"
            title="an overview of the starbase-react commands"
            label="What it does"
          />
        </li>

        <li>
          <HeaderLink
            linkTo="/who"
            title="free software is for you and me"
            label="Who it's for"
          />
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
