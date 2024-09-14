import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicExample from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Login from './Login';
import SignUp from './SignUp';
import NewScreen from './Swiper';
import 'bootstrap/dist/css/bootstrap.min.css';  // Add Bootstrap CSS
import Swiper from './Swiper';

function App() {
  return (
    <Router>
      <BasicExample />
      <div className="pt-5"></div>  {/* Padding for the fixed navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/swiper" element={<Swiper />} />
      </Routes>
    </Router>
  );
}

export default App;
