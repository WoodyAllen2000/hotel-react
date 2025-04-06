import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/rooms' element={<RoomPage />}/>
            <Route path='/services' element={<ServicesPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/login' element={ isLoggedIn ? <HomePage /> : <LoginPage />}/>
            <Route path='/signup' element={ isLoggedIn ? <HomePage /> : <SignupPage />}/>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
