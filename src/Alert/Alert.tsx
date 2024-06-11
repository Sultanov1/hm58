import React from 'react';

interface AlertProps extends React.PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  return (
    <div className={`alert alert-${type} d-flex justify-content-between align-items-center`} role="alert">
      <div>{children}</div>
      {onDismiss ? (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onDismiss}>
        </button>
      ) : null}
    </div>
  );
};

export default Alert;
