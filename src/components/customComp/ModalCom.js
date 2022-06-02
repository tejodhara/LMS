import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


const ModalCom = ({
  modHead='Hi',
  children,
  show1=false
  }) => {
    const [show, setShow] = useState(show1);

    // const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
            Button
        </Button> */}
  
        <Modal show={show1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {modHead}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: 'auto'}}>
          <label>Name </label> <br/>
          <input type='text' name='name'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }

export default ModalCom