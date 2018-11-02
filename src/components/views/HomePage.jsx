import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoadingScreen from '../sections/LoadingScreen';
import HeaderSection from '../sections/HeaderSection';
import SkillsSection from '../sections/SkillsSection';
import PortfolioSection from '../sections/PortfolioSection';
import PersonalProjectsSection from '../sections/PersonalProjectsSection';
import CompaniesSection from '../sections/CompaniesSection';
import FooterSection from '../sections/FooterSection';
import ContactDialogBox from '../atoms/ContactDialogBox';
import SendMessageDialogBox from '../atoms/SendMessageDialogBox';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openContact: false,
      loaded: false,
      messageSent: false,
    };
    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.checkSentMessage = this.checkSentMessage.bind(this);
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ loaded: true }));
    }, 2500);
  }

  componentWillUpdate() {
    const { openContact, loaded, messageSent } = this.state;
    const bodyDOM = document.querySelector('body');
    if (!openContact && loaded) {
      if (!messageSent) bodyDOM.className = 'no--scroll';
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

  checkSentMessage(value) {
    setTimeout(() => {
      this.setState(() => ({ messageSent: false }));
    }, 2500);

    this.setState(() => ({ messageSent: value }));
  }

  scrollToAnchor(hash) {
    const options = { behavior: 'smooth', inline: 'nearest' };
    document.querySelector(`#${hash}`).scrollIntoView(options);
  }

  render() {
    const { openContact, loaded, messageSent } = this.state;
    const shrinked = openContact ? 'shrinked' : 'base';
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          transitionName="loading"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { !loaded && <LoadingScreen /> }
        </ReactCSSTransitionGroup>
        {
          loaded
          && (
            <div className={`page__wrapper ${shrinked}`}>
              <HeaderSection scrollToAnchor={this.scrollToAnchor} />
              <SkillsSection />
              <PortfolioSection title="Porfolio" />
              <PersonalProjectsSection title="Personal Projects" />
              <CompaniesSection title="Companies I’ve collaborated with:" />
              <FooterSection toggleContactForm={this.toggleContactForm} />
            </div>
          )
        }
        <ReactCSSTransitionGroup
          transitionName="contact"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { openContact && (
            <ContactDialogBox
              openContact={openContact}
              toggleContactForm={this.toggleContactForm}
              checkSentMessage={this.checkSentMessage}
            />) }
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="thanks"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { messageSent && <SendMessageDialogBox /> }
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default HomePage;
