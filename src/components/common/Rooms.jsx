import React, { Children } from 'react';
import Room from './Room';
import '../../css/Rooms.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Rooms = () => {
    // 从URL获取参数
    const [searchParams, setSearchParams] = useSearchParams();

    // 表单状态，初始化时查询参数中获取
    const [formData, setFormData] = useState({
        checkin: searchParams.get('checkin') || '',
        checkout: searchParams.get('checkout') || '',
        adults: searchParams.get('adults') || '',
        children: searchParams.get('children') || '',
    });

    // 表单状态发生变化后，反应到url链接上
    useEffect(() => {
        const params = {};
        if (formData.checkin) params.checkin = formData.checkin;
        if (formData.checkout) params.checkout = formData.checkout;
        if (formData.adults) params.adults = formData.adults;
        if (formData.children) params.children = formData.children;
        setSearchParams(params);
    }, [formData, setSearchParams]);

    function handleSubmit(e) {
        e.preventDefault();

        // TODO：向后端传递formData，更新房间列表
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    } 

  return (
    <>
      <div className='RoomInfo-container'>
        <div className='text-container'>
            <h1>EXPLORE</h1>
            <h2>Our Rooms</h2>
            <p>The hotel room is truly exceptional. The decor is tasteful, the bed is incredibly comfortable, 
                and the view is stunning. Every detail feels thoughtfully designed for a perfect stay.</p>
        </div>

        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input type="date" name='checkin' value={formData.checkin} onChange={handleChange} placeholder='Arrival date' />
                <input type="date" name='checkout' value={formData.checkout} onChange={handleChange} placeholder='Departure date' />
                <input type="number" name='adults' value={formData.adults} onChange={handleChange} placeholder='Adults' />
                <input type="number" name='children' value={formData.children} onChange={handleChange} placeholder='Children' />
                <input type="submit" value='Search' />
            </form>
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