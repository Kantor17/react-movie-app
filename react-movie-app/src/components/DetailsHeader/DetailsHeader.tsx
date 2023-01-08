import Navbar from 'components/Navbar';
import NavItem from 'components/NavItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailsHeader.css';

export default function DetailsHeader() {
  const navigate = useNavigate();
  return (
    <header className="details-header">
      <div className="container details-header__container">
        <button className="details-header__return-btn iconed" onClick={() => navigate(-1)}>
          Back
        </button>
        <Navbar>
          <NavItem path="/details">Details</NavItem>
        </Navbar>
      </div>
    </header>
  );
}
