import React from 'react';
import Room from './Room';
import '../../css/Rooms.css';

const Rooms = () => {
  return (
    <>
      <div className='RoomInfo-container'>
        <div className='text-container'>
            <h1>EXPLORE</h1>
            <h2>Our Rooms</h2>
            <p>The hotel room is truly exceptional. The decor is tasteful, the bed is incredibly comfortable, 
                and the view is stunning. Every detail feels thoughtfully designed for a perfect stay.</p>
        </div>

        <div className='rooms-container'>
            {
                RoomList.map((RoomDetail) => {
                    return (
                        <Room key={RoomDetail.id} RoomDetail={RoomDetail}/>
                    );
                } )
            }
        </div>

      </div>
    </>
  );
}

export default Rooms;

const RoomList = [
    {
        id: 1,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 1.png'
    },

    {
        id: 2,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 2.png'
    },

    {
        id: 3,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 3.png'
    },

    {
        id: 4,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 4.png'
    },

    {
        id: 5,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 5.png'
    },

    {
        id: 6,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 6.png'
    },

    {
        id: 7,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 7.png'
    },

    {
        id: 8,
        name: 'single room',
        description: 'very good very good very good very good very good room',
        price: '$250',
        imgSrc: '/Room 8.png'
    },
];