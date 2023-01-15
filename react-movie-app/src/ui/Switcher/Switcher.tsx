import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './Switcher.css';

interface ISwitcherProps {
  register?: UseFormRegisterReturn;
}
export default function Switcher({ register }: ISwitcherProps) {
  return (
    <label htmlFor="switchbox" className="switcher">
      <input
        {...register}
        id="switchbox"
        type="checkbox"
        className="switcher__checkbox"
        value="switched"
        // checked={true}
      />
      <span className="switcher__slider"></span>
    </label>
  );
}
