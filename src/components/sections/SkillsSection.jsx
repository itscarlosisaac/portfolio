import React, { Component } from 'react';
import SkillsCanvas from '../atoms/SkillsCanvas';

const SkillsSection = (props) =>  {
  return (
    <div className="app__skills">
      <div className="app__container">
        <SkillsCanvas />
      </div>
    </div>
  );
};

export default SkillsSection;
