import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderSection from '../sections/HeaderSection';
import SkillsSection from '../sections/SkillsSection';
import PortfolioSection from '../sections/PortfolioSection';
import PersonalProjectsSection from '../sections/PersonalProjectsSection';
import CompaniesSection from '../sections/CompaniesSection';
import FooterSection from '../sections/FooterSection';
import ContactDialogBox from '../atoms/ContactDialogBox';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openContact: false,
    };
    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }

  componentWillUpdate() {
    const { openContact } = this.state;
    const bodyDOM = document.querySelector('body');
    if (!openContact) {
      bodyDOM.className = 'no--scroll';
    } else {
      bodyDOM.className = '';
    }
  }

  toggleContactForm() {
    this.setState((prev) => {
      const openContact = !prev.openContact;
      return { openContact };
    });
  }

  scrollToAnchor(hash) {
    const options = { behavior: 'smooth', inline: 'nearest' };
    document.querySelector(`#${hash}`).scrollIntoView(options);
  }

  render() {
    const { openContact } = this.state;
    const shrinked = openContact ? 'shrinked' : 'base';
    return (
      <Fragment>
        <div className={`page__wrapper ${shrinked}`}>
          <HeaderSection scrollToAnchor={this.scrollToAnchor} />
          <SkillsSection />
          <PortfolioSection title="Porfolio" />
          <PersonalProjectsSection title="Personal Projects" />
          <CompaniesSection title="Companies I’ve collaborated with:" />
          <FooterSection toggleContactForm={this.toggleContactForm} />
        </div>
        <ReactCSSTransitionGroup
          transitionName="contact"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { openContact && (
            <ContactDialogBox
              openContact={openContact}
              toggleContactForm={this.toggleContactForm}
            />) }
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default HomePage;
