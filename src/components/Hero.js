import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Find Your Future, Elevate <span>Your Career Today!</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur. Habitasse blandit sit sed magna fusce nulla augue.</p>
          <div className="search-bar">
            <select>
              <option>All Locations</option>
            </select>
            <select>
              <option>All Teams</option>
            </select>
            <input type="text" placeholder="Search jobs or keywords" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero-image">
          <button className="upload-resume-btn">Upload Your Resume</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;