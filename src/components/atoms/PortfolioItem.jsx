import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = (props) => {
  const {
    image,
    company,
    description,
    link,
    type,
  } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`portfolio__item portfolio__item--${type}`}
    >
      <div className="portfolio__item__content">
        <h3>{company}</h3>
        <small>{type}</small>
        <p>{description}</p>
        <a
          className=""
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Site
        </a>
      </div>
      <div className="portfolio__item__hover"></div>
    </div>
  );
};

PortfolioItem.propTypes = {
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

PortfolioItem.defaultProps = { };

export default PortfolioItem;
