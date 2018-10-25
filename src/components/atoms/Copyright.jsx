import React from 'react';

const Copyright = (props) => {
  const logoUrl = '../../public/img/logo_white.svg';
  const social = [
    { name: 'linkedIn', image: '../../public/img/linkedin.svg', link: 'https://www.linkedin.com/in/cisaacmb/' },
    { name: 'github', image: '../../public/img/github-alt.svg', link: 'https://github.com/itscarlosisaac' },
    { name: 'dribble', image: '../../public/img/dribbble.svg', link: 'https://dribbble.com/itscarlosisaac' },
  ];

  return (
    <div className="app__container app__copyright">
      <div className="app__fw">
        <a href="c.com">
          <img src={logoUrl} alt="Main white logo" />
        </a>
      </div>
      <div className="app__hw">
        <div className="app__social">
          {
            social.map((item) => {
              return (
                <a key={item.name} href={item.link} target="_black" rel="noopener noreferer">
                  <img src={item.image} alt={item.name} />
                </a>
              );
            })
          }
        </div>
      </div>
      <div className="app__hw">
        <p className="app__copy">Developed and designed by Me.</p>
      </div>
    </div>
  );
};

export default Copyright;
