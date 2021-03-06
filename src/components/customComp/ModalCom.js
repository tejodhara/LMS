import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FormComp from './FormComp';


const ModalCom = ({
  modHead='Batch',
  showModal, closeModal, modalData
  }) => {
    // const [show, setShow] = useState(showModal);

    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
  
    return (
      <>
        {/* Modal Component */}
        <Modal show={showModal} onHide={closeModal}>

        <Modal.Header closeButton>
          <Modal.Title>{modHead} Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{height: 'auto',marginLeft:'40px'}}>
          {modalData}                                                    {/* Recieve data from parent as props*/}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }

export default ModalCom