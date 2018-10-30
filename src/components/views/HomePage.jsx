import React, { Component, Fragment } from 'react';
import HeaderSection from '../sections/HeaderSection';
import SkillsSection from '../sections/SkillsSection';
import PortfolioSection from '../sections/PortfolioSection';
import PersonalProjectsSection from '../sections/PersonalProjectsSection';
import CompaniesSection from '../sections/CompaniesSection';
import FooterSection from '../sections/FooterSection';
import ContactDialogBox from '../atoms/ContactDialogBox';


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openContact: false,
    };
    this.toggleContactForm = this.toggleContactForm.bind(this);
  }

  toggleContactForm() {
    this.setState((prev) => {
      const openContact = !prev.openContact;
      return { openContact };
    });
  }

  render() {
    const { openContact } = this.state;
    return (
      <Fragment>
        <HeaderSection />
        <SkillsSection />
        <PortfolioSection title="Porfolio" />
        <PersonalProjectsSection title="Personal Projects" />
        <CompaniesSection title="Companies I’ve collaborated with:" />
        <FooterSection toggleContactForm={this.toggleContactForm} />
        <ContactDialogBox openContact={openContact} toggleContactForm={this.toggleContactForm} />
      </Fragment>
    )
  }
}

export default HomePage;
