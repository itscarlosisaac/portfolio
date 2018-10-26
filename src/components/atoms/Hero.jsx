import React, { Component } from 'react';

const Hero = (props) =>  {
  return (
    <div className="app__hero">
      <div className="app__hero__info">
        <h3>
          Designer, Front End Developer and
          <span className="no-break-text"> Lego fan.</span>
        </h3>
        <p>
          Hello, my name is Carlos Martinez,
          I love to build fast and immersive UI and that’s what I do.
        </p>
      </div>
      <div className="app__hero__right">

      </div>
    </div>
  );
};

export default Hero;
