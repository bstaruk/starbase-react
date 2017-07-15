import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/Home.jsx';
import About from '../../views/About.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
    );
  }
}
