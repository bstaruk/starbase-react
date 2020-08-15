import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import primaryTheme from './theme/primary';

function ThemeProvider({ children }) {
  return <ScThemeProvider theme={primaryTheme}>{children}</ScThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
