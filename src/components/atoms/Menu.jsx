import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const id = e.target.dataset.ref;
    const { scrollToAnchor } = this.props;
    scrollToAnchor(id);
  }

  render() {
    let { open } = this.props;
    open = open ? 'open' : 'closed';
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
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  scrollToAnchor: PropTypes.func.isRequired,
};

Menu.defaultProp = {
  open: 'closed',
};

export default Menu;
