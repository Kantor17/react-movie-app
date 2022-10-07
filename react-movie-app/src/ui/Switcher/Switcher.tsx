import React from 'react';
import './Switcher.css';

interface ISwitcherProps {
  inputRef?: React.RefObject<HTMLInputElement>;
}
export default function Switcher({ inputRef }: ISwitcherProps) {
  return (
    <label htmlFor="switchbox" className="switcher">
      <input id="switchbox" type="checkbox" className="switcher__checkbox" ref={inputRef} />
      <span className="switcher__slider"></span>
    </label>
  );
}
