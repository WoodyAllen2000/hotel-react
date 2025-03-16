import React from 'react';
import '../../css/Home.css'
import Crousel from '../react lib/LazyLoadSlider';
import HomeContent from './HomeContent';
import BookForm from './BookForm';

const Home = () => {
  return (
    <>
      <Crousel />
      <HomeContent />
      <BookForm />
    </>
  );
}

export default Home;