import React, { ReactElement } from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import './FormField.css';

interface IFormFieldProps {
  inputE: ReactElement;
  labelText: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>;
}
export default function FormField({ inputE, labelText, error }: IFormFieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={inputE.props.id} className="form-field__label">
        {labelText}
      </label>
      {inputE}
      {error && <p className="form-field__error">{error.message?.toString()}</p>}
    </div>
  );
}
