import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Form } from "react-bootstrap";

const ModalForm = ({ addtask }) => {
  const [title, setTitle] = useState("");


  return (
    <Modal show={true} onHide={() => setTitle("")}>
      <ModalBody>
        <Form onSubmit={addtask}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" onClick={() => addtask(title)} type="submit">Submit</Button>
        <Button variant="secondary" onClick={() => setTitle("")}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;