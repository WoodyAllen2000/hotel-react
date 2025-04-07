import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomPage from './pages/RoomPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/rooms' element={<RoomPage />}/>
            <Route path='/services' element={<ServicesPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/login' element={ !isLoggedIn ? <LoginPage /> : <Navigate to='/' /> }/>
            <Route path='/signup' element={ !isLoggedIn ? <SignupPage /> : <Navigate to='/' /> }/>
          </Routes>
        </Router>
    </>
  );
}
export default App;
