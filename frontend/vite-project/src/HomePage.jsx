import React from 'react';
import backgroundImage from './assets/image.jpg'; // Adjust path as necessary

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          height: '50vh'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
        <div className="relative z-10 text-center text-white p-4 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to RoomUp</h1>
          <p className="text-lg">“Find the right apartment through the person you’re living with”</p>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-8">
        <div className="flex gap-8 justify-center">
          {/* First Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[300px]">
            <div className="bg-blue-500 rounded-full p-4 mb-4">
              <img src="./assets/image1.jpg" alt="Image 1" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center">Text Under Image 1</p>
          </div>
          {/* Second Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-2 shadow-lg max-w-xs min-h-[300px]">
            <div className="bg-green-500 rounded-full p-4 mb-4">
              <img src="./assets/image2.jpg" alt="Image 2" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center">Text Under Image 2</p>
          </div>
          {/* Third Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[300px]">
            <div className="bg-red-500 rounded-full p-4 mb-4">
              <img src="./assets/image3.jpg" alt="Image 3" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center">Text Under Image 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
