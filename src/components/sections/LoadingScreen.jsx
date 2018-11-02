import React, { Component } from 'react';
import Logo from '../atoms/Logo';

class LoadingScreen extends Component {
  render() {
    return (
      <div className="app__loading">
        <Logo />
        <div className="app__loading__bg"></div>
      </div>
    );
  }
}

export default LoadingScreen;
