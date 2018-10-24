import React from 'react';
import PropTypes from 'prop-types';

const Company = (props) => {
  const { name, imageUrl, link } = props;
  return (
    <a href={link}>
      <img src={imageUrl} alt={name} />
    </a>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Company;
