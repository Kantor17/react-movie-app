import React, { ReactElement } from 'react';
import './FormField.css';

interface IFormFieldProps {
  inputE: ReactElement;
  labelText: string;
  errors?: string[];
}
export default function FormField({ inputE, labelText, errors }: IFormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={inputE.props.id} className="form-field__label">
        {labelText}
      </label>
      {inputE}
      {errors && errors.length > 0 && <p className="form-field__error">{errors.join(' ')}</p>}
    </div>
  );
}
