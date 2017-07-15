import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      isToggleOn: false
    };

    // bind handlers
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <span>
        <button onClick={this.handleClick} className={`button button--${this.state.isToggleOn ? 'on' : 'off'}`}>hit me!</button>
      </span>
    )
  }
}

export default Button;
