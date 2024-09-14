import React from 'react';
import backgroundImage from './assets/image.jpg'; // Adjust path as necessary

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          height: '50vh' // Adjusted height to 50% of viewport height
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
        <div className="relative z-10 text-center text-white p-4 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to RoomUp</h1>
          <p className="text-lg">“Find the right apartment through the person you’re living with”</p>
        </div>
      </section>

      {/* Spacer */}
      <div className="bg-gray-900" style={{ height: '4rem' }}></div> {/* Space between hero and cards */}

      {/* Content Section */}
      <div className="bg-gray-900 py-16 flex items-center justify-center">
        <div className="flex flex-col gap-8">
          {/* First Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[350px]">
            <div className="bg-blue-500 rounded-full p-4 mb-4">
              <img src="./assets/image1.jpg" alt="Image 1" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center">Text Under Image 1</p>
          </div>
          {/* Second Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[350px]">
            <div className="bg-green-500 rounded-full p-4 mb-4">
              <img src="./assets/image2.jpg" alt="Image 2" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center">Text Under Image 2</p>
          </div>
          {/* Third Card */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg max-w-xs min-h-[350px]">
            <div className="bg-red-500 rounded-full p-4 mb-4">
              <img src="./assets/image3.jpg" alt="Image 3" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <p className="text-gray-200 text-center">Text Under Image 3</p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="bg-gray-900" style={{ height: '100rem' }}></div> {/* Space below the cards */}
      
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-200 py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} RoomUp. All rights reserved.</p>
          <p className="mt-2">Follow us on 
            <a href="https://twitter.com" className="text-blue-400 hover:underline ml-2">Twitter</a>,
            <a href="https://facebook.com" className="text-blue-400 hover:underline ml-2">Facebook</a>, and
            <a href="https://instagram.com" className="text-blue-400 hover:underline ml-2">Instagram</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
