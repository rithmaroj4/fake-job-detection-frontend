import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">FindJobs</div>
        <div className="nav">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="#">Admin</a>
          <a href="/fake-job-detection">Find</a>
        </div>
        <button className="register-btn" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </header>
  );
}

export default Header;
