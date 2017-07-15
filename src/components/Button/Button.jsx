import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

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
