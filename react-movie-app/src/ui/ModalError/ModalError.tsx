import { SerializedError } from '@reduxjs/toolkit';
import React from 'react';
import Modal from 'ui/Modal/Modal';
import './ModalError.css';

interface IModalErrorProps {
  closeCb: () => void;
  error: Error | SerializedError;
}
export default function ModalError({ closeCb, error }: IModalErrorProps) {
  return (
    <Modal closeCb={closeCb}>
      <div className="modal-error">
        <h3 className="modal-error__heading">Oops...</h3>
        <p className="modal-error__message">{error.message}</p>
      </div>
    </Modal>
  );
}
