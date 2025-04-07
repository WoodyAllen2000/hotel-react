import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    // 表单的状态
    const [formData, setFormData] = useState({
      checkin: '',
      checkout: '',
      adults: '',
      children: '',
    });
  
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();

      // 使用 navigate 跳转到房间页面，并通过查询参数传递表单数据
      const queryParams = new URLSearchParams(formData).toString();
      navigate(`/rooms?${queryParams}`);
    }

    function handleChange(e) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }

  return (
    <>
      <div className='BookForm-container'>

        <div className='instruction'>
            <h1><span>Book</span> Your Rooms</h1>
        </div>

        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input type="date" name='checkin' value={formData.checkin} onChange={handleChange} placeholder='Arrival date' />
                <input type="date" name='checkout' value={formData.checkout} onChange={handleChange} placeholder='Departure date' />
                <input type="number" name='adults' value={formData.adults} onChange={handleChange} placeholder='Adults' />
                <input type="number" name='children' value={formData.children} onChange={handleChange} placeholder='Children' />
                <input type="submit" value='CHECK AVAILABILITY' />
            </form>
        </div>
      </div>
    </>
  );
}

export default BookForm;