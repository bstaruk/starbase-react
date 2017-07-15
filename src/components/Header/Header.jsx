import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = props => {
  const projectTitle = props.projectTitle ? props.projectTitle : 'hi mom';

  return (
    <header id="header" className="wrapper">
      <h1>{projectTitle}</h1>
      <nav id="nav">
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
      </nav>
    </header>
  )
};

Header.propTypes = {
  projectTitle: PropTypes.string.isRequired
};

export default Header;
