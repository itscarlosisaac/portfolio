import React, { Component } from 'react';
import SocialIcons from './SocialIcons';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }

  scrollToAnchor(e) {
    e.preventDefault();
    const f = e.target.dataset.ref;
    this.props.scrollToAnchor(f);
  }

  render() {
    const open = this.props.open ? 'open' : 'closed';
    return (
      <nav className={`app__menu ${open}`}>
        <ul>
          <li><a onClick={this.scrollToAnchor} data-ref="portfolio" href="a">Portfolio</a></li>
          <li><a onClick={this.scrollToAnchor} data-ref="projects" href="a">Personal Projects</a></li>
          <li><a onClick={this.scrollToAnchor} data-ref="footer" href="a">Contact</a></li>
        </ul>
        <div className="app__menu__social">
          <SocialIcons type="gray" />
        </div>
      </nav>
    );
  }
};

export default Menu;
