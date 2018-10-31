import React, { Component, Fragment } from 'react';
import SkillsSVG from './SkillsSVG';
import { getSkills } from '../../data/Firebase';

class SkillsCanvas extends Component {
  constructor(props) {
    super(props);
    this.svg = React.createRef();
    this.state = {
      skills: [],
      svg: '',
    };
  }

  componentWillMount() {
    getSkills.then((val) => {
      this.setState(prev => ({
        skills: prev.skills.concat(val),
        svg: this.svg.current.id,
      }));
    });
  }

  componentDidMount() {
    new SkillsSVG(`#${this.svg.current.id}`);
  }

  render() {
    return (
      <Fragment>
        <svg className="app__svg" viewBox="0,0,768,425" width={768} height={450} id="svg__skills" ref={this.svg} />
      </Fragment>
    );
  }
}

export default SkillsCanvas;
