import React from 'react';

const developers = [
  {
    name: 'Ackrem Seid',
    email: 'sackrem13@vt.edu',
    description: 'UI/UX Engineer and DevOps ensuring smooth operations and deployment',
    photo: 'path/to/sackrem-photo.jpg'
  },
  {
    name: 'Harman Singh',
    email: 'harman27@vt.edu',
    description: 'Backend Developer who loves working with databases and server-side logic.',
    photo: 'path/to/harman-photo.jpg'
  },
  {
    name: 'James Wu',
    email: 'jameswu@vt.edu',
    description: 'Front end and logic developer linking APIs and Logic',
    photo: 'path/to/jameswu-photo.jpg'
  },
  {
    name: 'Ian Kanjirath',
    email: 'kpian@vt.edu',
    description: 'Frontend Developer with a passion for creating beautiful and functional user interfaces.',
    photo: 'path/to/kpian-photo.jpg'
  }
];

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 text-center bg-cover bg-center" style={{ backgroundImage: 'url(path/to/background-image.jpg)' }}>
      <h1 className="text-3xl font-bold mb-8 text-white">About Us</h1>
      <p className="text-white mb-8">This website was made for VTHAX 12 2024</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {developers.map((developer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img src={developer.photo} alt={developer.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">{developer.name}</h2>
            <p className="text-gray-700 mb-4">{developer.description}</p>
            <p className="text-gray-500">{developer.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
