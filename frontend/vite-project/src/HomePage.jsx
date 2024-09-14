import React from 'react';
import backgroundImage from './assets/image.jpg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import ppl1 from './assets/ppl1.jpg';
import ppl2 from './assets/ppl2.jpg';
import ppl3 from './assets/ppl3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS imported
import { FaSearch } from 'react-icons/fa'; // Import react-icons

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative flex flex-col items-center justify-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          height: '50vh' 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-4 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to RoomUp</h1>
          <p className="text-lg mb-4">“Find the right apartment through the person you’re living with”</p>
          <div className="flex justify-center">
            <button 
              className="flex items-center justify-center bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300"
              style={{ fontSize: '1.25rem' }} // Adjust font size as needed
            >
              <FaSearch className="mr-5" /> {/* Adjusted margin-right for spacing */}
              ⠀Start Searching⠀
            </button>
          </div>
        </div>
      </section>

      {/* Spacer with Drop Shadow */}
      <div className="bg-gray-900 shadow-lg" style={{ height: '2rem' }}></div> {/* Space between carousel and cards */}

      {/* Carousel Section */}
      <div className="bg-gray-900 py-12 flex justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="shadow-lg p-6 bg-gray-800 rounded-lg overflow-hidden">
            <Carousel>
              <Carousel.Item>
                <img 
                  className="d-block w-full h-auto" 
                  src={image1} 
                  alt="First slide" 
                  style={{ objectFit: 'cover', height: '500px' }} // Adjust height as needed
                />
                <Carousel.Caption>
                  <h3>Roommate worries?</h3>
                  <p>Find your ideal roommate with ease.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-full h-auto" 
                  src={image2} 
                  alt="Second slide" 
                  style={{ objectFit: 'cover', height: '500px' }} // Adjust height as needed
                />
                <Carousel.Caption>
                  <h3>For Students by Students</h3>
                  <p>Experience seamless apartment hunting.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-full h-auto" 
                  src={image3} 
                  alt="Third slide" 
                  style={{ objectFit: 'cover', height: '500px' }} // Adjust height as needed
                />
                <Carousel.Caption>
                  <h3>Find your home</h3>
                  <p>Your search for a perfect home ends here.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="bg-gray-900" style={{ height: '2rem' }}></div> {/* Space below the carousel */}

      {/* Content Section */}
      <div className="bg-gray-900 py-16 flex items-center justify-center">
        <div className="flex flex-col gap-8">
          {/* First Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[350px]">
            <div className="bg-blue-500 rounded-full p-4 mb-4">
              <img src={ppl1} alt="Person 1" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center" style={{ fontStyle: 'italic', paddingLeft: '1rem' }}>
              "The best roommate experience ever!"
            </p>
          </div>
          {/* Second Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[350px]">
            <div className="bg-green-500 rounded-full p-4 mb-4">
              <img src={ppl2} alt="Person 2" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center" style={{ fontStyle: 'italic', paddingLeft: '1rem' }}>
              "A smooth and enjoyable process."
            </p>
          </div>
          {/* Third Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[350px]">
            <div className="bg-red-500 rounded-full p-4 mb-4">
              <img src={ppl3} alt="Person 3" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center" style={{ fontStyle: 'italic', paddingLeft: '1rem' }}>
              "Found my perfect match in no time!"
            </p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="bg-gray-900" style={{ height: '4rem' }}></div> {/* Space below the cards */}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-200 py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} RoomUp. All rights reserved.</p>
          <p className="mt-2">
            Follow us on&nbsp;
            <a href="https://twitter.com" className="text-blue-400 hover:underline">Twitter</a>&nbsp;
            <span className="mx-1">|</span>&nbsp;
            <a href="https://facebook.com" className="text-blue-400 hover:underline">Facebook</a>&nbsp;
            <span className="mx-1">|</span>&nbsp;
            <a href="https://instagram.com" className="text-blue-400 hover:underline">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
