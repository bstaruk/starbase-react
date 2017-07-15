import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <h1>starbase-react</h1>
        <nav id="nav">
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
