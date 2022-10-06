import React from 'react';
import { Link } from 'react-router-dom';
import './Navitem.css';

interface INavItemProps {
  path: string;
  children: React.ReactNode;
}

export default class NavItem extends React.Component<INavItemProps> {
  render() {
    return (
      <ul className={`navitem ${window.location.pathname === this.props.path ? 'active' : ''}`}>
        <Link to={this.props.path} className="header__navlink link">
          {this.props.children}
        </Link>
      </ul>
    );
  }
}
