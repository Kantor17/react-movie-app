import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './CheckboxItem.css';

interface ICheckBoxItemProps {
  name: string;
  labelText?: string;
  register?: UseFormRegisterReturn;
}

export default function CheckboxItem({
  name,
  labelText = name[0].toUpperCase() + name.slice(1),
  register,
}: ICheckBoxItemProps) {
  return (
    <div className="checkbox-item">
      <input
        {...register}
        id={name}
        type="checkbox"
        className="checkbox-item__checkbox"
        value={name}
      />
      <label htmlFor={name} className="checkbox-item__checkmark"></label>
      <label htmlFor={name} className="checkbox-item__label">
        {labelText}
      </label>
    </div>
  );
}
