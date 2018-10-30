import React, { Component } from 'react';
import MenuIcon from './MenuIcon';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.props.toggleMenu();
  }

  render() {
    const logo = '../../public/img/logo.svg';
    const arrow = '../../public/img/down_arrow.svg';
    return (
      <div className="app__navigation">
        <div className="app__logo">
          <a href="l">
            <img width="50" src={logo} alt="Main Logo" />
          </a>
        </div>
        <div className="app__nav" onClick={this.toggleMenu}>
          <div className="app__icon__menu">
            <MenuIcon />
          </div>

          <div className="app__action__menu">
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>U</span>
          </div>
        </div>
        <div className="app__scroll__message">
          <p>Scroll</p>
          <img src={arrow} alt="Down Arrow" />
        </div>
      </div>
    );
  }
};

export default Navigation;
