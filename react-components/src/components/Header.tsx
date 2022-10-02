import React from 'react';
import './Header.css';
import Navbar from './Navbar';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Navbar />
        </div>
      </header>
    );
  }
}
