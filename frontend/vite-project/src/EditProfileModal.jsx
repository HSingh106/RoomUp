import React, { useState } from 'react';
import { Button, Form, Modal, Dropdown, DropdownButton, InputGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
import './EditProfileModal.css'; // Import the CSS file

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const EditProfileModal = ({ show, handleClose, user, updateUser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    profilePicture: user.profilePicture,
    wants: user.wants || [],
    needs: user.needs || [],
    interests: user.interests || '',
    age: user.age || '',
    gender: user.gender || '',
    fieldOfStudy: user.fieldOfStudy || '',
    college: user.college || '',
    city: user.city || '',
    state: user.state || ''
  });
  const [profileImage, setProfileImage] = useState(null);
  const [customNeed, setCustomNeed] = useState('');

  const predefinedWants = ['Option 1', 'Option 2', 'Option 3']; // Replace with your predefined wants
  const predefinedNeeds = ['Need 1', 'Need 2', 'Need 3']; // Replace with your predefined needs

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

  const handleWantsChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      wants: [...new Set([...prevData.wants, selectedOption])]
    }));
  };

  const handleNeedsChange = (selectedOption) => {
    setFormData(prevData => ({
      ...prevData,
      needs: [...new Set([...prevData.needs, selectedOption])]
    }));
  };

  const handleCustomNeedAdd = () => {
    if (customNeed) {
      setFormData(prevData => ({
        ...prevData,
        needs: [...new Set([...prevData.needs, customNeed])]
      }));
      setCustomNeed('');
    }
  };

  const handleRemoveWants = (item) => {
    setFormData(prevData => ({
      ...prevData,
      wants: prevData.wants.filter(want => want !== item)
    }));
  };

  const handleRemoveNeeds = (item) => {
    setFormData(prevData => ({
      ...prevData,
      needs: prevData.needs.filter(need => need !== item)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare data for submission
    const updatedUser = {
      ...formData,
      profileImage: profileImage ? URL.createObjectURL(profileImage) : formData.profilePicture
    };

    try {
      const response = await fetch(`https://hsingh106-backend--5000.prod1.defang.dev/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authentication headers here
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        const data = await response.json();
        updateUser(data); // Update user data in parent component
        handleClose(); // Close modal after successful update
      } else {
        const error = await response.json();
        console.error('Error updating user:', error.message);
        // Handle error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network error (e.g., show an error message to the user)
    }
  };

  const renderTooltipWants = (props) => (
    <Tooltip id="tooltip-wants" {...props}>
      Tags you want in a roommate
    </Tooltip>
  );

  const renderTooltipNeeds = (props) => (
    <Tooltip id="tooltip-needs" {...props}>
      Dealbreaking rules for a roommate
    </Tooltip>
  );

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
          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formFieldOfStudy">
            <Form.Label>Field of Study</Form.Label>
            <Form.Control
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCollege">
            <Form.Label>College</Form.Label>
            <Form.Control
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formWants">
            <Form.Label>
              Wants
              <OverlayTrigger placement="right" overlay={renderTooltipWants}>
                <span className="ms-2">?</span>
              </OverlayTrigger>
            </Form.Label>
            <DropdownButton
              id="dropdown-wants"
              title="Select Wants"
              onSelect={handleWantsChange}
              className="text-white orange-button"
            >
              {predefinedWants.map(option => (
                <Dropdown.Item key={option} eventKey={option}>
                  {option}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <div className="mt-2">
              {formData.wants.map(want => (
                <span
                  key={want}
                  className="badge bg-primary me-2"
                  onClick={() => handleRemoveWants(want)}
                >
                  {want} &times;
                </span>
              ))}
            </div>
          </Form.Group>
          <Form.Group controlId="formNeeds">
            <Form.Label>
              Needs
              <OverlayTrigger placement="right" overlay={renderTooltipNeeds}>
                <span className="ms-2">?</span>
              </OverlayTrigger>
            </Form.Label>
            <DropdownButton
              id="dropdown-needs"
              title="Select Needs"
              onSelect={handleNeedsChange}
              className="text-white orange-button"
            >
              {predefinedNeeds.map(option => (
                <Dropdown.Item key={option} eventKey={option}>
                  {option}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <div className="mt-2">
              {formData.needs.map(need => (
                <span
                  key={need}
                  className="badge bg-primary me-2"
                  onClick={() => handleRemoveNeeds(need)}
                >
                  {need} &times;
                </span>
              ))}
            </div>
            <InputGroup className="mt-2">
              <Form.Control
                type="text"
                placeholder="Add custom need"
                value={customNeed}
                onChange={(e) => setCustomNeed(e.target.value)}
              />
              <Button variant="outline-secondary" onClick={handleCustomNeedAdd}>
                Add
              </Button>
            </InputGroup>
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
          <Button variant="primary" type="submit" className="mt-3 orange-button">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
