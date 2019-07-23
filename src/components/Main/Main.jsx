import React from 'react';
import { Switch, Route } from 'react-router-dom';

// global components
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

// path views
import What from './views/What.jsx';
import Who from './views/Who.jsx';
import Why from './views/Why.jsx';

const Main = () => (
  <main>
    <Header title="starbase-react" />

    <Switch>
      <Route exact path="/" component={Why} />
      <Route path="/what" component={What} />
      <Route path="/who" component={Who} />
    </Switch>

    <Footer>
      <p>crafted in boston by <a href="https://brian.staruk.net" title="continue to brian.staruk.net" className="h-card">brian staruk</a> | <a href="https://github.com/bstaruk/starbase-react" title="learn more about starbase-react on github">starbase-react on github</a></p>
    </Footer>
  </main>
);

export default Main;
