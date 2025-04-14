import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/Header.css';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();
  const {isLoggedIn, logout} = useContext(AuthContext);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className='header-container'>

        <div className="logo-container">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="navlinks">
           <ul className={`menulist ${showMenu ? '' : 'closed'}`}>
              <li><Link to='/'>home</Link></li>
              <li><Link to='/about'>about</Link></li>
              <li><Link to='/rooms'>rooms</Link></li>
              <li><Link to='/services'>services</Link></li>
              <li><Link to='/contact'>contact</Link></li>
              <li><Link to='/orders'>My Order</Link></li>
              {/* 如果已经登录显示登出图标，如果没有登录，显示登录图标 */}
              {isLoggedIn ? (
                <li onClick={logout} style={{ cursor: 'pointer' }}><i className="fa fa-sign-out"></i></li>
              ) : (
                <li><Link to='/login'><i className="fa fa-user"></i></Link></li>
              )}
              <li><button onClick={() => {
                navigate('/rooms')
              }}>BOOK NOW</button></li>
           </ul>
           {/* 三横菜单图标 */}
           <span className="fa fa-bars" onClick={toggleMenu}></span>
        </div>

      </div>
    </>
  );
}

export default Header;