import React from 'react';

const BookForm = () => {
  return (
    <>
      <div className='BookForm-container'>

        <div className='instruction'>
            <h1><span>Book</span> Your Rooms</h1>
        </div>

        <div className='form-container'>
            <form>
                <input type="date" placeholder='Arrival date' />
                <input type="date" placeholder='Departure date' />
                <input type="number" placeholder='Adults' />
                <input type="number" placeholder='Children' />
                <input type="submit" value='CHECK AVAILABILITY' />
            </form>
        </div>
      </div>
    </>
  );
}

export default BookForm;