import React from 'react';
import { Link } from 'react-router-dom';
const HomeContent = () => {
  return (
    <>
      <div className="HomeContent-container">
        <h1>Spend Your Holiday</h1>
        <p>Choosing CityU Hotel means choosing comfort, convenience, and high-quality service. 
            We look forward to your visit and will do our utmost to create an unforgettable journey for you.</p>
        
        <button className='btn1'><Link to="/about">Learn More</Link></button>
        <button className='btn2'><Link to='/contact'>Contact Us</Link></button>
      </div>
    </>
  );
}

export default HomeContent;