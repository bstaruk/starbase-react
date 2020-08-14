import React from 'react';
import { Switch, Route } from 'react-router-dom';

// global components
import PageFooter from '@components/PageFooter';
import Header from '@components/Header';
import { A } from '@components/Link';

// path views
import WhatPage from '@containers/WhatPage';
import WhoPage from '@containers/WhoPage';
import WhyPage from '@containers/WhyPage';

const Main = () => (
  <>
    <Header title="starbase-react" />

    <Switch>
      <Route exact path="/" component={WhyPage} />
      <Route path="/what" component={WhatPage} />
      <Route path="/who" component={WhoPage} />
    </Switch>

    <PageFooter>
      <p>
        crafted in boston by{' '}
        <A
          href="https://brian.staruk.net"
          title="continue to brian.staruk.net"
          className="h-card"
        >
          brian staruk
        </A>{' '}
        |{' '}
        <A
          href="https://github.com/bstaruk/starbase-react"
          title="learn more about starbase-react on github"
        >
          starbase-react on github
        </A>
      </p>
    </PageFooter>
  </>
);

export default Main;
