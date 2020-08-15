import React from 'react';
import { Helmet } from 'react-helmet';

import Main from './Main';
import ThemeProvider, { GlobalStyle } from './Theme';

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

    <ThemeProvider>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
