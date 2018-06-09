import React from 'react';
import PropTypes from 'prop-types';
import headerImg from './assets/starbase.png';
import HeaderLink from './HeaderLink.jsx';

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
        <img src={headerImg} alt="starbase logo" className="header__image" />
        <h1 className="header__title">{this.props.title}</h1>
        <p>starbase is an open source webpack 4, Babel (ES6) & PostCSS boilerplate for web developers, with a small footprint and plenty of room for cream and sugar-- make it your own!</p>

        <nav>
          <ul role="tablist" className="header__nav">
            <li role="presentation">
              <HeaderLink
                handleClick={this.setActiveTab}
                isActive={this.state.activeTab === '/'}
                linkTo="/"
                title="a brief history of starbase-- it's got electrolytes!"
                label="why come?"
              />
            </li>

            <li role="presentation">
              <HeaderLink
                handleClick={this.setActiveTab}
                isActive={this.state.activeTab === '/what'}
                linkTo="/what"
                title="an overview of the starbase commands"
                label="what does it do?"
              />
            </li>

            <li role="presentation">
              <HeaderLink
                handleClick={this.setActiveTab}
                isActive={this.state.activeTab === '/who'}
                linkTo="/who"
                title="free software is for you and me"
                label="who is it for?"
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
