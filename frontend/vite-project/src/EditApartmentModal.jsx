// EditApartmentModal.jsx
import React, { useState } from 'react';
import { Button, Form, Modal, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

const EditApartmentModal = ({ show, handleClose, apartment, updateApartment }) => {
  const [formData, setFormData] = useState({
    address: apartment.address || '',
    images: apartment.images || '',
    petFriendly: apartment.petFriendly || false,
    smokeFriendly: apartment.smokeFriendly || false,
    askingPrice: apartment.askingPrice || '',
    bathrooms: apartment.bathrooms || '',
    bedrooms: apartment.bedrooms || '',
    description: apartment.description || '',
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevData => ({
        ...prevData,
        images: file,
      }));
    }
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
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImages">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col sm={6}>
              <Form.Group controlId="formPetFriendly">
                <Form.Check
                  type="checkbox"
                  name="petFriendly"
                  label="Pet Friendly"
                  checked={formData.petFriendly}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="formSmokeFriendly">
                <Form.Check
                  type="checkbox"
                  name="smokeFriendly"
                  label="Smoke Friendly"
                  checked={formData.smokeFriendly}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formAskingPrice">
            <Form.Label>Asking Price</Form.Label>
            <Form.Control
              type="number"
              name="askingPrice"
              value={formData.askingPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBathrooms">
            <Form.Label>Number of Bathrooms</Form.Label>
            <Form.Control
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBedrooms">
            <Form.Label>Number of Bedrooms</Form.Label>
            <Form.Control
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
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
