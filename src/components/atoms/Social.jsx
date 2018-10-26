import React from 'react';

const SocialIcons = (props) => {
  const social = [
    { name: 'linkedIn', image: '../../public/img/linkedin.svg', link: 'https://www.linkedin.com/in/cisaacmb/' },
    { name: 'github', image: '../../public/img/github-alt.svg', link: 'https://github.com/itscarlosisaac' },
    { name: 'dribble', image: '../../public/img/dribbble.svg', link: 'https://dribbble.com/itscarlosisaac' },
  ];

  return (
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
  );
};

export default SocialIcons;
