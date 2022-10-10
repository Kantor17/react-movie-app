import React, { ReactElement } from 'react';
import './Modal.css';

interface IModalProps {
  closeCb: () => void;
  children: ReactElement;
}
export default function Modal({ closeCb, children }: IModalProps) {
  return (
    <div className="modal" onClick={closeCb}>
      <div className="modal__content" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
