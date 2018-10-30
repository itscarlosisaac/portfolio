import React from 'react';
import SocialIcons from './SocialIcons';

const Menu = (props) => {
  let open = props.open ? 'open' : 'closed';
  return (
    <nav className={`app__menu ${open}`}>
      <ul>
        <li><a href="a">Portfolio</a></li>
        <li><a href="a">Personal Projects</a></li>
        <li><a href="a">Contact</a></li>
      </ul>
      <div className="app__menu__social">
        <SocialIcons type="gray" />
      </div>
    </nav>
  );
};

export default Menu;
