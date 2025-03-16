import React from 'react';
import '../../css/About.css';

const About = () => {
  return (
    <>
        <div className='about-container'>

            <div className='aboutText-container'>
                <h1>Welcome</h1>
                <h2>CityU Hotel</h2>
                <p>Welcome to CityU Hotel, your cozy haven during your travels. Located in Hong Kong, 
                    our hotel offers convenient transportation and is surrounded by popular attractions, 
                    making it the perfect choice for both business trips and leisure vacations. Choosing CityU Hotel 
                    means choosing comfort, convenience, and high-quality service. 
                    We look forward to your visit and will do our utmost to create an unforgettable journey for you.
                </p>
            </div>

            <div className="aboutPic-container">
                <img src="About.png" />
            </div>
        </div>

        <div className='honor-container'>
            <div className='honors'>

                <div className='box'>
                    <h1>2500</h1>
                    <hr />
                    <span>Customers</span>
                </div>

                <div className='box'>
                    <h1>1250</h1>
                    <hr />
                    <span>Happy Customers</span>
                </div>

                <div className='box'>
                    <h1>150</h1>
                    <hr />
                    <span>Expert Tecnicians</span>
                </div>

                <div className='box'>
                    <h1>4.85</h1>
                    <hr />
                    <span>Customer Rates</span>
                </div>

            </div>
        </div>

    </>
  );
}

export default About;