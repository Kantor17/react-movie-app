import React from 'react';
import './Switcher.css';

export default function Switcher() {
  return (
    <label htmlFor="switchbox" className="switcher">
      <input id="switchbox" type="checkbox" className="switcher__checkbox" />
      <span className="switcher__slider"></span>
    </label>
  );
}
