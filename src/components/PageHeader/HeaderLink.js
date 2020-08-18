import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'components/Link';

const HeaderLink = ({ label, linkTo, title }) => (
  <NavLink exact to={linkTo} title={title} activeClassName="active">
    {label}
  </NavLink>
);

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default HeaderLink;
