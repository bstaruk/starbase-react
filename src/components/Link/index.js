import styled, { css } from 'styled-components';
import { Link as rrdLink, NavLink as rrdNavLink } from 'react-router-dom';

export const colorStylesRed = css`
  color: ${(props) => props.theme.color.red};
`;

export const colorStylesOrange = css`
  color: ${(props) => props.theme.color.orange};
`;

export const colorStylesGreen = css`
  color: ${(props) => props.theme.color.green};
`;

export const colorStylesBlue = css`
  color: ${(props) => props.theme.color.blue};
`;

export const colorStylesPurple = css`
  color: ${(props) => props.theme.color.purple};
`;

export const linkStyles = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
  }

  /* color props */
  ${(props) => (!props.color || props.color === 'blue') && colorStylesBlue}
  ${(props) => props.color === 'red' && colorStylesRed}
  ${(props) => props.color === 'orange' && colorStylesOrange}
  ${(props) => props.color === 'green' && colorStylesGreen}
  ${(props) => props.color === 'purple' && colorStylesPurple}
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
