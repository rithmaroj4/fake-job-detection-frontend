import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#FF710D', color: 'white' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/jobs" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Jobs</Link>
      <Link to="/fake-job-detection" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Fake Job Detection</Link>
      <Link to="/login" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Login</Link>
      <Link to="/register" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Register</Link>
    </nav>
  );
};

export default Navbar;