import React from 'react';
import PropTypes from 'prop-types';

const RichText = ({ children }) => (
  <div className="rich-text">
    {children}
  </div>
);

RichText.propTypes = {
  children: PropTypes.node.isRequired
};

export default RichText;
