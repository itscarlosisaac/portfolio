import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../atoms/ProjectItem';
import { getProjects } from '../../data/Firebase';

class PersonalProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    getProjects.then((value) => {
      this.setState(prev => ({ projects: prev.projects.concat(value) }));
    });
  }

  render() {
    const { title } = this.props;
    const { projects } = this.state;
    return (
      <section className="personal__projects__section" id="projects">
        <header className="app__container">
          <h3 className="app__section__title app__section__title--projects">{title}</h3>
        </header>
        <div className="personal__projects">
          {
            projects.map((project) => {
              return (
                <ProjectItem
                  key={project.title}
                  type={project.type}
                  image="http://mattfarley.ca/img/mf-avatar.svg"
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              );
            })
          }
        </div>
      </section>
    );
  }
}

PersonalProjectsSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PersonalProjectsSection;
