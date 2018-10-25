import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../atoms/ProjectItem';

const PersonalProjectsSection = (props) => {
  const { title } = props;
  return (
    <section className="personal__projects__section">
      <header className="app__container">
        <h3 className="app__section__title app__section__title--projects">{title}</h3>
      </header>
      <div className="personal__projects">
        <ProjectItem
          type="yellow"
          image="http://mattfarley.ca/img/mf-avatar.svg"
          title="Catan Random Board Generator"
          description="Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
        <ProjectItem
          type="purple"
          image="http://mattfarley.ca/img/mf-avatar.svg"
          title="Catan Random Board Generator"
          description="Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button."
          link="http://bradfrost.com/blog/post/atomic-web-design/"
        />
      </div>
    </section>
  );
};

PersonalProjectsSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PersonalProjectsSection;
