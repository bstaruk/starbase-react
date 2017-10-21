import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home.jsx';
import About from './views/About.jsx';

const Main = () => (
  <main id="content" className="wrapper">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
