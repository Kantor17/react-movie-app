import React from 'react';
import './CheckboxItem.css';

interface ICheckBoxItemProps {
  name: string;
  labelText?: string;
}

export default function CheckboxItem({
  name,
  labelText = name[0].toUpperCase() + name.slice(1),
}: ICheckBoxItemProps) {
  return (
    <div className="checkbox-item">
      <input id={name} type="checkbox" className="checkbox-item__checkbox" name={name} />
      <label htmlFor={name} className="checkbox-item__checkmark"></label>
      <label htmlFor={name} className="checkbox-item__label">
        {labelText}
      </label>
    </div>
  );
}
