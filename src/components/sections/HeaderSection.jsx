import React, { Component } from 'react';
import Hero from '../atoms/Hero';
import Navigation from '../atoms/Navigation';

const HeaderSection = (props) =>  {
  return (
    <div className="app__container">
      <section className="app__header">
        <Navigation />
        <Hero />
      </section>
    </div>
  );
};

export default HeaderSection;
