import React from 'react';

const MenuIcon = (props) => {
  return (
    <svg width="40px" height="20px" viewBox="0 0 20 10" version="1.1" xmlns="http://www.w3.org/2000/svg" strokeWidth="1" stroke="#2F2D78" >
      <g className="left">
        <line x1="1" y1="1" x2="20" y2="1" />
        <line x1="1" y1="5" x2="18" y2="5" />
        <line x1="1" y1="9" x2="16" y2="9" />
      </g>
      <g className="right">
        <line x1="20" y1="1" x2="1" y2="1" />
        <line x1="20" y1="5" x2="2" y2="5" />
        <line x1="20" y1="9" x2="4" y2="9" />
      </g>
    </svg>
  );
};

export default MenuIcon;
