import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';

import HomePage from 'containers/HomePage';
import StatsPage from 'containers/StatsPage';

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
      <>
        <PageHeader title="starbase-react" />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stats" component={StatsPage} />
        </Switch>

        <PageFooter />
      </>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
