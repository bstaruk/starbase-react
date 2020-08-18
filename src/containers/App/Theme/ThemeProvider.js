import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

/* http://chir.ag/projects/name-that-color/ */
export const primaryTheme = {
  color: {
    white: '#FEFEFE',
    silver: '#CCC',
    gray: '#888',
    darkGray: '#333',
    red: '#CC283D',
    orange: '#EE763A',
    green: '#2BA667',
    blue: '#2472be',
    purple: '#861BBB',
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
