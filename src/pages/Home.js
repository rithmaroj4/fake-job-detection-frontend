import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import UploadResume from '../components/UploadResume';


function Homepage() {
  return (
    <div className="homepage">
   
      <Hero />
      <Categories />
      <UploadResume />
    </div>
  );
}

export default Homepage;