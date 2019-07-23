import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class HeaderLink extends React.PureComponent {
  render() {
    return (
      <NavLink
        exact
        to={this.props.linkTo}
        title={this.props.title}
        activeClassName="header__link header__link--active"
      >
        {this.props.label}
      </NavLink>
    );
  }
}

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};


export default HeaderLink;
