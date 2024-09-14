import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with a passion for learning new technologies and building innovative solutions.',
    profilePicture: 'https://via.placeholder.com/150' // Replace with actual profile picture URL
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 rounded shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <Card.Img
          variant="top"
          src={user.profilePicture}
          alt="Profile Picture"
          className="rounded-circle mb-3"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
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
            <Button variant="primary" className="me-2">Edit Profile</Button>
            <Button variant="secondary">Log Out</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
