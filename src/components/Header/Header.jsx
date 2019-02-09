import React from 'react';
import PropTypes from 'prop-types';

import logo from './assets/starbase.png';

const Header = ({
  title
}) => (
  <header role="banner" className="header">
    <div className="header__brand">
      <img src={logo} alt="starbase logo" className="header__image" />
      <h1 className="header__title">{title}</h1>
    </div>
    <p>starbase is an open source webpack 4, Babel (ES6) &amp; PostCSS boilerplate for web developers, with a small footprint and plenty of room for cream and sugar-- make it your own!</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
