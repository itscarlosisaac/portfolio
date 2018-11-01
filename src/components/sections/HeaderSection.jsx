import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hero from '../atoms/Hero';
import Navigation from '../atoms/Navigation';
import Menu from '../atoms/Menu';


class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }

  toggleMenu() {
    this.setState((prev) => {
      const open = !prev.open;
      return { open };
    });
  }

  scrollToAnchor(ref) {
    this.toggleMenu();
    const { scrollToAnchor } = this.props;
    scrollToAnchor(ref);
  }

  render() {
    const { open } = this.state;
    return (
      <div className="app__container">
        <section className="app__header">
          <Menu scrollToAnchor={this.scrollToAnchor} open={open} />
          <Navigation toggleMenu={this.toggleMenu} open={open} />
          <Hero />
        </section>
      </div>
    );
  }
}

HeaderSection.propTypes = {
  scrollToAnchor: PropTypes.func.isRequired,
};

export default HeaderSection;
