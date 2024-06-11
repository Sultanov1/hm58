import Modal from './components/Modal/Modal';
import Alert from './Alert/Alert';
import {useState} from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const modalButtons = [
    {type: 'primary', label: 'Continue', onClick: () => setShowAlert(true)},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)}
  ]

  return (
    <>
      {showAlert && (
        <Alert type="warning" onDismiss={() => setShowAlert(false)}>
          This is a warning type alert
        </Alert>
      )}
      <Alert type="success">
        This is a success type alert
      </Alert>
      <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)} buttons={modalButtons}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Order</button>
      </div>
    </>
  );
};

export default App;
