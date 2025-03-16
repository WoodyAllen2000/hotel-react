import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Room = ({RoomDetail}) => {
  return (
    <div className='room-container'>
      <div className='name-container'>
        <h1>{RoomDetail.name}</h1>
      </div>
      <div className='img-container'>
        <img src={RoomDetail.imgSrc}/>
      </div>

      <div className='rate-container'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>

      <div className='description-container'>
        <p>{RoomDetail.description}</p>
      </div>

      <div className='book-container'>
        <h1>{RoomDetail.price}</h1>
        <p>Per Ninght</p>
      </div>
      
    </div>
  );
}

export default Room;