import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import Main from '@components/Main';

import GlobalStyle from './global-styles';
import primaryTheme from './theme/primary';

const App = () => (
  <ThemeProvider theme={primaryTheme}>
    <Main />
    <GlobalStyle />
  </ThemeProvider>
);

export default hot(App);
