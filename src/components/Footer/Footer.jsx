import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 2.5rem;
  border-top: 1px solid ${(props) => props.theme.color.silver};
  color: ${(props) => props.theme.color.gray};
`;

const Footer = ({ children }) => (
  <Wrapper role="contentinfo" className="footer">
    {children}
  </Wrapper>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
