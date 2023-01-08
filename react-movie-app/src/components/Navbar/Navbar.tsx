import React from 'react';
import NavItem from '../NavItem/';
import './Navbar.css';

interface INavbarProps {
  children?: JSX.Element;
}
export default function Navbar({ children }: INavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <NavItem path="/">Home</NavItem>
        <NavItem path="/about">About</NavItem>
        <NavItem path="/ideas">Ideas</NavItem>
        {children}
      </ul>
    </nav>
  );
}
