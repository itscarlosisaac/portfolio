import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ProjectItem = (props) => {
  const {
    image,
    title,
    description,
    link,
    type,
  } = props;

  return (
    <div className={`project__item__wrapper project__item--${type}`}>
      <div className="app__container project__item">
        <div className="project__item__content">
          <picture className="project__item__image">
            <img src={image} alt={title} />
          </picture>
          <div className="project__item__description">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <a
          className="project__item__cta"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
};

ProjectItem.defaultProps = {
  type: 'purple',
};

export default ProjectItem;
