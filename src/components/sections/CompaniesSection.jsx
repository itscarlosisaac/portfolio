import React from 'react';
import PropTypes from 'prop-types';
import Company from '../atoms/Company';

const CompaniesSection = (props) => {
  const { title } = props;
  return (
    <section className="company__section">
      <div className="app__container">
        <h3 className="company__title">{title}</h3>
        <div className="app__companies">
          <Company
            name="Fluxhost"
            imageUrl="https://d2qg46frdv7dau.cloudfront.net/headerlogo.svg"
            link="https://fluxhost.com/"
          />
          <Company
            name="Fluxhost"
            imageUrl="https://d2qg46frdv7dau.cloudfront.net/headerlogo.svg"
            link="https://fluxhost.com/"
          />
          <Company
            name="Fluxhost"
            imageUrl="https://d2qg46frdv7dau.cloudfront.net/headerlogo.svg"
            link="https://fluxhost.com/"
          />
          <Company
            name="Fluxhost"
            imageUrl="https://d2qg46frdv7dau.cloudfront.net/headerlogo.svg"
            link="https://fluxhost.com/"
          />
        </div>
      </div>
    </section>
  );
};

CompaniesSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompaniesSection;
