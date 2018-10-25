import React from 'react';
import PropTypes from 'prop-types';

const Company = (props) => {
  const { name, imageUrl, link } = props;
  return (
    <div className="app__company">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={name} />
      </a>
    </div>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Company;
