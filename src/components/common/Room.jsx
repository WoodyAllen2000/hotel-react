import React from 'react';

const Room = ({RoomDetail}) => {
  return (
    <div className='room-container'>
      <div className='name-container'>
        <h1>{RoomDetail.name}</h1>
      </div>
      <div className='img-container'>
        <img src={RoomDetail.imgSrc}/>
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