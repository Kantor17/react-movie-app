import React from 'react';
import NavItem from '../NavItem/';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <NavItem path="/">Home</NavItem>
        <NavItem path="/about">About</NavItem>
        <NavItem path="/ideas">Ideas</NavItem>
      </ul>
    </nav>
  );
}
