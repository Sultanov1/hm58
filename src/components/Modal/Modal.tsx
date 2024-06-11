import React from 'react';
import {Buttons} from '../../types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons: Buttons[];
}

const Modal: React.FC<Props> = ({show, title, onClose, children, buttons}) => {
  return (
    <div>
      <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={event => event.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                type="button"
                className="btn-close bg-transparent border-0 text-secondary"
                aria-label="Close"
                onClick={onClose}>
              </button>
            </div>
            {children}
            <div className='modal-footer'>
              {buttons.map((button, index) => (
                <button key={index} className={`btn btn-${button.type}`} onClick={button.onClick}>
                  {button.label}
                </button>
              ))};
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;