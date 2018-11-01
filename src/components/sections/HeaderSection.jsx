import React, { Component } from 'react';
import Hero from '../atoms/Hero';
import Navigation from '../atoms/Navigation';
import Menu from '../atoms/Menu';


class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }

  toggleMenu() {
    this.setState((prev) => {
      const menuOpen = !prev.menuOpen;
      return { menuOpen };
    });
  }

  scrollToAnchor(ref) {
    this.toggleMenu();
    this.props.scrollToAnchor(ref);
  }

  render() {
    return (
      <div className="app__container">
        <section className="app__header">
          <Menu scrollToAnchor={this.scrollToAnchor} open={this.state.menuOpen} />
          <Navigation toggleMenu={this.toggleMenu} open={this.state.menuOpen} />
          <Hero />
        </section>
      </div>
    )
  }
}


export default HeaderSection;
