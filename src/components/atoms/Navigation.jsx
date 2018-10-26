import React from 'react';
import MenuIcon from './MenuIcon';

const Navigation = (props) =>  {
  const logo = '../../public/img/logo.svg';
  const arrow = '../../public/img/down_arrow.svg';
  return (
    <div className="app__navigation">
      <div className="app__logo">
        <a href="l">
          <img width="50" src={logo} alt="Main Logo" />
        </a>
      </div>
      <div className="app__nav">
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
      <nav className="app__menu">
        <ul>
          <li><a href="a">Portfolio</a></li>
          <li><a href="a">Personal Projects</a></li>
          <li><a href="a">Contact</a></li>
        </ul>
      </nav>
      <div className="app__scroll__message">
        <p>Scroll</p>
        <img src={arrow} alt="Down Arrow" />
      </div>
    </div>
  );
};

export default Navigation;
