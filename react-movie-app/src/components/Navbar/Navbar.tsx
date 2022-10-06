import React from 'react';
import NavItem from '../NavItem/NavItem';
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navlist">
          <NavItem path="/">Home</NavItem>
          <NavItem path="/about">About</NavItem>
        </ul>
      </nav>
    );
  }
}
