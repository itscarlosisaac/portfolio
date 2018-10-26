import React from 'react';
import SocialIcons from './Social';

const Copyright = (props) => {
  const logoUrl = '../../public/img/logo_white.svg';
  
  return (
    <div className="app__container app__copyright">
      <div className="app__fw">
        <a href="c.com">
          <img src={logoUrl} alt="Main white logo" />
        </a>
      </div>
      <div className="app__hw">
        <SocialIcons />
      </div>
      <div className="app__hw">
        <p className="app__copy">Developed and designed by Me.</p>
      </div>
    </div>
  );
};

export default Copyright;
