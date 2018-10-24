import React, { Component } from 'react';
import Company from '../atoms/Company';

export default class CompaniesSection extends Component {
  render() {
    return (
      <div>
        <Company
          name="Sitata"
          imageUrl="https://sitata.com/images/sitata-logo-horiz-white-e22fefa2453ef3fd95212b477e2b4591.png"
          link="https://sitata.com/en/" />
      </div>
    )
  }
}
