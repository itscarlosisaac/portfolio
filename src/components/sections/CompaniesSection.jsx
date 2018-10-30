import React from 'react';
import PropTypes from 'prop-types';
import Company from '../atoms/Company';
import Data from '../../data/data';

const CompaniesSection = (props) => {
  const { title } = props;
  const { companies } = Data;
  return (
    <section className="company__section">
      <div className="app__container">
        <h3 className="company__title">{title}</h3>
        <div className="app__companies">
        {
          companies.map( (company, i) => {
            return (
              <Company
                key={i}
                name={company.name}
                imageUrl={company.imageUrl}
                link={company.link}
              />
            )
          })
        }
        </div>
      </div>
    </section>
  );
};

CompaniesSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompaniesSection;
