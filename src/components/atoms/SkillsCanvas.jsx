import React, { Component, Fragment } from 'react';
import Skills from './Skills';
import SkillsSVG from './SkillsSVG';

class SkillsCanvas extends Component {
  constructor(props) {
    super(props);
    this.svg = React.createRef();
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
