import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import backgroundImage from './assets/image2 blur.jpg'; // Replace with your actual background image

const matches = [
  {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'john.doe@example.com'
  },
  {
    name: 'Jane Smith',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'jane.smith@example.com'
  },
  {
    name: 'Alex Johnson',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'alex.johnson@example.com'
  },
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }
  
  ,
  {
    name: 'Emily Davis',
    profilePicture: 'https://via.placeholder.com/150',
    email: 'emily.davis@example.com'
  }

  // Add more matches here
];

const MatchesPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '80px' // Adjust padding for fixed navbar
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center">
          {matches.map((match, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
              <Card className="p-3" style={{ width: '250px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <Card.Img
                  variant="top"
                  src={match.profilePicture}
                  alt={match.name}
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 auto' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{match.name}</Card.Title>
                  <Button variant="primary" className="mb-2">Get in Contact</Button>
                  <div className="my-2" /> {/* Spacer between buttons */}
                  <Button variant="secondary">Draft Roommate Agreement</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MatchesPage;
