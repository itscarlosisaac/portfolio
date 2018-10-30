import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../atoms/PortfolioItem';
import Data from '../../data/data';

const PortfolioSection = (props) => {
  const { title } = props;
  const { portfolios } = Data;
  return (
    <section className="app__container">
      <header>
        <h3 className="app__section__title app__section__title--portfolio">{title}</h3>
      </header>
      <div className="portfolio__items">
        {
          portfolios.map((portfolio) => {
            return (
              <PortfolioItem
                key={portfolio.company}
                color={portfolio.color}
                type={portfolio.type}
                image="http://mattfarley.ca/img/project-userforge.png"
                company={portfolio.company}
                description={portfolio.description}
                link={portfolio.link}
              />
            );
          })
        }
      </div>
    </section>
  );
};

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PortfolioSection;


