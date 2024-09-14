import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import EditProfileModal from './EditProfileModal'; // Import the modal component
import backgroundImage from './assets/image1 blur.jpg';
const ProfilePage = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with a passion for learning new technologies and building innovative solutions.',
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual profile picture URL
    wants: '',
    needs: '',
    interests: '',
    apartment: '',
  };

  const handleEditClick = () => setShowEditModal(true);
  const handleCloseModal = () => setShowEditModal(false);

  const updateUser = (updatedData) => {
    // Implement the function to update the user profile data
    console.log('Updated User Data:', updatedData);A
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 rounded shadow-sm" style={{ maxWidth: '600px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        {/* Centering the profile picture */}
        <div className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src={user.profilePicture}
            alt="Profile Picture"
            className="rounded-circle mb-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <Card.Body>
          <Card.Title
            className="text-center"
            style={{ fontSize: '2rem', fontWeight: '700' }}
          >
            {user.name}
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted text-center"
            style={{ fontSize: '1.25rem' }}
          >
            {user.email}
          </Card.Subtitle>
          <Card.Text
            className="mt-3"
            style={{ fontSize: '1rem', lineHeight: '1.5' }}
          >
            {user.bio}
          </Card.Text>
          <div className="text-center mt-4">
            <Button variant="primary" className="me-2" onClick={handleEditClick}>Edit Profile</Button>
            <Button variant="secondary">Log Out</Button>
          </div>
        </Card.Body>
      </Card>
      <EditProfileModal
        show={showEditModal}
        handleClose={handleCloseModal}
        user={user}
        updateUser={updateUser}
      />
    </Container>
    </div>
  );
};

export default ProfilePage;
