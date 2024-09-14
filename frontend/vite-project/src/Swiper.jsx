import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import backgroundImage from './assets/image1.jpg'; // Replace with your background image path
import buttonImage1 from './assets/image1.jpg'; // Replace with your button image paths
import buttonImage2 from './assets/image1.jpg';
import buttonImage3 from './assets/image1.jpg';
import cardImage1 from './assets/image1.jpg'; // Replace with your card image paths
import cardImage2 from './assets/image1.jpg';

const Swiper = () => {
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
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center text-white p-4 w-full">
          {/* Stacked Buttons */}
          <div className="flex flex-col items-center space-y-6 mb-10">
            <button
              className="bg-orange-500 rounded-full w-32 h-32"
              style={{
                backgroundImage: `url(${buttonImage1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></button>
            <button
              className="bg-orange-500 rounded-full w-32 h-32"
              style={{
                backgroundImage: `url(${buttonImage2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></button>
            <button
              className="bg-orange-500 rounded-full w-32 h-32"
              style={{
                backgroundImage: `url(${buttonImage3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></button>
          </div>

          {/* Content Cards */}
          <div className="relative z-20 flex flex-col md:flex-row justify-around items-center w-full space-y-4 md:space-y-0 md:space-x-4">
            {/* Left Card */}
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
              <img
                src={cardImage1}
                alt="Card Image 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Card Title 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Right Card */}
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
              <img
                src={cardImage2}
                alt="Card Image 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Card Title 2</h2>
              <p>Quisque ut erat vitae urna venenatis interdum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Swiper;
