import React from 'react';
import './Header.css';
import Navbar from '../Navbar/';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
}
