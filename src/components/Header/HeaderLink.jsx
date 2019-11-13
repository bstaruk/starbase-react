import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ label, linkTo, title }) => (
  <NavLink
    exact
    to={linkTo}
    title={title}
    activeClassName="header__link header__link--active"
  >
    {label}
  </NavLink>
);

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};


export default HeaderLink;
