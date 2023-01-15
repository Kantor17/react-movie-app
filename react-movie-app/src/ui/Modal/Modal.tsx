import React, { ReactElement } from 'react';
import './Modal.css';
import closeIcon from '../../assets/icons/close.svg';
interface IModalProps {
  closeCb: () => void;
  children: ReactElement;
}
export default function Modal({ closeCb, children }: IModalProps) {
  return (
    <div className="modal" onClick={closeCb}>
      <div className="modal__content" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close-btn" onClick={closeCb}>
          <img src={closeIcon} alt="close" className="modal__close-icon" />
        </button>
        {children}
      </div>
    </div>
  );
}
