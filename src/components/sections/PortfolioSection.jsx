import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../atoms/PortfolioItem';

const PortfolioSection = (props) => {
  const { title } = props;
  return (
    <section className="app__container">
      <header>
        <h3 className="app__section__title app__section__title--portfolio">{title}</h3>
      </header>
      <div className="portfolio__items">
        <PortfolioItem
          color="brand-blue"
          type="Landing Page"
          image="http://mattfarley.ca/img/project-userforge.png"
          company="Sitata"
          description="Design and coded landing page."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
        <PortfolioItem
          color="brand-purple"
          type="Landing Page"
          image="http://mattfarley.ca/img/project-userforge.png"
          company="Sitata"
          description="Design and coded landing page."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
        <PortfolioItem
          color="brand-orange"
          type="Landing Page"
          image="http://mattfarley.ca/img/project-userforge.png"
          company="Sitata"
          description="Design and coded landing page."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
        <PortfolioItem
          type="Landing Page"
          image="http://mattfarley.ca/img/project-userforge.png"
          company="Sitata"
          description="Design and coded landing page."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
        <PortfolioItem
          type="Landing Page"
          image="http://mattfarley.ca/img/project-userforge.png"
          company="Sitata"
          description="Design and coded landing page."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
        <PortfolioItem
          type="Landing Page"
          image="http://mattfarley.ca/img/project-userforge.png"
          company="Sitata"
          description="Design and coded landing page."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
      </div>
    </section>
  );
};

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PortfolioSection;
