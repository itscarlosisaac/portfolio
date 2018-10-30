import React from 'react';

const CloseSVG = (props) => {

  const closeContact = () => {
    props.closeContact();
  };

  return (
    <svg onClick={closeContact} className="app__close__contact" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Main" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Desktop-HD" transform="translate(-1021.000000, -3338.000000)" fill="#000000" fillRule="nonzero">
          <path d="M1031,3346.66667 L1039.66667,3338 L1041,3339.33333 L1032.33333,3348 L1041,3356.66667 L1039.66667,3358 L1031,3349.33333 L1022.33333,3358 L1021,3356.66667 L1029.66667,3348 L1021,3339.33333 L1022.33333,3338 L1031,3346.66667 Z" />
        </g>
      </g>
    </svg>
  );
};

export default CloseSVG;
