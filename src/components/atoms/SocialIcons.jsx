import React from 'react';
import PropTypes from 'prop-types';

const SocialIcons = (props) => {
  const { type } = props;
  const social = [
    { name: 'linkedIn', image: `../../public/img/linkedin_${type}.svg`, link: 'https://www.linkedin.com/in/cisaacmb/' },
    { name: 'github', image: `../../public/img/github-alt_${type}.svg`, link: 'https://github.com/itscarlosisaac' },
    // { name: 'dribble', image: `../../public/img/dribbble_${type}.svg`, link: 'https://dribbble.com/itscarlosisaac' },
    { name: 'codesignal', image: `../../public/img/codesignal_${type}.svg`, link: 'https://app.codesignal.com/profile/carlosisaac' },
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

SocialIcons.propTypes = {
  type: PropTypes.string,
};

SocialIcons.defaultProps = {
  type: 'white',
};

export default SocialIcons;
