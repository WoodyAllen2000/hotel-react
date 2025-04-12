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
import Dashboard from './pages/admin/Dashboard';
import Rooms from './pages/admin/Rooms';
import Orders from './pages/admin/Orders';
import AdminLogin from './pages/admin/AdminLogin';

// 管理员路由保护中间件
const AdminRoute = ({ children }) => {
  const admin = localStorage.getItem('admin');
  return admin ? children : <Navigate to="/admin/login" />;
};

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
        <Router>
          <Routes>
            {/* 普通用户路由 */}
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/rooms' element={<RoomPage />}/>
            <Route path='/services' element={<ServicesPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/login' element={ !isLoggedIn ? <LoginPage /> : <Navigate to='/' /> }/>
            <Route path='/signup' element={ !isLoggedIn ? <SignupPage /> : <Navigate to='/' /> }/>
            
            {/* 管理员路由 */}
            <Route path='/admin/login' element={<AdminLogin />}/>
            <Route path='/admin' element={
              // <AdminRoute>
                <Dashboard />
              // </AdminRoute>
            }/>
            <Route path='/admin/rooms' element={
              // <AdminRoute>
                <Rooms />
              // </AdminRoute>
            }/>
            <Route path='/admin/orders' element={
              // <AdminRoute>
                <Orders />
              // </AdminRoute>
            }/>

          </Routes>
        </Router>
    </>
  );
}
export default App;
