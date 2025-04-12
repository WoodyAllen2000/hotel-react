import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { message } from 'antd';

const Room = ({RoomDetail}) => {
  const { user } = useContext(AuthContext);

  const roomId = RoomDetail.id;

  // 点击 button 后预订
  async function handleClick() {

    try {
      const response = await fetch('/room/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({roomId, user})
      });
  
      if (!response.ok) {
        throw new Error("book failed");
      }
      const data = await response.json();
      message.success('Book successfully!');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

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
      </div>

      <div>
        <button 
          onClick={handleClick}
          style={{
            backgroundColor: 'rgb(163, 36, 36)',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            cursor: 'pointer'
          }}
        >
          Book
        </button>
      </div>
      
    </div>
  );
}

export default Room;