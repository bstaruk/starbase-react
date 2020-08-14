import styled, { css } from 'styled-components';
import { Link as rrdLink, NavLink as rrdNavLink } from 'react-router-dom';

export const linkStyles = css`
  color: ${(props) => props.theme.color.mariner};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
  }
`;

export const A = styled.a`
  ${linkStyles};
`;

export const NavLink = styled(rrdNavLink)`
  ${linkStyles};
`;

export const Link = styled(rrdLink)`
  ${linkStyles};
`;
