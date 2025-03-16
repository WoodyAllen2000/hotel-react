import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import '../../css/Contact.css';


const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <div className='text-container'>
                <h1>Now</h1>
                <h2>Contact Us</h2>
                <p>The hotel room is truly exceptional. The decor is tasteful, the bed is incredibly comfortable, 
                    and the view is stunning. Every detail feels thoughtfully designed for a perfect stay.</p>
        </div>


        <div className='contactInfo-container'>
            <div className='contactInfo'>
                <div className='box'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Location: 12/F, Central Plaza, 18 Harbour Road, Wanchai, Hong Kong</p>
                </div>

                <div className='box'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>Phone: +852 5678 6543</p>
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>Email: hotel0987@hotel.com</p>
                </div>

                <div className="box">
                    <FontAwesomeIcon icon={faComment} />
                    <p>WeChat: bbbhotel</p>
                </div>
            </div>

            <div className='contactImg'>
                <img src="/contact.jpg" />
            </div>
        </div>


      </div>
    </>
  );
}

export default Contact;