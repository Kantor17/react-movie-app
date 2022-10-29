import React from 'react';
import { Link } from 'react-router-dom';
import './Navitem.css';

interface INavItemProps {
  path: string;
  children: React.ReactNode;
}

export default function NavItem({ path, children }: INavItemProps) {
  return (
    <ul className={`navitem ${window.location.pathname === path ? 'active' : ''}`}>
      <Link to={path} className="header__navlink link">
        {children}
      </Link>
    </ul>
  );
}
