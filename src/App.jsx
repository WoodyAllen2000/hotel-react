import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomPage from './pages/RoomPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/rooms' element={<RoomPage />}/>
          <Route path='/services' element={<ServicesPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
      </Router>

      
    </>
  );
}
export default App;
