import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, CardBody, Carousel } from 'react-bootstrap';
import backgroundImage from './assets/image1.jpg'; // Replace with your background image path
import buttonImage1 from './assets/image1.jpg'; // Replace with your button image paths
import buttonImage2 from './assets/image2.jpg';
import buttonImage3 from './assets/image3.jpg';
import cardImage1 from './assets/image1.jpg'; // Replace with your card image paths
import cardImage2 from './assets/image1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Swiper.css'; // Assuming you have a CSS file for styles

{/* http://localhost:5000 */ }
const Swiper = () => {



  const user = {

    name: 'John Doe',

    bio: 'Software developer with a passion for learning new technologies and building innovative solutions. What if this is longer wil it over extenednasfnldjksafn',
    profilePicture: cardImage1,// Replace with actual profile picture URL
    gender: 'Male',
    photos: [buttonImage1, buttonImage2, buttonImage3]

  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };



  const [currentUser, setCurrentUser] = useState(user);

  const handleSwipeUp = () => {



    const cardElement = document.getElementById('userCard');
    const cardElement2 = document.getElementById('extraCard');

    cardElement.classList.add('swipe-up');
    cardElement2.classList.add('swipe-up');


    setTimeout(() => {
      setCurrentUser(newUser);
      cardElement.classList.remove('swipe-up');
      cardElement2.classList.add('swipe-up');

    }, 1000); // Duration of the animation

  };




  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">RoomUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Background Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-center text-white p-4 w-full" style={{ display: 'inline-block' }}>
          {/* Stacked Buttons */}
          <div>
            <button
              className="bg-orange-500 rounded-full w-32 h-32"
              style={{
                backgroundImage: `url(${buttonImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: "relative",
                top: '300px',
                left: '128px'

              }}
            ></button>

            <button
              className="bg-orange-500 rounded-full w-32 h-32"
              style={{
                backgroundImage: `url(${buttonImage2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: "relative",
                top: '100px'

              }}
              onClick={handleButtonClick}

            ></button>
            {isPopupVisible && (
              <div className="popup">
                <div className="popup-content">
                  <button className="close" onClick={handleClosePopup}>&times; </button>

                  <h2 style={{ color: 'black' }}> {user.name} </h2>

                  <p style={{ color: 'black' }}>Gender: {user.gender}</p>

                  <p style={{ color: 'black' }}>{user.bio}</p>
                </div>
              </div>
            )}



            <button
              id="swipeButton"
              className="bg-orange-500 rounded-full w-32 h-32"
              style={{
                backgroundImage: `url(${buttonImage3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: "relative",
                top: '600px',
                right: '128px',
              }}
              onClick={handleSwipeUp}
            ></button>
          </div>

          {/* Content Cards */}


          <Container>
            <Card id="userCard" style={{ right: "100px", display: "inline-block", width: '500px', height: '650px', bottom: '118px' }}>
              <Card.Img
                variant="top"
                src={currentUser.profilePicture}
                alt="Profile Picture"
                style={{ objectFit: 'fill', borderBottom: "100px" }}
              />
              <CardBody>
                <Card.Title style={{ fontSize: '2rem', fontWeight: '700' }}>
                  {currentUser.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: '1.25rem', textAlign: "left", display: 'inline-block', margin: '5px' }}
                >
                  Gender:
                </Card.Subtitle>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: '1.25rem', textAlign: "right", display: 'inline-block', margin: '5px' }}
                >
                  {currentUser.gender}
                </Card.Subtitle>
                <Card.Text
                  className="mt-3"
                  style={{ fontSize: '1rem', lineHeight: '1.5' }}
                >
                  {currentUser.bio}
                </Card.Text>
              </CardBody>
            </Card>



            {/*flex card */}
            <Card id='extraCard' style={{ left: "100px", display: "inline-block", width: '500px', height: '650px', bottom: '50px' }}>
              <Carousel>
                {user.photos.map((photo, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={photo}
                      alt={`Slide ${index}`}
                      style={{ objectFit: 'cover', height: '400px' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <CardBody>
                <Card.Title

                  style={{ fontSize: '2rem', fontWeight: '700' }}
                > {user.name}

                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: '1.25rem', textAlign: "left", display: 'inline-block', margin: '5px' }}
                >
                  Gender:
                </Card.Subtitle>

                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: '1.25rem', textAlign: "right", display: 'inline-block', margin: '5px' }}
                >
                  {user.gender}
                </Card.Subtitle>
                <Card.Text
                  className="mt-3"
                  style={{ fontSize: '1rem', lineHeight: '1.5' }}
                >
                  {user.bio}
                </Card.Text>
              </CardBody>

            </Card>

          </Container>


        </div>
      </section>
    </div>
  );
};

export default Swiper;
