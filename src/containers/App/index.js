import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import Main from './Main';
import GlobalStyle from './global-styles';
import primaryTheme from './theme/primary';

const App = () => (
  <>
    <Helmet
      titleTemplate="%s | starbase-react"
      defaultTitle="React 16, styled-components &amp; webpack 4 boilerplate | starbase-react"
    >
      <meta
        name="description"
        content="Start coding in minutes with the latest version of React, styled-components &amp; webpack. check it out on GitHub!"
      />
    </Helmet>

    <ThemeProvider theme={primaryTheme}>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default hot(App);
