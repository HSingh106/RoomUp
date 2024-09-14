import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditProfileModal = ({ show, handleClose, user, updateUser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    profilePicture: user.profilePicture,
    wants: user.wants || '',
    needs: user.needs || '',
    interests: user.interests || '',
    apartment: user.apartment || '',
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData(prevData => ({
        ...prevData,
        profilePicture: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData); // Implement this function to handle form submission
    handleClose(); // Close modal after submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>
          <Form.Group controlId="formProfilePicture">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile Preview"
                style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
              />
            )}
          </Form.Group>
          <Form.Group controlId="formWants">
            <Form.Label>Wants</Form.Label>
            <Form.Control
              type="text"
              name="wants"
              value={formData.wants}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formNeeds">
            <Form.Label>Needs</Form.Label>
            <Form.Control
              type="text"
              name="needs"
              value={formData.needs}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formInterests">
            <Form.Label>Interests</Form.Label>
            <Form.Control
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formApartment">
            <Form.Label>Apartment Information</Form.Label>
            <Form.Control
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
