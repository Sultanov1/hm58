import Modal from '../Modal/Modal';
import {useState} from 'react';

const Cart = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal show={showModal} title="Order" onClose={() => setShowModal(false)}>
        <div className='modal-body'>
          Modal
        </div>
        <div className='modal-footer'>
          <button className='btn btn-danger' onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>
      <button className='btn btn-primary' onClick={() => setShowModal(true)}>Order</button>
    </>
  );
};

export default Cart;