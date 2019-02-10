import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeaderLink extends React.Component {
  handleClick = () => this.props.handleClick(this.props.linkTo);

  render() {
    return (
      <Link
        to={this.props.linkTo}
        title={this.props.title}
        className={this.props.isActive ? 'header__link header__link--active' : 'header__link'}
        onClick={this.handleClick}
      >
        {this.props.label}
      </Link>
    );
  }
}

HeaderLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};


export default HeaderLink;
