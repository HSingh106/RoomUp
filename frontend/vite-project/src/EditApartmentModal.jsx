// EditApartmentModal.jsx
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditApartmentModal = ({ show, handleClose, apartment, updateApartment }) => {
  const [formData, setFormData] = useState({
    apartment: apartment || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateApartment(formData); // Implement this function to handle form submission
    handleClose(); // Close modal after submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Apartment Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formApartment">
            <Form.Label>Apartment Information</Form.Label>
            <Form.Control
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditApartmentModal;
