import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Form } from "react-bootstrap";

const ModalForm = ({ onSubmit, hideModal, oldTitle, id }) => {
  const [title, setTitle] = useState("");


  return (
    <Modal show={true} onHide={() => setTitle("")}>
      <ModalBody>
        <Form >
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={oldTitle} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" onClick={() => {onSubmit(id, title); hideModal()}} type="submit">Submit</Button>
        <Button variant="secondary" onClick={() => {setTitle(""); hideModal()}}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;