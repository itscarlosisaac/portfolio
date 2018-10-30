import React, { Fragment } from 'react';
import HeaderSection from '../sections/HeaderSection';
import SkillsSection from '../sections/SkillsSection';
import PortfolioSection from '../sections/PortfolioSection';
import PersonalProjectsSection from '../sections/PersonalProjectsSection';
import CompaniesSection from '../sections/CompaniesSection';
import FooterSection from '../sections/FooterSection';
import ContactDialogBox from '../atoms/ContactDialogBox';

export default () => (
  <Fragment>
    <HeaderSection />
    <SkillsSection />
    <PortfolioSection title="Porfolio" />
    <PersonalProjectsSection title="Personal Projects" />
    <CompaniesSection title="Companies I’ve collaborated with:" />
    <FooterSection />
    <ContactDialogBox />
  </Fragment>
);
