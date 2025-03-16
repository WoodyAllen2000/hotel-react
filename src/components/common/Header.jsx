import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

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
              {/* 搜索图标 */}
              <li><i class="fa fa-search"></i></li> 
              <li><button>BOOK NOW</button></li>
           </ul>
           {/* 三横菜单图标 */}
           <span className="fa fa-bars" onClick={toggleMenu}></span>
        </div>

      </div>
    </>
  );
}

export default Header;