import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import '../../css/Services.css';


const Services = () => {
  return (
    <>
        <div className='ServicesInfo-container'>
            <div className='text-container'>
                <h1>ENJOY</h1>
                <h2>Our Services</h2>
                <p>The hotel room is truly exceptional. The decor is tasteful, the bed is incredibly comfortable, 
                    and the view is stunning. Every detail feels thoughtfully designed for a perfect stay.</p>
            </div>

            <div className='services-content'>
                <div className='icons-container'>
                    <div className='box'>
                        <FontAwesomeIcon icon={faUtensils} />
                        <p>Free Breakfast</p>
                    </div>

                    <div className='box'>
                        <FontAwesomeIcon icon={faBicycle} />
                        <p>Fitness Room</p>
                    </div>

                    <div className='box'>
                        <FontAwesomeIcon icon={faSpa} />
                        <p>Spa</p>
                    </div>

                    <div className='box'>
                        <FontAwesomeIcon icon={faPersonSwimming} />
                        <p>Swimming pool</p>
                    </div>
                </div>

                <div className='img-container'>
                    <img src="/services.png" />
                </div>

            </div>

            <div className='background-container'>
                <p className='recommend'>I am very satisfied with the hotel's service. The front desk is friendly, the rooms are clean and comfortable, 
                    the staff are always helpful, and the breakfast is delicious. It's been a delightful stay.</p>
                <p className='name'>
                    -- David 
                </p>
            </div>


        </div>
    </>
  );
}

export default Services;