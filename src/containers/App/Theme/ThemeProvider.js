import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

export const primaryTheme = {
  color: {
    white: '#fefefe',
    silver: '#ccc',
    gray: '#888',
    mineShaft: '#333',
    mariner: '#2472be',
    pictonBlue: '#23a5f0',
  },

  fonts: {
    default: "'PT Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    serif:
      "'PT Serif', Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif",
  },
};

function ThemeProvider({ children }) {
  return <ScThemeProvider theme={primaryTheme}>{children}</ScThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
