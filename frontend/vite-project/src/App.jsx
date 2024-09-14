import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicExample from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';  // Add Bootstrap CSS

function App() {
  return (
    <Router>
      <BasicExample />
      <div className="pt-5"></div>  {/* Padding for the fixed navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
