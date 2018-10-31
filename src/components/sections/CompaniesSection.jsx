import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Company from '../atoms/Company';
import { getCompanies } from '../../data/Firebase';

class CompaniesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  componentWillMount() {
    getCompanies.then((val) => {
      this.setState(prev => ({ companies: prev.companies.concat(val) }));
    });
  }

  render() {
    const { title } = this.props;
    const { companies } = this.state;
    return (
      <section className="company__section">
        <div className="app__container">
          <h3 className="company__title">{title}</h3>
          <div className="app__companies">
            {
              companies.map((company) => {
                return (
                  <Company
                    key={company.name}
                    name={company.name}
                    imageUrl={company.imageUrl}
                    link={company.link}
                  />
                );
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

CompaniesSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompaniesSection;
