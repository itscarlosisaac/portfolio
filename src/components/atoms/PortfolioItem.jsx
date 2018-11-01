import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = (props) => {
  const {
    image,
    company,
    description,
    link,
    type,
    color,
  } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`portfolio__item portfolio__item--${color}`}
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
      <div className="portfolio__item__hover" />
    </div>
  );
};

PortfolioItem.propTypes = {
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string,
};

PortfolioItem.defaultProps = {
  color: 'brand-blue',
};

export default PortfolioItem;
