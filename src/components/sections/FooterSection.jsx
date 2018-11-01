import React, { Component } from 'react';
import ContactBox from '../atoms/ContactBox';
import Copyright from '../atoms/Copyright';


const FooterSection = (props) => {
  const bgSvg = '../../public/img/footer_wave.svg';
  const toggleContactForm = () => {
    props.toggleContactForm();
  };
  return (
    <footer
      className="app__footer"
      id="footer"
      style={{
        backgroundImage: `url(${bgSvg})`,
      }}
    >
      <div className="app__container">
        <ContactBox toggleContactForm={toggleContactForm} />
      </div>
      <Copyright />
    </footer>
  );
};

export default FooterSection;
