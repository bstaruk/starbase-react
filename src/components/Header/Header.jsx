import React from 'react';
import PropTypes from 'prop-types';
import HeaderLink from './HeaderLink.jsx';

import logo from './assets/starbase.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: window.location.pathname || '/'
    };
  }

  setActiveTab = (activeTab) => {
    this.setState({
      activeTab
    });
  };

  render() {
    return (
      <header role="banner" className="header">
        <div className="header__brand">
          <img src={logo} alt="starbase logo" className="header__image" />
          <h1 className="header__title">{this.props.title}</h1>
        </div>
        <p>starbase-react is an open source webpack 4, React 16 &amp; PostCSS boilerplate for web developers, with a small footprint and plenty of room for cream and sugar-- make it your own!</p>

        <nav>
          <ul role="tablist" className="header__nav">
            <li>
              <HeaderLink
                handleClick={this.setActiveTab}
                isActive={this.state.activeTab === '/'}
                linkTo="/"
                title="a brief history of starbase-react-- it's got electrolytes!"
                label="Why it's here"
              />
            </li>

            <li>
              <HeaderLink
                handleClick={this.setActiveTab}
                isActive={this.state.activeTab === '/what'}
                linkTo="/what"
                title="an overview of the starbase-react commands"
                label="What it does"
              />
            </li>

            <li>
              <HeaderLink
                handleClick={this.setActiveTab}
                isActive={this.state.activeTab === '/who'}
                linkTo="/who"
                title="free software is for you and me"
                label="Who it's for"
              />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};


export default Header;
