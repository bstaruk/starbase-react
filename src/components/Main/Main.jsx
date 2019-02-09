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
      <p>crafted in boston by <a href="https://brian.staruk.me" title="continue to brian.staruk.me" className="h-card">brian staruk</a> | <a href="https://github.com/bstaruk/starbase" title="learn more about starbase on github">starbase on github</a></p>
    </Footer>
  </main>
);

export default Main;
