import React, { Component } from 'react';
import ContactBox from '../atoms/ContactBox';
import Copyright from '../atoms/Copyright';


const FooterSection = (props) => {
  const bgSvg = '../../public/img/footer_wave.svg';

  return (
    <footer
      className="app__footer"
      style={{
        backgroundImage: `url(${bgSvg})`,
      }}
    >
      <div className="app__container">
        <ContactBox />
      </div>
      <Copyright />
    </footer>
  );
};

export default FooterSection;
